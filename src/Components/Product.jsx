 import {  useDispatch } from "react-redux"
 import { Toaster, toast } from "react-hot-toast"
import { addCartItems, calculateTotalPrice } from "../redux/reducer/cart"
 

function Product ({items}){
 
    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch ( addCartItems(items)) 
        dispatch(calculateTotalPrice()) 

        // toast.success 
        if(addCartItems(items) )  {
            toast.success("successfully added products")
        }
    }

    return <div className="border-8 rounded-xl  w-[300px] ">
        <img className="w-40" src={items.image}  />
        <h1 className="text-1xl pt-4 ">{items.title.substring(0,35)}</h1>
        <h1 className="font-bold ">${items.price}</h1>
        <button onClick={handleCart} className="rounded-full h-[50px] w-[50px] text-secondryColor px-3 py-1 my-2 bg-blue-700   text-white ">Buy{handleCart}</button>
          <Toaster/>
    </div>

  
}

export default Product