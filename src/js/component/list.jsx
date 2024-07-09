import React from "react";
import { useState } from "react";

const List = () => {
	// declaracion de estado
	const [inputTarea, setInputTarea] = useState('');
	const [lista, setLista] = useState([]);
	// const [mostrar, setMostrar] = useState('none');


	function handleTarea(event) {
		setInputTarea(event.target.value);
	}

	function agregarTarea(e) {
		e.preventDefault()
		inputTarea.trim()
		if (inputTarea != '') {
			const nuevaTarea = {
				id: lista.length + 1,
				texto: inputTarea,
			}
			setLista([...lista, nuevaTarea]);
			setInputTarea('');
		}
	}
	function eliminarTarea(id) {
		const newLista = lista.filter(item => item.id !== id);
		setLista(newLista);
	};


	// function mostrarIcono() {
	// 	setMostrar('flex')
	// }

	return (
		<div className="d-flex flex-column align-items-center">
			<h1>todos</h1>
			<div className="d-flex flex-row">
				<input className='' type="text" onChange={handleTarea} value={inputTarea} />
				<button className="btn btn-primary" onClick={agregarTarea}>Agregar</button>
			</div>
			<div>
				<ul className="float-start">
					{lista.map((item, index) => (
						<li key={index} className="item-li d-flex fs-4">
							{item.texto}
							<button className="btn btn-light" onClick={() => eliminarTarea(item.id)} style={{ fontSize: '10px' }}>X</button>
						</li>
					))}
				</ul>
			</div>
		</div >
	);
};

export default List;