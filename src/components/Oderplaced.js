import { Link } from "react-router-dom";
const OderPlaced =()=>{
    return(
        <div className="flex flex-col gap-3 min-h-96 justify-center items-center">
            <h1 className=" font-bold text-4xl">YOUR ODER IS PLACED</h1>
            <h2 className="text-orange-500 text-2xl" >Thank you for shopping with us.</h2>
            <Link to="/"><h1 className="border bg-red-500 text-white px-5 py-1">SEE MORE RESTURANTS</h1></Link>
            
        </div>
    )
}

export default OderPlaced;