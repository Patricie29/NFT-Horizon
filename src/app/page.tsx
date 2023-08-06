
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import Feedback from "@/sections/Feedback";
import GetStarted from "@/sections/GetStarted";
import Insights from "@/sections/Insights";
import Main from "@/sections/Main";
import WhatsNew from "@/sections/WhatsNew";
import Link from "next/link";

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
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      {/* <World /> */}
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        {/* <Feedback /> */}
      </div>
    </main>
  )
}
