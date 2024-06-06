import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "@/styles/PropertyList.module.css";

const propertylist = () => {
    return (
        <>
            <Navbar />
            {/* <!-- Main Content Big Box --> */}
            <section className={styles.mainContentBigBox}>
                <div className={styles.mainSidebarBox}>
                    <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                    <Link href="/user-panel/add-property"><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
                    <Link href="/user-panel/property-list" className={styles.activeSelection}><i className="fa-solid fa-list"></i> Property List</Link>
                    <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
                </div>
                <div className={styles.mainContentBox}>
                    <div className={styles.propertyListTable}>
                        <table className={styles.propertyList}>
                            <thead>
                                <tr>
                                    <th>Property Details</th>
                                    <th>Category</th>
                                    <th>Expiry/Renewal</th>
                                    <th>Last Updated</th>
                                    <th>Listing Owner</th>
                                    <th>Total Views</th>
                                    <th>Total Clicks</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={styles.propertyDetailTableBox}>
                                            <Image width={200} height={200} src="/images/property-1.webp" alt="" />
                                            <div className={styles.propertyDetailText}>
                                                <h4>3 BHK Flat</h4>
                                                <p className={styles.priceText}>AED 78,000</p>
                                                <p className={styles.propertyMiniDetail}>
                                                    <span><i className="fa-solid fa-bed"></i> 1</span>
                                                    <span><i className="fa-solid fa-shower"></i> 6</span>
                                                    <span><i className="fa-solid fa-table-cells-large"></i> 500sqft</span>
                                                </p>
                                                <p>5 Reviews</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className={styles.apartmentText}>Apartments</span></td>
                                    <td>15 Feburary</td>
                                    <td>3 Minutes Ago</td>
                                    <td>Nitin Blanko</td>
                                    <td>2,225</td>
                                    <td>749</td>
                                    <td><i className="fa-solid fa-pen-to-square"></i> <i className="fa-solid fa-trash-can"></i></td>
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

export default propertylist