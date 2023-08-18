export default function Element({Titre,Prix=0,Disponible=false,}){
    return(
        <div className='shadow-lg m-2 p-2 rounded-xl border'>
            <div>
                <img src="https://www.telstra.com.au/content/dam/tcom/devices/mobile/mhdwhst-13pm/gold/landscape-front.png" alt="portable"/>
            </div>

            <div className="flex justify-between items-center ">
                <div className='font-bold text-2xl '>
                {Titre}
                </div>

                <div className=' text-green-500 font-bold'>
                    {
                        Prix > 0 ? (<>
                                    <span className="text-4xl">{Prix}</span>
                                    <span>$</span>
                                </>) 
                                : <span className="text-xl text-red-600">Pas de prix</span> 
                    } 
                </div>
            </div>
  
            <div className='text-gray-500 '>
              En stock  {Disponible? '✅' : '❌'
                }
            </div>
        </div>

    )
}