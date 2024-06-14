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
                    <label for="">Type</label>
                        {/* <select name="" id="">
                            <option value="">Rent</option>
                            <option value="">Buy</option>
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
                            <option value="">Property Type</option>
                            <option value="">Villa</option>
                            <option value="">Bungalow</option>
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
                            <option value="">Beds</option>
                            <option value="">1+</option>
                            <option value="">2+</option>
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
                            <option value="">10 Lakh</option>
                            <option value="">50 Lakh</option>
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