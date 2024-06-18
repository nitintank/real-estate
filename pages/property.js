import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import styles from "../styles/Property.module.css";
import Link from 'next/link';

const property = () => {
    const router = useRouter();
    const { id } = router.query;
    const [propertyDetails, setPropertyDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [reviewForm, setReviewForm] = useState({
        rating: '',
        comment: '',
        name: ''
    });

    useEffect(() => {
        if (id) {
            fetchPropertyDetails(id);
        }
    }, [id]);

    const fetchPropertyDetails = async (propertyId) => {
        try {
            const response = await fetch(`https://a.khelogame.xyz/property/${propertyId}`)

            if (response.ok) {
                const data = await response.json();
                setPropertyDetails(data);
                setLoading(false);
                console.log(data)
                console.log(data.media_path)
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReviewForm({ ...reviewForm, [name]: value });
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://a.khelogame.xyz/property/${id}/review`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rating: parseInt(reviewForm.rating),
                    comment: reviewForm.comment,
                    name: reviewForm.name
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Optionally, update UI to reflect the new review (if needed)
                console.log('Review added successfully:', data);
                // Reset form fields
                setReviewForm({
                    rating: '',
                    comment: '',
                    name: ''
                });
                // You may want to fetch property details again to update reviews list
                fetchPropertyDetails(id);
            } else {
                const errorData = await response.json();
                console.error('Error adding review:', errorData.error);
                // Handle error (e.g., show error message to user)
            }
        } catch (error) {
            console.error('Error adding review:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <>
            <Navbar />
            <section className={styles.propertyImagesSection}>
                {/* Main property image */}
                <Image
                    width={600}
                    height={400}
                    src={`https://a.khelogame.xyz/${propertyDetails.media_path}`}
                    
                    alt="Property Image"
                    className={styles.mainHouseImg}
                />
                {/* Additional property images */}
                {/* <div className={styles.propertyMoreImages}>
                    {propertyDetails.media_paths && propertyDetails.media_paths.map((path, index) => (
                        <Image
                            key={index}
                            width={200}
                            height={200}
                            src={`/${path}`}  
                            alt={`Property Image ${index + 1}`}
                        />
                    ))}
                </div> */}
            </section>

            <section className={styles.propertyTitleContentBox}>
                <div className={styles.contentTitleContentBox1}>
                    <p>Publish on {propertyDetails.created_at.substring(0, 10)}</p>
                    <h2>{propertyDetails.property_name}</h2>
                    <h4>{propertyDetails.property_type}, {propertyDetails.property_categories}</h4>
                    <p>{propertyDetails.city}</p>
                </div>
                <div className={styles.contentTitleContentBox2}>
                    <h3>{propertyDetails.price}</h3>
                    <button>Contact Us</button>
                </div>
            </section>

            <section className={styles.amenitiesContentBox}>
                <ul>
                    <li className={styles.activeSelection}>Amenities</li>
                    <Link href="#descriptionSection" scroll={false}><li>Description</li></Link>
                    <Link href="#addressSection" scroll={false}><li>Address</li></Link>
                    <Link href="#locationSection" scroll={false}><li>Location</li></Link>
                </ul>
                <div className={styles.amenitiesCardsBigBox}>
                    {propertyDetails.amenities && Object.keys(propertyDetails.amenities).map((category, index) => (
                        <div key={index} className={styles.aminitiesCardsBox}>
                            {propertyDetails.amenities[category].map((amenity, idx) => (
                                <p key={idx}><span><i className="fa-solid fa-bed"></i></span>{amenity}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.descriptionContentBox} id='descriptionSection'>
                <h3>Description</h3>
                <p>{propertyDetails.description}</p>
            </section>

            <section className={styles.addressSection} id='addressSection'>
                <div className={styles.addressTopContent}>
                    <h2>Address</h2>
                    <Link href={propertyDetails.location}><button className={styles.googleMapsBtn}><i className="fa-solid fa-location-dot"></i>Open On Google Maps</button></Link>
                </div>
                <div className={styles.addressBottomContentBox}>
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Address</span><span>{propertyDetails.address}</span></p>
                        <p><span className={styles.darkText}>City</span><span>{propertyDetails.city}</span></p>
                    </div>
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>State/Country</span><span>{propertyDetails.state}</span></p>
                        <p><span className={styles.darkText}>Zip/Postal Code</span><span>{propertyDetails.pincode}</span></p>
                    </div>
                </div>
            </section>

            <section className={styles.floorPlanSection}>
                <h2>Floor Plan</h2>
                <Image width={600} height={400} src={`https://a.khelogame.xyz/${propertyDetails.image_path}`} alt="Floor Plan" />
            </section>

            <section className={styles.googleMapsSection} id='locationSection'>
                <h2>Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.1353252701656!2d75.77526107587087!3d26.962613576617418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42aef78fb948e4ab%3A0x1935463d9171cfa!2sSwipeconnect%20Cybersecurity!5e0!3m2!1sen!2sin!4v1717758451689!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

            <section className={styles.ownerDetailsBox}>
                <div className={styles.ownerDetailBox1}>
                    <h3>Owner Details</h3>
                    <Image width={200} height={200} src="/images/agent-img.png" alt="Agent" />
                    <h4>{propertyDetails.owner_name}</h4>
                    <p>{propertyDetails.owner_role}</p>
                    <button>Contact Number</button>
                </div>
                <div className={styles.ownerDetailBox2}>
                    <h3>Send Enquiry To Agent</h3>
                    <form>
                        <div className={styles.radioBox}>
                            <p>You Are</p>
                            <input type="radio" name="dealer" id="individual" checked />
                            <label htmlFor="individual">Individual</label>
                            <input type="radio" name="dealer" id="dealer" />
                            <label htmlFor="dealer">Dealer</label>
                        </div>

                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Enter Name" />
                        <label htmlFor="email">Your Email</label>
                        <input type="text" id="email" placeholder="Enter Email" />
                        <label htmlFor="phone">Your Phone Number</label>
                        <input type="text" id="phone" placeholder="Enter Phone Number" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>

            <section className={styles.reviewsSection}>
                <h2>Property Reviews</h2>
                {propertyDetails.reviews && propertyDetails.reviews.map((review, index) => (
                    <div key={index} className={styles.ratingsBox}>
                        <div className={styles.ratingsUpperContentBox}>
                            <div className={styles.ratingsUpperUserDetailBox}>
                                <Image width={200} height={200} src={review.user_image || "/images/agent-img.png"} alt="Reviewer" />
                                <div className={styles.ratingsUpperContent}>
                                    <h4>{review.user_name}</h4>
                                    <p>{review.user_role}</p>
                                </div>
                            </div>
                            <Image width={200} height={200} src="/images/star.png" alt="Star Rating" className={styles.starImg} />
                        </div>
                        <p className={styles.reviewsPara}>{review.comment}</p>
                    </div>
                ))}
            
                <div className={styles.addCommentBox}>
                <h3>Leave A Review</h3>
                <form onSubmit={handleSubmitReview}>
                    <label className={styles.commentLabel}>Your Rating</label>
                    <div className={styles.starRating}>
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                                <React.Fragment key={ratingValue}>
                                    <input
                                        type="radio"
                                        id={`${ratingValue}-stars`}
                                        name="rating"
                                        value={ratingValue}
                                        checked={reviewForm.rating === `${ratingValue}`}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor={`${ratingValue}-stars`} className={styles.star}>&#9733;</label>
                                </React.Fragment>
                            );
                        })}
                    </div>
                    <label className={styles.commentLabel}>Your Comment</label>
                    <textarea
                        name="comment"
                        value={reviewForm.comment}
                        onChange={handleInputChange}
                        rows="6"
                    ></textarea>
                    <label className={styles.commentLabel}>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        value={reviewForm.name}
                        onChange={handleInputChange}
                    />
                    <input type="submit" value="Submit Review" />
                </form>
            </div>
            </section>

            <Footer />
        </>
    );
};

export default property;
