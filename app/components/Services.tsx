export default function Services() {
  return (
    <section className="bg-[#F4F1ED] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl text-center font-medium py-3 text-[#1F2E1C] mb-20">
          Areas of Focus
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-[#f1d5ea] border border-black p-8 flex flex-col justify-between hover:shadow-md transition duration-300">
            <div>
              <h3 className="text-2xl font-medium mb-4 text-[#1F2E1C]">
                Anxiety & Stress
              </h3>
              <p className="text-[#3A4A36] leading-relaxed">
                Support for chronic worry, panic, and overwhelming stress.
                Learn grounding tools and practical strategies to regulate
                your nervous system and restore balance.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <img
                src="/service1.png"
                alt="Anxiety therapy"
                className="w-65 h-65 object-cover rounded-full"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f1d5ea] border border-black p-8 flex flex-col justify-between hover:shadow-md transition duration-300">
            <div>
              <h3 className="text-2xl font-medium mb-4 text-[#1F2E1C]">
                Trauma & EMDR
              </h3>
              <p className="text-[#3A4A36] leading-relaxed">
                Evidence-based trauma therapy including EMDR to gently
                process past experiences and reduce emotional reactivity,
                helping you move forward with clarity.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <img
                src="/service2.png"
                alt="Trauma therapy"
                className="w-65 h-65 object-cover rounded-full"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f1d5ea] border border-black p-8 flex flex-col justify-between hover:shadow-md transition duration-300">
            <div>
              <h3 className="text-2xl font-medium mb-4 text-[#1F2E1C]">
                Professional Burnout
              </h3>
              <p className="text-[#3A4A36] leading-relaxed">
                Therapy for high-achieving professionals facing exhaustion,
                imposter syndrome, and work-life imbalance. Reconnect with
                purpose while protecting your wellbeing.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <img
                src="/service3.png"
                alt="Burnout therapy"
                className="w-65 h-65 object-cover rounded-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
