import React from 'react'
import styles from "../styles/Navbar.module.css";
import Link from 'next/link'
import Image from 'next/image';

const navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <Image width={200} height={200} src="/images/las-vegas.png" alt="" className={styles.logoImg} />
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
                    <p><i className="fa-solid fa-phone"></i>8000-300-725</p>
                    <Link href="/login"><i className={`fa-solid fa-circle-user ${styles.userIcon}`}></i></Link>
                </div>
            </nav>
        </>
    )
}

export default navbar