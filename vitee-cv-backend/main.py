from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
import uuid
import tempfile
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


API_KEY = os.getenv("GOOGLE_API_KEY")
client = genai.Client(api_key=API_KEY)
sessions = {}

class ChatRequest(BaseModel):
    session_id: str
    message: str

@app.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    session_id = str(uuid.uuid4())
    
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        content = await file.read()
        tmp.write(content)
        tmp_path = tmp.name
    
    try:
        uploaded = client.files.upload(file=tmp_path)
        chat = client.chats.create(model="gemini-2.5-flash-lite")
        chat.send_message([
        """You are a resume analysis assistant. ONLY answer questions about this resume. 
        If asked anything unrelated to the resume (general knowledge, other topics, etc.), 
        politely decline and redirect to resume-related questions.""",
        uploaded
        ])
        
        sessions[session_id] = chat
        os.unlink(tmp_path)
        
        return {"session_id": session_id, "message": "Resume uploaded successfully"}
    except Exception as e:
        print(f"ERROR: {e}")
        os.unlink(tmp_path)
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/chat")
async def chat_message(req: ChatRequest):
    if req.session_id not in sessions:
        raise HTTPException(status_code=404, detail="Session not found")
    
    chat = sessions[req.session_id]
    
    try:
        response = ""
        for chunk in chat.send_message_stream(req.message):
            response += chunk.text
        
        return {"reply": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.delete("/session/{session_id}")
async def clear_session(session_id: str):
    if session_id in sessions:
        del sessions[session_id]
        return {"message": "Session cleared"}
    raise HTTPException(status_code=404, detail="Session not found")