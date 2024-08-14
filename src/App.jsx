import './App.css'
import { RecoilRoot } from "recoil";
import Hero from './components/Hero';
import Para from './components/Para';

function App() {

  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <RecoilRoot>
      <div className='app'>
        <Hero />
        <Para />
      </div>
      </RecoilRoot>
    </main>
  )
}

export default App
