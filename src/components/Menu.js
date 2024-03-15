import useResturantMenu from "../utiles/useResturantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { AiFillExclamationCircle } from "react-icons/ai";
import { ResturantCategory } from "./ResturantCategory";
import { useState } from "react";



const ResturantMenu = () => {
  const { resId } = useParams();
  /*MENU-API DATA */
  const resData = useResturantMenu(resId);

  /*INDIVIUAL MENU CARDS*/
  const { cards } =
    resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR || {};

  /*FILTER BASED ON ITEMCATEGORY */
  

  const itemCategories =
    cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];


  /*DESTRUCTURED ON CARDS (HEADER) */
  const {
    name,
    cuisines,
    totalRatingsString,
    avgRating,
    feeDetails,
    locality,
    costForTwoMessage,
  } = resData?.data?.cards[0]?.card?.card?.info || {};

  const [showIndex,setShowIndex]=useState(null);

  /*shimmer ui */
  // console.log(name, cuisines, totalRatingsString, avgRating, feeDetails);
  if (resData === null) {
    return <Shimmer />;
  }
  
  return (
    
    <div className="mx-5 my-5 md:mx-72 md:mt-10 border-slate-300">
      <div className="flex justify-between border-b-2 pb-5 border-dashed">
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <p className=" text-sm  font-medium text-neutral-500">
            {cuisines.join()}
          </p>
          <p className="text-sm  font-medium text-neutral-500 py-1">
            {locality} - {costForTwoMessage}
          </p>
          <div className="text-sm  font-medium text-neutral-500 flex gap-1 mt-3">
            <p className=" rotate-180 ">{<AiFillExclamationCircle />}</p>
            <p className="">{feeDetails.message}</p>
          </div>
        </div>
        <div className="flex flex-col border-zinc-300 border rounded w-max h-1/2 p-1">
          <p className="text-sm font-extrabold text-green-600 text-center -ms-2 pb-1">
            *{avgRating}
          </p>
          <p className=" text-xs text-slate-400 py-1 border-t-2  font-thin">
            {totalRatingsString}
          </p>
        </div>
      </div>
      <div>
        {itemCategories.map((a,index)=><ResturantCategory data={a.card?.card} key={a.card?.card.title} display={index===showIndex && "true"}
        setShowIndex={()=>setShowIndex(index)}/>)}
      </div>
    </div>
  );
};

export default ResturantMenu;
