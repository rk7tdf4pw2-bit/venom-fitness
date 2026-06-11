"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  Flame,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Dumbbell,
  Waves,
  Wind,
  ShoppingBag,
  Smartphone,
  Coffee,
  Sparkles,
  Brain,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/905443046465?text=Merhaba%20Venom%20Fitness%2C%20%C3%BCyelik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
const instagramHref = "https://www.instagram.com/venomfitnessvan";
const mapSrc =
  "https://www.google.com/maps?q=%C3%96%C4%9Fretmenevi%20Kar%C5%9F%C4%B1s%C4%B1%2C%20K%C4%B1z%20Meslek%20Lisesi%20Yan%C4%B1%2C%20Van&output=embed";
const imagePath = (file: string) => `/images/${file}`;

const navItems = [
  ["Reformer", "reformer"],
  ["Neden Venom", "neden-venom"],
  ["AI Koç", "ai-koc"],
  ["Galeri", "galeri"],
  ["İletişim", "iletisim"]
];

const reformerBenefits = [
  "Düşük etki, yüksek kontrol",
  "Derin karın ve sırt gücü",
  "Duruş ve esneklik",
  "Her seviyeye uygun"
];

const whyVenom = [
  { label: "1200 m² Premium Alan", Icon: Dumbbell },
  { label: "Reformer Pilates", Icon: Waves },
  { label: "Sauna", Icon: Flame },
  { label: "Buhar Odası", Icon: Wind },
  { label: "Ücretsiz Temiz Havlu", Icon: Sparkles },
  { label: "QR Kodlu Akıllı Dolap", Icon: Smartphone },
  { label: "Üye Kafe Alanı", Icon: Coffee },
  { label: "Yapay Zeka Koçu (Yakında)", Icon: Brain },
];

const stats = [
  { value: "1200", unit: "m²", label: "Premium Alan" },
  { value: "Van'ın", unit: "", label: "En İyi Gym'i" },
];

const aiCapabilities = [
  "Antrenman önerileri",
  "Beslenme tavsiyeleri",
  "Hedef takibi",
  "Motivasyon desteği",
  "Anlık soru-cevap"
];

const gallery = [
  { label: "Ana Fitness Alanı", image: "hero-gym.jpeg", className: "md:row-span-2" },
  { label: "Fitness Atmosferi", image: "hero-gym.jpeg", className: "md:col-span-2" },
  { label: "Ekipman Bölgesi", image: "main-gym.jpeg", className: "" },
  { label: "Kulüp Girişi", image: "entrance.jpeg", className: "" },
  { label: "Premium Giriş", image: "entrance-2.jpeg", className: "" },
  { label: "Üye Kafe Alanı", image: "cafe.jpeg", className: "md:col-span-2" },
  { label: "Pilates Alanı", image: "pilates.jpeg", className: "" },
  { label: "Reformer Pilates", image: "reformer-1.PNG", className: "" },
  { label: "Reformer Pilates", image: "reformer-2.jpeg", className: "" },
  { label: "Reformer Pilates", image: "reformer-3.PNG", className: "" },
  { label: "Reformer Pilates", image: "reformer-4.jpeg", className: "" },
  { label: "Supplement Köşesi", image: "supplements.jpeg", className: "md:col-span-2" },
  { label: "Akıllı Dolap Sistemi", image: "qr-system.jpeg", className: "" },
  { label: "Wellness Alanı", image: "icgorsel.jpeg", className: "md:col-span-2" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const floatingAnimation = {
  initial: { y: 0, opacity: 0 },
  animate: {
    y: [0, -30, 0],
    opacity: [0, 0.6, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center border border-neon/50 bg-black shadow-[0_0_34px_rgba(57,255,20,0.24)]">
        <span className="absolute inset-1 border border-neon/20" />
        <Flame className="relative h-6 w-6 text-neon" />
      </span>
      {!compact ? (
        <span>
          <span className="block font-display text-base font-black uppercase tracking-[0.24em] text-white">
            Venom
          </span>
          <span className="block text-[10px] font-bold uppercase tracking-[0.34em] text-neon">
            Fitness Club
          </span>
        </span>
      ) : null}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      variants={fadeUp}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-neon">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">{text}</p> : null}
    </motion.div>
  );
}

function GalleryImage({
  label,
  image,
  className = ""
}: {
  label: string;
  image: string;
  className?: string;
}) {
  return (
    <figure className={`group relative h-full overflow-hidden border border-white/10 bg-white/[0.035] ${className}`}>
      <Image
        src={imagePath(image)}
        alt={`Venom Fitness ${label}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(57,255,20,0.18),transparent_30%)] opacity-70" />
      <figcaption className="absolute bottom-5 left-5 right-5">
        <p className="font-display text-2xl font-semibold text-white">{label}</p>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-neon">Venom Fitness Club</p>
      </figcaption>
    </figure>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 90]);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/72 backdrop-blur-2xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" aria-label="Venom Fitness Club ana sayfa">
            <Logo />
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map(([item, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-medium text-zinc-300 transition hover:text-neon">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Venom Fitness Instagram"
              className="hidden h-10 w-10 items-center justify-center border border-white/15 bg-white/5 text-zinc-400 transition hover:border-neon/50 hover:text-neon lg:flex"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={whatsappHref}
              className="hidden items-center gap-2 bg-neon px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-white sm:flex"
            >
              Üyelik Bilgisi Al
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid h-11 w-11 place-items-center border border-white/15 bg-white/5 transition hover:bg-white/10 lg:hidden"
              aria-label="Menüyü aç"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <motion.nav
            className="border-b border-white/10 bg-black/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col divide-y divide-white/10 px-4 py-2 sm:px-6">
              {navItems.map(([item, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-sm font-medium text-zinc-300 transition hover:text-neon"
                >
                  {item}
                </a>
              ))}
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 py-4 text-sm font-medium text-zinc-300 transition hover:text-neon"
              >
                <Instagram className="h-4 w-4" />
                @venomfitnessvan
              </a>
            </div>
          </motion.nav>
        )}
      </header>

      <section id="top" className="relative min-h-[82vh] px-4 pt-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-neon/20 to-transparent blur-3xl"
          animate={{
            y: [0, 60, 0],
            x: [0, 40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <Image
            src={imagePath("hero-athlete.jpg")}
            alt="Venom Fitness atleti antrenmanda"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[42%_center] brightness-[0.95] contrast-[1.18] saturate-[1.05] md:object-[68%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.5)_52%,rgba(0,0,0,0.94)_100%)] md:hidden" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.12)_100%)] md:block" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_26%,rgba(57,255,20,0.18),transparent_36%),linear-gradient(180deg,transparent_58%,#000_100%)]" />
        </motion.div>

        <div className="relative z-10 mx-auto grid min-h-[calc(82vh-6rem)] max-w-7xl items-end gap-10 pb-12 md:items-center">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-display font-black leading-[0.9] text-white">
              <span className="block text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl">VENOM</span>
              <span className="block text-5xl text-neon sm:text-6xl md:text-7xl lg:text-8xl">FITNESS</span>
              <span className="mt-4 block text-base font-bold uppercase tracking-[0.3em] text-zinc-300 sm:text-lg md:text-xl">
                Sporu zekâ ile birleştirdik
              </span>
            </h1>
            <div className="mt-7 flex gap-3">
              <a href={whatsappHref} className="group flex-1 inline-flex items-center justify-center gap-2 bg-neon px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-white sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.14em]">
                WhatsApp’tan Üyelik Bilgisi Al
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </a>
              <a href="#ai-koc" className="group flex-1 inline-flex items-center justify-center gap-2 bg-red-600 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-red-500 sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.14em] shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]">
                <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
                AI Koçu Keşfet
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle animated background for stats */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: "linear-gradient(45deg, rgba(57,255,20,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4 relative z-10">
          {stats.map(({ value, unit, label }, i) => (
            <motion.div
              key={label}
              className="text-center relative z-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="font-display text-4xl font-black leading-none text-neon sm:text-5xl">
                {value}<span className="text-2xl sm:text-3xl">{unit}</span>
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="reformer" className="px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <motion.div
            className="relative order-2 overflow-hidden border border-neon/20 bg-black lg:order-1"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={imagePath("reformer-feature.jpg")}
              alt="Venom Fitness Reformer Pilates"
              width={1066}
              height={1600}
              className="h-full w-full object-cover brightness-[0.92] contrast-[1.1]"
            />
            {/* Gradient overlays for blending */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_88%,rgba(57,255,20,0.15),transparent_45%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(57,255,20,0.1),transparent_35%)]" />
            {/* Vignette effect */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]" />
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            <p className="mb-auto text-xs font-bold uppercase tracking-[0.28em] text-neon">Reformer Pilates</p>
            <a href={whatsappHref} className="mt-auto inline-flex items-center justify-center gap-2 bg-neon px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white">
              Reformer Seansı İçin Yaz
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="relative overflow-hidden border border-white/10 bg-white/[0.055] p-6 backdrop-blur-2xl sm:p-8 lg:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(57,255,20,0.14),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-neon">
                  Yakında Tüm Üyelere Özel - Venom AI Koç
                </p>
                <h2 className="font-display text-4xl font-black leading-tight text-white sm:text-6xl">
                  <span className="block bg-gradient-to-r from-neon via-cyan-400 to-blue-500 bg-clip-text text-transparent">Yapay Zeka</span>
                  <span className="block text-white mt-2">Fitness Koçu</span>
                </h2>
                <p className="mt-6 max-w-xl leading-8 text-zinc-300 text-lg">
                  Makine öğrenmesi teknolojisiyle güçlendirilmiş, her üyeye özel antrenman, beslenme ve motivasyon desteği sağlayan kişisel AI koç deneyimi.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Antrenman önerileri", "Beslenme tavsiyeleri", "Hedef takibi", "Motivasyon desteği"].map((item) => (
                    <div key={item} className="group relative flex items-center gap-3 border border-cyan-400/40 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent px-4 py-4 transition hover:border-cyan-400/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded border border-cyan-400/60 bg-cyan-400/10 text-cyan-400">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm font-semibold text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-neon/30 bg-gradient-to-b from-black via-slate-900/20 to-black p-5 shadow-[0_0_60px_rgba(57,255,20,0.1)] rounded-lg overflow-hidden">
                {/* WhatsApp-style header */}
                <div className="mb-5 flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="relative grid h-9 w-9 place-items-center bg-gradient-to-br from-neon to-neon/70 rounded-full">
                      <Bot className="h-5 w-5 text-black" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-white">Venom AI Koç</p>
                      <p className="text-xs text-zinc-400">Çevrimiçi</p>
                    </div>
                  </div>
                </div>

                {/* Chat messages like WhatsApp */}
                <div className="space-y-3">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="max-w-[75%] rounded-3xl rounded-tr-none bg-neon/20 border border-neon/40 px-4 py-2 text-xs leading-6 text-white">
                      Bugün yağ yakımı ve güç kazanımı için nasıl çalışmalıyım?
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-3xl rounded-tl-none bg-zinc-800/60 border border-white/20 px-4 py-2 text-xs leading-6 text-white">
                      Bugün 45 dakikalık kuvvet + kondisyon planı öneriyorum. Önce temel hareketler, ardından kısa interval bitiriş.
                    </div>
                  </div>

                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="max-w-[70%] rounded-3xl rounded-tr-none bg-neon/20 border border-neon/40 px-4 py-2 text-xs leading-6 text-white">
                      Hedef takibimi de günceller misin?
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-3xl rounded-tl-none bg-zinc-800/60 border border-white/20 px-4 py-2 text-xs leading-6 text-white">
                      Haftalık hedefin kaydedildi. Bir sonraki kontrol: 7 gün sonra performans değerlendirmesi.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="neden-venom" className="px-4 py-12 sm:py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background orbs */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-neon/15 to-transparent blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tl from-cyan-500/10 to-transparent blur-3xl"
          animate={{
            y: [0, 60, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader
            eyebrow="Neden Venom?"
            title="Premium Üyelikte Beklediğin Her Şey Tek Çatıda"
            text="Venom Fitness, güçlü antrenman altyapısını wellness, akıllı sistemler ve yakında AI koçluk ayrıcalığıyla birleştirir."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyVenom.map(({ label, Icon }, index) => (
              <motion.div
                key={label}
                className="flex min-h-28 items-center gap-4 border border-white/10 bg-black/60 p-5 backdrop-blur-xl transition hover:border-neon/40 hover:bg-white/[0.06] cursor-pointer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.035 }}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center border border-neon/30 bg-neon/10">
                  <Icon className="h-5 w-5 text-neon" />
                </span>
                <span className="font-display text-base font-semibold leading-tight text-white">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-koc" className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(57,255,20,0.14),transparent_32%,rgba(255,255,255,0.035)_70%,transparent)]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating orbs for AI section */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-bl from-neon/15 to-transparent blur-3xl"
          animate={{
            y: [0, 40, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl"
          animate={{
            y: [0, -60, 0],
            x: [0, -50, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }} variants={fadeUp}>
            <div className="mb-8 inline-block border border-neon/50 bg-gradient-to-r from-neon/10 to-transparent px-4 py-2 rounded">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-neon">🤖 Teknoloji × Fitness</p>
            </div>
            <h2 className="font-display text-5xl font-black leading-[1.1] text-white sm:text-6xl lg:text-7xl">
              <span className="block">Yapay Zeka</span>
              <span className="block bg-gradient-to-r from-neon via-cyan-400 to-blue-500 bg-clip-text text-transparent">Fitness Koçu</span>
            </h2>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-neon/80 font-bold">Makine Öğrenmesi Destekli • Kişisel AI • 7/24 Erişim</p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-neon/80 font-bold">Kişisel AI Antrenmanı Sistemi</p>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Makine öğrenmesi ve biyomekanik analiz teknolojisini birleştirerek, her üyenin hedeflerine özel antrenman, beslenme ve motivasyon desteği sağlayan kişisel yapay zeka koç sistemi.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {aiCapabilities.map((item) => (
                <div key={item} className="group relative flex items-center gap-3 border border-neon/40 bg-neon/5 px-4 py-4 transition hover:border-neon/80 hover:bg-neon/10 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-neon/60 bg-neon/10 text-neon">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-neon to-neon/80 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]">
                AI Koçlu Üyelik İçin Yaz
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <p className="inline-flex items-center justify-center border border-neon/50 bg-neon/5 px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white">
                Üyeliğe Dahil
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[480px] overflow-hidden border border-neon/50 bg-gradient-to-br from-black via-zinc-900 to-black p-6 shadow-[0_0_60px_rgba(57,255,20,0.3),inset_0_1px_0_rgba(57,255,20,0.2)] backdrop-blur-2xl"
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <div className="absolute inset-0 opacity-50 ai-grid" />
            <div className="relative z-10 flex h-full min-h-[440px] flex-col justify-between">
              <div className="flex items-center justify-between border-b border-neon/30 pb-5">
                <div>
                  <Logo />
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-neon/80">
                    NEURAL COACHING ENGINE v1.0
                  </p>
                </div>
                <div className="relative">
                  <Bot className="h-10 w-10 text-neon relative z-10" />
                  <span className="absolute inset-0 animate-pulse rounded-full bg-neon/20 blur" />
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  ["7/24", "Erişim"],
                  ["100%", "Kişisel"],
                  ["AI", "Destek"]
                ].map(([value, label]) => (
                  <div key={label} className="border border-neon/40 bg-gradient-to-br from-neon/10 to-transparent p-4 transition hover:border-neon/70 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                    <p className="font-display text-3xl font-black bg-gradient-to-r from-neon to-neon/70 bg-clip-text text-transparent">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400 font-bold">{label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {[
                  "Bugün: üst vücut güç antrenmanı için hacim kontrollü program önerildi.",
                  "Beslenme: hedeflerine göre protein ve hidrasyon hatırlatması hazır.",
                  "Motivasyon: haftalık performans hedefin için yeni kontrol noktası oluşturuldu."
                ].map((line) => (
                  <div key={line} className="border-l-3 border-neon/70 bg-gradient-to-r from-neon/10 to-transparent px-4 py-3 text-sm leading-6 text-zinc-100 backdrop-blur-sm transition hover:border-neon hover:from-neon/20">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="galeri" className="px-4 py-12 sm:py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(57,255,20,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="mx-auto max-w-7xl relative z-10">
          <SectionHeader
            eyebrow="Galeri"
            title="Venom Fitness Club’dan Gerçek Kareler"
            text="Kulüp girişi, fitness alanı, reformer pilates, kafe, supplement köşesi ve akıllı sistemlerden gerçek Venom fotoğrafları."
          />
          <div className="grid auto-rows-[200px] gap-4 sm:auto-rows-[260px] md:grid-cols-4">
            {gallery.map((item, index) => (
              <motion.div
                key={`${item.label}-${item.image}`}
                className={item.className}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
              >
                <GalleryImage label={item.label} image={item.image} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background animated orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-bl from-neon/20 to-transparent blur-3xl"
          animate={{
            y: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative mx-auto max-w-7xl overflow-hidden border border-neon/30 bg-black/72 p-6 text-center shadow-[0_0_90px_rgba(57,255,20,0.12)] sm:p-10 lg:p-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,255,20,0.16),transparent_34%)]"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-neon">
              Başlangıç için en doğru adım
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Ücretsiz Fitness Analizi Al
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              Hedeflerini paylaş, Venom ekibi sana üyelik, antrenman ve gelişim planı için en uygun
              başlangıç yolunu WhatsApp üzerinden anlatsın.
            </p>
            <a href={whatsappHref} className="mt-8 inline-flex items-center justify-center gap-2 bg-neon px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white">
              WhatsApp’tan Analiz Al
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </section>

      <section id="iletisim" className="px-4 py-12 pb-40 sm:py-20 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="border border-white/10 bg-white/[0.058] p-6 backdrop-blur-2xl sm:p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }} variants={fadeUp}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-neon">İletişim</p>
            <h2 className="font-display text-4xl font-semibold text-white">Venom Üyeliğini Başlat</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              Üyelik seçenekleri, kulüp olanakları ve AI Fitness Coach ayrıcalığı hakkında bilgi almak için bize WhatsApp’tan ulaş.
            </p>
            <div className="mt-8 space-y-5">
              <a href="tel:+905443046465" className="flex items-center gap-4 text-zinc-200 transition hover:text-neon">
                <Phone className="h-5 w-5 text-neon" />
                0544 304 64 65
              </a>
              <p className="flex items-start gap-4 text-zinc-200">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-neon" />
                Öğretmenevi Karşısı, Kız Meslek Lisesi Yanı
              </p>
              <a href={instagramHref} className="flex items-center gap-4 text-zinc-200 transition hover:text-neon">
                <Instagram className="h-5 w-5 text-neon" />
                @venomfitnessvan
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={whatsappHref} className="inline-flex items-center justify-center gap-2 bg-neon px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white">
                <Phone className="h-5 w-5" />
                WhatsApp’tan Bilgi Al
              </a>
              <a href={instagramHref} className="inline-flex items-center justify-center gap-2 border border-white/15 px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-neon hover:text-neon">
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </motion.div>
          <motion.div className="min-h-[420px] overflow-hidden border border-white/10 bg-white/[0.04]" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <iframe
              src={mapSrc}
              title="Venom Fitness konum haritası"
              className="h-full min-h-[420px] w-full border-0 grayscale invert"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-500">
              Premium Fitness + Wellness + AI Fitness Coach deneyimi.
            </p>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">Menü</p>
            <div className="grid gap-3 text-sm text-zinc-500">
              {navItems.map(([item, id]) => (
                <a key={id} href={`#${id}`} className="transition hover:text-neon">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">İletişim</p>
            <div className="grid gap-3 text-sm leading-6 text-zinc-500">
              <a href="tel:+905443046465" className="inline-flex items-center gap-2 transition hover:text-neon">
                <Phone className="h-4 w-4 text-neon" />
                0544 304 64 65
              </a>
              <a href={instagramHref} className="inline-flex items-center gap-2 transition hover:text-neon">
                <Instagram className="h-4 w-4 text-neon" />
                @venomfitnessvan
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-neon" />
                Öğretmenevi Karşısı, Kız Meslek Lisesi Yanı
              </p>
              <a href={whatsappHref} className="mt-2 inline-flex w-fit items-center gap-2 bg-neon px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-white">
                WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <p>© 2026 Venom Fitness Club. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref}
        className="hidden lg:grid fixed bottom-6 right-4 z-50 h-14 w-14 place-items-center rounded-full bg-neon text-black shadow-[0_0_34px_rgba(57,255,20,0.45)] transition hover:bg-white"
        aria-label="Venom Fitness WhatsApp iletişim"
      >
        <Phone className="h-6 w-6" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/86 p-3 backdrop-blur-2xl lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-3">
          <a href={whatsappHref} className="inline-flex items-center justify-center bg-neon px-3 py-3 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:bg-white">
            <Phone className="h-4 w-4" />
          </a>
          <a href={instagramHref} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-3 py-3 transition">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded" />
            <span className="absolute inset-0.5 bg-gradient-to-br from-pink-500/20 to-transparent rounded group-hover:from-pink-500/40 transition" />
            <Instagram className="h-4 w-4 relative text-white" />
          </a>
          <a href="#ai-koc" className="group relative inline-flex items-center justify-center px-3 py-3 transition">
            <span className="absolute inset-0 border border-neon/60 bg-gradient-to-br from-neon/20 to-transparent rounded group-hover:border-neon group-hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] transition" />
            <Bot className="h-4 w-4 relative text-neon group-hover:text-white transition" />
          </a>
        </div>
      </div>
    </main>
  );
}
