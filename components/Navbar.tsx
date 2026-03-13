export default function Navbar() {
  return (
    <nav className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
      <h1 className="font-bold text-xl">GYM CLUB</h1>
      <div className="flex gap-4"><a>Accueil</a><a>Sports</a><a>Contact</a></div>
    </nav>
  );
}