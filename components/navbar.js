import React, { useState, useEffect } from 'react';
import styles from "../styles/Navbar.module.css";
import Link from 'next/link';
import Image from 'next/image';

const navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check local storage if user is logged in
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus == 'true') {
            setIsLoggedIn(true);
        }
    }, []);

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
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear()
        setIsLoggedIn(false);
        location.href = "/"
    };

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0px";
    }

    useEffect(() => {
        const fetchSupportContact = async () => {
            try {
                const response = await fetch('https://a.khelogame.xyz/admin_support_contact');
                if (!response.ok) {
                    throw new Error('Failed to fetch support contact');
                }
                const data = await response.json();
                if (data.length > 0) {
                    setProfile(data[0]); // Assuming you only want the first contact info
                } else {
                    throw new Error('No contact information available');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSupportContact();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <nav className={styles.nav}>
                <Link href="/">
                    <Image width={200} height={200} src="/images/las-vegas.png" alt="" className={styles.logoImg} />
                </Link>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/buy">Buy</Link></li>
                    <li><Link href="/rent">Rent</Link></li>
                    <li><Link href="/agents">Agents</Link></li>
                    <li><Link href="/about-us">About Us</Link></li>
                </ul>
                <div className={styles.navbarBox}>
                    {isLoggedIn ? (
                        <Link href="/user-panel/add-property"><button>Post Property</button></Link>
                    ) : (
                        <Link href="/register"><button>Post Property</button></Link>
                    )}
                    <Link href="/contact-us"><p><i className="fa-solid fa-phone"></i>{profile.help_contact_number}</p></Link>
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link href="/login"><i className={`fa-solid fa-circle-user ${styles.userIcon}`}></i></Link>
                    )}
                    <i className={`fa-solid fa-bars ${styles.sidebarNav}`} onClick={openNav}></i>
                </div>
            </nav>

            <div id="mySidenav" className={styles.sidenav}>
                <Link href="" className={styles.closebtn} onClick={closeNav}>&times;</Link>
                <Link href="/"><Image width={200} height={200} src="/images/las-vegas.png" alt="" className={styles.sidebarLogoImg} /></Link>
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/buy">Buy</Link>
                <Link href="/rent">Rent</Link>
                <Link href="/agents">Agents</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/contact-us">Contact Us</Link>
            </div>
        </>
    );
};

export default navbar;
