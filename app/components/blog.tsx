"use client";
import Link from "next/link";

const posts = [
  {
    src: "/images/post-1.jpg",
    title: "Simple Activities That Boost Senior Mental Health",
    href: "/",
  },
  {
    src: "/images/post-2.jpg",
    title: "Family Involvement in Senior Care: Staying Connected",
    href: "/",
  },
  {
    src: "/images/post-3.jpg",
    title: "Navigating the Costs of Senior Care: What You Need to Know",
    href: "/",
  },
];

export default function Blog() {
  return (
    <div className="w-full h-fit mb-24 px-4 max-w-[1440px] m-auto">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-animate {
          opacity: 0;
          animation: fadeUp 0.6s ease-out forwards;
        }
        .card-animate:nth-child(1) { animation-delay: 0.1s; }
        .card-animate:nth-child(2) { animation-delay: 0.25s; }
        .card-animate:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C97B63]" />
          <span className="text-lg text-black font-serif italic font-medium">Our blog</span>
        </div>
        <h1 className="font-sans font-semibold text-center text-3xl sm:text-4xl lg:text-5xl text-[#2C1810] leading-tight">
          Explore articles that nurture
          <br />
          <span className="font-serif italic font-thin">educate, and inspire</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <div key={post.title} className="card-animate flex flex-col gap-4">
            {/* Image */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden">
              <img
                src={post.src}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2 px-1">
              <h2 className="font-bold text-[#2C1810] text-xl leading-snug">
                {post.title}
              </h2>
              <Link
                href={post.href}
                className="text-lg font-semibold text-black hover:text-[#A85F48] transition-colors flex items-center gap-1"
              >
                Learn More
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-3.5 h-3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}