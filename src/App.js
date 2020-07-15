import React from 'react';
//import './App.css';
//import Home from './Components/home';
//import Info from './Components/Info';
import NotFound from './Components/NoPage';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

export default function App() {
  return (
    <div className="naviga" >
    <Router >

      <nav className="left">
        <Link to="/" className="left" >Home  </Link>
        <Link to="/Info" className="left" >Info</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<ProductList />} />
        <Route path="Info" element={<Info />} />
        <Route path=":value" element={<ShoeInfo />} />
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

function Home() {
  return (
      <div className="background"><h2>Our Products</h2><Outlet/></div>
  );
}

function Info() {
  const {text} = Process;
  return (
      <div className="background"><h2>How Our Products are made</h2>
      <p>{text}</p>      
      </div>
  );
}


function ProductList() {
return <ul>
    {Object.entries(shoes).map(([value, {name, img}]) => <li key={value}>
      <Link to={`/${value}`}>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      </Link>
    </li>)}
</ul>
}

function ShoeInfo() {
  const {value} = useParams();
  const shoe = shoes[value];
  if(!shoe) {
    return <div><h1>Out of Stock</h1></div>
  }
  const {name,img,info}= shoe;
  return <div className="background" ><h2>{name} Details</h2><div ><img src={img} alt={value} /></div><p >{info}</p></div>
}

const shoes = {
  "Black-Lagoon": {
    name: "Black Lagoon",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?SNKRS_COVER_WD$&align=0,1",
      info:
      <div>Reinvigorate your stride with the Nike Black Lagoon Delivering the same fit and feel that
         runners love, the shoe has an all-new forefoot cushioning unit and foam for maximum 
         responsiveness. The result is a durable, lightweight trainer designed for everyday running.
         <br/><br/>Colour Shown: Black<br/>Style: BQ9646-001<br/>Price : 3000$</div>
  },
  "Light-sky": {
    name: "Light Sky",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?SNKRS_COVER_WD$&align=0,1",
      info:
      <div>The Nike Light Sky (aka) Flyknit is designed to keep you on the run. More foam and 
        improved upper details provide a secure and cushioned feel. Lace up and feel the potential
         as you hit the road.
         <br/><br/>Colour Shown: White/LightBlue<br/>Style: BRT646-001<br/>Price : 2600$</div>
  },
  "Grey-Gods": {
    name: "Grey Gods",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?SNKRS_COVER_WD$&align=0,1",
      info:
      <div>The Nike React Miler gives you trusted stability for miles with athlete-informed performance.
         Made for dependability on your long runs,
         its intuitive design offers a locked-in fit and a durable feel.
         <br/><br/>Colour Shown: Grey/White<br/>Style: CW1777-001<br/>Price : 4000$</div>
  },

}

const Process = {
  text:
  <div>Almost all Nike shoes are manufactured outside of the United States. The leading manufacturer of
     Nike shoes is China and Vietnam each accounting for 36% of the total manufactured world wide.
      Indonesia accounts for 22% and Thailand for 6% of the Nike shoes that are being produced world wide.
      There are 785 contract factories with more then 1 million workers manufacturing more then 500,000 
      different products. To make the shoe the worker first cuts all the material in the shapes and forms
      they need to be in, they then sew the pieces together on the upper section above the sole.
      The workers then prepare the sole also called stock fitting, followed by preparing the attachment
      of upper to the sole also know as lasting. Then the worker attaches and shapes the bottom heel
      to its final form this process is called heeling. The finishing touches are made and any
      necessary accessories are then attached in the process called treeing.</div>
}