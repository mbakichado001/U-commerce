import { useEffect } from "react"
import { Products } from "../Data/Products"



export default function Panier({panier, setPanier}){
   const Total = panier.reduce (
    (acc, product) => acc+ product.prix,0
   )
    
   

   useEffect( ()=>{
    document.title = Total + "$ a payer"
   }, [Total])

    return(
        <>
        <div className="  bg-green-600 mr-4 p-4">
                    <div className="text-white text-2xl font-bold">Panier</div>

                    <div>
                        <ul className="font-bold">
                            {
                                panier.map(c=> <li key={c.id}>{c. Titre} ={c.prix} </li>)
                            }
                        </ul>
                    </div>

                    TOTAL = {Total}
                       
        </div>
    
        
        </>
    )
    
}