export default function FindPage(){
    return(
        <section className="w-full py-24 px-6 border-b">
        <h1 className="text-5xl py-6">Find me on social.</h1>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 ">
            <div>
                <img src="/service1.png" alt="" className="h-80 w-80 "  />
            </div>
            <div>
                <img src="/blogservices1.jpg" alt="" className="h-80 w-80"/>
            </div>
            <div>
                <img src="/blogservices2.png" alt="" className="h-80 w-80"/>
            </div>
            <div>
            <img src="/office1.jpeg" alt="" className="h-80 w-80" />
            </div>
        </div>
        </section>
    )
}