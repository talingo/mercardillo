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
						<div className="img">
							<img
								src="https://gomore.imgix.net/uploads/car_picture/image/676941/car_7fb87d3f-7efc-4057-995f-4d6fb272e173.jpg?ixlib=rails-2.1.2&fit=crop&w=770&h=513&auto=format%2Ccompress"
								alt=""
							/>
						</div>
						<div key={elemento.id}>
							<p>Usuario: {elemento.nombre_cliente}</p>
							<p>Modelo: {elemento.marca.marca}</p>
							<p>Asientos :{elemento.asientos}</p>
							<p>Precio diario: {elemento.precio} € </p>
							<div>
								<Link to="/cardid">
									<button>Alquilar </button>{" "}
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
