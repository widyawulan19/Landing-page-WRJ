import React from 'react'
import '../style/Landing.css'
import {FaInstagram,FaTiktok,FaYoutube} from 'react-icons/fa6'


function Benefit() {
  return (
    <>
        <section id='benefit' className='benefit-container'>
            <div className="title-benefit">
                <h2>Macam-Macam Kegiatan <span style={{color:'black'}}><br />Rumah Jiwa Yogyakarta</span></h2>
                <p style={{textAlign:'left', marginLeft:'6vh'}}>Berbagai macam kegiatan yang disediakan oleh Wisata Rumah Jiwa. <br/>Kegiatan lainnya dapat dilihat melalui akun media sosial kami.</p>
                <div className="akun">
                    <button><a href='https://instagram.com/wisatarumahjiwa?igshid=MzRlODBiNWFlZA=='><FaInstagram size={30}/></a></button>
                    <button><a href='https://www.youtube.com/@rumahjiwa'><FaTiktok size={30}/></a></button>
                    <button><a href='https://www.tiktok.com/@rumahjiwahafara?_t=8ju4UNkxBoH&_r=1'><FaYoutube size={30}/></a></button>
                </div>
            </div>
            <div className="isi-benefit-container">
                <div className="isi-benefit">
                    <div className="benefit-card" style={{backgroundImage:'url(./kegiatan/bermain.JPG)', backgroundSize:'100% 100%'}}>
                        <div className="desc">
                            <h3>Bermain Bersama Oma Opa</h3>
                            <p>Memiliki waktu bermain yang menyenangkan.</p>
                        </div>
                    </div>
                    <div className="benefit-card" style={{backgroundImage:'url(./kegiatan/membatik.jpeg)', backgroundSize:'100% 100%'}}>
                        <div className="desc">
                            <h3>Membuat Batik Sibori</h3>
                            <p>Belajar membuat batik Sibori.</p>
                        </div>
                    </div>
                </div>
                <div className="isi-benefit">
                <div className="benefit-card" style={{backgroundImage:'url(./kegiatan/mewarnai.jpeg)', backgroundSize:'100% 100%'}}>
                    <div className="desc">
                        <h3>Melukis Bersama Oma Opa</h3>
                        <p>Aktivitas seni yang kreatif dan juga menyenangkan.</p>
                    </div>
                </div>
                <div className="benefit-card" style={{backgroundImage:'url(./kegiatan/menari.jpeg)', backgroundSize:'100% 100%'}}>
                    <div className="desc">
                        <h3>Bercerita dan Menari Bersama</h3>
                        <p>Menghabiskan waktu liburan bersama Oma Opa.</p>
                    </div>
                </div>
            </div>
            </div>
            
            
        </section>
        
    </>
  )
}



export default Benefit




/*

.benefit-card{
    margin-bottom: 2vh;
    width: 70%;
    height: 14vh;
    padding-bottom: 2vh;
    padding-left: 2vh;
    padding-right: 2vh;
    padding-top: 0.5vh;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5); /* Atur bayangan 
}
.benefit-card h3{
    font-size: 20px;
    text-align: left;
}


<div className="benefit-card">
                    <h3>Bermain Bersama Oma Opa</h3>
                    <p>Memiliki waktu bermain yang menyenangkan bersama Oma Opa</p>
                </div>
                <div className="benefit-card">
                    <h3>Membuat Batik Sibori</h3>
                    <p>Belajar membuat batik Sibori bersama Oma Opa</p>
                </div>
                <div className="benefit-card">
                    <h3>Melukis Bersama Bersama Oma Opa</h3>
                    <p>Melakukan aktivitas seni yang kreatif dan juga menyenangkan</p>
                </div>
                <div className="benefit-card">
                    <h3>Bercerita dan Menari Bersama Oma Opa</h3>
                    <p>Menghabiskan waktu liburan bersama Oma Opa</p>
                </div>


<section className='benefit-container'>
            <div className="benefit1">
                <h2 style={{marginBottom:'5vh'}}>Macam-Macam Kegiatan <span style={{color: '#B0EB99'}}><br />Rumah Jiwa Yogyakarta</span></h2>
                <p style={{color:'#B0EB99', fontWeight:'bold', fontSize:'20px'}}><BsCircleFill style={{marginRight:'2vh', color:'#B0EB99'}}/>
                    Bermain Bersama Oma Opa <span  style={{marginLeft:'4.5vh', color:'white', fontSize:'15px', fontWeight:'300'}}> <br />Waktu bermain yang menyenangkan</span>
                </p>
                <p style={{color:'#B0EB99', fontWeight:'bold', fontSize:'20px'}}><BsCircleFill style={{marginRight:'2vh', color:'#B0EB99'}}/>
                    Membuat Batik Sibori <span  style={{marginLeft:'4.5vh', color:'white', fontSize:'15px', fontWeight:'300'}}> <br />Belajar membatik bersama</span>
                </p>
                <p style={{color:'#B0EB99', fontWeight:'bold', fontSize:'20px'}}><BsCircleFill style={{marginRight:'2vh', color:'#B0EB99'}}/>
                    Melukis Bersama Oma Opa <span  style={{marginLeft:'4.5vh', color:'white', fontSize:'15px', fontWeight:'300'}}> <br />Aktivitas seni yang kreatif & menyenangkan</span>
                </p>
                <p style={{color:'#B0EB99', fontWeight:'bold', fontSize:'20px'}}><BsCircleFill style={{marginRight:'2vh', color:'#B0EB99'}}/>
                    Bercerita dan Menari Bersama <span  style={{marginLeft:'4.5vh', color:'white', fontSize:'15px', fontWeight:'300'}}> <br />Liburan yang penuh kegembiraan</span>
                </p>
            </div>
                <div className="benefit2">
                    <img src="./images/benefit2.png" alt="" />
                </div>
        <div class="top-benefit-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <div class="bottom-benefit-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>

        </section>
*/