import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from "@/styles/UserProfile.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Utility function to check if the token has expired
    const isTokenExpired = (token) => {
        if (!token) return true;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        const { exp } = JSON.parse(jsonPayload);
        const currentTime = Math.floor(Date.now() / 1000);

        return exp < currentTime;
    };

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const username = localStorage.getItem('username');

        // If token is not found or token is expired, redirect to login
        if (!accessToken || !username || isTokenExpired(accessToken)) {
            location.href = "/login";
        }
    }, []);

    useEffect(() => {
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const response = await fetch('https://a.khelogame.xyz/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed To Fetch Profile Data');
            }
            const profileData = await response.json();
            setUsername(profileData.username);
            setEmail(profileData.email);
            setPhoneNumber(profileData.phone_number);
        } catch (error) {
            console.error('Error Fetching Profile Data:', error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!oldPassword || !newPassword || !confirmPassword) {
            setError('All Fields Are Required');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('New Password And Confirm Password Must Match');
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
                // setError(data.error || 'Failed To Change Password');
                toast.error(data.error || 'Failed To Change Password');
            } else {
                // setSuccessMessage(data.message);
                toast.success(data.message);
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            }
        } catch (error) {
            // setError('Failed To Change Password');
            toast.error('Failed To Change Password');
        }
    };

    const handleProfileSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://a.khelogame.xyz/edit-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({
                    username,
                    email,
                    phone_number
                })
            });
            if (!response.ok) {
                throw new Error('Failed to update profile');
            }
            const responseData = await response.json();
            toast.success('Profile Updated Successfully!');
            // console.log('Profile updated successfully:', responseData);
        } catch (error) {
            toast.error(`Error Updating Profile`);
            // console.error('Error updating profile:', error.message);
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
                    <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
                    <Link href="/user-panel/contact-tracking"><i class="fa-solid fa-address-book"></i> Contact Track</Link>
                    <Link href="/user-panel/subscription"><i class="fa-solid fa-paper-plane"></i> Subscription</Link>
                    <Link href="/user-panel/user-profile" className={styles.activeSelection}><i className="fa-solid fa-user"></i> View Profile</Link>
                </div>
                <div className={styles.mainContentBox}>
                    <div className={styles.userProfileBox}>
                        <h2>User Profile</h2>
                        <form onSubmit={handleProfileSubmit}>
                            <div className={styles.formInnerBox1}>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}
                                    readOnly />
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
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default UserProfile;
