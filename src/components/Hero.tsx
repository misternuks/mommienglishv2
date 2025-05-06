import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-[url(/hero_background.png)] h-[800px] flex">
      <div className="p-10 flex flex-col items-start justify-around w-1/2">
        <div>
          <Image
            src="/logo_colorful.png"
            alt="MommiEnglish logo"
            width={405}
            height={76}
            className=""
          />
        </div>
        <div className="w-full flex flex-col font-shippori-mincho-b1 text-6xl text-shadow-[4px_5px_7px_rgba(0,0,0,0.25)]">
          <h1 className="">あなたの英語習慣を</h1>
          <h1 className="text-right">デザインします</h1>
        </div>
        <div>
          <a href="#" className="bg-brand text-white font-zen-maru-gothic text-xl font-bold py-6 px-8 rounded-full border-none drop-shadow-lg hover:bg-brand/50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand transition">
            お問い合わせはこちら
          </a>
        </div>
      </div>
      <div className="flex w-1/2 items-last justify-center">
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
