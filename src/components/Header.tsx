export default function Header() {
  return (
    <header className="w-full bg-white text-brand-text text-xl p-8 flex justify-center items-center font-shippori-mincho-b1">
      <nav className="w-5xl space-x-4 flex justify-around items-center">
        <a href="#">Home</a>
        <a href="#">Our mission</a>
        <a href="#">Service</a>
        <a href="#">Voice</a>
        <a href="#">About me</a>
      </nav>
    </header>
  );
}
