import Image from "next/image";

export default function Mission() {
  return (
    <section className="w-full">
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
    </section>
  );
}
