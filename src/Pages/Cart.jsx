 
import { useDispatch, useSelector } from "react-redux"
import { RemoveItemFromCart, calculateTotalPrice } from "../redux/reducer/cart"

function Cart (){

    const Price = useSelector((state)=> state.cart.totalPrice)
    const number = useSelector((state)=> state.cart.items)
const Carts = useSelector((state) => state.cart.items)

const dispatch = useDispatch()

const handleRemove = (id) =>{
dispatch(RemoveItemFromCart(id))
dispatch(calculateTotalPrice())
}
    return number.length === 0 ? <p className="text-black text-7xl text-center font-bold mt-20">The cart is Emty</p> : <div className="sm:ml-[250px] m-10 my-10  sm:justify-center space-y-10 "> 
{
    Carts.map((items) => { 
        
        return  <div className="sm:w-[600px] w-[300px]  sm:flex  grid gap-10 border-[2px] border-blue-700 items-center   font-primaryFont    ">
  <div>
  <img className="sm:w-[100px] w-80" src={items.image}  />
  <div>
        <h1 className="sm:text-1xl sm:pt-4">{items.title}</h1>
        <h1 className="font-bold sm:text-2xl my-2 ">${items.price}</h1></div>
        <button onClick={()=> handleRemove(items)} className="bg-black text-white sm:rounded-xl sm:px-6 sm:py-2  ">Remove</button>
        </div></div>
    })
} 
<div className="border-4 rounded-xl border-5 text-4xl h-[300px] absolute top-0 right-0 m-4 w-80 text-black p-4">
    
    <h1>total items </h1>
    <h1 className="font-bold">{number.length}</h1>
    <h1 className="font-bold">Total Price</h1>
    <h1 className="font-bold">{Price}</h1>


    <button  className=" bg-primary text-white rounded-xl w-[310px] absolute bottom-0 py-2  font-bold sm:-ml-3">Pay now</button>

</div>

    </div>
}
export default Cart