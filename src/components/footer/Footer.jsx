import styles from "./Footer.module.css";

function Footer() {
    return (<>

        <div className={`${styles.footer} `}>
            <div className="container ">
                <div className="flex justify-between">
                    <div className="flex">
                        <div>
                            <img className="w-[300px]" src="https://rec-data.kalibrr.com/www.kalibrr.com/logos/D2JV4H4VV8JXWGF39KAXUEBGHP4CA9SPG2GAHLEU-654b3e3c.png"></img>
                        </div>
                    </div>

                    <div className="flex gap-10">
                        <div className="w-[400px]">
                            <h6 className="font-bold ">About Us</h6>
                            <p className="text-sm">
                                Established in 2017 as part of PT. Square Techno Indonesia, then evolved into PT.
                                Enigma Cipta Humanika in August 2019. We specialized in IT Bootcamp and Talent
                                Management, offering two key programs: Talent as a Service and Training as a Service.
                                Our mission is to empower software engineers to support your business.
                            </p>
                        </div>
                        <div className="w-[400px] flex flex-col gap-5">
                            <div>
                                <h6 className="font-bold">Location</h6>
                                <p className="text-sm">Jl. H. Dahlan No.75, RT.8/RW.4, Ragunan, Ps. Minggu, Kota Jakarta Selatan,
                                    Daerah Khusus Ibukota Jakarta 12550</p>
                            </div>
                            <div>
                                <h6 className="font-bold">Phone</h6>
                                <p className="text-sm">(021) 27806212</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr className="mt-[10px]"/>
            <p className="flex items-center bg-[#FFFFFF] justify-center h-[50px] mt-[2px]">Aniversaros Enigmos © 2024 | All rights reserved</p>
        </div>
    </>)


}

//https://penerbitdeepublish.com/wp-content/uploads/2021/08/PROMO-MERDEKA.png

//https://rec-data.kalibrr.com/www.kalibrr.com/logos/D2JV4H4VV8JXWGF39KAXUEBGHP4CA9SPG2GAHLEU-654b3e3c.png

export default Footer