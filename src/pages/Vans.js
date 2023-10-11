import "./Vans.css"

const arr = [
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png"
	},
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png"
	},
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png"
	},
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png"
	},
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png"
	},
	{
		title: "Title",
		subtitle: "Subtitle",
		prise: "100",
		img: "https://classiccarseventhirescotland.co.uk/wp-content/uploads/2019/01/Classic-Car-Hire-Ford-Transit-Police-Van-Mini-Bus-Mk1-1974-400px-Sq-300x300.png"
	},
]
const mapArrOfCars = arr.map((item, index) => (
	<div className='Vans_block' key={index}>
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
	</div>
))
const Vans = () => {
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