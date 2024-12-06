import React, { useEffect } from 'react'
import '../style/Navbar-style.css'
import $ from 'jquery'


const Navbar=() => {

  useEffect(() => {
    $('.menu-link').click(function(e){
      e.preventDefault();
      var target= $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 100); //durasi scroll semakin banyak semakin lambat
      
        //menghapus kelas 'active'
        $('.menu-link').removeClass('active');

        //class active
        $(this).addClass('active');
    });
  },[]);

  useEffect(() => {
    // Mengatur scroll menjadi smooth
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return(
    <>
         <div className="Navbar-Container">
        <ul>
            <img src="./logo/hafara-logo1.png" alt="" />
            <li><a className="menu-link" href="#hero">HOME</a></li>
            <li><a className="menu-link" href="#about">ABOUT</a></li>
            <li><a className="menu-link" href="#benefit">KEGIATAN</a></li>
            <li><a className="menu-link" href="#product">PRODUCT</a></li>
            <li><a className="menu-link" href="#tujuan">TUJUAN</a></li>
            <li><a className="menu-link" href="#donation">CONTACT</a></li>
            <button onClick={() => window.open('https://wa.me/6281392325553','')}>Donasi Di Sini</button>
        </ul>
        </div>
    </>
  )
}

export default Navbar
//62 813-9232-5553