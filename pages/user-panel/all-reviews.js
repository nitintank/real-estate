import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import styles from "@/styles/AllReviews.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const allReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [replyComments, setReplyComments] = useState({});
    const [userId, setUserId] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const userIdFromStorage = localStorage.getItem('userId');
        const accessTokenFromStorage = localStorage.getItem('accessToken');
        setUserId(userIdFromStorage);
        setAccessToken(accessTokenFromStorage);
    }, []);

    useEffect(() => {
        const fetchReviews = async () => {
            if (!userId) {
                console.error('User ID is missing');
                return;
            }

            const url = `https://a.khelogame.xyz/reviews?user_id=${userId}`;

            try {
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data)
                setReviews(data.reviews || []);
            } catch (error) {
                console.error('Error fetching reviews:', error.message);
            }
        };

        if (userId && accessToken) {
            fetchReviews();
        }
    }, [userId, accessToken]);

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

        try {
            const response = await fetch(`https://a.khelogame.xyz/property/${propertyId}/review/${reviewId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({ reply_comment: replyComment }),
            });

            if (!response.ok) {
                throw new Error('Failed to add comment');
            }

            const data = await response.json();
            toast.success('Replay back comment on propety !');
            console.log(data.message); // Notify user of success

            // Optionally, update the review list with the new reply
            setReviews(reviews.map(review =>
                review.id === reviewId ? { ...review, reply_comment: replyComment } : review
            ));
        } catch (error) {
            toast.error(`Error: ${errorData.message}`);
            console.error('Error adding reply:', error);
        }
    };

    return (
        <>
            <Navbar />
            <ToastContainer />
            <section className={styles.mainContentBigBox}>
                <div className={styles.mainSidebarBox}>
                    <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                    <Link href="/user-panel/add-property"><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
                    <Link href="/user-panel/property-list"><i className="fa-solid fa-list"></i> Property List</Link>
                    <Link href="/user-panel/all-reviews" className={styles.activeSelection}><i className="fa-solid fa-comment"></i> All Reviews</Link>
                    <Link href="/user-panel/contact-tracking"><i class="fa-solid fa-address-book"></i> Contact Track</Link>
                    <Link href="/user-panel/subscription"><i class="fa-solid fa-paper-plane"></i> Subscription</Link>
                    <Link href="/user-panel/user-profile"><i className="fa-solid fa-user"></i> View Profile</Link>
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
                                            <h4>{review.name}</h4>
                                            <p className={styles.reviewComment}>{review.comment}</p>
                                            <p className={styles.replyText}>REPLY</p>
                                            <div className={styles.replyBox}>
                                                <input
                                                    type="text"
                                                    placeholder="Add A Reply...."
                                                    value={replyComments[review.id] || ''}
                                                    onChange={(e) => handleReplyChange(review.id, e.target.value)}
                                                />
                                                <button onClick={() => handleReplySubmit(review.property_id, review.id)}>REPLY</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={styles.propertyDetailTableBox}>
                                                {/* <img src="/images/property-1.webp" alt="" /> */}
                                                <div className={styles.propertyDetailText}>
                                                <Link href={`https://real-estate-gray-zeta.vercel.app/property?id=${review.property_id}`}>
                                               
                                           
                                                    <h4>{review.property.property_name}</h4>
                                                    </Link>
                                                    <p className={styles.priceText}>AED{review.property.price}</p>
                                                   
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