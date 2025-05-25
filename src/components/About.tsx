import Image from "next/image";

export default function About() {
  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col align-center justify-center">
        <h5 className="text-center text-brand-text tracking-wider font-shippori-mincho-b1 font-bold text-3xl ">About <span className="text-brand">m</span>e</h5><br />
        <div className="border-b-2 border-dashed border-brand-text w-25 self-center">
        </div>
      </div>

      <div className="flex flex-wrap gap-16 p-16 items-start justify-center">
        <Image
          src="/about_pic.png"
          alt="Photo of Moena"
          width={500}
          height={500}
          className=""
        />
        <div className="font-shippori-mincho-b1">
          <p className="whitespace-pre-line text-xl/relaxed ">
            {"MommiEnglish代表\nおうち英語習慣化コーチ\nマイナー萌惠奈\nMoena Miner"}
          </p>
          <p className="text-sm ">

          </p>
        </div>
      </div>
    </section>
  );
}
