import React from 'react'
import '../style/Landing.css'

const Tujuan=()=> {
  return (
    <>
        <section id='tujuan' className='tujuan-container'>
            <div className="tujuan-title" style={{marginBottom:'10vh', textAlign:'center'}}>
                <h2 style={{fontSize:'30px'}}><span style={{color:'#164A41', }}>Wisata Rumah Jiwa</span> Ini Bertujuan</h2>
                </div>
        
                <div className="isi-container">
                    <div className="isi">
                        <img src="./icons/icon1.png" alt="icon1" />
                        <p>
                            Mengubah mindset mengenai pandangan panti yang hanya bisa meminta sumbangan saja
                        </p>
                    </div>
                    <div className="isi">
                        <img src="./icons/icon2.png" alt="icon1" />
                        <p>
                            Memberikan rasa kepercayaan diri lebih kepada dampingan
                        </p>
                    </div>
                    <div className="isi">
                        <img src="./icons/icon3.png" alt="icon1" />
                        <p>
                            Membentuk keluarga harmonis, mendidik anak jadi cerdas & belajar memanusiakan manusia
                        </p>
                    </div>
                </div>
                <div className="isi-container">
                    <div className="isi">
                        <img src="./icons/icon4.png" alt="icon1" />
                        <p>
                            Dengan adanya WRJ ini kami memperkenalkan potensi yang ada di dampingi Panti Hafara
                        </p>
                    </div>
                    <div className="isi">
                        <img src="./icons/icon5.png" alt="icon1" />
                        <p>
                            Memperkenalkan karya dampingan Hafara Batik Sibori
                        </p>
                    </div>
                    <div className="isi">
                        <img src="./icons/icon6.png" alt="icon1" />
                        <p>
                            Menjadi salah satu tempat healing yang bisa berinteraksi dengan Opa, Oma dan ODGJ
                        </p>
                    </div>
                </div>

                <div class="tujuan-top-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
        </section>
    </>
  )
}

export default Tujuan