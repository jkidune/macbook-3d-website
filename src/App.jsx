import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    //Add the Hero component to the main section    
    <main>
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App
