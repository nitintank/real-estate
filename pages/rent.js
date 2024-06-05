import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Rent.module.css";
import Image from 'next/image';

const rent = () => {
    return (
        <>
            <Navbar />
            {/* <!-- Top Introduction Box --> */}

            <section className={styles.topIntroductionBox}>
                <div className={styles.topIntroInnerBox1}>
                    <h2>Properties For Rent</h2>
                    <p>Find the prefect property for rent</p>
                </div>
                <div className={styles.topIntroInnerBox2}>
                    <Image width={200} height={200} src="/images/orange-house.png" alt="" priority={true} />
                </div>
                <div className={styles.searchBiggerBox}>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Rent</option>
                            <option value="">Buy</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Property Type</option>
                            <option value="">Villa</option>
                            <option value="">Bungalow</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Beds</option>
                            <option value="">1+</option>
                            <option value="">2+</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Price</option>
                            <option value="">10 Lakh</option>
                            <option value="">50 Lakh</option>
                        </select>
                    </div>
                    <div className={`${styles.formBox} ${styles.flexEnd}`}>
                        <button><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                    </div>
                </div>
            </section>

            {/* <!-- Latest Properties Section --> */}

            <section className={styles.latestPropertiesSection}>
                <p>DUBAI REAL ESTATE</p>
                <h2>Latest Properties</h2>
                <div className={styles.latestPropertiesBigBox}>
                    <div className={styles.latestPropertiesInnerBox}>
                        <Image width={200} height={200} src="/images/property-1.webp" alt="" />
                        <div className={styles.latestPropertiesContentBox}>
                            <p className={styles.miniText}>Apartment, Sales</p>
                            <h3>Luxury 6 Bed Mansion In Jumeria</h3>
                            <p className={styles.priceText}>AED 10,0000</p>
                            <p className={styles.propertyDescription}>Beautiful, updated, ground floor Co-op apartment in the desirable
                                bay terrace neighborhood....</p>
                            <div className={styles.innerPropertyContent}>
                                <p><i className="fa-solid fa-bed"></i> 5</p>
                                <p><i className="fa-solid fa-shower"></i> 5</p>
                                <p><i className="fa-solid fa-maximize"></i> 29,000ft</p>
                                <p><i className="fa-solid fa-car"></i> 2 Cars</p>
                                <p><i className="fa-solid fa-up-right-from-square"></i> 600ft</p>
                            </div>
                            <hr />
                            <div className={styles.innerButtonBox}>
                                <button><i className="fa-solid fa-phone"></i> Call</button>
                                <button><i className="fa-solid fa-envelope"></i> Email</button>
                                <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.latestPropertiesInnerBox}>
                        <Image width={200} height={200} src="/images/property-2.webp" alt="" />
                        <div className={styles.latestPropertiesContentBox}>
                            <p className={styles.miniText}>Apartment, Sales</p>
                            <h3>Luxury 6 Bed Mansion In Jumeria</h3>
                            <p className={styles.priceText}>AED 10,0000</p>
                            <p className={styles.propertyDescription}>Beautiful, updated, ground floor Co-op apartment in the desirable
                                bay terrace neighborhood....</p>
                            <div className={styles.innerPropertyContent}>
                                <p><i className="fa-solid fa-bed"></i> 5</p>
                                <p><i className="fa-solid fa-shower"></i> 5</p>
                                <p><i className="fa-solid fa-maximize"></i> 29,000ft</p>
                                <p><i className="fa-solid fa-car"></i> 2 Cars</p>
                                <p><i className="fa-solid fa-up-right-from-square"></i> 600ft</p>
                            </div>
                            <hr />
                            <div className={styles.innerButtonBox}>
                                <button><i className="fa-solid fa-phone"></i> Call</button>
                                <button><i className="fa-solid fa-envelope"></i> Email</button>
                                <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.latestPropertiesInnerBox}>
                        <Image width={200} height={200} src="/images/property-1.webp" alt="" />
                        <div className={styles.latestPropertiesContentBox}>
                            <p className={styles.miniText}>Apartment, Sales</p>
                            <h3>Luxury 6 Bed Mansion In Jumeria</h3>
                            <p className={styles.priceText}>AED 10,0000</p>
                            <p className={styles.propertyDescription}>Beautiful, updated, ground floor Co-op apartment in the desirable
                                bay terrace neighborhood....</p>
                            <div className={styles.innerPropertyContent}>
                                <p><i className="fa-solid fa-bed"></i> 5</p>
                                <p><i className="fa-solid fa-shower"></i> 5</p>
                                <p><i className="fa-solid fa-maximize"></i> 29,000ft</p>
                                <p><i className="fa-solid fa-car"></i> 2 Cars</p>
                                <p><i className="fa-solid fa-up-right-from-square"></i> 600ft</p>
                            </div>
                            <hr />
                            <div className={styles.innerButtonBox}>
                                <button><i className="fa-solid fa-phone"></i> Call</button>
                                <button><i className="fa-solid fa-envelope"></i> Email</button>
                                <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.latestPropertiesInnerBox}>
                        <Image width={200} height={200} src="/images/property-2.webp" alt="" />
                        <div className={styles.latestPropertiesContentBox}>
                            <p className={styles.miniText}>Apartment, Sales</p>
                            <h3>Luxury 6 Bed Mansion In Jumeria</h3>
                            <p className={styles.priceText}>AED 10,0000</p>
                            <p className={styles.propertyDescription}>Beautiful, updated, ground floor Co-op apartment in the desirable
                                bay terrace neighborhood....</p>
                            <div className={styles.innerPropertyContent}>
                                <p><i className="fa-solid fa-bed"></i> 5</p>
                                <p><i className="fa-solid fa-shower"></i> 5</p>
                                <p><i className="fa-solid fa-maximize"></i> 29,000ft</p>
                                <p><i className="fa-solid fa-car"></i> 2 Cars</p>
                                <p><i className="fa-solid fa-up-right-from-square"></i> 600ft</p>
                            </div>
                            <hr />
                            <div className={styles.innerButtonBox}>
                                <button><i className="fa-solid fa-phone"></i> Call</button>
                                <button><i className="fa-solid fa-envelope"></i> Email</button>
                                <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default rent