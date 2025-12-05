from google import genai
from google.genai import types

def main(api_key, resume_path):
    client = genai.Client(api_key=api_key)

    print(f"Uploading {resume_path}...")
    uploaded = client.files.upload(file=resume_path)
    print("✓ Uploaded!")

    chat = client.chats.create(model="gemini-2.0-flash-exp")

    chat.send_message([
        "Analyze this resume and be ready to answer questions about it.",
        uploaded
    ])

    print("Start chatting! (type ‘quit’ or ‘exit’ to stop)")
    while True:
        question = input("You: ")
        if question.strip().lower() in {"quit", "exit"}:
            break

        print("Bot: ", end="", flush=True)
        for chunk in chat.send_message_stream(question):
            print(chunk.text, end="", flush=True)
        print("\n")

if __name__ == "__main__":
    API_KEY = "AIzaSyDICWb5D1hUp037p6bkkY4dn0THzmaHmm8"
    RESUME_PATH = "resume-sample.pdf"
    main(API_KEY, RESUME_PATH)
