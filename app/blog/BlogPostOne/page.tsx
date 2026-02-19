"use client";
import { useRouter } from "next/navigation";
export default function BlogPostOne() {
    const router = useRouter();
  return (
    <section className="relative py-24 px-6 flex flex-col items-center text-center h-190 bg-[#f5effa] border-b">
      <p className="mb-2">Mar 24</p>
      <h1 className="text-5xl font-bold py-6 ">Why High Achievers Struggle <br/> with Anxiety</h1>

      {/* Centered content div */}
      <div className="w-130 space-y-4 text-left ">
        <p>
          On the surface, high-achieving individuals often appear composed, capable, and successful. They meet deadlines, manage responsibilities, and rarely let others see them struggle.Yet internally, many live with persistent anxiety — a constant hum of worry, self-criticism, and pressure to perform.
        </p>
        <p>
         High achievers tend to be thoughtful, conscientious, and driven. These are strengths. But over time, the same qualities can turn inward.Anxiety in high performers is rarely about incompetence. It’s often about an internalized belief that rest equals failure or that self-worth depends on productivity.
        </p>
        <p>
          Many professionals adapt so well to stress that they no longer recognize it as stress. Being “on edge” becomes normal. The body remains in a subtle state of alertness — tight shoulders, shallow breathing, difficulty winding down at night.
        </p>
      </div>

      {/* Button at bottom-right */}
      <button onClick={()=>router.push("/blog/BlogPostTwo")} className="absolute bottom-10 right-6  text-4xl font-semibold text-gray-800">
        Trauma and the Nervous System &gt;
      </button>
    </section>
  );
}
