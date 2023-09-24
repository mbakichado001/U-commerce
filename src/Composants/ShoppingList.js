import Element from "./Produits"
import Panier from "./Panier"
import {Products} from "../Data/Products.js"

export default function ShoppingList ({panier, setPanier}) {

    return(
        <div className="grid grid-cols-3  gap-3">
                                {
                                    Products.map(Product =>
                                        <Element
                                        panier ={panier} setPanier={setPanier}
                                        Product={Product}
                                        key={Product.id}/>
                                        

                                    )
                                }

                     </div>
        
    )
}
    
