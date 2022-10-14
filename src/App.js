import React, { useState } from "react";
import "./style.css";
import Navbar from "./Navbar";
import CardList from "./CardList";
import Footer from "./Footer";
import { players } from "./playerdata";
import GoTop from "./GoTop";


export default function App() {

 return (
<> 
<Navbar/>
<div className="card-wrapper"> 
<CardList players={players}/>
</div>
<Footer/>
<GoTop/>
</>
 )
}


