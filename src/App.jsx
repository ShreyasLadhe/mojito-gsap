import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    })

    navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
      backgroundColor: '#00000050',
      backgroundFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.inOut'
    })
  })

  return (
    <main>
      <Navbar />
    </main>
  )
}
 
export default App