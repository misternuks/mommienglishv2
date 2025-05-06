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
        <div>
          <h1 className="font-shippori-mincho-b1 text-6xl text-shadow-[4px_5px_7px_rgba(0,0,0,0.25)]">あなたの英語習慣を<br/>
            デザインします
          </h1>
        </div>
        <div>
          <button className="bg-brand text-white font-zen-maru-gothic text-xl font-bold py-6 px-8 rounded-full border-none drop-shadow-lg">お問い合わせはこちら
          </button>
        </div>
      </div>
      <div className="flex items-last justify-center">
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
