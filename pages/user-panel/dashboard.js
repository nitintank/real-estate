import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "@/styles/Dashboard.module.css";
import Image from 'next/image';
import Link from 'next/link';
import  { useState, useEffect } from 'react';


const dashboard = () => {
    const [pendingCount, setPendingCount] = useState(0);

    useEffect(() => {
        const fetchPendingProperties = async () => {
            try {
                const response = await fetch('https://a.khelogame.xyz/get-properties');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPendingCount(data.length);
            } catch (error) {
                console.error('Error fetching pending properties:', error);
            }
        };

        fetchPendingProperties();

        // Check local storage if user is logged in
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if(loggedInStatus == null){
            location.href = "/"
        }
    }, []);

    return (
        <>
            <Navbar />
            {/* <!-- Main Content Big Box --> */}
            <section className={styles.mainContentBigBox}>
                <div className={styles.mainSidebarBox}>
                <Link href="/user-panel/dashboard" className={styles.activeSelection}><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                    <Link href="/user-panel/add-property"><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
                    <Link href="/user-panel/property-list"><i className="fa-solid fa-list"></i> Property List</Link>
                    <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
                    <Link href="/user-panel/all-enquiry"><i className="fa-solid fa-comment"></i> All Enquiry</Link>
                </div>
                <div className={styles.mainContentBox}>
                    <h2>Hey User,</h2>
                    <p className={styles.gladPara}>We are glad to see you again!</p>
                    <div className={styles.dashboardCardsBigBox}>
                        <div className={styles.dashboardCardsBox}>
                            <Image width={200} height={200} src="/images/dashboard-icon-1.png" alt="" />
                            <h3>19</h3>
                            <p>Published</p>
                        </div>
                        <div className={styles.dashboardCardsBox}>
                            <Image width={200} height={200} src="/images/dashboard-icon-2.png" alt="" />
                            <h3>04</h3>
                            <p>Favorites</p>
                        </div>
                        <div className={styles.dashboardCardsBox}>
                            <Image width={200} height={200} src="/images/dashboard-icon-3.png" alt="" />
                            <h3>{pendingCount}</h3>
                            <p>Pending</p>
                        </div>
                        <div className={styles.dashboardCardsBox}>
                            <Image width={200} height={200} src="/images/dashboard-icon-4.png" alt="" />
                            <h3>08</h3>
                            <p>Reviews</p>
                        </div>
                    </div>
                    <h2>View Statistics</h2>
                    <div className={styles.statisticsBox}>

                    </div>
                </div>
            </section>
            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default dashboard