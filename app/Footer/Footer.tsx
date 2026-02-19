export default function Footer() {
  return (
    <footer className="bg-[#f5effa] text-[#1F2E1C]">

      {/* TOP SECTION */}
      <div className="w-full px-12 py-24 flex justify-between">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-[42px] font-medium mb-10">
            Dr. Maya Reynolds, PsyD
          </h3>

          <p className="text-lg leading-relaxed mb-8">
            123th Street 45 W,<br /> Santa Monica, CA 90401 
          </p>

          <p className="text-lg underline mb-2">
            email@example.com
          </p>

          <p className="text-lg underline">
            (555) 555-5555
          </p>
        </div>

        {/* RIGHT SIDE (Hours + Find together) */}
        <div className="flex gap-32">

          {/* Hours */}
          <div>
            <h4 className="text-[30px] font-medium mb-8">
              Hours
            </h4>

            <p className="text-lg leading-relaxed">
              Monday – Friday <br />
              10am – 6pm
            </p>
          </div>

          {/* Find */}
          <div>
            <h4 className="text-[30px] font-medium mb-8">
              Find
            </h4>

            <ul className="space-y-4 text-lg underline text-right">
              <li>Home</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="bg-[#f1d5ea] py-12 px-6 text-center">

        <div className="flex flex-wrap justify-center gap-6 text-sm underline mb-6">
          <span>Privacy & Cookies Policy</span>
          <span>Good Faith Estimate</span>
          <span>Website Terms & Conditions</span>
          <span>Disclaimer</span>
        </div>

        <p className="text-sm mb-6">
          Website Template Credits:{" "}
          <span className="underline">Go Bloom Creative</span>
        </p>

        <p className="text-sm">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>

      </div>

    </footer>
  );
}
