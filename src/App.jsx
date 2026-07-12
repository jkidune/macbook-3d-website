import Hero from './components/Hero.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { lazy, Suspense } from 'react';

const ProductViewer = lazy(() => import('./components/ProductViewer.jsx'));

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    //Add the Hero component to the main section    
    <main>
      <Hero />
      <Suspense fallback={<div>Loading viewer...</div>}>
        <ProductViewer />
      </Suspense>
    </main>
  )
}

export default App
