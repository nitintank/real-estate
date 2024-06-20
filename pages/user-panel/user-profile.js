import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from "@/styles/UserProfile.module.css";

const UserProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [merror, setMError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!oldPassword || !newPassword || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New password and confirm password must match');
            return;
        }

        try {
            const response = await fetch('https://a.khelogame.xyz/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({
                    old_password: oldPassword,
                    new_password: newPassword,
                    confirm_password: confirmPassword
                })
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Failed to change password');
            } else {
                setSuccessMessage(data.message);
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            }
        } catch (error) {
            setError('Failed to change password');
        }
    };

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
                    <Link href="/user-panel/user-profile" className={styles.activeSelection}><i className="fa-solid fa-user"></i> View Profile</Link>
                </div>
                <div className={styles.mainContentBox}>
                    <div className={styles.userProfileBox}>
                        <h2>User Profile</h2>
                        <form>
                        <div className={styles.formInnerBox1}>
                            <input type="text" placeholder={profile.username} />
                            <input type="text" placeholder={profile.email} />
                            <input type="text" placeholder={profile.phone_number} />
                            <input type="text" placeholder={profile.created_at.substring(0, 17)} />
                            </div>
                            <div className={styles.formInnerBox1}>
                                <button type="submit">Update <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </form>
                    </div>

                    <div className={styles.userProfileBox}>
                        <h2>Change Password</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formInnerBox1}>
                                <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder="Old Password*" />
                                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password*"
                                />
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password*" />
                            </div>
                            <div className={styles.formInnerBox1}>
                                <button type="submit">Update <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </form>
                        {error && <p className={styles.error}>{error}</p>}
                        {successMessage && <p className={styles.success}>{successMessage}</p>}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default UserProfile;
