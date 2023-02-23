import React, { useState, useEffect } from "react";
import "./card.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "http://localhost:8080/api/mercardillo/anuncios";

const Card = () => {
	const [elementos, setElementos] = useState([]);

	useEffect(() => {
		getAllElements();
	}, []);

	const getAllElements = async () => {
		axios.get(url).then(response => {
			console.log(response.data);
			setElementos(response.data);
		});
	};

	return (
		<div>
			<div className="text">
				{elementos.map(elemento => (
					<div className="cont1">
						
						<div className="container-left">
							<img
								src="https://www.km77.com/vo/wp-content/uploads/2022/07/coche-portada-chevrolet.png"
								alt=""
							/>
						</div>
						
						<div key={elemento.id} className="datos">
							<div>
							<p><span>Usuario:</span> {elemento.nombre_cliente}</p>
							<p><span>Modelo:</span> {elemento.marca.marca}</p>
							<p><span>Asientos: </span>{elemento.asientos}</p>
							</div>
							<div>
							<p><span>Provincia: </span> {elemento.provincia.provincia}</p>
							<p><span>Tipo: </span> {elemento.tipo.tipo} </p>
							<p><span>Autonomia: </span> {elemento.autonomia} km </p>
							</div>
						</div>
								<Link to="/cardid">
									<button>Alquilar<i class="fa-solid fa-arrow-right"></i></button>{" "}
								</Link>
						
							
							
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
