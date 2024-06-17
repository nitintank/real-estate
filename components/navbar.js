import React from 'react'
import styles from "../styles/Navbar.module.css";
import Link from 'next/link'
import Image from 'next/image';

const navbar = () => {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0px";
    }
    return (
        <>
            <nav className={styles.nav}>
                <Link href="/"><Image width={200} height={200} src="/images/las-vegas.png" alt="" className={styles.logoImg} /></Link>
                <ul>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/projects"><li>Projects</li></Link>
                    <Link href="/buy"><li>Buy</li></Link>
                    <Link href="/rent"><li>Rent</li></Link>
                    <Link href="/agents"><li>Agents</li></Link>
                    <Link href="/about-us"><li>About Us</li></Link>
                </ul>
                <div className={styles.navbarBox}>
                    <Link href="/register"><button>Post Property</button></Link>
                    <Link href="/contact-us"><p><i className="fa-solid fa-phone"></i>8000-300-725</p></Link>
                    <Link href="/login"><i className={`fa-solid fa-circle-user ${styles.userIcon}`}></i></Link>
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
    )
}

export default navbar