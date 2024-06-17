import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/AgentDetail.module.css";
import Image from 'next/image';

const agentDetail = () => {
    return (
        <>
            <Navbar />
            {/* <!-- Agent Card Box Section --> */}
            <section className={styles.agentCardBox}>
                <div className={styles.agentDetailBox1}>
                    <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                </div>
                <div className={styles.agentDetailBox2}>
                    <h3>Ali Tufan</h3>
                    <p className={styles.agentAboutPara}>Company Agent at The James Estate Agents</p>
                    <div className={styles.agentOtherDetailsBox}>
                        <p><span>Address:</span> 560 3rd Ave, New York,</p>
                        <p><span>Office Phone:</span> +7778889992</p>
                        <p><span>Mobile Phone:</span> +7778889992</p>
                        <p><span>Address:</span> 560 3rd Ave, New York,</p>
                    </div>
                    <div className={styles.agentSocialMedia}>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </section>

            {/* <!-- About Agent Box --> */}
            <section className={styles.agentAboutBox}>
                <h3>About Ali Tufan</h3>
                <p>Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters.
                    Charming living area features fireplace and fabulous art deco details. Formal dining room.</p>
                <p>Remodeled kitchen with granite countertops, white cabinetry and stainless appliances. Lovely master bedroom
                    has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful
                    backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill.</p>
            </section>

            {/* <!-- Track Record Section --> */}

            <section className={styles.trackRecordSection}>
                <h3>Track Record</h3>
                <p>Transactions submitted by agent to Property Finder</p>
                <div className={styles.trackRecordContentBox}>
                    <div className={styles.trackRecordContent}>
                        <h4>39</h4>
                        <p>Closed Deal</p>
                    </div>
                    <div className={styles.trackRecordContent}>
                        <h4>4 <span>Sale</span> 35 <span>Rent</span></h4>
                        <p>Deal Type</p>
                    </div>
                    <div className={styles.trackRecordContent}>
                        <h4>7.4M <span>AED</span></h4>
                        <p>Rent Total Deal Value</p>
                    </div>
                    <div className={styles.trackRecordContent}>
                        <h4>17.9M <span>AED</span></h4>
                        <p>Sale Total Deals Value</p>
                    </div>
                </div>
            </section>

            {/* <!-- Latest Properties Section --> */}

            <section className={styles.latestPropertiesSection}>
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

            {/* <!-- Contact Me Section --> */}

            <section className={styles.contactMeSection}>
                <h3>Contact Me</h3>

                <div className={styles.contactMeFormBigBox}>
                    <div className={styles.contactMeForm1}>
                        <form action="">
                            <label for="">Name</label>
                            <input type="text" placeholder="Enter Name" />
                            <label for="">Phone</label>
                            <input type="text" placeholder="Enter Phone" />
                            <label for="">Email</label>
                            <input type="text" placeholder="Enter Email" />
                            <label for="">Message</label>
                            <input type="text" placeholder="Enter Message" />
                            <input type="submit" value="Send Message" />
                        </form>
                    </div>
                    <div className="contact-me-form-2">
                        <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                        <button><i className="fa-solid fa-phone"></i> Call</button>
                        <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
                    </div>
                </div>

            </section>

            {/* <!-- Reviews Section --> */}

            <section className="reviews-section">
                <h2>Property Reviews</h2>
                <div className="ratings-box">
                    <div className="ratings-upper-content-box">
                        <div className="ratings-upper-user-detail-box">
                            <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                            <div className="ratings-upper-content">
                                <h4>Aman Sharma</h4>
                                <p>Property Agent</p>
                            </div>
                        </div>
                        <Image width={200} height={200} src="/images/star.png" alt="" className="star-img" />
                    </div>
                    <p className="reviews-para">Enchanting three bedroom, three bath home with spacious one bedroom, one bath
                        cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal
                        dining room. Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana,
                        in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining
                        room.</p>
                </div>
                <div className="ratings-box">
                    <div className="ratings-upper-content-box">
                        <div className="ratings-upper-user-detail-box">
                            <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                            <div className="ratings-upper-content">
                                <h4>Piyush Singh</h4>
                                <p>Property Dealer</p>
                            </div>
                        </div>
                        <Image width={200} height={200} src="/images/star.png" alt="" className="star-img" />
                    </div>
                    <p className="reviews-para">Enchanting three bedroom, three bath home with spacious one bedroom, one bath
                        cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal
                        dining room. Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana,
                        in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining
                        room.</p>
                </div>
                {/* <!-- Leave A Review Section --> */}
                <div className="add-comment-box">
                    <h3>Leave A Review</h3>
                    <form action="">
                        <label for="" className="comment-label">Your Rating</label>
                        <div className="star-rating">
                            <input type="radio" id="5-stars" name="rating" value="5" />
                            <label for="5-stars" className="star">&#9733;</label>
                            <input type="radio" id="4-stars" name="rating" value="4" />
                            <label for="4-stars" className="star">&#9733;</label>
                            <input type="radio" id="3-stars" name="rating" value="3" />
                            <label for="3-stars" className="star">&#9733;</label>
                            <input type="radio" id="2-stars" name="rating" value="2" />
                            <label for="2-stars" className="star">&#9733;</label>
                            <input type="radio" id="1-star" name="rating" value="1" />
                            <label for="1-star" className="star">&#9733;</label>
                        </div>
                        <label for="" className="comment-label">Your Comment</label>
                        <textarea name="" id="" rows="6"></textarea>
                        <label for="" className="comment-label">Your Name</label>
                        <input type="text" />
                        <label for="" className="comment-label">Your Email</label>
                        <input type="text" />
                        <input type="submit" value="Submit Review" />
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default agentDetail