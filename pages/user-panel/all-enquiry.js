import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "@/styles/PropertyList.module.css";
import { useEffect, useState } from 'react';

const allEnquiry = () => {
    const [inquiries, setInquiries] = useState([]);
    const [userId, setUserId] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const userIdFromStorage = localStorage.getItem('userId');
        const accessTokenFromStorage = localStorage.getItem('accessToken');
        setUserId(userIdFromStorage);
        setAccessToken(accessTokenFromStorage);
    }, []);

    useEffect(() => {
        const fetchInquiries = async () => {
            if (!userId || !accessToken) {
                console.error('User ID or Access Token is missing');
                return;
            }

            const url = `https://a.khelogame.xyz/inquiries?user_id=${userId}`;

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
                console.log(data); // Log the data received from API
                setInquiries(data.inquiries || []);
            } catch (error) {
                console.error('Error fetching inquiries:', error.message);
            }
        };

        if (userId && accessToken) {
            fetchInquiries();
        }
    }, [userId, accessToken]);

    return (
        <>
            <Navbar />
            <section className={styles.mainContentBigBox}>
                <div className={styles.mainSidebarBox}>
                    <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                    <Link href="/user-panel/add-property"><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
                    <Link href="/user-panel/property-list"><i className="fa-solid fa-list"></i> Property List</Link>
                    <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
                    <Link href="/user-panel/all-enquiry" className={styles.activeSelection}><i className="fa-solid fa-comment"></i> All Enquiry</Link>
                </div>
                <div className={styles.mainContentBox}>
                    <div className={styles.propertyListTable}>
                        <table className={styles.propertyList}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Agent Type</th>
                                    <th>Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inquiries.map((inquiry) => (
                                    <tr key={inquiry.id}>
                                        <td>{inquiry.name}</td>
                                        <td>{inquiry.email}</td>
                                        <td>{inquiry.phone_number}</td>
                                        <td>{inquiry.agent_type}</td>
                                        <td>{new Date(inquiry.created_at).toLocaleString()}</td>
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

export default allEnquiry