
import ingredients from"./recipes-real-3000-enriched (1).json"
import mockData from "./recipes-mock-3000 (1).json"
import { useEffect , useState } from "react"
import Card from "./card"


export default function Data(){
    const [data , setData ] = useState()
      useEffect(()=>{
   setData(ingredients)
      },[])
      return(
        <div>
            <Card title={data}/>
        </div>
      )
}
