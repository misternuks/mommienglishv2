// import Image from "next/image";

export default function Voice() {
  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col align-center justify-center">
        <h5 className="text-center text-brand-text tracking-wider font-shippori-mincho-b1 font-bold text-3xl ">
          V<span className="text-brand">o</span>ice
        </h5><br />
        <div className="border-b-2 border-dashed border-brand-text w-25 self-center mb-20">
        </div>
      </div>
      <div className="flex flex-wrap items-stretch justify-around bg-brand w-full min-h-[600px] p-8 py-20 font-bold font-zen-maru-gothic gap-10">
        <div className="relative w-[400px] h-[360px] bg-[#fffef7] drop-shadow-lg" >

        </div>
        <div className="relative w-[400px] h-[360px] bg-[#fffef7] drop-shadow-lg" >

        </div>
        <div className="relative w-[400px] h-[360px] bg-[#fffef7] drop-shadow-lg" >

        </div>
        <div className="relative w-[400px] h-[360px] bg-[#fffef7] drop-shadow-lg" >

        </div>
      </div>
    </section>
  );
}
