"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "After my father's surgery, we were overwhelmed and unsure how to manage his recovery at home. The nurse from your team was a godsend - so kind, patient, and knowledgeable. She made sure he was comfortable, managed his medications, and even helped lift his spirits.",
    name: "Margaret Ellis",
    role: "Lorem ipsum",
    avatar: "/images/satisfy-client-img-1.jpg",
  },
  {
    quote: "When I moved in, I thought I was giving up my independence. But what I found was a new chapter. I've joined the painting club, made friends over tea, and even started doing yoga again.",
    name: "Sophia Reynolds",
    role: "Family Member",
    avatar: "/images/satisfy-client-img-2.jpg",
  },
  {
    quote: "The care here is unlike anything I expected. Every staff member knows my name, my story, and what makes me smile. I feel seen every single day.",
    name: "Robert James",
    role: "Resident",
    avatar: "/images/satisfy-client-img-3.jpg",
  },
  {
    quote: "Moving my mom here was one of the hardest decisions I've ever made. But seeing her laugh and thrive every time I visit makes me know it was the right one.",
    name: "Michael Carter",
    role: "Son of Resident",
    avatar: "/images/satisfy-client-img-4.jpg",
  },
];

const logos = [
  { icon: "/logos/logo-1.svg", name: "Logoipsum" },
  { icon: "/logos/logo-2.svg", name: "Logoipsum" },
  { icon: "/logos/logo-3.svg", name: "Logoipsum" },
  { icon: "/logos/logo-4.svg", name: "Logoipsum" },
  { icon: "/logos/logo-5.svg", name: "Logoipsum" },
  { icon: "/logos/logo-6.svg", name: "Logoipsum" },
];

const LINE_1 = "Real voices. real care. real";
const LINE_2 = "peace of mind.";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [typingLine, setTypingLine] = useState<1 | 2 | "done">(1);

  const navigate = (dir: number) => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setFade(true);
    }, 250);
  };

  // Typewriter
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let i = 0;
        const t1 = setInterval(() => {
          if (i < LINE_1.length) { setLine1(LINE_1.slice(0, i + 1)); i++; }
          else {
            clearInterval(t1);
            setTypingLine(2);
            let j = 0;
            const t2 = setInterval(() => {
              if (j < LINE_2.length) { setLine2(LINE_2.slice(0, j + 1)); j++; }
              else { clearInterval(t2); setTypingLine("done"); }
            }, 40);
          }
        }, 40);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const t = testimonials[index];

  return (
    <section
      ref={sectionRef}
      className="relative rounded-3xl mx-[2%] my-8 overflow-hidden"
      style={{ minHeight: '520px' }}
    >
      <div className="max-w-[1440px] m-auto">
        {/* Background photo + overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/testimonial-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2e1a]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-[6%] py-16">

          {/* Top grid: left text + right card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">

            {/* LEFT */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C8933A]" />
                <span className="font-serif italic text-white text-lg">Our Testimonials</span>
              </div>

              <div className="mb-5">
                <h2 className="font-sans font-bold text-white text-[clamp(1.8rem,3vw,2.8rem)] leading-tight">
                  {line1}
                  {typingLine === 1 && <span className="animate-pulse text-[#C8933A]">|</span>}
                </h2>
                {(typingLine === 2 || typingLine === "done") && (
                  <h2 className="font-serif italic font-normal text-white text-[clamp(1.8rem,3vw,2.8rem)] leading-tight">
                    {line2}
                    {typingLine === 2 && <span className="animate-pulse text-[#C8933A]">|</span>}
                  </h2>
                )}
              </div>

              <p className="text-white/60 text-sm leading-relaxed max-w-[420px] mb-10">
                From compassionate care to heartfelt connections, their stories reflect the trust and comfort we strive to provide every day.
              </p>

              {/* Stat */}
              <div className="flex items-center gap-5">
                <span className="font-sans font-bold text-white text-6xl">99%</span>
                <span className="text-white/60 text-sm leading-snug max-w-[180px]">
                  Happy to adjust or finish up whatever you need!
                </span>
              </div>
            </div>

            {/* RIGHT — Glassmorphism testimonial card */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-6"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.12)',
                opacity: fade ? 1 : 0,
                transition: 'opacity 0.25s ease',
              }}
            >
              {/* Stars + quote icon row */}
              <div className="flex items-start justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-white" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote icon */}
                <svg className="w-8 h-8 text-white/30 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote text */}
              <p className="text-white text-sm leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Avatar + name + nav arrows */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-sans font-bold text-white text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.role}</div>
                  </div>
                </div>

                {/* Prev / Next */}
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(-1)}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => navigate(1)}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Logo row */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-10">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center gap-2">
                <img src={logo.icon} alt={logo.name} className="h-8 w-auto object-contain" />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}