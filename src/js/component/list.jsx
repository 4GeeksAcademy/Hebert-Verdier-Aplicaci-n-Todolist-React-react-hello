import React from "react";
import {useState} from "react";

const List = () => {
	// declaracion de estado
	const [inputTarea, setInputTarea] = useState('');
    const [lista, setLista] = useState([]);

	function handleTarea(event) {
		setInputTarea(event.target.value);
	}
	function agregarTarea(e) {
		e.preventDefault()
		setLista(inputTarea);
	}
	function eliminarTarea() {
	}

	return (
		<div>
			<input type="text" onChange={handleTarea} value={inputTarea}/>
			<button className="btn" onClick={(e)=>agregarTarea(e)}>Agregar</button>
			<div>
				<ul>
					{lista.map((item)=>(
						<li>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default List;