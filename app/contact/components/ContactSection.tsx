export default function ContactSection() {
  return (
    <section className="w-full py-24 px-6 bg-[#d9b9f3]

 text-center">

      <h1 className="text-4xl md:text-5xl font-semibold text-[#1F3A1F] mb-10">
        Schedule a Consultation
      </h1>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto text-base md:text-lg text-[#1F3A1F] leading-relaxed space-y-6">
        <p>
          Taking the first step toward therapy can feel significant. 
          I offer a complimentary 15-minute phone consultation to help 
          you ask questions, share what you're looking for, and determine 
          whether we’re a good fit.
        </p>

        <p>
          Ongoing therapy sessions are available in-person in Santa Monica 
          and via secure telehealth throughout California.
        </p>
      </div>

      {/* Scheduling Box */}
      <div className="bg-white max-w-2xl mx-auto mt-16 py-12 px-8 shadow-md">

        <h2 className="text-2xl font-semibold text-[#1F3A1F] mb-6">
          Book Your Consultation
        </h2>

        <p className="text-[#1F3A1F] mb-8">
          Use the button below to view availability and schedule a time 
          that works for you.
        </p>

        <button className="bg-[#8A8750] text-white py-4 px-10 hover:opacity-90 transition">
          View Availability
        </button>

      </div>

      {/* Footer Note */}
      <div className="mt-16 text-center">
        <p>Powered By</p>
        <p className="font-semibold">acuity: Scheduling</p>
      </div>

    </section>
  );
}
