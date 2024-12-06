import React from 'react'
import '../style/Landing.css'

const Hero=()=> {
  return (
    <>
    
        <div id="hero" className="hero-container">
                <div className="hero1">
                    <h1 style={{fontSize:'60px', color:'#164A41'}}>Wisata Rumah Jiwa <span style={{color:'black', opacity:'70%'}}><br />Yogyakarta</span></h1>
                    <p>
                        Selamat datang di Rumah Jiwa<br/> tempat yang cocok untuk berkumpul bersama keluarga maupun kerabat dan menciptakan kenangan indah bersama orang yang kita cintai
                        Kami menawarkan berbagai kegiatan yang penuh dengan keceriaan dan kehangatan serta pengalaman yang tak terlupakan
                        </p>
                    <hr />
                    <button onClick={() => window.open('https://wa.me/6281392325553','')}>Berikan Donasi Anda Di sini</button>
                </div>
                <div className="hero2">
                    <div className="hero-pic1">
                        <img src="./images/group1.png" alt="" />
                    </div>
                    <div className="hero-pic2">
                    </div>
                </div>
            </div>
            <div class="wave-buttom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </>
  )
}

export default Hero
//onClick={() => window.open('https://wa.me/6281392325553','')}
//style={{fontSize:'15px', fontWeight:'bold'} }