
import HeadphoneScroll from '@/components/HeadphoneScroll';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <HeadphoneScroll />

      {/* Footer or extra content could go here */}
      <footer className="h-screen flex items-center justify-center bg-[#050505] text-white/30">
        <p className="text-sm tracking-widest uppercase">Zenith X © 2026</p>
      </footer>
    </main>
  );
}
