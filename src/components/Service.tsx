import Image from "next/image";

export default function Service() {
  return (
    <section className="w-full flex flex-col mb-20">
      <div className="flex flex-col align-center justify-center">
        <h5 className="text-center text-brand-text tracking-wider font-shippori-mincho-b1 font-bold text-3xl ">Serv<span className="text-brand">i</span>ce</h5><br />
        <div className="border-b-2 border-dashed border-brand-text w-25 self-center">
        </div>
      </div>

      <div className="flex flex-wrap gap-8 p-16">
        <div className="flex flex-col gap-4 font-shippori-mincho-b1 mb-8">
          <h5 className="text-brand text-xl text-center">
            おうち英語習慣化コーチング
          </h5>
          <Image
            src="/service_pic_01.png"
            alt="Service Photo 01"
            width={566}
            height={433}
            className="pb-6"
          />
          <p className="px-8 max-w-[500px]">
            「英語をやる毎日」ではなく「英語がある毎日」を徹底的に定着させます。
            マンツーマンレッスンは月に４回。不定期で同期や卒業生とのグループレッスンを実施します。
            オリジナルのハビットトラッカーや、500以上のすぐに使える英語フレーズ集を
            受講生限定にお渡ししています。また、進捗状況を確実に把握するため、
            Notionアプリ(無料)を使用し、課題の提出漏れや挫折のないようにサポートいたします。
          </p>
        </div>
        <div className="flex flex-col gap-4 font-shippori-mincho-b1 mb-8">
          <h5 className="text-brand text-xl text-center">
            英語コミュニティCozy English Lounge
          </h5>
          <Image
            src="/service_pic_02.png"
            alt="Service Photo 02"
            width={566}
            height={433}
            className="pb-6"
          />

          <p className="px-8 max-w-[500px]">
            英語を“やらなきゃ”から“やりたい”へ。Cozy English Loungeは、
            英語をもっと気軽に、もっと楽しく、あなたのペースで続けられるオンラインコミュニティです。
            Discord(無料)を使用して、メンバーと交流ができたりプライベートルームで
            講師に質問や相談などできます。 忙しい日々の中でも、「ちょっと英語にふれたいな」
            と思ったときに、 ふわっと英語がある場所です。英語を勉強する場所じゃなくて、
            英語がそばにある暮らしを一緒に育てていく場所です。
          </p>
        </div>
        <div className="flex flex-col gap-4 font-shippori-mincho-b1 mb-8">
          <h5 className="text-brand text-xl text-center">
            オリジナル教材制作
          </h5>
          <Image
            src="/service_pic_03.png"
            alt="Service Photo 03"
            width={566}
            height={433}
            className="pb-6"
          />
          <p className="px-8 max-w-[500px]">
            『教材は子守道具じゃない』私は多くのママにそう伝えたいです。
            どんなに高価な教材であっても結局はインプットメイン。
            「Youtubeを見せるよりかはいいかな」「一息つきたい時にDVDをつけて見させる」など、
            子どもに教材を「見せる」「使わせる」ことにフォーカスして、『自分事』
            にできていない保護者がとっても多いです。”英語はコミュニケーションツール”。
            子どもだけにやらせるのではなく、『ママやパパが”一緒に”取り組める教材』
            をコンセプトに制作しています。
          </p>
        </div>
      </div>
    </section>
  );
}
