import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Counter from './components/Counter'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/PricinigSection/Pricing'
import Steps from './components/Steps'
import Premium from './components/PremiumSection/Premium'
import Cart from './components/PremiumSection/Cart'


const pricingData = async () => {
  const res = await fetch('pricingData.json');
  const json = res.json();
  return json;
};

const toolsData = async () => {
  const res = await fetch('toolsData.json');
  return res.json();
};


function App() {

  const pricingPromise = pricingData();
  const premiumPromise = toolsData();

  const [selected, setSelected] = useState("products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts} setSelected={setSelected}></Navbar>
      <Banner></Banner>
      <Counter></Counter>


      <Suspense fallback={
        <div className="flex items-center justify-center py-30">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      }>
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

      <Suspense fallback={
        <div className="flex items-center justify-center py-30">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      }>
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App