import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import styles from "../styles/Property.module.css";
import Link from 'next/link';
import useIntersectionObserver from '../pages/hooks/useIntersectionObserver';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const property = () => {

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(styles.animate);
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    useIntersectionObserver(observerCallback, observerOptions);

    const router = useRouter();
    const { id } = router.query;
    // const [propertyDetails, setPropertyDetails] = useState({});
    const [propertyDetails, setPropertyDetails] = useState({
        image_paths: [],
        document_paths: [],
        media_paths: [],
        video_paths: []
    });

    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');
    const [propertyImagesPopup, setPropertyImagesPopup] = useState(false);

    const [recommendedProperties, setRecommendedProperties] = useState([]);
    const [reviewForm, setReviewForm] = useState({
        rating: '',
        comment: '',
        name: ''
    });
    const [enquiryForm, setEnquiryForm] = useState({
        name: '',
        email: '',
        phone: '',
        agentType: ''
    });

    useEffect(() => {
        if (id) {
            fetchPropertyDetails(id);
            fetchReviews(id)
        }
    }, [id]);


    const fetchPropertyDetails = async (propertyId) => {
        try {
            const response = await fetch(`https://a.khelogame.xyz/property/${propertyId}`);
            if (response.ok) {
                const data = await response.json();
                console.log("================= propty>", data);
                setPropertyDetails(data);
                setLoading(false);

                // Fetch recommended properties based on location and bedroom count
                fetchRecommendedProperties(data.location, data.bedroom);
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchRecommendedProperties = async (location, bedroom) => {
        try {
            const response = await fetch('https://a.khelogame.xyz/get-properties');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const recommendedProperties = data.filter((property) => {
                return property.status === 'approved' && (property.location.toLowerCase() === location.toLowerCase() || property.bedroom === bedroom);
            }).slice(0, 3); // Limit to 3 properties
            setRecommendedProperties(recommendedProperties);
        } catch (error) {
            console.error('Error fetching recommended properties:', error);
        }
    };
    const fetchReviews = async (propertyId) => {
        try {
            const response = await fetch(`https://a.khelogame.xyz/get_review?property_id=${propertyId}`);
            if (response.ok) {
                const data = await response.json();
                setReviews(data.reviews);
            } else {
                const errorData = await response.json();
                setError(errorData.error);
            }
        } catch (error) {
            console.error('Error fetching reviews:', error);
            setError('Failed to fetch reviews');
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

    const handleContactClick = async () => {
        try {
            const response = await fetch(`https://a.khelogame.xyz/property/${id}/number_of_click`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Click count incremented successfully:', data);
            } else {
                const errorData = await response.json();
                console.error('Error incrementing click count:', errorData.error);
            }
        } catch (error) {
            console.error('Error incrementing click count:', error);
        }
    };

    const submitAgentEnquiry = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://a.khelogame.xyz/create-user-inquiry/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: enquiryForm.name,
                    email: enquiryForm.email,
                    phone_number: enquiryForm.phone,
                    agent_type: enquiryForm.agentType
                }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Agent enquiry submitted successfully:', data);
                setEnquiryForm({
                    name: '',
                    email: '',
                    phone: '',
                    agentType: ''
                });
            } else {
                const errorData = await response.json();
                console.error('Error submitting agent enquiry:', errorData.error);
                // Handle error (e.g., show error message to user)
            }
        } catch (error) {
            console.error('Error submitting agent enquiry:', error);
            // Handle error (e.g., show error message to user)
        }
    };
    const handleEnquiryChange = (e) => {
        const { name, value } = e.target;
        setEnquiryForm({ ...enquiryForm, [name]: value });
    };

    const togglePropertyImages = () => {
        setPropertyImagesPopup(!propertyImagesPopup);
    };

    return (
        <>
            <Navbar />

            {propertyImagesPopup && <section className={styles.slider_big_box}>
                <i class="fa-solid fa-circle-xmark" onClick={togglePropertyImages}></i>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">
                    {propertyDetails.media_paths && propertyDetails.media_paths.map((path, index) => (
                        <SwiperSlide>
                            <Image
                                key={index}
                                width={500}
                                height={500}
                                src={`https://a.khelogame.xyz/${path}`}
                                alt={`Property Image ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>}

            <section className={`${styles.propertyImagesSection} animate-on-scroll`}>
                {/* Main property image */}
                <Image
                    width={600}
                    height={400}
                    src={`https://a.khelogame.xyz/${propertyDetails.media_paths[0]}`}
                    alt="Property Image"
                    className={styles.mainHouseImg}
                    onClick={togglePropertyImages}
                />
                {/* Additional property images */}
                <div className={styles.propertyMoreImages}>
                    {propertyDetails.media_paths && propertyDetails.media_paths.slice(1).map((path, index) => (
                        <Image
                            key={index + 1} // Adjusting the key to match the original index
                            width={200}
                            height={200}
                            src={`https://a.khelogame.xyz/${path}`}
                            alt={`Property Image ${index + 2}`} // Adjusting alt text to match the original index
                            onClick={togglePropertyImages}
                        />
                    ))}
                </div>

            </section>

            <section className={`${styles.propertyTitleContentBox} animate-on-scroll`}>
                <div className={styles.contentTitleContentBox1}>
                    <p>Publish on {propertyDetails.created_at.substring(0, 11)}</p>
                    <h2>{propertyDetails.property_name}</h2>
                    <h4>{propertyDetails.property_type}, {propertyDetails.property_categories}</h4>
                    <p>{propertyDetails.city}</p>
                </div>
                <div className={styles.contentTitleContentBox2}>
                    <h3>{propertyDetails.price}</h3>
                    <button onClick={handleContactClick}>Contact Us</button>
                </div>
            </section>

            <section className={`${styles.amenitiesContentBox} animate-on-scroll`}>
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
                                <p key={idx}>
                                    <span><i className="fa-solid fa-bed"></i></span>
                                    {amenity.amenity}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section className={`${styles.descriptionContentBox} animate-on-scroll`} id='descriptionSection'>
                <h3>Description</h3>
                <p>{propertyDetails.description}</p>
            </section>

            <section className={`${styles.addressSection} animate-on-scroll`} id='addressSection'>
                <div className={styles.addressTopContent}>
                    <h2>Property Details</h2>
                    <Link href={propertyDetails.location}><button className={styles.googleMapsBtn}><i className="fa-solid fa-location-dot"></i>Open On Google Maps</button></Link>
                </div>
                <div className={styles.addressBottomContentBox}>
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Furnishing</span><span>{propertyDetails.furnishing_type}</span></p>
                        <p><span className={styles.darkText}>Building Area</span><span>{propertyDetails.build_area}</span></p>
                        <p><span className={styles.darkText}>Parking</span><span>{propertyDetails.parking}</span></p>
                    </div>
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Apartment Number</span><span>{propertyDetails.apartment_number}</span></p>
                        <p><span className={styles.darkText}>Plot Area</span><span>{propertyDetails.plot_up_area}</span></p>
                        <p><span className={styles.darkText}>Area</span><span>{propertyDetails.area}</span></p>
                    </div>
                </div>
            </section>

            <section className={`${styles.floorPlanSection} animate-on-scroll`}>
                <h2>Floor Plan</h2>
                <div className={styles.floor_map_img_box}>
                    {propertyDetails.image_paths.map((image, index) => (
                        <Image
                            key={index}
                            width={600}
                            height={400}
                            src={`https://a.khelogame.xyz/${image}`}
                            alt={`Property Image ${index + 1}`}
                            className={styles.mainHouseImg}
                        />
                    ))}
                </div>
            </section>

            <section className={`${styles.videosSection} animate-on-scroll`}>
                <h3>Videos</h3>
                <div className={styles.video_box}>
                    {propertyDetails.video_paths.map((video, index) => (
                        <video key={index} width="600" height="400" controls>
                            <source src={`https://a.khelogame.xyz/${video}`} type="video/mp4" />
                        </video>
                    ))}
                </div>
            </section>

            <section className={`${styles.googleMapsSection} animate-on-scroll`} id='locationSection'>
                <h2>Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.1353252701656!2d75.77526107587087!3d26.962613576617418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42aef78fb948e4ab%3A0x1935463d9171cfa!2sSwipeconnect%20Cybersecurity!5e0!3m2!1sen!2sin!4v1717758451689!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

            {/* <section className={`${styles.documentsSection} animate-on-scroll`}>
                <h3>Documents</h3>
                {propertyDetails.document_paths.map((document, index) => (
                    <Link
                        key={index}
                        href={`https://a.khelogame.xyz/${document}`}
                        download
                        target="_blank"
                        className={styles.documentLink}>
                        {`Document ${index + 1}`}
                    </Link>
                ))}
            </section> */}

            <section className={`${styles.ownerDetailsBox} animate-on-scroll`}>
                <div className={styles.ownerDetailBox1}>
                    <h3>Owner Details</h3>
                    <Image width={200} height={200} src="/images/agent-img.png" alt="Agent" />
                    <h4>{propertyDetails.owner_name}</h4>
                    <p>{propertyDetails.owner_role}</p>
                    <button>Contact Number</button>
                </div>
                <div className={styles.ownerDetailBox2}>
                    <h3>Send Enquiry To Agent</h3>
                    <form onSubmit={submitAgentEnquiry}>
                        <div className={styles.radioBox}>
                            <p>You Are</p>
                            <input
                                type="radio"
                                name="agentType"
                                id="individual"
                                value="Individual"
                                checked={enquiryForm.agentType === 'Individual'}
                                onChange={handleEnquiryChange}
                            />
                            <label htmlFor="individual">Individual</label>
                            <input
                                type="radio"
                                name="agentType"
                                id="dealer"
                                value="Dealer"
                                checked={enquiryForm.agentType === 'Dealer'}
                                onChange={handleEnquiryChange}
                            />
                            <label htmlFor="dealer">Dealer</label>
                        </div>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={enquiryForm.name}
                            onChange={handleEnquiryChange}
                            placeholder="Enter Name"
                        />
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={enquiryForm.email}
                            onChange={handleEnquiryChange}
                            placeholder="Enter Email"
                        />
                        <label htmlFor="phone">Your Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={enquiryForm.phone}
                            onChange={handleEnquiryChange}
                            placeholder="Enter Phone Number"
                        />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </section>

            <section className={`${styles.reviewsSection} animate-on-scroll`}>
                <h2>Property Reviews</h2>
                {reviews.length === 0 && <p>No Reviews Available</p>}
                {reviews.map((review, index) => (
                    <div key={index} className={styles.ratingsBox}>
                        <p>{review.comment}</p>
                        <p>{review.name}</p>
                    </div>
                ))}
                {error && <p>{error}</p>}

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

            {/* reacommation propety */}
            <section className={styles.latestPropertiesSection}>
                <h2>Recommended Properties</h2>
                <div className={styles.latestPropertiesBigBox}>
                    {recommendedProperties.length > 0 ? (
                        recommendedProperties.map((property, index) => (
                            <Link href={`/property?id=${property.id}`} key={index} className={styles.latestPropertiesInnerBox}>
                                <Image
                                    width={300}
                                    height={200}
                                    src={`https://a.khelogame.xyz/${property.image_paths}`}
                                    alt="Recommended Property"
                                    className={styles.recommendedPropertyImage}
                                />
                                <div className={styles.latestPropertiesContentBox}>
                                    <p className={styles.miniText}>{property.property_type}</p>
                                    <h3>{property.property_name}</h3>
                                    <p className={styles.priceText}>{property.price}</p>
                                    <p className={styles.propertyDescription}>{property.description.substring(0, 110) + '...'}</p>
                                    <div className={styles.innerPropertyContent}>
                                        <p><i className="fa-solid fa-bed"></i> {property.bedroom}</p>
                                        <p><i className="fa-solid fa-shower"></i> {property.bathroom}</p>
                                        <p><i className="fa-solid fa-maximize"></i> {property.area}</p>
                                        <p><i className="fa-solid fa-car"></i> {property.parking}</p>
                                        <p><i className="fa-solid fa-up-right-from-square"></i> {property.size}</p>
                                    </div>
                                    <hr />
                                    <div className={styles.innerButtonBox}>
                                        <button><i className="fa-solid fa-phone"></i> Call</button>
                                        <button><i className="fa-solid fa-envelope"></i> Email</button>
                                        <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No recommended properties available.</p>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default property;

