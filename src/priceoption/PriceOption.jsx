import PropTypes from "prop-types"
import Feature from "../feature/Feature";

export default function PriceOption({price}) {
   const {id , pricee , features,name}=price;
 
 

  return (
    <div className="bg-blue-700 rounded-lg p-6 text-white text-center flex flex-col">
        <h2 className="text-center">
            <span className="text-5xl font-extrabold">{pricee}</span>
            <span>/month</span>
        </h2>
        <h2 className="my-8 text-3xl">plan name: {name}</h2>
         <div className="pl-6 flex-grow">
         {features.map(((feature,id)=><Feature key={id} feature={feature}></Feature>))
                }
         </div>
         <button className="bg-green-600 w-full mt-5 py-2 rounded-lg font-bold hover:bg-green-900">Buy Now</button>
    </div>
  )
}
PriceOption.propTypes={
    price : PropTypes.object
}