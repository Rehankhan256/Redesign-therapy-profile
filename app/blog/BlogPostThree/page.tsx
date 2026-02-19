"use client";
import { useRouter } from "next/navigation";
export default function BlogPostThree() {
    const router = useRouter();
  return (
    <section className="relative py-24 px-6 flex flex-col items-center text-center h-190 bg-[#f5effa] border-b">
      <p className="mb-2">Mar 24</p>
      <h1 className="text-5xl font-bold py-6">Burnout vs. Stress:<br/> What’s the Difference?</h1>

      {/* Centered content div */}
      <div className="w-130 space-y-4 text-left ">
        <p>
          Many adults describe themselves as “stressed.” Deadlines, responsibilities, family obligations, and constant digital connection can make stress feel like a normal part of modern life.But sometimes what we label as stress is actually something deeper.
        </p>
        <p>
          Stress is typically a response to external demands. It often feels like pressure — too many tasks, not enough time, heightened expectations.Stress is often characterized by over-engagement. You may feel activated, anxious, and highly reactive — but still motivated.
        </p>
        <p>
          Burnout develops when stress becomes chronic and unrelieved over time.Burnout is less about intensity and more about depletion.If you feel constantly wired but still pushing forward, stress may be the primary concern.
        </p>
      </div>
    {/* Button at bottom-left */}
      <button onClick={()=>router.push("/blog/BlogPostTwo")} className="absolute bottom-10 left-6  text-4xl font-semibold text-gray-800">
        &lt; Trauma and the<br/> Nervous System 
      </button>

      {/* Button at bottom-right */}
      <button onClick={()=>router.push("/blog/BlogPostFour")} className="absolute bottom-10 right-6  text-4xl font-semibold text-gray-800">
        The Hidden Cost<br/> of Perfectionism &gt;
      </button>
    </section>
  );
}
