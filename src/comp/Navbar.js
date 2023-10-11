import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className='header'>
    	<div className='header_title'>
			<Link to={"/"}>VANLIFE</Link>
    	</div>
    	<div className='header_navbar'>
    	  <Link to={"/vans"}>Vans</Link>
    	  <Link to={"/about"}>About</Link>
    	</div>
    </div>
	);
}
 
export default Navbar;