import React from 'react'
import '../style/Landing.css'
import {IoPlayCircleOutline} from 'react-icons/io5'

const OpenVideo = () => {
  window.open("https://youtu.be/WHq4Krz-VmM?si=kdDh2gSdn2S-qfaU");
}

const About=()=> {
  return (
    <>
         <div id='about' className="about-container">
            <div className="about1">
                <div className="about-pic1">
                    <img src="./images/about2.jpeg" alt="" />
                </div>
                
            </div>
            <div className="about2">
                <h2>Apa Itu <br /><span style={{color:'#164A41'}}> Wisata Rumah Jiwa Yogyakarta </span></h2>
                <p>
                    Wisata Rumah Jiwa adalah wisata yang dikemas dengan konsep wisata sosial dan edukasi, berlokasi di Panti Hafara.
                    <br />
                    Panti Hafara didirikan pada tahun 2005 oleh Chabib Wibowo, yang masa mudahnya dihabiskan di jalanan.
                    Sebuah titik balik membuat dirinya ingin berubah. Saat itu, ada ratusan anak jalanan yang bergabung dan berniat 
                    untuk sembuh dari kebiasaan negatif, serta ingin melanjutkan hidup dengan meraih penghidupan yang lebih baik.
                </p>
                <p>
                  Sampai sekarang, Panti Hafara menjadi pondok bagi orang dengan gangguan jiwa "ODGJ", lansia terlantar, mantan pengguna narkoba,
                  dan adik-adik yatim piatu. Pada beberapa kesempatan, Panti Hafara diberi kepercayaan untuk menyampaikan sumbangan bagi kaum dhuafa,
                  juga menangani pemakaman jenazah terlantar yang tidak diketahui asal-usulnya.
                </p>
                <p>
                  Wisata Rumah Jiwa hadir untuk mengedukasi masyarakat, sekaligus memenuhi kebutuhan warga dampingan untuk bersosialisasi dengan masyarakat umum.
                  Interaksi diperlukan untuk mempersiapkan warga dampingan agar bisa beradaptasi saat kembali ke lingkungan keluarga dan masyarakat.
                </p>
                <button onClick={OpenVideo} style={{fontSize:'15px', fontWeight:'bold', paddingBottom:'3px'}}>Sejarah Wisata Rumah Jiwa <IoPlayCircleOutline size={18}  style={{marginLeft:'1vh'}}/></button>
            </div>
        </div>
    </>
  )
}

export default About