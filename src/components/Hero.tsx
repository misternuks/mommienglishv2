import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[url(/hero_background.png)] bg-cover lg:min-h-[800px] flex flex-col lg:flex-row items-center justify-center px-6 gap-12">
      {/* Left Content: Logo + Headings + CTA */}
      <div className="flex flex-col items-center justify-center gap-10 text-center lg:items-start lg:text-left max-w-xl">
        {/* Logo */}
        <Image
          src="/logo_colorful.png"
          alt="MommiEnglish logo"
          width={405}
          height={76}
          className="w-[80%] max-w-[300px] md:max-w-[400px]"
        />

        {/* Heading */}
        <div className="font-shippori-mincho-b1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-shadow-[4px_5px_7px_rgba(0,0,0,0.25)] leading-tight">
          <h1 className="">あなたの英語習慣を</h1>
          <h1 className="text-right lg:text-left">デザインします</h1>
        </div>

        {/* CTA */}
        <a
          href="
            https://mommienglish-s2.studio.site/?fbclid=PAZXh0bgNhZW0CMTEAAaeYgkubwFipKozz1Jq334biJqjK_iDPcjuP-sZoS3JF-NjmMG41i4bVS7Xu2A_aem_0bUQC5KgcurxlH-8qkekjQ
          "
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand text-white font-zen-maru-gothic text-lg sm:text-xl font-bold py-4 px-6 rounded-full border-none drop-shadow-lg hover:bg-brand/50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand transition min-w-[200px] text-center"
        >
          無料で動画特典を受け取る
        </a>
      </div>

      {/* Right Side Image */}
      <div className="sm:self-center lg:self-end max-w-sm sm:max-w-md lg:max-w-xl">
        <Image
          src="/hero_image.png"
          alt="Photo of Moena"
          width={622}
          height={746}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
