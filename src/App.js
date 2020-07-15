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

      <nav>
        <Link to="/">Home  </Link>
        <Link to="/Info" className="left">Info</Link>
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
  return (
      <div className="background"><h2>Products Info</h2></div>
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
  const {name,img}= shoe;
  return <div className="background" ><h2>{name} Details</h2><img src={img} alt={value} /></div>
}

const shoes = {
  "Black-Lagoon": {
    name: "BlackLagoon",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?SNKRS_COVER_WD$&align=0,1"
  },
  "Light-sky": {
    name: "LightSky",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?SNKRS_COVER_WD$&align=0,1"
  },
  "Grey-Gods": {
    name: "GreyGods",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?SNKRS_COVER_WD$&align=0,1"
  },

}