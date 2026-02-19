export default function CTASection() {
  return (
    <section className="bg-[#8A8750] py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-[40px] font-medium text-white mb-8">
          Begin Therapy in a Space That Feels Supportive
        </h2>

        {/* Paragraph */}
        <p className="text-white text-[20px] leading-relaxed mb-12">
          If you’ve been feeling overwhelmed by anxiety, burnout, or the effects 
          of past experiences, you don’t have to navigate it alone. I offer 
          in-person sessions in Santa Monica and secure telehealth appointments 
          throughout California.
        </p>

        {/* Button */}
        <button className="border border-white text-white px-10 py-4 tracking-wide hover:bg-white hover:text-[#8A8750] transition duration-300">
          Connect With Me →
        </button>

      </div>
    </section>
  );
}
