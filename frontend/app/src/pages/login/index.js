import React from 'react';
import "../register/register.scss"
import { initial_img } from "../../assets"
import { Gap, Input, Link } from "../../components/atoms"
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate()
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={initial_img} alt="RegisterBg" className='RegisterBg' />
      </div>
      <div className='right'>
        <p className='title text-danger'>Login</p>
        <Input label={"Email"} placeholder={"Email"} />
        <Gap height={18} />
        <Input label={"Password"} placeholder={"Password"} />
        <Gap height={18} />
        <Gap height={50} />
        <div className="d-grid">
          <button type="button" className="btn btn-success btn-lg" onClick={() => navigate("/")}>Login</button>
        </div>
        <Gap height={100} />
        <Link title={"Belum punya akun silahkan daftar"} onClick={() => navigate("/register")} />
      </div>
    </div>
  )
}
