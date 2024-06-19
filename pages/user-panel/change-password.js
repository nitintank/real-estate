import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from "@/styles/AddProperty.module.css";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

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
                    <h2>Change Password</h2>
                    {error && <p className={styles.error}>{error}</p>}
                    {successMessage && <p className={styles.success}>{successMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <label>Old Password</label>
                        <input
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            placeholder="Enter Old Password"
                        />
                        <label>New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter New Password"
                        />
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Enter Confirm Password"
                        />
                        <button type="submit">Update</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ChangePassword;
