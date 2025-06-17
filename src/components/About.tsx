import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full flex flex-col mb-40">
      <div className="flex flex-col align-center justify-center">
        <h5 className="text-center text-brand-text tracking-wider font-shippori-mincho-b1 font-bold text-3xl ">About <span className="text-brand">m</span>e</h5><br />
        <div className="border-b-2 border-dashed border-brand-text w-25 self-center">
        </div>
      </div>

      <div className="flex flex-wrap p-16 items-start justify-center gap-16">
        <div className="flex items-center justify-center min-w-[500px]">
          <Image
            src="/about_pic.png"
            alt="Photo of Moena"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="font-shippori-mincho-b1 flex flex-col items-center justify-start w-[500px]">
          <p className="whitespace-pre-line text-xl/relaxed mb-5 self-start">
            {"MommiEnglish代表\nおうち英語習慣化コーチ\nマイナー萌惠奈\nMoena Miner"}
          </p>
          <p className="text-sm">
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
