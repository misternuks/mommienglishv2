import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "おうち英語習慣化コーチング",
    image: "/service_pic_01.png",
    alt: "service card image 1",
    text: "「英語をやる毎日」ではなく「英語がある毎日」を徹底的に定着させます。マンツーマンレッスンは月に４回。不定期で同期や卒業生とのグループレッスンを実施します。オリジナルのハビットトラッカーや、500以上のすぐに使える英語フレーズ集を受講生限定にお渡ししています。また、進捗状況を確実に把握するため、Notionアプリ(無料)を使用し、課題の提出漏れや挫折のないようにサポートいたします。",
    btnText: "無料で動画特典を受け取る",
    btnClass: "bg-brand"

  },
  {
    title: "英語コミュニティCozy English Lounge",
    image: "/service_pic_02.png",
    alt: "service card image 2",
    text: "英語を“やらなきゃ”から“やりたい”へ。Cozy English Loungeは、英語をもっと気軽に、もっと楽しく、あなたのペースで続けられるオンラインコミュニティです。Discord(無料)を使用して、メンバーと交流ができたりプライベートルームで講師に質問や相談などできます。 忙しい日々の中でも、「ちょっと英語にふれたいな」と思ったときに、 ふわっと英語がある場所です。英語を勉強する場所じゃなくて、英語がそばにある暮らしを一緒に育てていく場所です。",
    btnText: "view more",
    btnClass: "bg-[#B5937F]"
  },
  {
    title: "オリジナル教材制作",
    image: "/service_pic_03.png",
    alt: "service card image 3",
    text: "『教材は子守道具じゃない』私は多くのママにそう伝えたいです。  どんなに高価な教材であっても結局はインプットメイン。「Youtubeを見せるよりかはいいかな」「一息つきたい時にDVDをつけて見させる」など、子どもに教材を「見せる」「使わせる」ことにフォーカスして、『自分事』にできていない保護者がとっても多いです。”英語はコミュニケーションツール”。子どもだけにやらせるのではなく、『ママやパパが”一緒に”取り組める教材』をコンセプトに制作しています。",
    btnText: "",
    btnClass: ""
  },
]

export default function Service() {
  return (
    <section id="service" className="w-full flex flex-col mb-20">
      {/* section title */}
      <div className="flex flex-col items-center justify-center">
        <h5 className="text-center text-brand-text tracking-wider font-shippori-mincho-b1 font-bold text-2xl sm:text-3xl ">Serv<span className="text-brand">i</span>ce</h5><br />
        <div className="border-b-2 border-dashed border-brand-text w-24 self-center">
        </div>
      </div>
      {/* card area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 self-center items-stretch">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            alt={service.alt}
            text={service.text}
            btnText={service.btnText}
            btnClass={service.btnClass}
          />
        ))}
      </div>
    </section>
  );
}
