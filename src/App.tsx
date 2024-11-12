import React from 'react';

import { 	useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import card_reena from "./assets/card_reena.svg";
import card_rizzy from "./assets/card_rizzy.svg";
import card_leandro from "./assets/card_leandro.svg";
import card_julienne from "./assets/card_julienne.svg";
import card_hya from "./assets/card_hya.svg";
import card_kelly from "./assets/card_kelly.svg";

function App() {
	return (
		<>
			{/* <div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div> */}
			<div className="card">
				<div className='card-item'>
					<img src={card_reena} alt="" />   	
				</div>
				<div className='card-item'>
					<img src={card_rizzy} alt="" />   	
				</div>
				<div className='card-item'>
					<img src={card_leandro} alt="" />   	
				</div>
				<div className='card-item'>
					<img src={card_julienne} alt="" />   	
				</div>
				<div className='card-item'>
					<img src={card_hya} alt="" />   	
				</div>
				<div className='card-item'>
					<img src={card_kelly} alt="" />   	
				</div>

			</div>
			<h2>Reena Castillo</h2>
			<h3>Card Designs</h3>
			
			<div>
				
			</div>
			
		</>
	)
}

export default App
