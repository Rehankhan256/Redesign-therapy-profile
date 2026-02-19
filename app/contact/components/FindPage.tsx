export default function FindPage() {
  return (
    <section className="w-full py-24 px-6 border-b">
      <h1 className="text-4xl sm:text-5xl py-6 text-center md:text-left">Find me on social.</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex justify-center">
          <img src="/service1.png" alt="" className="w-full max-w-[320px] h-auto md:h-80 object-cover rounded-lg" />
        </div>
        <div className="flex justify-center">
          <img src="/blogservices1.jpg" alt="" className="w-full max-w-[320px] h-auto md:h-80 object-cover rounded-lg" />
        </div>
        <div className="flex justify-center">
          <img src="/blogservices2.png" alt="" className="w-full max-w-[320px] h-auto md:h-80 object-cover rounded-lg" />
        </div>
        <div className="flex justify-center">
          <img src="/office1.jpeg" alt="" className="w-full max-w-[320px] h-auto md:h-80 object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}
