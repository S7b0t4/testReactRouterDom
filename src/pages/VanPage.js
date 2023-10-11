import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import "./VanPage.css"

const beckLink = "https://urbanus.serveo.net/"

const VanPage = () => {
	const params = useParams()
	const [vanInfo, setVanInfo] = useState({})
	console.log(beckLink + params.id)
	useEffect(()=>{
		axios.get(beckLink + params.id)
		.then(function (response) {
			console.log(response.data)
			setVanInfo(response.data);
		})
		.catch(function (error) {
			console.log(error);
		})
	},[params])
	return (
		<div className='van_block'>
			<h1>{vanInfo.title}</h1>
			<h4>{vanInfo.subtitle}</h4>
			<img className='van_img' src={vanInfo.img} alt="" />
			<div>
				{vanInfo.description}
			</div>
		</div>	
	);
}
 
export default VanPage;