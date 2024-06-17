import React, { useState, useEffect } from 'react';
import styles from "../styles/Navbar.module.css";
import Link from 'next/link';
import Image from 'next/image';

const navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check local storage if user is logged in
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if(loggedInStatus == 'true'){
            setIsLoggedIn(true);
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
                    <Link href="/contact-us"><p><i className="fa-solid fa-phone"></i>8000-300-725</p></Link>
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
