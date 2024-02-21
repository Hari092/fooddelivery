import Resturant from "./../components/Resturant";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
// import Shimmer from "./shimmer";

const Body = () => {
  const [resturantData, setresturantData] = useState([]);
  // const [filterData, setfilterData] = useState("");
  // const [searchResturant, setSearchResturant] = useState("");
  // setresturantData(resturantData);
  // setfilterData(resturantData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999"
      );

      if (!data.ok) {
        throw new Error(
          `Failed to fetch data: ${data.status} - ${data.statusText}`
        );
      }

      const json = await data.json();
      console.log(json);
      setresturantData(
        json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(resturantData);
  return (resturantData.length===0) ? <Shimmer/> : (
    <div className="body">
      
      <div className="res-container">
        {/* cards */}
        <div className="res-cards">
          {resturantData.map((res) => (
            <Resturant key={res.info.id} resData={res.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
