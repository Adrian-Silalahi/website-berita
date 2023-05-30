import React from 'react';
import { RMA_logo,Instagram,Facebook,Github,Discord,Twitter,Telegram } from '../../../assets';
import "./footer.scss";


const Icon = ({img}) =>{
    return(
        <div className='icon-wrapper' id='icons'>
            <img className='icon-medsos' src={img} alt="icon" />
        </div>
    )
}

const Footer =()=> {
  return (
    <div>
        <div className='footer border-top border-1 border-mute'>
            <div>
                <img className='logo' src={RMA_logo} alt="Logo"/>
            </div>
            <div className='social-wrapper'>
                <Icon img={Facebook}/>
                <Icon img={Twitter}/>
                <Icon img={Instagram}/>
                <Icon img={Telegram}/>
                <Icon img={Discord}/>
                <Icon img={Github}/> 
            </div>
        </div>
        <div className='copyright'>
            <p className='text-dark text-center pb-1 m-0'>Copy Right - 2023</p>
        </div>
    </div>
  )
}

export default Footer;  