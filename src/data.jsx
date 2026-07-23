
import ingredients from"./recipes-real-3000-v2 (1).json"
import { useMemo , useState } from "react"
import Filter from "./filter";

export default function Data(){
    const [data , setData ] = useState("")
    const [display , setDisplay] = useState(true)
      useMemo(()=>{
   setData(ingredients)
  
      },[])
      return(
    <div >  
           <Filter display={display} 
           setDisplay={setDisplay} 
                      data={data}/>
          
        </div>
      )
}
