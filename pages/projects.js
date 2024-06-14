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
                        <label for="">Location</label>
                        <input type="text" placeholder="Enter An Address, City Or Zip Code" />
                    </div>
                    <div className={styles.formBox}>
                        <label for="">Type</label>
                        {/* <select name="" id="">
                            <option value="">Property Type</option>
                            <option value="">Rentals</option>
                            <option value="">Sales</option>
                        </select> */}
                        <div className={styles.selectBox}>
                            <div className={styles.selectBox__current} tabindex="1">
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="0" value="1" name="Ben" />
                                    <p className={styles.selectBox__inputText}>Rentals</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="1" value="2" name="Ben" defaultChecked={true} />
                                    <p className={styles.selectBox__inputText}>Sales</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="2" value="3" name="Ben" />
                                    <p className={styles.selectBox__inputText}>Sold</p>
                                </div>
                                <img className={styles.selectBox__icon} src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                            </div>
                            <ul className={styles.selectBox__list}>
                                <li>
                                    <label className={styles.selectBox__option} for="0" aria-hidden="aria-hidden">Rentals</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="1" aria-hidden="aria-hidden">Sales</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="2" aria-hidden="aria-hidden">Sold</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.formBox}>
                        <label for="">Status</label>
                        {/* <select name="" id="">
                            <option value="">Property Status</option>
                            <option value="">Apartments</option>
                            <option value="">Houses</option>
                            <option value="">Villas</option>
                            <option value="">Duplexes</option>
                        </select> */}
                        <div className={styles.selectBox}>
                            <div className={styles.selectBox__current} tabindex="1">
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="5" value="4" name="Ben1" />
                                    <p className={styles.selectBox__inputText}>Apartments</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="6" value="5" name="Ben1" defaultChecked={true} />
                                    <p className={styles.selectBox__inputText}>Houses</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="7" value="6" name="Ben1" />
                                    <p className={styles.selectBox__inputText}>Villas</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="8" value="7" name="Ben1" />
                                    <p className={styles.selectBox__inputText}>Duplexes</p>
                                </div>
                                <Image width={100} height={100} className={styles.selectBox__icon} src="/images/arrow.svg" alt="Arrow Icon" aria-hidden="true" />
                            </div>
                            <ul className={styles.selectBox__list}>
                                <li>
                                    <label className={styles.selectBox__option} for="5" aria-hidden="aria-hidden">Apartments</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="6" aria-hidden="aria-hidden">Houses</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="7" aria-hidden="aria-hidden">Villas</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="8" aria-hidden="aria-hidden">Duplexes</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.formBox}>
                        <label for="">Category</label>
                        {/* <select name="" id="">
                            <option value="">For Sale</option>
                            <option value="">Apartments</option>
                            <option value="">Houses</option>
                            <option value="">Villas</option>
                            <option value="">Duplexes</option>
                        </select> */}
                        <div className={styles.selectBox}>
                            <div className={styles.selectBox__current} tabindex="1">
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="9" value="8" name="Ben2" />
                                    <p className={styles.selectBox__inputText}>Apartments</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="10" value="9" name="Ben2" />
                                    <p className={styles.selectBox__inputText}>Houses</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="11" value="10" name="Ben2" defaultChecked={true} />
                                    <p className={styles.selectBox__inputText}>Villas</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="12" value="11" name="Ben2" />
                                    <p className={styles.selectBox__inputText}>Duplexes</p>
                                </div>
                                <Image width={100} height={100} className={styles.selectBox__icon} src="/images/arrow.svg" alt="Arrow Icon" aria-hidden="true" />
                            </div>
                            <ul className={styles.selectBox__list}>
                                <li>
                                    <label className={styles.selectBox__option} for="9" aria-hidden="aria-hidden">Apartments</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="10" aria-hidden="aria-hidden">Houses</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="11" aria-hidden="aria-hidden">Villas</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="12" aria-hidden="aria-hidden">Duplexes</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.formBox}>
                        <label for="">Price</label>
                        {/* <select name="" id="">
                            <option value="">Price</option>
                            <option value="">Apartments</option>
                            <option value="">Houses</option>
                            <option value="">Villas</option>
                            <option value="">Duplexes</option>
                        </select> */}
                        <div className={styles.selectBox}>
                            <div className={styles.selectBox__current} tabindex="1">
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="13" value="12" name="Ben3" />
                                    <p className={styles.selectBox__inputText}>Apartments</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="14" value="13" name="Ben3" />
                                    <p className={styles.selectBox__inputText}>Houses</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="15" value="14" name="Ben3" />
                                    <p className={styles.selectBox__inputText}>Villas</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="16" value="15" name="Ben3" defaultChecked={true} />
                                    <p className={styles.selectBox__inputText}>Duplexes</p>
                                </div>
                                <Image width={100} height={100} className={styles.selectBox__icon} src="/images/arrow.svg" alt="Arrow Icon" aria-hidden="true" />
                            </div>
                            <ul className={styles.selectBox__list}>
                                <li>
                                    <label className={styles.selectBox__option} for="13" aria-hidden="aria-hidden">Apartments</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="14" aria-hidden="aria-hidden">Houses</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="15" aria-hidden="aria-hidden">Villas</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="16" aria-hidden="aria-hidden">Duplexes</label>
                                </li>
                            </ul>
                        </div>
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
                    <Image width={200} height={200} src="/images/android-phone-blue.png" alt="" />
                </div>
            </section>

            {/* <!-- Footer Section --> */}

            <Footer />
        </>
    )
}

export default projects