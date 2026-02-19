export default function BlogSubscibetion() {
  return (
    <section className="bg-[#2e4a5e]  py-16 md:py-24 px-6">
      <div className="border-2 border-violet-200 text-amber-50 text-center py-12 md:py-20 max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-4xl py-6">
          Subscribe
        </h1>

        <p className="text-base md:text-lg">
          Sign up with your email address to receive news and updates.
        </p>

        {/* Input + Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            className="bg-white text-gray-600 py-4 px-4 w-full sm:w-auto min-w-[250px]"
            type="text"
            placeholder="Email Address"
          />

          <button className="border border-gray-200 py-4 px-6 text-blue-100 hover:bg-violet-300 hover:text-black transition">
            SIGN UP
          </button>
        </div>

        <p className="mt-10">
          We respect your privacy.
        </p>

      </div>
    </section>
  );
}
