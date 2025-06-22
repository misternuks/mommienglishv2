import Image from "next/image"

export default function Footer() {
  return(
    <footer className="w-full bg-brand min-h-[357px] grid grid-cols-1 lg:grid-cols-2 items-stretch p-16 gap-8 xl:gap-40">
      <div className="lg:justify-self-end flex flex-col text-white max-w-[600px] gap-8">
        <div className="">
          <Image
            src="/logo_white.png"
            alt="white MommiEnglish logo"
            width={373}
            height={70}
            className=""
          />
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <a
              href="https://www.instagram.com/mommienglish"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200 transition-colors"
              aria-label="Follow me on Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-16 h-16"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1
                  16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75
                  2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75
                  20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25
                  3.5h-8.5zm8.5 2a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5
                  0v-1a.75.75 0 0 1 .75-.75zM12 7a5 5 0 1 1 0 10 5 5 0 0 1
                  0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
                />
              </svg>
            </a>
            <span>Follow me!</span>
          </div>
          <div className="">
            おうち英語習慣化コーチング<br />
            英語コミュニティー Cozy English Lounge 運営<br />
            MommiEnglish オリジナル教材制作
          </div>
        </div>
      </div>

      <div className="lg:justify-self-start flex flex-col text-black max-w-[600px] gap-8">
        <div className="h-[70px] flex items-center justify-start w-auto">
          <Image
            src="/logo_lumineglyph.png"
            alt="black Lumineglyph logo"
            width={373}
            height={70}
            className=""
          />
        </div>
        <div>
          web・グラフィックデザイン / バナー制作 / SNSデザイン代行<br />
          STUDIO / Figma / WordPress / Canva / Notion /
          HTML / CSS / JavaScript / Next.js /  Git / GitHub / Ruby on Rails
        </div>
      </div>

    </footer>
  )
}
