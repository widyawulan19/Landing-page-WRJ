import React from 'react'
import {IoHome,IoCall,IoMailUnread} from 'react-icons/io5'
import {FaYoutube,FaInstagram,FaTiktok} from 'react-icons/fa'

const Footer=()=> {
  return (
    <>
        <div id='donation' className="donation-container">
                <div className="donation" >
                    <h3 style={{color:'#F1B24A', fontSize:'35px'}}>Contact Us</h3>
                    <p style={{color:'white', fontSize:'20px', fontWeight:'bold'}}>
                    Untuk booking jadwal kunjungan Wisata Rumah Jiwa & info lebih lanjut bisa melihat info kontak berikut ini. 
                    </p>
                    <button onClick={() => window.open('https://wa.me/6281392325553','')}>Booking Jadwal Sekarang!</button>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container" style={{borderRight:'1px solid #164A41', paddingRight:'5vh'}}>
                    <IoHome size={40} style={{marginLeft:'23vh'}}/>
                    <h3>ALAMAT</h3>
                    <p style={{color:'#164A41', fontWeight:'bold'}}>
                    Address: Jl. Gambiran Blawong No.RT 11, RT.11/RW.2, Bembem, Trimulyo, Kec. Jetis, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55781 
                    </p>
                </div>
                <div className="footer-container" style={{paddingTop:'7vh'}}>
                    <IoCall size={40} style={{marginLeft:'23vh'}}/>
                    <h3>KONTAK KAMI</h3>
                    <p style={{color:'#164A41', fontWeight:'bold'}}>
                        +62 813-9232-5553 
                    </p>
                </div>
            </div>
            <div className="footer2">
                <div className="tittle">
                    Sosial Media Wisata Rumah Jiwa
                </div>
                <div className="social-media">
                    <div className="socmed">
                        <a href='https://www.youtube.com/@rumahjiwa'><FaYoutube size={20} style={{marginRight:'1vh', color:'#4D774E'}}/>Rumah Jiwa</a>
                    </div>
                    <div className="socmed">
                        <a href='https://instagram.com/wisatarumahjiwa?igshid=MzRlODBiNWFlZA=='><FaInstagram size={20} style={{marginRight:'1vh', color:'#4D774E'}}/>Wisatarumahjiwa</a>
                    </div>
                    <div className="socmed">
                        <a href='https://www.tiktok.com/@rumahjiwahafara?_t=8ju4UNkxBoH&_r=1'><FaTiktok size={20} style={{marginRight:'1vh', color:'#4D774E'}}/>Rumahjiwahafara</a>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Footer