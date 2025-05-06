import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <div className="content-center justify-center h-screen">
        <div className="text-center">
          <h1 className="font-shippori-mincho-b1 text-6xl text-shadow-[4px_5px_7px_rgba(0,0,0,0.25)]">あなたの英語習慣を<br/>
            デザインします
          </h1>
          <p className="font-zen-maru-gothic text-4xl">お問い合わせはこちら</p>
        </div>
      </div>
      <Header />
    </main>
  );
}
