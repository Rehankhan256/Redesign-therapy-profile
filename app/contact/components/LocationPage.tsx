export default function LocationPage() {
  return (
    <section className="bg-[#D9D6C5] py-24 px-6">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 text-[#1F3A1F]">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 mt-12">
            Office Location
          </h2>

          <p className="text-lg mb-2">
            123th Street 45 W,<br/> Santa Monica, CA 90401
          </p>

          <h3 className="text-4xl mt-12 font-semibold mb-4">
            Office Hours
          </h3>

          <p className="text-lg ">Monday – Thursday</p>
          <p className="text-lg mb-6">10:00 AM – 6:00 PM</p>

        </div>

        {/* RIGHT SIDE (MAP) */}
        <div className="lg:w-1/2 w-full h-[350px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps?q=Santa%20Monica,%20California&output=embed"
            className="w-full h-full rounded-lg shadow-md"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

    </section>
  );
}
