"use client";

export default function Testimonial() {
  return (
    <section className="bg-[#f1d5ea] py-16 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 md:gap-20 px-6">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-[52px] font-medium text-[#1F2E1C] leading-tight">
            Meet Dr. Maya Reynolds
          </h2>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-[#1F2E1C]/80 leading-relaxed max-w-xl">
            As a licensed clinical psychologist, I provide a thoughtful and 
            compassionate space where you can explore your experiences without judgment. 
            My approach blends evidence-based techniques with deep empathy, helping you 
            build clarity, resilience, and lasting change.
          </p>

          <div className="mt-8 md:mt-12 flex justify-start md:justify-start">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="border border-[#1F2E1C] px-6 md:px-8 py-3 text-sm md:text-base text-[#1F2E1C] tracking-wide hover:bg-[#1F2E1C] hover:text-white transition duration-300"
            >
              SCHEDULE A CONSULTATION →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center mt-12 md:mt-0">

          {/* Main Arch Image */}
          <div className="w-full max-w-[410px] h-[420px] md:h-[520px] overflow-hidden rounded-t-full rounded-b-[200px]">
            <img
              src="/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Accent Image */}
          <div className="absolute bottom-[-30px] right-[-10px] md:bottom-[-50px] md:right-[-30px] w-[160px] h-[160px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden shadow-xl">
            <img
              src="/office2.jpeg"
              alt="Therapy Office"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
