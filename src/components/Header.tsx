export default function Header() {
  return (
    <header className="w-full bg-white text-brand-text text-xl p-4 flex justify-center items-center font-shippori-mincho-b1 mb-20">
      <nav className="w-full flex justify-evenly items-center gap-2 px-8 flex-wrap">
        <a className="hover:text-brand transition-colors" href="#">Home</a>
        <a className="hover:text-brand transition-colors" href="#mission">Our mission</a>
        <a className="hover:text-brand transition-colors" href="#service">Service</a>
        <a className="hover:text-brand transition-colors" href="#voice">Voice</a>
        <a className="hover:text-brand transition-colors" href="#about">About me</a>
      </nav>
    </header>
  );
}
