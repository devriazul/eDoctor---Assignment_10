import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Checkout from "../../Pages/Checkout/Checkout";
import "./Topic.css";
const Topic = ({ item }) => {
  const { img, id, name, ratings, text, price } = item;
  const navigate = useNavigate();

  const routeChange = () =>{ 
    localStorage.setItem('selectedItem', JSON.stringify(item));
    navigate('/checkout');
  }
  return (
    <div className="item col-sm-6 col-md-4">
      <div className="single-item p-3 m-1 d-flex flex-column">
        <img src={img} alt="" height={200} className="rounded-3"/>
        <div className="ms-4">
          <h5 className="text-start m-0 p-0">{name}</h5>
          <div className="text-inline-block">
            <p className="text-start m-0 mt-1 p-0">
              Rating: {ratings.toFixed(2)}{" "}
            </p>
            <p className="text-end m-0 mt-1 p-0">
              Price: {price}{" "}
            </p>
          </div>
        </div>
        <hr />
        <p className="text-start" title={text}>
          {text > text.slice(0, 200) ? text.slice(0, 200) + " . . ." : text}
        </p>
        
        <Button variant="danger" onClick={(event)=>{routeChange()}} className="btn-checkout w-25 mx-auto">Start</Button>
        {/* <Link to={'/home'}>hmm</Link> */}
      </div>
    </div>
  );
};

export default Topic;
