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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Geist.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
