export default function Header() {
  return (
    <header className="w-full bg-white text-brand-text sm: text-sm md:text-xl p-4 flex justify-center items-center font-shippori-mincho-b1 mb-20 sticky top-0 z-50 shadow-lg">
      <nav className="w-full flex justify-evenly items-center sm:gap-1 md:gap-4 sm:px-1 md:px-8 flex-wrap">
        <a className="hover:text-brand transition-colors" href="#">Home</a>
        <a className="hover:text-brand transition-colors" href="#mission">Our mission</a>
        <a className="hover:text-brand transition-colors" href="#service">Service</a>
        <a className="hover:text-brand transition-colors" href="#voice">Voice</a>
        <a className="hover:text-brand transition-colors" href="#about">About me</a>
      </nav>
    </header>
  );
}
