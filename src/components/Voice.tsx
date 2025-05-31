// import Image from "next/image";
import VoiceCard from "./VoiceCard";

const voices = [
  {
    image: "/voice_pic_01.png",
    alt: "voice card thumbnail 1",
    name: "Cさんのお声",
    text:`英語に対してのハードルが下がり、
          日常的に少しずつ英語フレーズが
          出るようになってきました！
          3歳の息子は"Good morning!"など
          簡単なものは真似をして言ってくれるようになってきて、
          以前はYouTubeで英語のチャンネルを見せると
          「これ英語なんだけど…やだ」と言っていたのですが、
          英語に対する拒否反応のようなものがなくなった気がします。`
    ,
  },
  {
    image: "/voice_pic_02.png",
    alt: "voice card thumbnail 2",
    name: "Tさんのお声",
    text:`受講前は英語なんて全く日常になく、
          子どもには英語に慣れ親しんでほしいと思っていただけど、
          わたし自身は関係ないって思っていました。
          受講を通じて「ママが英語に慣れ親しまないと
          子どもも英語に興味を持たない」と実感しました。
          日常会話でも英語を取り入れるようになり、
          子どもが自発的に英語を話すようになりました。
          ママが学ぶことで家族にも英語が自然に溶け込むのを時間しました！`
    ,
  },
  {
    image: "/voice_pic_03.png",
    alt: "voice card thumbnail 3",
    name: "Mさんのお声",
    text:`少し前の私は、とりあえず子どもには英語が得意になってほしい！
          私には出来なかったから！と英語教室に行かせればいいと
          思っていました。ですが、このたった数ヶ月で子どもたちも
          私もこんなに変わることができ、母親も一緒に学ぶ姿勢も見せ、
          英語を日常で親子で使う、ということの大切さと凄さ”を知りました。
          Moena先生のレッスンではもちろん「英語のお勉強」が出来るのですが、
          それだけではない、子どもとの関わり方を学ぶことができ、
          本当にレッスンを受けて良かったと思っています！！！`
    ,
  },
  {
    image: "/voice_pic_04.png",
    alt: "voice card thumbnail 4",
    name: "Cさんのお声",
    text:`3ヶ月間、とても楽しく、「親と子が一緒に学びを楽しむ」
          という我が家の教育方針が決まりました。感謝してもしきれません。
          これからも、英語、ポジティブな声かけ、
          親子が一緒に学ぶスタイル、続けていきます。
          夫も、「こどもが英語話す習慣がついていて凄いね〜！
          もうすでに英語コーチングやってよかったよね」と言ってました。
          すばらしいコーチングをありがとうございました。`
    ,
  }
]

export default function Voice() {
  return (
    <section className="w-full flex flex-col mb-20">
      <div className="flex flex-col align-center justify-center">
        <h5 className="text-center text-brand-text tracking-wider font-shippori-mincho-b1 font-bold text-3xl ">
          V<span className="text-brand">o</span>ice
        </h5><br />
        <div className="border-b-2 border-dashed border-brand-text w-25 self-center mb-20">
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-around bg-gradient-to-br from-brand to-white w-full h-auto p-8 py-20 font-bold font-zen-maru-gothic gap-10">
        {voices.map((voice, index) => (
          <VoiceCard
            key={index}
            image={voice.image}
            alt={voice.alt}
            name={voice.name}
            text={voice.text}
          />
        ))}
      </div>
    </section>
  );
}
