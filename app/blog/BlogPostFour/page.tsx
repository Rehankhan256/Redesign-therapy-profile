"use client";
import { useRouter } from "next/navigation";
export default function BlogPostFour() {
    const router = useRouter();
  return (
    <section className="relative py-24 px-6 flex flex-col items-center text-center h-190 bg-[#f5effa] border-b">
      <p className="mb-2">Mar 24</p>
      <h1 className="text-5xl font-bold py-6">The Hidden Cost of Perfectionism</h1>

      {/* Centered content div */}
      <div className="w-130 space-y-4 text-left ">
        <p>
          Perfectionism is often misunderstood as a strength.It can look like organization, ambition, reliability, or high standards. Perfectionists are frequently praised for their discipline and attention to detail. They meet deadlines. They exceed expectations. They rarely allow mistakes.
        </p>
        <p>
          Perfectionism doesn’t just live in thoughts — it lives in the body.When self-worth feels tied to performance, the nervous system remains in a subtle state of alertness. There is little room for mistakes. Little margin for uncertainty.
        </p>
        <p>
          Healing perfectionism does not mean abandoning standards or ambition. It involves shifting the internal driver from fear to stability.There is room for excellence and self-compassion to exist together.
        </p>
      </div>
    {/* Button at bottom-left */}
      <button onClick={()=>router.push("/blog/BlogPostThree")} className="absolute bottom-10 left-6  text-4xl font-semibold text-gray-800">
        &lt; Burnout vs. Stress:<br/> What’s the Difference?
      </button>

    </section>
  );
}
