import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fruktregn-element
  useEffect(() => {
    const emojis = ["🍓", "🍍", "🍉", "🍇", "🥭"];
    const frukter = Array.from({ length: 20 }).map(() => ({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));

    const container = document.createElement("div");
    container.className =
      "fixed inset-0 pointer-events-none z-50 overflow-hidden";

    frukter.forEach((f, i) => {
      const el = document.createElement("div");
      el.textContent = f.emoji;
      el.style.position = "absolute";
      el.style.left = `${f.left}%`;
      el.style.top = `-2em`;
      el.style.fontSize = "2rem";
      el.style.animation = `fall ${f.duration}s linear ${f.delay}s forwards`;
      container.appendChild(el);
    });

    document.body.appendChild(container);

    const timeout = setTimeout(() => {
      document.body.removeChild(container);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const produkter = [
    { name: "Sticky Rice med Mango", img: "/mango-sticky.jpg" },
    { name: "Färsk Papaya", img: "/papaya.jpg" },
    { name: "Gröna Plommon", img: "/plommon.jpg" },
    { name: "Fruktfat i förberedelse", img: "/fruktfat-prep.jpg" },
    { name: "Chokladdränkt frukt", img: "/chokladfrukt.jpg" },
    { name: "Choklad + pistage", img: "/chokladfrukt-top.jpg" },
    { name: "Jordgubbar med mango & choklad", img: "/jordgubb-mango.jpg" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-[#fffdf6]">
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>

      {/* Header */}
      <header className="bg-[#002B23] text-white px-6 py-4 flex justify-between items-center shadow-md relative">
        <div className="flex items-center gap-4">
          <img src="/logo.jpg" alt="Gabbe's Frukthörna" className="w-10 h-10" />
          <div>
            <h1 className="text-lg font-bold text-yellow-400">
              GABBES FRUKTHÖRNA
            </h1>
            <p className="text-xs text-orange-300">Där färskhet möter smak</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#meny" className="hover:text-yellow-300">
            Meny
          </a>
          <a href="#om" className="hover:text-yellow-300">
            Om oss
          </a>
          <a href="#kontakt" className="hover:text-yellow-300">
            Kontakt
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-yellow-400 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#002B23] flex flex-col items-center py-4 md:hidden z-50">
            <a href="#meny" className="py-2 text-white hover:text-yellow-300">
              Meny
            </a>
            <a href="#om" className="py-2 text-white hover:text-yellow-300">
              Om oss
            </a>
            <a
              href="#kontakt"
              className="py-2 text-white hover:text-yellow-300"
            >
              Kontakt
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative text-center py-16 px-6 text-white">
        <img
          src="/hero-frukt.jpg"
          alt="Bakgrund av färska frukter"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-[#002B23]">
            Sveriges fräschaste fruktfat
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            Unika smakkombinationer med färska frukter, choklad & tajin
          </p>
          <a
            href="#meny"
            className="bg-[#EF6C00] text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
          >
            Se Meny
          </a>
        </div>
      </section>

      {/* Meny */}
      <section id="meny" className="p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Populära rätter
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produkter.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#002B23]">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Om Gabbe */}
      <section id="om" className="bg-green-50 p-8">
        <h2 className="text-3xl font-semibold mb-4">Om Gabbe</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Gabbe’s Frukthörna är en viral succé på TikTok med över 30 000
          följare. Här blandas färsk frukt, tajin och kärlek till unika
          smakupplevelser – direkt från Frölunda i Göteborg.
        </p>
      </section>

      {/* Recensioner */}
      <section className="bg-white p-8">
        <h2 className="text-3xl font-semibold mb-4">Vad säger kunderna?</h2>
        <ul className="space-y-4 max-w-xl mx-auto">
          <li className="bg-yellow-100 p-4 rounded-lg shadow">
            “Bästa fruktbägaren jag någonsin testat!” – @fruktälskare
          </li>
          <li className="bg-yellow-100 p-4 rounded-lg shadow">
            “Om frukt och tajin är fel, vill jag inte ha rätt.” –
            TikTok-kommentar
          </li>
          <li className="bg-yellow-100 p-4 rounded-lg shadow">
            “Min nya helgtradition.” – Lokalkund
          </li>
        </ul>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-yellow-50 p-8">
        <h2 className="text-3xl font-semibold mb-4">Hitta oss</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="mb-2">📍 Näverlursgatan 18, Göteborg</p>
          <p className="mb-2">🕒 Öppet: Alla dagar 12:00 – 18:00</p>
          <p>
            📱 Följ oss på TikTok:{" "}
            <a
              href="https://www.tiktok.com/@gabbesfrukthorna_"
              target="_blank"
              className="text-green-700 underline"
            >
              @gabbesfrukthorna_
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002B23] text-white text-sm text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} Gabbe's Frukthörna. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
