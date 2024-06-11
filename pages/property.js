import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image';
import styles from "../styles/Property.module.css";

const property = () => {
    return (
        <>
            <Navbar />
            {/* <!-- Property Images Section --> */}
            <section className={styles.propertyImagesSection}>
                <Image width={200} height={200} src="/images/new-house-min.png" alt="" className={styles.mainHouseImg} />
                <div className={styles.propertyMoreImages}>
                    <Image width={200} height={200} src="/images/about-us-home-2.png" alt="" />
                    <Image width={200} height={200} src="/images/about-us-home-2.png" alt="" />
                    <Image width={200} height={200} src="/images/about-us-home-2.png" alt="" />
                    <Image width={200} height={200} src="/images/about-us-home-2.png" alt="" />
                    <Image width={200} height={200} src="/images/about-us-home-2.png" alt="" />
                </div>
            </section>
            {/* <!-- Property Title Content Box --> */}
            <section className={styles.propertyTitleContentBox}>
                <div className={styles.contentTitleContentBox1}>
                    <p>Publish on 24 may 2024 at 08:45 am</p>
                    <h2>Appartement 2 piece 30 m@</h2>
                    <h4>1085 ccc</h4>
                    <p>2 piece - 30m - non meube -pair 10e</p>
                </div>
                <div className={styles.contentTitleContentBox2}>
                    <h3>AED 22,34,554</h3>
                    <button>Contact Us</button>
                </div>
            </section>

            {/* <!-- Amenities Content Box --> */}

            <section className={styles.amenitiesContentBox}>
                <ul>
                    <li className={styles.activeSelection}>Essentel</li>
                    <li>Carte</li>
                    <li>Visites</li>
                    <li>Agence</li>
                </ul>
                <div className={styles.amenitiesCardsBigBox}>
                    <div className={styles.aminitiesCardsBox}>
                        <p><span><i className="fa-solid fa-bed"></i></span>Multi Family</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>2 Bathrooms</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>1500 Sq Ft</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>3 Bedrooms</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>1 Garage</p>
                    </div>
                    <div className={styles.aminitiesCardsBox}>
                        <p><span><i className="fa-solid fa-bed"></i></span>Multi Family</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>2 Bathrooms</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>1500 Sq Ft</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>3 Bedrooms</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>1 Garage</p>
                    </div>
                    <div className={styles.aminitiesCardsBox}>
                        <p><span><i className="fa-solid fa-bed"></i></span>Multi Family</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>2 Bathrooms</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>1500 Sq Ft</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>3 Bedrooms</p>
                        <p><span><i className="fa-solid fa-bed"></i></span>1 Garage</p>
                    </div>
                </div>
            </section>

            {/* <!-- Description Section --> */}

            <section className={styles.descriptionContentBox}>
                <h3>Description</h3>
                <p>Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters.
                    Charming living area features fireplace and fabulous art deco details. Formal dining room.</p>
                <p>Kitchen with granite countertops, white cabinetry and stainless appliances. Lovely master bedroom has updated
                    bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic
                    oaks surround the free form pool and expansive patio, wet bar and grill.</p>
            </section>

            {/* <!-- Address Section --> */}

            <section className={styles.addressSection}>
                <div className={styles.addressTopContent}>
                    <h2>Address</h2>
                    <button className={styles.googleMapsBtn}><i className="fa-solid fa-location-dot"></i>Open On Google Maps</button>
                </div>
                <div className={styles.addressBottomContentBox}>
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Address</span><span>10425 Tabor St</span></p>
                        <p><span className={styles.darkText}>City</span><span>Los Angeles</span></p>
                        <p><span className={styles.darkText}>State/Country</span><span>California</span></p>
                    </div>
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Zip/Postal Code</span><span>90034</span></p>
                        <p><span className={styles.darkText}>Area</span><span>Brookside</span></p>
                        <p><span className={styles.darkText}>Country</span><span>United States</span></p>
                    </div>
                </div>
            </section>

            {/* <!-- Floor Plan Section --> */}

            <section className={styles.floorPlanSection}>
                <h2>Floor Plan</h2>
                <Image width={200} height={200} src="/images/floor-plan-img.png" alt="" />
            </section>

            {/* <!-- Google Maps Section --> */}

            <section className={styles.googleMapsSection}>
                <h2>Location</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.1353252701656!2d75.77526107587087!3d26.962613576617418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42aef78fb948e4ab%3A0x1935463d9171cfa!2sSwipeconnect%20Cybersecurity!5e0!3m2!1sen!2sin!4v1717758451689!5m2!1sen!2sin"
                    width="600" height="450" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

            {/* <!-- Owner Details Section --> */}

            <section className={styles.ownerDetailsBox}>
                <div className={styles.ownerDetailBox1}>
                    <h3>Owner Details</h3>
                    <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                    <h4>NITIN</h4>
                    <p>Agent</p>
                    <button>Contact Number</button>
                </div>
                <div className={styles.ownerDetailBox2}>
                    <h3>Send Enquiry To Agent</h3>
                    <form action="">
                        <div className={styles.radioBox}>
                            <p>You Are</p>
                            <input type="radio" name="dealer" id="" checked />
                            <label for="">Individual</label>
                            <input type="radio" name="dealer" id="" />
                            <label for="">Dealer</label>
                        </div>

                        <label for="">Your Name</label>
                        <input type="text" placeholder="Enter Name" />
                        <label for="">Your Email</label>
                        <input type="text" placeholder="Enter Email" />
                        <label for="">Your Phone Number</label>
                        <input type="text" placeholder="Enter Phone Number" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>

            {/* <!-- Reviews Section --> */}

            <section className={styles.reviewsSection}>
                <h2>Property Reviews</h2>
                <div className={styles.ratingsBox}>
                    <div className={styles.ratingsUpperContentBox}>
                        <div className={styles.ratingsUpperUserDetailBox}>
                            <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                            <div className={styles.ratingsUpperContent}>
                                <h4>Aman Sharma</h4>
                                <p>Property Agent</p>
                            </div>
                        </div>
                        <Image width={200} height={200} src="/images/star.png" alt="" className={styles.starImg} />
                    </div>
                    <p className={styles.reviewsPara}>Enchanting three bedroom, three bath home with spacious one bedroom, one bath
                        cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal
                        dining room. Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana,
                        in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining
                        room.</p>
                </div>
                <div className={styles.ratingsBox}>
                    <div className={styles.ratingsUpperContentBox}>
                        <div className={styles.ratingsUpperUserDetailBox}>
                            <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                            <div className={styles.ratingsUpperContent}>
                                <h4>Piyush Singh</h4>
                                <p>Property Dealer</p>
                            </div>
                        </div>
                        <Image width={200} height={200} src="/images/star.png" alt="" className={styles.starImg} />
                    </div>
                    <p className={styles.reviewsPara}>Enchanting three bedroom, three bath home with spacious one bedroom, one bath
                        cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal
                        dining room. Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana,
                        in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining
                        room.</p>
                </div>
                {/* <!-- Leave A Review Section --> */}
                <div className={styles.addCommentBox}>
                    <h3>Leave A Review</h3>
                    <form action="">
                        <label for="" className={styles.commentLabel}>Your Rating</label>
                        <div className={styles.starRating}>
                            <input type="radio" id="5-stars" name="rating" value="5" />
                            <label for="5-stars" className={styles.star}>&#9733;</label>
                            <input type="radio" id="4-stars" name="rating" value="4" />
                            <label for="4-stars" className={styles.star}>&#9733;</label>
                            <input type="radio" id="3-stars" name="rating" value="3" />
                            <label for="3-stars" className={styles.star}>&#9733;</label>
                            <input type="radio" id="2-stars" name="rating" value="2" />
                            <label for="2-stars" className={styles.star}>&#9733;</label>
                            <input type="radio" id="1-star" name="rating" value="1" />
                            <label for="1-star" className={styles.star}>&#9733;</label>
                        </div>
                        <label for="" className={styles.commentLabel}>Your Comment</label>
                        <textarea name="" id="" rows="6"></textarea>
                        <label for="" className={styles.commentLabel}>Your Name</label>
                        <input type="text" />
                        <label for="" className={styles.commentLabel}>Your Email</label>
                        <input type="text" />
                        <input type="submit" value="Submit Review" />
                    </form>
                </div>
            </section>

            {/* <!-- Latest Properties Section --> */}

            <section className={styles.latestPropertiesSection}>
                <h2>Similar Properties</h2>
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
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default property