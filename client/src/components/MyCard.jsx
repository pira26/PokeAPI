import React, { Component } from 'react';

import pokedex from '../static/js/DataPokemon.json';
import '../static/css/card.scss';

export default class MyCard extends React.Component {
	render(){
		return (
			<div className="card">
				{
					pokedex.pokemon.map(poke =>
						<div className="list" key={poke.id}>
							<img src={poke.img} className="custom-image" />
							<div className="custom-card">
								<p>Height: {poke.height} Weight: {poke.weight}</p>
								<p>Type: {poke.type}</p>
								<p>Weaknesses: {poke.weaknesses}</p>
							</div>
						</div>
				)}
			</div>
		);
	}
}