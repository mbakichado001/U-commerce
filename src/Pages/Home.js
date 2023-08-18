import Element from "../Composants/Produits"

export default function Navbar(){
    const Products =[
        {
            id :1,
            Titre : "iphone 7 plus",
            Prix : 230,
            Disponible : true 

        },
        {
            id : 2,
            Titre : "iphone 8 plus",
            Prix : 300,
            Disponible : true 

        },
        {
            id : 3,
            Titre : "iphone 11 pro",
            Prix : 0,
            Disponible : false 

        },
        {
            id : 4,
            Titre : "iphone 11 pro-max",
            Prix : 650,
            Disponible : true 

        },
        {
            id : 5,
            Titre : "iphone 12",
            Prix : 300,
            Disponible : true 

        },
        {
            id : 5,
            Titre : "iphone 13",
            Prix : 0,
            Disponible : false 

        },
      
        
    ]
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                Products.map(Product =>
                    <Element
                       Titre={Product.Titre}
                       Prix={Product.Prix}
                       Disponible={Product.Disponible}
                       Key={Product.id}/>
                       

                )
            }

        </div>

    )
}