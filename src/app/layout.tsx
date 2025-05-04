import "./globals.css";
import { Zen_Maru_Gothic, Shippori_Mincho } from "next/font/google";

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru-gothic",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

const shipporiMincho = Shippori_Mincho({
  variable: "--shippori-mincho",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zenMaruGothic.variable} ${shipporiMincho.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
