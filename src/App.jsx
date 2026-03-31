import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Counter from './components/Counter'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/PricinigSection/Pricing'
import Steps from './components/Steps'


const pricingPromise = fetch('pricingData.json').then(res => res.json())

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <Steps></Steps>

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
