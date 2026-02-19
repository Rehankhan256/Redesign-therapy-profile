export default function Footer() {
  return (
    <footer className="bg-[#f5effa] text-[#1F2E1C]">

      {/* TOP SECTION */}
      <div className="w-full px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row justify-between gap-12">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-2xl md:text-4xl font-medium mb-6 md:mb-10">
            Dr. Maya Reynolds, PsyD
          </h3>

          <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            123th Street 45 W,<br /> Santa Monica, CA 90401 
          </p>

          <p className="text-base md:text-lg underline mb-2">
            email@example.com
          </p>

          <p className="text-base md:text-lg underline">
            (555) 555-5555
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col sm:flex-row gap-10 md:gap-20">

          {/* Hours */}
          <div>
            <h4 className="text-xl md:text-2xl font-medium mb-4 md:mb-8">
              Hours
            </h4>

            <p className="text-base md:text-lg leading-relaxed">
              Monday – Friday <br />
              10am – 6pm
            </p>
          </div>

          {/* Find */}
          <div>
            <h4 className="text-xl md:text-2xl font-medium mb-4 md:mb-8">
              Find
            </h4>

            <ul className="space-y-3 md:space-y-4 text-base md:text-lg underline sm:text-right">
              <li>Home</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="bg-[#f1d5ea] py-8 md:py-12 px-6 text-center">

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm underline mb-4 md:mb-6">
          <span>Privacy & Cookies Policy</span>
          <span>Good Faith Estimate</span>
          <span>Website Terms & Conditions</span>
          <span>Disclaimer</span>
        </div>

        <p className="text-xs md:text-sm mb-4 md:mb-6">
          Website Template Credits:{" "}
          <span className="underline">Go Bloom Creative</span>
        </p>

        <p className="text-xs md:text-sm">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>

      </div>

    </footer>
  );
}
