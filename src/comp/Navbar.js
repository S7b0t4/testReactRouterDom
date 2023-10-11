import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className='header'>
    	<div className='header_title'>
    	  Title
    	</div>
    	<div className='header_navbar'>
    	  <Link to={"/"}>Home</Link>
    	  <Link to={"/about"}>About</Link>
    	</div>
    </div>
	);
}
 
export default Navbar;