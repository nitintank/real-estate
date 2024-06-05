import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Projects.module.css";
import Image from 'next/image';

const projects = () => {
    return (
        <>
            <Navbar />

            {/* <!-- Top Introduction Box --> */}

            <section className={styles.topIntroductionBox}>
                <div className={styles.topIntroInnerBox1}>
                    <p>POPULAR AREAS</p>
                    <h2>Explore Most Popular Areas</h2>
                </div>
                <div className={styles.topIntroInnerBox2}>
                    <Image width={200} height={200} src="/images/new-building-png.png" alt="" priority={true} />
                </div>
                <div className={styles.searchBiggerBox}>
                    <div className={styles.formBox}>
                        <input type="text" placeholder="Enter An Address, City Or Zip Code" />
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Property Type</option>
                            <option value="">Rentals</option>
                            <option value="">Sales</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Property Status</option>
                            <option value="">Apartments</option>
                            <option value="">Houses</option>
                            <option value="">Villas</option>
                            <option value="">Duplexes</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">For Sale</option>
                            <option value="">Apartments</option>
                            <option value="">Houses</option>
                            <option value="">Villas</option>
                            <option value="">Duplexes</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Price</option>
                            <option value="">Apartments</option>
                            <option value="">Houses</option>
                            <option value="">Villas</option>
                            <option value="">Duplexes</option>
                        </select>
                    </div>
                    <div className={`${styles.formBox} ${styles.flexEnd}`}>
                        <button><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                    </div>
                </div>
            </section>

            {/* <!-- Main Section --> */}

            <section className={styles.mainSection}>
                <div className={styles.mainSectionBox1}>
                    <p>POPULAR AREAS</p>
                    <h3>Recent Projects</h3>

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
                </div>
                <div className={styles.mainSectionBox2}>
                    <h3>Locations</h3>
                    <p>FIND YOUR PLACE</p>
                    <Image width={200} height={200} src="/images/property-location.png" alt="" />
                </div>
            </section>

            {/* <!-- Download Android App Section --> */}

            <section className={styles.downloadAndroidAppSection}>
                <div className={styles.downloadAndroidBox1}>
                    <h3>Download Our Mobile App</h3>
                    <p>and never miss out any update</p>
                    <ul>
                        <li>Get to know about newly posted properties as soon as they are posted</li>
                        <li>Manage your properties with ease and get instant alerts about responses</li>
                    </ul>
                    <Image width={200} height={200} src="/images/android-apk.png" alt="" className={styles.androidDownloadBtn} />
                </div>
                <div className={styles.downloadAndroidBox2}>
                    <Image width={200} height={200} src="/images/android-phone.png" alt="" />
                </div>
            </section>

            {/* <!-- Footer Section --> */}

            <Footer />
        </>
    )
}

export default projects