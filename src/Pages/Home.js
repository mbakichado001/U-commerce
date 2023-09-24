import { useState } from "react"
import Panier  from "../Composants/Panier"
import Products from "../Data/Products.js"
import ShoppingList from "../Composants/ShoppingList"


export default function Navbar(){
    const [panier, setPanier] = useState ([])
    return(
        <>
            <div className="grid grid-cols-4 "> 
               <Panier panier ={panier} setPanier={setPanier}/>
                
                <div className="col-span-3 p-4">
                    <ShoppingList panier ={panier} setPanier={setPanier}/>
                </div>
            </div>
        </>

        

    )
}