import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Support from "./components/Support"
import Testimonial from "./components/Testimonial"
import Office from "./components/Office"
import FAQ from "./components/Faq"
import Background from "./components/Background"
import CTASection from "./components/CTAsection"
export default function Home(){
    return(
        <><Hero/>
        <About/>
        <Services/>
        <Support/>
        <Testimonial/>
        <Office/>
        <FAQ/>
        <Background/>
        <CTASection/>
        </>
    )
}