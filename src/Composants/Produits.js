import {Products} from "../Data/Products.js"
import Panier from "./Panier.js"

export default function Element({Product, panier, setPanier}){
    
    function addToPanier(id, Titre, prix){
        setPanier(
            [
                ...panier,
                {
                    id,
                    Titre,
                    prix
                }
            ]
        )
        
    }
    
    

    return(
    

        <div className='shadow-lg m-2 p-2 rounded-xl border'>
            <div>
                <img src="https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-13pm/gold/landscape-front.png" alt="portable"/>
            </div>

            <div className="flex justify-between items-center ">
                <div className='font-bold text-2xl '>
                    {Product.Titre}
                </div>

                <div className='text-gray-500 '>
                  En stock  {Product.Disponible? '✅' : '❌'
                  }
                </div>    
            </div>

            <div className="flex justify-between items-center">
                <div className=' text-green-500 font-bold'>
                        {
                            Product.Prix > 0 ? (<>
                                        <span className="text-4xl">{Product.Prix}</span>
                                        <span>$</span>
                                    </>) 
                                    : <span className="text-xl text-red-600">Pas de prix</span> 
                        } 
                </div>

                <div>
                    <button onClick={()=> addToPanier (Product.id, Product.Titre, Product.Prix)}  type="button" className="text-white bg-green-600 hover:bg-red-600  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-green-800 focus:outline-none dark:focus:ring-blue-800">
                        Ajouter au panier
                    </button>
                </div>

            </div>




            
  
            
        </div>

    )
}