"use client";
import { useRouter } from "next/navigation";

export default function BlogServicePage() {
  const router = useRouter();

  return (
    <section className="bg-[#F4F1EC] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

        {/* Card 1 */}
        <div className="space-y-5">
          <div className="relative w-full h-[320px] overflow-hidden rounded-lg">
            <img
              src="/blogservice.png"
              alt="Understanding Anxiety in High Achievers"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-500">February 10, 2026</p>
          <h2 className="text-2xl font-semibold text-[#1F3A1F]">
            Why High Achievers Struggle with Anxiety
          </h2>
          <button
            onClick={() => router.push("/blog/BlogPostOne")}
            className="border-b border-[#1F3A1F] pb-1 text-[#1F3A1F] hover:opacity-70 transition"
          >
            Read More
          </button>
        </div>

        {/* Card 2 */}
        <div className="space-y-5">
          <div className="relative w-full h-[320px] overflow-hidden rounded-lg">
            <img
              src="/blogservices1.jpg"
              alt="Understanding Trauma and Emotional Regulation"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-500">January 28, 2026</p>
          <h2 className="text-2xl font-semibold text-[#1F3A1F]">
            Trauma and the Nervous System
          </h2>
          <button
            onClick={() => router.push("/blog/BlogPostTwo")}
            className="border-b border-[#1F3A1F] pb-1 text-[#1F3A1F] hover:opacity-70 transition"
          >
            Read More
          </button>
        </div>

        {/* Card 3 */}
        <div className="space-y-5">
          <div className="relative w-full h-[320px] overflow-hidden rounded-lg">
            <img
              src="/blogservices2.png"
              alt="Burnout and Professional Exhaustion"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-500">January 14, 2026</p>
          <h2 className="text-2xl font-semibold text-[#1F3A1F]">
            Burnout vs. Stress: What’s the Difference?
          </h2>
          <button
            onClick={() => router.push("/blog/BlogPostThree")}
            className="border-b border-[#1F3A1F] pb-1 text-[#1F3A1F] hover:opacity-70 transition"
          >
            Read More
          </button>
        </div>

        {/* Card 4 */}
        <div className="space-y-5">
          <div className="relative w-full h-[320px] overflow-hidden rounded-lg">
            <img
              src="/office2.jpeg"
              alt="Perfectionism and Internal Pressure"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-gray-500">December 30, 2025</p>
          <h2 className="text-2xl font-semibold text-[#1F3A1F]">
            The Hidden Cost of Perfectionism
          </h2>
          <button
            onClick={() => router.push("/blog/BlogPostFour")}
            className="border-b border-[#1F3A1F] pb-1 text-[#1F3A1F] hover:opacity-70 transition"
          >
            Read More
          </button>
        </div>

      </div>
    </section>
  );
}
