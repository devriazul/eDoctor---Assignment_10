import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import banner from "../../images/Webinar-bro.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useTopics from "../../hooks/useTopics";
import Topic from "../Topic/Topic";
const Home = () => {
  const [topics, setTopics] = useTopics();
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <div className="container row banner">
        <div className="col-md-6 px-5 py-5 d-flex align-items-center ">
          <div className="">
            <h1 className="text-start">
              Stay with <span className="orange">Dr. Yousuf</span> anytime anywhere
            </h1>
            <h4 className="text-start py-5  pe-5">
              My mision is to help people to find the best health solution in online anytime, anywhere.
            </h4>
            <Button
              className={
                user
                  ? " btn-danger d-none "
                  : " btn-danger"
              }
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </Button>
          </div>
        </div>
        <div className="col-md-6  banner-pik d-flex justify-content-center align-items-center">
          <img src={banner} className="image-fluid img-thumbnail" alt="" height="500px" />
          {}
        </div>
      </div>
      <div className="catagory container my-5 py-3">
        <h1 className="text-center ">My Services</h1>
    <div className="services row container m-auto p-3">
        {topics.slice(0,3).map(item=><Topic key={item.id} item={item}></Topic>)}
        {console.log(topics.slice(0,3))}
    </div>
      </div>
    </>
  );
};

export default Home;
