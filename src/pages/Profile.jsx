import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import UserData from "../components/UserData/";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const isLoggedIn =
    localStorage.getItem("email") &&
    localStorage.getItem("username") &&
    localStorage.getItem("password");

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate('/');
  }, [navigate]);

  return (
    <div className="profile">
      <Navbar></Navbar>
      <UserData></UserData>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
