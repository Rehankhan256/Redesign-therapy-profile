export default function BlogHeroPage(){
     return (
         <section className="bg-[#F4F1EC] py-16 md:py-24 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 md:gap-12">
                {/* Left Image */} 
                <div className="w-full max-w-[440px] h-[450px] md:h-[630px] mx-auto overflow-hidden rounded-t-[200px] md:rounded-t-[260px]">
          <img
            src="/bloghero1.png"
            alt="BlogHero"
            className="w-full h-full object-cover"
          />
        </div>
                 {/* Right Content */} 
                <div className="text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1F3A1F] mb-6"> Insights on Anxiety, Trauma & Burnout </h1> 
                    <p className="text-base md:text-lg text-[#1F3A1F] leading-relaxed mb-6 max-w-md mx-auto md:mx-0"> Reflections on therapy, emotional resilience, and the inner experiences that shape how we live and relate. These articles explore practical tools and deeper understanding for navigating stress, overwhelm, and personal growth. </p>
                    <p className="font-medium text-[#1F3A1F]"> Thoughtful perspectives for meaningful change. </p> 
                </div>
            </div>
        </section>
    );
}