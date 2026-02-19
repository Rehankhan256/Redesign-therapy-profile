"use client";

export default function About() {
  return (
    <section className="bg-[#f1d5ea] -mt-28 w-full">
      <div className="w-full mx-auto px-6 flex flex-col md:flex-row items-stretch ">

        {/* Left Side */}
        <div className="md:w-1/2 text-[#1F2E1C] flex flex-col">

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl py-12 font-medium leading-tight">
              A grounded, collaborative space for meaningful change.
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed">
              I’m a licensed clinical psychologist based in Santa Monica,
              working with thoughtful, high-achieving adults who feel
              overwhelmed by anxiety, burnout, or the lasting effects of past
              experiences.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              My work focuses on anxiety, trauma, panic, and professional
              burnout. I integrate evidence-based approaches such as CBT,
              EMDR, mindfulness, and body-oriented techniques to address both
              the emotional and physiological aspects of stress.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Therapy with me is warm, structured, and collaborative — focused
              not only on symptom relief, but on building resilience and a
              steadier relationship with yourself over time.
            </p>
          </div>

          {/* Button pushed to bottom */}
          <button  onClick={()=>window.location.href = "/contact"} className="mt-10 w-full font-bold border-t border-[#1F2E1C] py-6 text-lg tracking-widest text-[#1F2E1C] hover:bg-[#1F2E1C] hover:text-white transition">
  Connect With Me →
</button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 h-[400px] md:h-auto">
          <img
            src="/office1.jpeg"
            alt="Dr. Maya Reynolds Office"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
