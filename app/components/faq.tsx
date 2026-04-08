"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "1. What services do you provide?",
    a: "We offer 24/7 nursing, assisted living, dementia care, wellness activities, home-style meals, and companion care all under one roof in Ikorodu, Lagos.",
  },
  {
    q: "2. How do I know which level of care my loved one needs?",
    a: "We conduct a free consultation and assessment to determine the most appropriate level of care for your loved one.",
  },
  {
    q: "3. How do you handle emergencies??",
    a: "We have trained medical staff onsite 24/7 and direct access to nearby hospitals. Family members are notified immediately.",
  },
  {
    q: "4. Can residents personalize their living space?",
    a: "Yes, we encourage residents to bring personal items and decorations to make their space feel like home.",
  },
  {
    q: "5. Do you provide special diets?",
    a: "Absolutely. Our kitchen team accommodates medical diets, allergies, and personal food preferences.",
  },
];

const LINE_1 = "Get the answers you need about ";
const LINE_2 = "our senior care ";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [typingLine, setTypingLine] = useState<1 | 2 | "done">(1);

  // Typewriter on scroll into view
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

  // Fade-up on scroll for left and right panels
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-panel {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .faq-item {
          opacity: 0;
          animation: faqFadeUp 0.5s ease forwards;
        }
        .faq-item:nth-child(1) { animation-delay: 0.1s; }
        .faq-item:nth-child(2) { animation-delay: 0.2s; }
        .faq-item:nth-child(3) { animation-delay: 0.3s; }
        .faq-item:nth-child(4) { animation-delay: 0.4s; }
        .faq-item:nth-child(5) { animation-delay: 0.5s; }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.3s ease, opacity 0.3s ease;
        }
        .faq-answer.open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .faq-answer-inner {
          overflow: hidden;
        }
      `}</style>

      <section ref={sectionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}
            <div ref={leftRef} className="faq-panel">
              <div className="flex items-center justify-start gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
                <span className="text-lg text-black font-serif italic font-medium">
                  Frequently asked questions
                </span>
              </div>

              {/* Typewriter heading */}
              <div className="min-h-[6rem]">
                <h2 className="font-sans text-4xl text-[#2C1810] font-semibold leading-tight">
                  {line1}
                  {typingLine === 1 && (
                    <span className="animate-pulse text-[#C97B63]">|</span>
                  )}
                </h2>
                {(typingLine === 2 || typingLine === "done") && (
                  <h2 className="font-serif italic text-4xl text-[#2C1810] leading-tight">
                    {line2}
                    {typingLine === 2 && (
                      <span className="animate-pulse text-[#C97B63]">|</span>
                    )}
                  </h2>
                )}
              </div>

              <p className="text-[#9C8070] leading-relaxed text-normal mb-8">
                Reach out today to learn more about our personalized services, schedule a free visit, or speak with a care specialist.
              </p>

              {/* Card */}
              <div className="hidden md:flex items-center">
                <Link
                  href="#contact"
                  className="flex items-center gap-2 bg-[#E2A76F] hover:bg-[#A85F48] transition-colors text-white text-lg font-semibold px-4 py-2.5 rounded-[8px]"
                >
                  Contact us now
                  <svg viewBox="0 0 18 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                    <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* RIGHT — FAQ accordion */}
            <div ref={rightRef} className="faq-panel space-y-4" style={{ transitionDelay: '0.15s' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item rounded-xl  transition-colors duration-300 ${
                    open === i ? " bg-[#2C1810]" : " bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left px-2 py-2 flex items-center justify-between gap-4 border-b border-gray-200/30"
                  >
                    <span className={`font-semibold text-lg transition-colors ${open === i ? "text-white" : "text-black"}`}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 text-2xl transition-transform duration-300 ${open === i ? "rotate-45 text-white" : "text-black"}`}>
                      +
                    </span>
                  </button>

                  <div className={`faq-answer ${open === i ? "open" : ""}`}>
                    <div className="faq-answer-inner px-6 py-4 text-lg text-white leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}