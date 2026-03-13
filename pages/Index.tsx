import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SportSection from '@/components/SportSection';

const blackImg = "https://via.placeholder.com/800x600/000000/FFFFFF?text=إضغط+لتغيير+الصورة";

export default function Index() {
  const [isAdmin, setIsAdmin] = useState(false);
  const checkAdmin = (val) => { if (val === 'boss77') { const p = prompt("Code:"); if (p === "9988") setIsAdmin(true); } };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black py-1 flex justify-center"><input type="text" placeholder="..." className="bg-transparent text-[10px] text-white outline-none w-10 text-center" onChange={(e) => checkAdmin(e.target.value)} /></div>
      <Navbar />
      <HeroSection />
      <div id="sports">
        <SportSection title="KWANKIDO" image={blackImg} isAdmin={isAdmin} />
        <SportSection title="TAEKWONDO" image={blackImg} isAdmin={isAdmin} />
      </div>
      {isAdmin && <button className="fixed bottom-5 left-5 bg-green-600 text-white p-4 rounded-full z-50 shadow-xl" onClick={() => setIsAdmin(false)}>💾 Sauvegarder</button>}
    </div>
  );
}