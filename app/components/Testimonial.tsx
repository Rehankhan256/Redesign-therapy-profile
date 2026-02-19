"use client";

export default function Testimonial() {
  return (
    <section className="bg-[#f1d5ea] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-20 px-6">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[52px] font-medium text-[#1F2E1C] leading-[1.1]">
            Meet Dr. Maya Reynolds
          </h2>

          <p className="mt-8 text-lg text-[#1F2E1C]/80 leading-relaxed max-w-xl">
            As a licensed clinical psychologist, I provide a thoughtful and 
            compassionate space where you can explore your experiences without judgment. 
            My approach blends evidence-based techniques with deep empathy, helping you 
            build clarity, resilience, and lasting change.
          </p>

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="border border-[#1F2E1C] px-8 py-3 text-[#1F2E1C] tracking-wide hover:bg-[#1F2E1C] hover:text-white transition  duration-300"
            >
              SCHEDULE A CONSULTATION →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center">

          {/* Main Arch Image */}
          <div className="w-[410px] h-[520px] overflow-hidden rounded-t-full rounded-b-[200px]">
            <img
              src="/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Accent Image */}
          <div className="absolute bottom-[-50px] right-[-30px] w-[240px] h-[240px] rounded-full overflow-hidden shadow-xl">
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
