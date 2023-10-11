import "./Vans.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from 'react'

const Vans = () => {

	const[arr, setArr] = useState([])
	useEffect(()=>{
		axios.get(`http://localhost:5000/`)
		.then(function (response) {
			setArr(response.data);
		})
		.catch(function (error) {
			console.log(error);
		})
	},[])

	const mapArrOfCars = arr.map((item, index) => (
		<div className='Vans_block' key={index}>
			<Link to={item.link}>
				<img src={item.img} alt={item.subtitle} />
				<div className='row center'>
					<div className='colum'>
						<div>{item.title}</div>
						<div>{item.subtitle}</div>
					</div>
					<div>
						{item.prise}
					</div>
				</div>
			</Link>
		</div>
	))

	return (
		<div>
			<h1>Explore our van options</h1>
			<div className='Vans_row'>
				{mapArrOfCars}
			</div>
		</div>
	);
}
 
export default Vans;