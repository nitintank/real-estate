import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import styles from "@/styles/AllReviews.module.css";


const allReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [replyComments, setReplyComments] = useState({}); 

    useEffect(() => {
        // Fetch reviews from the API
        const fetchReviews = async () => {
            try {
                const response = await fetch('https://a.khelogame.xyz/reviews'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setReviews(data.reviews || []);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    const handleReplyChange = (reviewId, value) => {
        setReplyComments({
            ...replyComments,
            [reviewId]: value,
        });
    };

    const handleReplySubmit = async (propertyId, reviewId) => {
        const replyComment = replyComments[reviewId];
        if (!replyComment) {
            alert('Reply comment cannot be empty');
            return;
        }

        // Debugging: Ensure propertyId and reviewId are correct
        console.log('Property ID:', propertyId);
        console.log('Review ID:', reviewId);

        try {
            const response = await fetch(`https://a.khelogame.xyz/property/${propertyId}/review/${reviewId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ reply_comment: replyComment }),
            });

            if (!response.ok) {
                throw new Error('Failed to add comment');
            }

            const data = await response.json();
            alert(data.message); // Notify user of success

            // Optionally, update the review list with the new reply
            setReviews(reviews.map(review => 
                review.id === reviewId ? { ...review, reply_comment: replyComment } : review
            ));
        } catch (error) {
            console.error('Error adding reply:', error);
        }
    };

    return (
        <>
            <Navbar />
            <section className={styles.mainContentBigBox}>
                <div className={styles.mainSidebarBox}>
                    <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                    <Link href="/user-panel/add-property"><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
                    <Link href="/user-panel/property-list"><i className="fa-solid fa-list"></i> Property List</Link>
                    <Link href="/user-panel/all-reviews" className={styles.activeSelection}><i className="fa-solid fa-comment"></i> All Reviews</Link>
                </div>
                <div className={styles.mainContentBox}>
                    <div className={styles.propertyListTable}>
                        <table className={styles.allReviews}>
                            <thead>
                                <tr>
                                    <th>All Reviews</th>
                                    <th>Property Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review) => (
                                    <tr key={review.id}>
                                        <td>
                                            <h4><img src="/images/contact-card.png" alt="" />{review.name}</h4>
                                            <p className={styles.reviewComment}>{review.comment}</p>
                                            <p className={styles.replyText}>REPLY</p>
                                            <div className={styles.replyBox}>
                                                <img src="/images/contact-card.png" alt="" />
                                                <input
                                                    type="text"
                                                    placeholder="Add A Reply...."
                                                    value={replyComments[review.id] || ''}
                                                    onChange={(e) => handleReplyChange(review.id, e.target.value)}
                                                />
                                                <button onClick={() => handleReplySubmit(review.property_id, review.id)}>REPLY</button>
                                            </div>
                                            {/* {review.reply_comment && <p className={styles.replyComment}>{review.reply_comment}</p>} */}
                                        </td>
                                        <td>
                                            <div className={styles.propertyDetailTableBox}>
                                                <img src="/images/property-1.webp" alt="" />
                                                <div className={styles.propertyDetailText}>
                                                    <h4>3 BHK Flat</h4>
                                                    <p className={styles.priceText}>AED 78,000</p>
                                                    <p className={styles.propertyMiniDetail}>
                                                        <span><i className="fa-solid fa-bed"></i> 1</span>
                                                        <span><i className="fa-solid fa-shower"></i> 6</span>
                                                        <span><i className="fa-solid fa-table-cells-large"></i> 500sqft</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default allReviews