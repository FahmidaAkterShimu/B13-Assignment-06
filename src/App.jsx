import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Counter from './components/Counter'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/PricinigSection/Pricing'
import Steps from './components/Steps'
import Premium from './components/PremiumSection/Premium'
import Cart from './components/Cart'


const pricingPromise = fetch('pricingData.json').then(res => res.json())

const premiumPromise = fetch('toolsData.json').then(res => res.json())

function App() {
  const [selected, setSelected] = useState("products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        {selected === "products"
          ? <Premium
            premiumPromise={premiumPromise}
            selected={selected}
            setSelected={setSelected}
            carts={carts}
            setCarts={setCarts}
          ></Premium>

          : <Cart
            selected={selected}
            setSelected={setSelected}
            carts={carts}
            setCarts={setCarts}
          ></Cart>}
      </Suspense>


      <Steps></Steps>

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App