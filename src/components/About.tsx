import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full flex flex-col mb-40 px-4 sm:px-8 lg:px-16">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h5 className="text-center text-brand-text tracking-wider font-shippori-mincho-b1 font-bold text-2xl sm:text-3xl">
          About <span className="text-brand">m</span>e
        </h5>
        <div className="border-b-2 border-dashed border-brand-text w-24 mt-4" />
      </div>

      {/* Image and Text Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/about_pic.png"
            alt="Photo of Moena"
            width={500}
            height={500}
            className=""
          />
        </div>

        {/* Text Block */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left font-shippori-mincho-b1 max-w-[500px] mx-auto">
          <p className="whitespace-pre-line text-xl leading-relaxed mb-6">
            {"MommiEnglish代表\nおうち英語習慣化コーチ\nマイナー萌惠奈\nMoena Miner"}
          </p>
          <p className="text-sm leading-relaxed text-start">
            英語コーチ・英会話講師・英語コミュニティ運営・webデザイナー・ファシリテーターの
            ５つの仕事を独自の超習慣化術で掛け持ちし、2児の母としても現役でバイリンガル育児中。<br /><br />
            やる気に頼らない習慣法であなたの英語習慣をデザインします。<br /><br />
            科目としての英語力と、コミュニケーションとしての英語力では習得法が異なります。<br /><br />
            あなたが目指している姿や理想をしっかりとヒアリングし、あなたにだけの英語習慣を提案・伴走して
            憧れの英語脳を手に入れる土台を作り上げます。<br /><br />
            語学習得にまず知っておくべきもの、確立するべきものは「文法」でも「発音」でもなく、
            続けるための「習慣」です。<br /><br />
            「英語をやる毎日」ではなく「英語がある毎日」を。
            わたしと一緒に作り上げて、英語で人生を変えませんか？
          </p>
        </div>
      </div>
    </section>
  );
}
