import React from 'react'

const Product=()=> {
  return (
   <>
    <section id='product' className='product-container'>
        <div className="title">
            <h2>PRODUK YANG KAMI TAWARKAN</h2> 
            <hr className='horizontal-line'/>
        </div>
        <p style={{marginLeft:'5vh', width:'25%', textAlign:'left', color:'#164A41'}}>Berikut merupakan beberapa produk yang ditawarkan oleh Wisata Rumah Jiwa Yogyakarta </p>

        <div className="card-container">
            <div className="card">
                <img src="./images/jalu.JPG" alt="jalu" style={{height:'25vh', borderRadius:'10px'}} />
                <h4 style={{textAlign:'center'}}>Keripik Jamur Lunas</h4>
                <hr />
                <p style={{textAlign:'center', fontSize:'13px'}}>
                Memiliki cita rasa gurih dan renyah dengan sedikit rasa manis dari jamur yang telah dikaramelisasi selama proses pemanggangan.
                Keripik Jamur Lunas juga dapat disajikan dengan berbagai bumbu dan rempah tambahan.
                <span style={{fontWeight:'bold'}}><br /><br />Rp. 20.000 </span>
                </p>
            </div>
            <div className="card">
                <img src="./images/batik.jpeg" alt="batik" style={{height:'25vh', borderRadius:'10px'}}/>
                <h4 style={{textAlign:'center'}}>Batik Sibori</h4>
                <hr />
                <p style={{textAlign:'center', fontSize:'13px'}}>
                Batik Sibori merupakan karya seni yang dibuat oleh teman-teman ODGJ di Panti Hafara, Kereativitas dalam lipatan dan ikatan sebelum
                proses pewarnaan menghasilkan pola yang menakjubkan.
                <span style={{fontWeight:'bold'}}><br /><br />Rp. 50.000 </span>
                </p>
            </div>
            <div className="card">
                <img src="./images/kopi.jpeg" alt="kopi" style={{height:'25vh', borderRadius:'10px'}}/>
                <h4 style={{textAlign:'center'}}>Kopi Blenk Tiyunke</h4>
                <hr />
                <p style={{textAlign:'center', fontSize:'13px'}}>
                Kopi Tiyunke merupakan perpaduan biji kopi berkualitas tinggi yang dipilih secara teliti oleh petani-petani terbaik, setiap cangkirnya menghadirkan aroma yang memikat dan mengundang selera.

                <span style={{fontWeight:'bold'}}><br /><br />Rp. 35.000 </span>
                </p>
            </div>
            <div className="card">
                <img src="./images/gule2.jpeg" alt="gula" style={{height:'25vh', borderRadius:'10px'}} />
                <h4 style={{textAlign:'center'}}>Gula Putri Satu Tujuh</h4>
                <hr />
                <p style={{textAlign:'center', fontSize:'13px'}}>
                Gula Putri Satu Tuju merupakan gula kristal yang terkenal dengan kualitas yang premium dan konsistensi butirannya yang halus. 
                Gula ini diproduksi dengan menggunakan tebu pilihan .
                <span style={{fontWeight:'bold'}}><br /><br />Rp. 18.000 </span>
                </p>
            </div>
        </div>
        <div class="benefit-bottom-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </section>
   </>
  )
}

export default Product