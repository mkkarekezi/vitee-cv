import "./globals.css";

import localFont from "next/font/local";

const Geist = localFont({
  src: [
    {
      path: "../public/fonts/Geist/Geist[wght].woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Geist/Geist-Italic[wght].woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-Geist",
  display: "swap",
});

input, textarea, select {
  font-size: 16px !important;
  touch-action: manipulation;
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Geist.variable}`}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
