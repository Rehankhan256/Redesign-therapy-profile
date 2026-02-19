"use client";
import { useRouter } from "next/navigation";
export default function BlogPostTwo() {
    const router = useRouter();
  return (
    <section className="relative py-24 px-6 flex flex-col items-center text-center h-190 bg-[#f5effa] border-b">
      <p className="mb-2">Mar 24</p>
      <h1 className="text-5xl font-bold py-6">Trauma and the Nervous System</h1>

      {/* Centered content div */}
      <div className="w-130 space-y-4 text-left ">
        <p>
          When people hear the word trauma, they often think of a single, catastrophic event. While trauma can certainly involve sudden incidents, it can also stem from chronic stress, relational instability, or environments where a person felt unsafe, unseen, or unsupported.
        </p>
        <p>
          The nervous system is constantly scanning for safety. When it senses threat, it activates protective responses such as fight, flight, freeze, or shutdown. These responses are automatic and deeply intelligent — they are designed to keep us alive.
        </p>
        <p>
          For some individuals, trauma may stem from a single event. For others, it develops slowly over time — through repeated stress, high expectations, emotional neglect, or unstable relationships.
        </p>
      </div>
    {/* Button at bottom-left */}
      <button onClick={()=>router.push("/blog/BlogPostOne")} className="absolute bottom-10 left-6  text-4xl font-semibold text-gray-800">
        &lt; Why High Achievers<br/>Struggle with Anxiety
      </button>

      {/* Button at bottom-right */}
      <button onClick={()=>router.push("/blog/BlogPostThree")} className="absolute bottom-10 right-6  text-4xl font-semibold text-gray-800">
        Burnout vs. Stress:<br/> What’s the Difference? &gt;
      </button>
    </section>
  );
}
