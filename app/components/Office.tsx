"use client";

import Image from "next/image";

export default function Office() {
  return (
    <section className="bg-[#D8D2C8] py-28 px-6">
      <div className="max-w-7xl mx-auto ">

        {/* Heading */}
<div className="max-w-3xl mx-auto mb-20 text-center">
  <h2 className="text-5xl font-medium text-[#1F2E1C] leading-[1.1]">
    A Calm Space for Healing
  </h2>

  <p className="mt-8 text-lg text-[#1F2E1C]/80 leading-relaxed">
    My Santa Monica office is designed to feel warm, private, and 
    grounded. Soft natural light, neutral tones, and a thoughtfully 
    arranged space create an environment where you can slow down 
    and speak freely.
  </p>

  <p className="mt-6 text-lg text-[#1F2E1C]/80 leading-relaxed">
    I offer both in-person sessions in Santa Monica and secure 
    telehealth appointments throughout California. Whether we meet 
    in the office or virtually, my goal is to provide a space that 
    feels steady, confidential, and supportive.
  </p>
</div>


        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Main Office Image */}
          <div className="relative h-[420px] overflow-hidden rounded-[30px]">
            <Image
              src="/office1.jpeg"
              alt="Dr. Maya Reynolds therapy office"
              fill
              className="object-cover"
            />
          </div>

          {/* Secondary Image */}
          <div className="relative h-[420px] overflow-hidden rounded-[30px]">
            <Image
              src="/office2.jpeg"
              alt="Counseling space interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Detail Image */}
          <div className="relative h-[420px] overflow-hidden rounded-[30px]">
            <Image
              src="/service3.png"
              alt="Therapy office detail"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* Optional Location Note */}
        <div className="mt-16 text-center">
          <p className="text-black text-lg font-bold">
            Located in 123th Street 45 W, Santa Monica, CA 90401 · In-Person & Virtual Sessions Available
          </p>
        </div>

      </div>
    </section>
  );
}
