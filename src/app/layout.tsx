import "./globals.css";
import { Zen_Maru_Gothic, Shippori_Mincho_B1 } from "next/font/google";

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru-gothic",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

const shipporiMinchoB1 = Shippori_Mincho_B1({
  variable: "--shippori-mincho-b1",
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
        className={`${zenMaruGothic.variable} ${shipporiMinchoB1.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
