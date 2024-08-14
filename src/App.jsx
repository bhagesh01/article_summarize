import './App.css'
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Hero from './components/ui/Hero';
import Para from './components/ui/Para';
import Navbar from './components/ui/Navbar';
import HeroWrapper from './components/ui/HeroWrapper';

function App() {

  return (
   
     <main className='w-full h-full overflow-x-hidden'>
      <Navbar></Navbar>
      <HeroWrapper></HeroWrapper>
  </main>
  )
}

export default App
