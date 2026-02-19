"use client";

export default function Support() {
  return (
    <section className="bg-[#EAE6E1]">
      <div className="grid md:grid-cols-2 min-h-[650px]">

        {/* Left Image */}
        <div className="h-full ">
          <img
            src="/support1.png"
            alt="Therapy Support"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col bg-[#D8D2C8]">

          {/* Content */}
          <div className="flex-1 px-12 py-24">
            <div className="max-w-xl mx-auto">

              <h2 className="text-[46px] leading-[1.1] font-medium text-[#1F2E1C]">
                Support that feels steady, compassionate, and truly present.
              </h2>

              <p className="mt-8 text-lg text-[#1F2E1C]/80">
                You may recognize yourself in some of these experiences:
              </p>

              <ul className="mt-8 space-y-4 text-[#1F2E1C]/80 text-lg">
                <li>• Persistent worry or emotional exhaustion</li>
                <li>• Difficulty maintaining relationships</li>
                <li>• Feeling disconnected or overwhelmed</li>
                <li>• Struggling with motivation or focus</li>
                <li>• A sense that something just feels “heavy”</li>
              </ul>

              <p className="mt-10 text-lg text-[#1F2E1C]/80 leading-relaxed">
                Together, we’ll create space to understand your experiences,
                build resilience, and move toward meaningful change.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-[#1F2E1C]/20 py-8 flex justify-center items-center bg-[#D8D2C8] hover:bg-[#1F2E1C] transition duration-500 group">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="text-[#1F2E1C] tracking-wide font-medium group-hover:text-white transition duration-500"
            >
              BEGIN YOUR JOURNEY →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
