import React from "react";
import "./Home.css";
import img from './images/interns.jpg'
import { Link } from "react-router-dom";

function Home() {

 
  return (
    <div className="first">
        <div className="img">
        {/* <img src={img} alt ='Interns' style={{width: '100%', height: '300px'}}/> */}
        </div>
    <div className="home">
      <div className="p-design">
        <h2>Product Design</h2>
        <a href="/pdesign"> View Board</a>
      </div>
      <div className="f-end">
        <h2>FrontEnd</h2>
        <Link
        to='/frontend'
        className="fend-link"
        >
            View Board
        </Link>
        {/* <a href="/frontend"> View Board</a> */}
      </div>
      <div className="b-end">
        <h2>BackEnd</h2>
        <Link
        to='/backend'
        className="fend-link"
        >
            View Board
        </Link>
      </div>
      <div className="web3">
        <h2>Web3</h2>
        <a href="/web3"> View Board</a>
      </div>
    </div>
    </div>
  );
}

export default Home;
