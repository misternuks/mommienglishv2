import Image from "next/image";

export default function Mission() {
  return (
    <section id="mission" className="w-full flex flex-col gap-12 mb-20 ">
      {/* Section Title */}
      <div className="flex flex-col items-center">
        <h5 className="text-brand-text font-shippori-mincho-b1 font-bold text-2xl sm:text-3xl tracking-wider text-center">
          Our <span className="text-brand">M</span>ission
        </h5>
        <div className="border-b-2 border-dashed border-brand-text w-24 mt-4" />
      </div>

      {/* Horizontal Banner */}
      <div className="flex flex-col justify-center lg:flex-row flex-wrap items-center bg-brand px-4 md:px-24 py-12 gap-8 lg:gap-24 lg:min-h-[600px] text-white font-zen-maru-gothic text-center lg:text-left">
        {/* Vertical Writings */}
        <div className="flex gap-4 items-start justify-center">
          <div className="bg-white text-brand [writing-mode:vertical-rl] px-4 py-6 rounded-lg">
            英語習慣化プログラムです
          </div>
          <div className="bg-white text-brand [writing-mode:vertical-rl] px-4 py-6 rounded-lg">
            ママのための
          </div>
        </div>

        {/* Main Message */}
        <div className="text-2xl sm:text-3xl font-bold">
          子どもと一緒に<br />
          親子の英会話を楽しむ
        </div>

        {/* Paragraph */}
        <div className="text-base sm:text-lg max-w-xl leading-relaxed text-left">
          留学してから気づいた、実用性のない中学・高校英語。
          子どもができてから知った、ママと子どもの信頼関係。
          国際寮で身近に感じた、学生たちの英語への向き合い方と成長。
          英会話の先生になって実感した、日本の違和感のある英語教育。
          ママであり、英語の先生でもある私だから伝えられる。
          子どもだけが頑張るのではなく、ママだけが悩むのではない。
          親子両想い型の英語共育を広げたい。
        </div>

        {/* Icon */}
        <div>
          <Image
            src="/me_icon.png"
            alt="MommiEnglish icon"
            width={180}
            height={196}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 self-center">
        {[
          {
            img: "/mission_pic_01.png",
            title: "英語の苦手意識をなくす",
            text: "英語は教科ではなく、日本語と同じ、コミュニケーションツール。この意識を持ち続け生活の一部として英語を取り入れます。",
          },
          {
            img: "/mission_pic_02.png",
            title: "おうち英語の習慣化",
            text: "週に１回のグループセッションにて、ママがすぐに使える英語フレーズと単語を導入し、それを一週間ご家庭で使ってもらいます。このサイクルを繰り返し、英語習慣化を目指します。",
          },
          {
            img: "/mission_pic_03.png",
            title: "ママが英語好きのきっかけになる",
            text: "ママには子どもに英語の指導をするのではなく、英語が楽しいことを伝えるガイドになって欲しいです。英語は勉強ではなく日常のものだと伝えることがおうち英語の最大の目的です。",
          },
        ].map(({ img, title, text }, i) => (
          <div key={i} className="flex flex-col items-center text-center font-shippori-mincho-b1 max-w-[566px]">
            <Image
              src={img}
              alt={`Mission Photo 0${i + 1}`}
              width={566}
              height={433}
              className="mb-4"
            />
            <h5 className="text-brand text-xl mb-2">{title}</h5>
            <p className="text-base px-2 sm:px-4">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
