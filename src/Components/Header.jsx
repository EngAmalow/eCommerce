import { useSelector } from "react-redux"
import App from "../App"
import { NavLink } from "react-router-dom"
function Header({search}){

    const numberofitems = useSelector((state)=> state.cart.items)


 return <div className="flex fixed w-full justify-between font-primaryFont text-white items-center bg-blue-600 px-20 py-3 ">
<h1 className=" text-4xl "><span className="text-thisColor ">e</span>Commerce</h1>


<i class="fa-solid fa-bars text-4xl sm:hidden"></i>
<ul className="sm:flex hidden gap-10  text-3xl pl-0">
    <li>Home</li>
    <li>Contact</li>
 
    <input onChange={search} className="border-[3px] border-black h-[40px] text-black  rounded w-[300px] " type="search" name="" placeholder="Seaching" id="" />
  <NavLink to= "/Cart">  
<i class="fa-solid fa-cart-shopping text-4xl mr-20  "> <h1 className=" absolute -mt-10 ml-10 ">{ numberofitems.length}</h1></i>
  </NavLink>

</ul>


</div>
}

export default Header