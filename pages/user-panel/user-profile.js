import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from "@/styles/PropertyList.module.css";

const UserProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('https://a.khelogame.xyz/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProfile(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Navbar />
            <section className={styles.mainContentBigBox}>
                <div className={styles.mainSidebarBox}>
                    <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                    <Link href="/user-panel/add-property"><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
                    <Link href="/user-panel/property-list"><i className="fa-solid fa-list"></i> Property List</Link>
                    <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
                    <Link href="/user-panel/all-enquiry"><i className="fa fa-question-circle"></i> All Enquiry</Link>
                    <Link href="/user-panel/user-profile"  className={styles.activeSelection}><i className="fa-solid fa-user"></i> View Profile</Link>
                </div>
                <div className={styles.profileDetails}>
                    <h1>User Profile</h1>
                    <p><strong>Username:</strong> {profile.username}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Phone Number:</strong> {profile.phone_number}</p>
                    <p><strong>Created At:</strong> {profile.created_at}</p>
                    <p><strong>Role:</strong> {profile.role}</p>
                    <Link href="/user-panel/change-password">Change Password</Link>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default UserProfile;
