import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import styles from "@/styles/AllReviews.module.css";

const allReviews = () => {
    return (
        <>
            <Navbar />
            {/* <!-- Main Content Big Box --> */}
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
                                <tr>
                                    <td>
                                        <h4><img src="/images/contact-card.png" alt="" />Nitin</h4>
                                        <p className={styles.reviewComment}>Nice property, fully furnished</p>
                                        <p className={styles.replyText}>REPLY</p>
                                        <div className={styles.replyBox}>
                                            <img src="/images/contact-card.png" alt="" />
                                            <input type="text" placeholder="Add A Reply...." />
                                            <button>REPLY</button>
                                        </div>
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
                                <tr>
                                    <td>
                                        <h4><img src="/images/contact-card.png" alt="" />Nitin</h4>
                                        <p className={styles.reviewComment}>Nice property, fully furnished</p>
                                        <p className={styles.replyText}>REPLY</p>
                                        <div className={styles.replyBox}>
                                            <img src="/images/contact-card.png" alt="" />
                                            <input type="text" placeholder="Add A Reply...." />
                                            <button>REPLY</button>
                                        </div>
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
                                <tr>
                                    <td>
                                        <h4><img src="/images/contact-card.png" alt="" />Nitin</h4>
                                        <p className={styles.reviewComment}>Nice property, fully furnished</p>
                                        <p className={styles.replyText}>REPLY</p>
                                        <div className={styles.replyBox}>
                                            <img src="/images/contact-card.png" alt="" />
                                            <input type="text" placeholder="Add A Reply...." />
                                            <button>REPLY</button>
                                        </div>
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
                                <tr>
                                    <td>
                                        <h4><img src="/images/contact-card.png" alt="" />Nitin</h4>
                                        <p className={styles.reviewComment}>Nice property, fully furnished</p>
                                        <p className={styles.replyText}>REPLY</p>
                                        <div className={styles.replyBox}>
                                            <img src="/images/contact-card.png" alt="" />
                                            <input type="text" placeholder="Add A Reply...." />
                                            <button>REPLY</button>
                                        </div>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default allReviews