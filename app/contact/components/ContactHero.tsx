export default function ContactHero() {
  return (
    <section className="bg-[#E2DECD] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="flex-1">

          {/* Text */}
          <div className="space-y-6 mb-10">
            <p className="text-lg text-[#1F3A1F]">
              Beginning therapy can feel like a significant step.
            </p>

            <p className="text-lg text-[#1F3A1F]">
              Sessions are available in-person in Santa Monica and via secure
              telehealth throughout California.
            </p>
          </div>

          {/* Images Wrapper */}
          <div className="relative w-fit">

            {/* Main Arch Image */}
            <div className="w-[260px] md:w-[320px] h-[360px] md:h-[420px] 
                            overflow-hidden 
                            rounded-t-full rounded-b-[200px]">
              <img
                src="/office1.jpeg"
                alt="Dr. Maya Reynold Office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Circle Image */}
            <div className="absolute -bottom-8 -right-8 
                            w-[120px] md:w-[150px] 
                            h-[120px] md:h-[150px] 
                            rounded-full overflow-hidden shadow-lg">
              <img
                src="/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynold"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (Contact Box) */}
        <div className="flex-1 bg-white p-10 shadow-md">

          <h3 className="text-2xl font-semibold text-[#1F3A1F] mb-6">
            Contact Information
          </h3>

          <div className="space-y-4 text-[#1F3A1F]">
            <p>
              <span className="font-semibold">Email:</span> 
              hello@drmayareynold.com
            </p>

            <p>
              <span className="font-semibold">Location:</span> 
              Santa Monica, California
            </p>

            <p>
              <span className="font-semibold">Availability:</span> 
              In-person & Telehealth (CA residents)
            </p>
          </div>

          <button className="mt-8 bg-[#8A8750] text-white px-8 py-3 hover:opacity-90 transition">
            Schedule a Consultation
          </button>

        </div>

      </div>
    </section>
  );
}
