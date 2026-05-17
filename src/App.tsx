/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Menu,
  X,
  Play, 
  Ticket, 
  ShoppingBag, 
  Instagram, 
  Youtube, 
  Music, 
  Mail, 
  ArrowRight, 
  ExternalLink,
  ChevronDown,
  Globe,
  Radio
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    BandsintownWidget?: {
      init: () => void;
    };
  }
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 uppercase">
      {/* Top Bar with blending */}
      <div className="px-6 py-6 flex justify-between items-center mix-blend-difference relative z-50 w-full">
        <div className="flex items-center gap-8">
          <div className="font-display font-bold text-xl tracking-tighter">
            Seven Pound Halo
          </div>
          <div className="hidden lg:flex gap-4">
            <a href="https://www.instagram.com/sevenpoundhalo/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity p-2">
              <Instagram size={18} />
            </a>
            <a href="https://tiktok.com/@sevenpoundhalo" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity p-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
            </a>
            <a href="https://www.youtube.com/@SevenPoundHalo" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity p-2">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest">
          <a href="#music" className="hover:opacity-50 transition-opacity">Music</a>
          <a href="#shows" className="hover:opacity-50 transition-opacity">Shows</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#merch" className="hover:opacity-50 transition-opacity">Merch</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#shows" 
            className="hidden sm:block bg-brand-white text-brand-black px-4 py-2 text-xs font-bold tracking-tighter hover:bg-brand-accent transition-colors"
          >
            Tickets
          </a>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Outside blend container to ensure solid background */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-brand-white text-brand-black z-40 flex flex-col items-center justify-center gap-8 text-2xl font-bold tracking-tighter p-6"
        >
          <a href="#music" onClick={() => setIsOpen(false)} className="hover:opacity-60 transition-opacity">Music</a>
          <a href="#shows" onClick={() => setIsOpen(false)} className="hover:opacity-60 transition-opacity">Shows</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:opacity-60 transition-opacity">About</a>
          <a href="#merch" onClick={() => setIsOpen(false)} className="hover:opacity-60 transition-opacity">Merch</a>
          
          <div className="flex gap-6 mt-8">
            <a href="https://www.instagram.com/sevenpoundhalo/" target="_blank" rel="noopener noreferrer" className="p-2 hover:opacity-60 transition-opacity">
              <Instagram size={24} />
            </a>
            <a href="https://tiktok.com/@sevenpoundhalo" target="_blank" rel="noopener noreferrer" className="p-2 hover:opacity-60 transition-opacity">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
            </a>
            <a href="https://www.youtube.com/@SevenPoundHalo" target="_blank" rel="noopener noreferrer" className="p-2 hover:opacity-60 transition-opacity">
              <Youtube size={24} />
            </a>
          </div>
          
          <a 
            href="#shows" 
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-brand-black text-brand-white px-12 py-4 text-sm font-bold tracking-tighter hover:opacity-90 transition-opacity"
          >
            Get Tickets
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="/1.png" 
          alt="Seven Pound Halo performing live" 
          className="w-full h-full object-cover brightness-[0.4] scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/20 to-brand-black"></div>
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] mb-6 block opacity-70">
            Melbourne • Australia
          </span>
          <h1 className="text-6xl md:text-[10vw] font-bold leading-[0.85] uppercase mb-8">
            Seven Pound <br /> Halo
          </h1>
          <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 opacity-80 text-balance">
            Raw energy. Immersive soundscapes. The new wave of Melbourne grungegaze.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <a 
            href="#music" 
            className="flex items-center justify-center gap-2 bg-brand-white text-brand-black px-8 py-4 font-bold uppercase tracking-tighter hover:scale-105 transition-transform"
          >
            <Play size={18} fill="currentColor" /> Listen Now
          </a>
          <a 
            href="#shows" 
            className="flex items-center justify-center gap-2 border border-brand-white/30 px-8 py-4 font-bold uppercase tracking-tighter hover:bg-brand-white/10 transition-colors"
          >
            <Ticket size={18} /> Tour Dates
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const MusicSection = () => {
  return (
    <section id="music" className="relative py-32 px-6 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="/Abstract 2.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8">The Sound</h2>
          <p className="text-lg opacity-70 mb-8 leading-relaxed">
            Fusing the wall-of-sound intensity of shoegaze with the raw, emotional grit of 90s grunge. 
            Our music is built to be felt as much as heard.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="https://open.spotify.com/album/6K26wvh1JvDIN1oXB9L8JF" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-white/5 px-4 py-2 rounded-full text-sm font-medium border border-brand-white/10 hover:bg-brand-white/10 transition-colors"
            >
              <Music size={14} className="text-brand-white/50" /> FIND A WAY E.P DEBUT
            </a>
          </div>
          <a 
            href="https://open.spotify.com/artist/0glhLfayMZXHMZyV4nPmqL?si=Or3LMUWpSviVDvA7tV0KYg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-brand-white font-bold uppercase tracking-tighter group"
          >
            Follow on Spotify <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-2 rounded-xl"
        >
          <iframe 
            style={{ borderRadius: '12px' }} 
            src="https://open.spotify.com/embed/album/6K26wvh1JvDIN1oXB9L8JF?utm_source=generator" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen={true} 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/Insta 4.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">Live Energy</h2>
          <p className="text-lg opacity-60">Experience the immersive wall of sound.</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video bg-brand-black rounded-2xl overflow-hidden shadow-2xl border border-brand-white/10 group cursor-pointer"
          onClick={() => window.open("https://www.youtube.com/watch?v=KFNsTHJj93Q", "_blank")}
        >
          <img 
            src="/3.png" 
            alt="Cut Through The Noise music video thumbnail" 
            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-2 border-brand-white/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-300">
              <Play size={40} fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Official Music Video</p>
            <h3 className="text-2xl font-bold uppercase tracking-tighter">"Cut Through The Noise"</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ShowsSection = () => {
  useEffect(() => {
    // Re-initialize Bandsintown widget if it exists
    if (window.BandsintownWidget) {
      window.BandsintownWidget.init();
    }
  }, []);

  return (
    <section id="shows" className="relative py-32 px-6 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="/Press shot 3.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-brand-black"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 md:gap-4 text-center md:text-left">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">Live Dates</h2>
          <p className="text-lg opacity-60">Catch the energy in person.</p>
        </div>
        <div className="md:text-right">
          <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Momentum</p>
          <p className="text-sm font-medium">Sold out hometown headline shows.</p>
        </div>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden p-4 md:p-8">
        <a 
          className="bit-widget-initializer"
          data-artist-name="id_15605163"
          data-app-id="21ca23b5a529a7fe9f81f16c97d90926"
          data-display-past-dates="false"
          data-text-color="#FFFFFF"
          data-link-color="#FFFFFF"
          data-background-color="transparent"
          data-display-limit="10"
          data-link-text-color="#000000"
        ></a>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm opacity-50 mb-6">Want to book us for your city?</p>
        <a href="mailto:7poundhalo@gmail.com" className="text-brand-white font-bold uppercase tracking-tighter border-b border-brand-white/20 pb-1 hover:border-brand-white transition-colors">
          Contact Booking
        </a>
      </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-brand-white text-brand-black overflow-hidden relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video bg-brand-gray rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/Press shot 1.jpg" 
                alt="Seven Pound Halo band portrait" 
                className="w-full h-full object-cover grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 leading-[0.9]">The Project</h2>
            <div className="space-y-6 text-lg leading-relaxed font-medium">
              <p>
                Seven Pound Halo began in Melbourne in 2022, when Max Paul started writing music as a personal passion project after the COVID pandemic. What started in his bedroom quickly became a full band, with Avatar Rotstein on bass and Ben McLaughlin on lead guitar.
              </p>
              <p>
                The band plays an emotionally raw mix of Aussie garage rock, ’90s grunge, UK indie, and alternative psychedelic rock, with synths that cut through the noise just enough to add an extra layer of texture. It’s loud, polished, and built around raw expression that embraces imperfection.
              </p>
              <p>
                Their live shows are real, high-energy performances that have sold out venues across Melbourne. Seven Pound Halo isn’t trying to fit into a scene—they’re carving out something for themselves, with music that reflects nothing but who they are.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-brand-black/10 pt-20">
          <h3 className="text-3xl font-bold uppercase mb-12 tracking-tighter">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-3">
              <div className="text-2xl font-bold font-display">FIND A WAY E.P DEBUT</div>
              <p className="text-sm opacity-70 leading-relaxed">
                International radio support via BBC Introducing East Midlands for our official debut release, establishing cross-continental industry relationships.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold font-display">MELBOURNE DRAW</div>
              <p className="text-sm opacity-70 leading-relaxed">
                Strong domestic draw, including selling out multiple headline shows, notably bringing 300 attendees to a Thursday night headline at The Workers Club.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold font-display">ICONIC VENUES</div>
              <p className="text-sm opacity-70 leading-relaxed">
                Performed at leading Melbourne venues including The Espy, The Prince Bandroom, and The Curtin, plus iconic London spots like Dublin Castle and The Good Mixer.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold font-display">DIY ETHOS</div>
              <p className="text-sm opacity-70 leading-relaxed">
                Independent physical release production, designing and manufacturing a limited-run CD pressing of the "Find A Way" EP.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold font-display">GLOBAL REACH</div>
              <p className="text-sm opacity-70 leading-relaxed">
                Featured across independent radio stations and curated alternative playlists both locally and internationally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MerchSection = () => {
  const items = [
    { 
      name: "Limited edition Seven Pound Halo tee", 
      price: "$30", 
      img: "/SPH T shirt Preview.png",
      link: "https://square.link/u/Mo3qM1Tf?src=embed"
    },
    { 
      name: "Find A Way EP (CD)", 
      price: "$25", 
      img: "/Cd for square.png",
      link: "https://square.link/u/w7GbOKgW?src=embed"
    },
  ];

  return (
    <section id="merch" className="relative py-32 px-6 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="/Inta 1.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">The Goods</h2>
          <p className="text-lg opacity-60">Limited run DIY merch. Support the noise.</p>
        </div>
        <a href="#" className="flex items-center gap-2 bg-brand-white text-brand-black px-6 py-3 text-xs font-bold uppercase tracking-tighter hover:scale-105 transition-transform">
          View All <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-square md:aspect-[4/5] bg-brand-gray rounded-2xl overflow-hidden mb-6 relative shadow-2xl border border-brand-white/5">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 right-6 bg-brand-white text-brand-black py-4 text-sm font-bold uppercase tracking-widest opacity-100 md:opacity-0 group-hover:opacity-100 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-all text-center shadow-xl hover:bg-opacity-90 active:scale-95"
              >
                Buy Now
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold uppercase tracking-tighter text-2xl md:text-3xl leading-none">{item.name}</h3>
              <p className="text-xl opacity-50 font-medium">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold uppercase mb-6 tracking-tighter">Seven Pound Halo</h2>
            <p className="text-lg opacity-50 max-w-md mb-8">
              Melbourne based alt-rock / grungegaze. Building momentum independently since day one.
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/sevenpoundhalo/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white/50 transition-colors"><Instagram size={24} /></a>
              <a href="https://tiktok.com/@sevenpoundhalo" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white/50 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              <a href="https://www.youtube.com/@SevenPoundHalo" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white/50 transition-colors"><Youtube size={24} /></a>
              <a href="https://open.spotify.com/artist/0glhLfayMZXHMZyV4nPmqL?si=Or3LMUWpSviVDvA7tV0KYg" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white/50 transition-colors"><Music size={24} /></a>
              <a href="mailto:hello@sevenpoundhalo.com" className="hover:text-brand-white/50 transition-colors"><Mail size={24} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-widest">
              <li><a href="#music" className="hover:opacity-50 transition-opacity">Music</a></li>
              <li><a href="#shows" className="hover:opacity-50 transition-opacity">Shows</a></li>
              <li><a href="#about" className="hover:opacity-50 transition-opacity">About</a></li>
              <li><a href="#merch" className="hover:opacity-50 transition-opacity">Merch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <p className="opacity-40 text-[10px] uppercase tracking-widest mb-1">General / Booking</p>
                <a href="mailto:7poundhalo@gmail.com" className="hover:opacity-50 transition-opacity">7poundhalo@gmail.com</a>
                <p className="mt-1 opacity-50">0424 684 714</p>
              </li>
              <li>
                <p className="opacity-40 text-[10px] uppercase tracking-widest mb-1">Press</p>
                <a href="mailto:7poundhalo@gmail.com" className="hover:opacity-50 transition-opacity">7poundhalo@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-white/5 gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">
            © {new Date().getFullYear()} Seven Pound Halo. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] opacity-30">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-white selection:text-brand-black">
      <div className="grunge-overlay fixed inset-0 z-50 pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <MusicSection />
        <VideoSection />
        <ShowsSection />
        <AboutSection />
        <MerchSection />
      </main>
      
      <Footer />
    </div>
  );
}
