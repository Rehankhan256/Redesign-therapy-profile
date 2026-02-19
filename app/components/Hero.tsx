"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#E9EFEA] py-20 md:py-32 px-6 -mt-25">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="w-full max-w-md mx-auto md:mx-0 overflow-hidden rounded-t-full rounded-b-[200px]">
          <img
            src="/Dr. Maya Reynolds.png"
            alt="Dr Maya Reynolds image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#2E3A34] leading-tight">
            Therapy for Anxiety, Trauma, and Burnout in Santa Monica
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#2E3A34] max-w-xl mx-auto md:mx-0">
            Warm, evidence-based therapy for thoughtful adults who feel
            overwhelmed, exhausted, or stuck in patterns of overthinking.
          </p>
          
          <div className="mt-8  flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
            onClick={() => window.location.href = "/"}
            className="mt-8 px-6 md:px-8 py-3 md:py-4 border border-[#1F2E1C] text-[#1F2E1C] hover:bg-[#1F2E1C] hover:text-white transition"
          >
            SCHEDULE A CONSULTATION →
          </button>
          </div>
        </div>

      </div>
    </section>
  );
}
