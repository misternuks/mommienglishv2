import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full bg-[url(/hero_background.png)] bg-cover min-h-[800px] flex flex-wrap">
      <div className="p-10 flex flex-col items-center justify-around gap-24 flex-wrap">
        <div>
          <Image
            src="/logo_colorful.png"
            alt="MommiEnglish logo"
            width={405}
            height={76}
            className=""
          />
        </div>
        <div className="flex flex-col font-shippori-mincho-b1 text-6xl text-shadow-[4px_5px_7px_rgba(0,0,0,0.25)]">
          <h1 className="">あなたの英語習慣を</h1>
          <h1 className="text-right">デザインします</h1>
        </div>
        <div className="bg-brand text-white font-zen-maru-gothic text-xl font-bold py-6 px-8 rounded-full border-none drop-shadow-lg hover:bg-brand/50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand transition min-w-[265px]">
          <a href="#" >
            お問い合わせはこちら
          </a>
        </div>
      </div>
      <div className="flex items-end justify-center">
        <Image
          src="/hero_image.png"
          alt="Photo of Moena"
          width={622}
          height={746}
          className="object-cover"
        />
      </div>
    </section>
  )
}
