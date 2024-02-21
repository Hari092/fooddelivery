const Resturant = (props) => {
    const {resData}=props;
    return (
      <div className="res-card">
        <h3> {resData.name} </h3>
        <img
          className="img-food"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.cloudinaryImageId}
          alt="img-food"
        />
        <h3>{resData.avgRatingString}*{" "}{resData.sla.slaString}</h3>
        <h5>{resData.cuisines.join()}</h5>
        <h5>{resData.costForTwo}</h5>
      </div>
    );
  };

export default Resturant;