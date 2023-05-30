import React from "react";
import "./register.scss";
import { initial_img } from "../../assets";
import { Gap, Input, Link } from "../../components/atoms";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={initial_img} alt="RegisterBg" className="RegisterBg" style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="right">
        <p className="title text-primary">Register</p>
        <Input label={"Full Name"} placeholder={"Full Name"} />
        <Gap height={18} />
        <Input label={"Email"} placeholder={"Email"} />
        <Gap height={18} />
        <Input label={"Password"} placeholder={"Password"} />
        <Gap height={18} />
        <Gap height={50} />
        <div className="d-grid">
          <button type="button" className="btn btn-success btn-lg" onClick={() => navigate("/login")}>
            Register
          </button>
        </div>
        <Gap height={100} />
        <Link title={"Kembali ke login"} onClick={() => navigate("/login")} />
      </div>
    </div>
  );
}
