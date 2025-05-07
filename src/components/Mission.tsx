import Image from "next/image";

export default function Mission() {
  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col align-center justify-center">
        <h5 className="text-center text-brand-text tracking-wider font-shippori-mincho-b1 font-bold text-3xl ">Our <span className="text-brand">M</span>ission</h5><br />
        <div className="border-b-2 border-dashed border-brand-text w-25 self-center mb-20">
        </div>
      </div>
      <div className="flex flex-wrap items-stretch justify-around bg-brand w-full min-h-[600px] p-8 py-20 font-bold font-zen-maru-gothic gap-10">
        <div className="flex items-start justify-start gap-4 tracking-widest text-xl">
          <div className="bg-white px-4 py-5 pb-6 rounded-lg text-brand [writing-mode:vertical-rl]">
            英語習慣化プログラムです
          </div>
          <div className="bg-white px-4 py-5 pb-6 rounded-lg text-brand [writing-mode:vertical-rl]">
            ママのための
          </div>

        </div>
        <div className="flex items-center text-white text-4xl">
          子どもと一緒に<br />
          親子の英会話を楽しむ
        </div>
        <div className="flex items-center text-white text-xl w-sm">
          留学してから気づいた、実用性のない中学・高校英語。
          子どもができてから知った、ママと子どもの信頼関係。
          国際寮で身近に感じた、学生たちの英語への向き合い方と成長。
          英会話の先生になって実感した、日本の違和感のある英語教育。
          ママであり、英語の先生でもある私だから伝えられる
          子どもだけが頑張るのではなく、ママだけが悩むのではない。
          親子両想い型の英語共育を広げたい。

        </div>
        <div className="flex items-end">
          <Image
            src="/me_icon.png"
            alt="MommiEnglish icon"
            width={200}
            height={216}
            className=""
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 px-16 py-40">
        <div className="flex flex-col gap-4 font-shippori-mincho-b1 mb-8">
          <Image
            src="/mission_pic_01.png"
            alt="Mission Photo 01"
            width={566}
            height={433}
            className="pb-6"
          />
          <h5 className="text-brand text-xl text-center">
            英語の苦手意識をなくす
          </h5>
          <p className="px-8">
            英語は教科ではなく、日本語と同じ、<br/>
            コミュニケーションツール。<br/>
            この意識を持ち続け生活の一部として英語を取り入れます。
          </p>
        </div>
        <div className="flex flex-col gap-4 font-shippori-mincho-b1 mb-8">
          <Image
            src="/mission_pic_02.png"
            alt="Mission Photo 02"
            width={566}
            height={433}
            className="pb-6"
          />
          <h5 className="text-brand text-xl text-center">
            おうち英語の習慣化
          </h5>
          <p className="px-8">
            週に１回のグループセッションにて、ママがすぐに使える英語フ<br/>
            レーズと単語を導入し、それを一週間ご家庭で使ってもらいます。<br/>
            このサイクルを繰り返し、英語習慣化を目指します。
          </p>
        </div>
        <div className="flex flex-col gap-4 font-shippori-mincho-b1 mb-8">
          <Image
            src="/mission_pic_03.png"
            alt="Mission Photo 03"
            width={566}
            height={433}
            className="pb-6"
          />
          <h5 className="text-brand text-xl text-center">
            ママが英語好きのきっかけになる
          </h5>
          <p className="px-8">
            ママには子どもに英語の指導をするのではなく、英語が楽しいこと<br/>
            を伝えるガイドになって欲しいです。英語は勉強ではなく日常のも<br/>
            のだと伝えることがおうち英語の最大の目的です。
          </p>
        </div>
      </div>
    </section>
  );
}
