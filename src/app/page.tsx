
import Footer from "@/components/Footer";
import About from "@/sections/About";
import Explore from "@/sections/Explore";

import Insights from "@/sections/Insights";
import Main from "@/sections/Main";
import WhatsNew from "@/sections/WhatsNew";

export default function Home() {
  return (
    <main className='bg-primary-black overflow-hidden'>
      <Main />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0 opacity-60" />
        <Explore />
      </div>
      <div className="relative">
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      {/* <World /> */}
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        {/* <Feedback /> */}
        <Footer />
      </div>
    </main>
  )
}
