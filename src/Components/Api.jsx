import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import Product from "./Product"
import Header from "./Header"
import ClipLoader  from "react-spinners/CircleLoader" 
function Api (){

    const [api,setApi]= useState ([])


   //Searching for products 
     const [search, setSearch] = useState ("")  
     
     const [loading, setLoading] = useState (false)
    const handleSearch = (Event)=>{
        setSearch(Event.target.value)
       

    }

    const handleGetApi = ()=>{
        setLoading(true)
        axios.get("https://fakestoreapi.in/api/products").then((response) => {
        //    setLoading(true)
            setApi(response.data.products)
            setLoading(false)

        }).catch((error)=>{


            console.log(error)
    })
        
    
}

    


useEffect(()=>{
    handleGetApi()
},[])

   //Searching for products
    // loading == true ? <cliSpinners loading={loading}/> : <cliSpinners loading={loading}/>
    
    return   <div>  
   
        <Header search={handleSearch}/>


    
{ loading == true ? <ClipLoader loading={loading} className=" absolute mt-20 text-white"/> :
      <div className=" justify-center grid  sm:grid-cols-4 sm:justify-center space-y-10">
   
    
{
   
   api.filter((items)=>{
        return search.toLowerCase() == "" ? items
        : items.title.toLowerCase().includes(search.toLowerCase())
        
        }).map((data)=>{
        return <Product items={data} />
    })
}
    </div>
 }  
         
    </div>
}

export default Api