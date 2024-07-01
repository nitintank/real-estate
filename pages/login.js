import React from 'react'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Login.module.css";
import Image from 'next/image';
import Link from 'next/link';
import useIntersectionObserver from '../pages/hooks/useIntersectionObserver';

const Login = () => {

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(styles.animate);
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    useIntersectionObserver(observerCallback, observerOptions);

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const [invalidLogin, setInvalidLogin] = useState(false)
    const [showpassword, setShowpassword] = useState('password')

    const handleChange = (e) => {
        if (e.target.name == 'identifier') {
            setIdentifier(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    }

    const showPassword = () => {
        if (showpassword == 'password') {
            setShowpassword('text')
        }
        else {
            setShowpassword('password')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { identifier, password }
        let res = await fetch('https://a.khelogame.xyz/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let response = await res.json()

        if (response.error == "User not found or invalid credentials") {
            setInvalidLogin(true)
        }
        else if (response.role == "user") {
            localStorage.setItem('email', response.email);
            localStorage.setItem('accessToken', response.access_token);
            localStorage.setItem('username', response.username);
            localStorage.setItem('userId', response.id);
            localStorage.setItem('isLoggedIn', 'true');
            location.href = "/user-panel/dashboard"
        }
    }

    return (
        <>
            <Navbar />
            {/* <!-- Login Big Box Section --> */}
            <div className={styles.registerBigBox}>
                <div className={`${styles.registerContentBox1} animate-on-scroll`}>
                    <h2>Connecting People & Property</h2>
                    <p>Easy way to Buy/ Sell property</p>
                    <Image width={200} height={200} src="/images/new-building-png.png" alt="" />
                </div>
                <div className={`${styles.registerContentBox2} animate-on-scroll`}>
                    <h2>Login Here,</h2>
                    <form method='POST' onSubmit={handleSubmit}>
                        <label htmlFor="">Enter Email or Phone No.</label>
                        <input type="text" placeholder="Enter Email or Phone No." name='identifier' value={identifier} onChange={handleChange} required />
                        <div className={styles.sendOtpBox}>
                            <label htmlFor="">Enter Password</label>
                            <input type={showpassword} placeholder="Enter Password" name='password' value={password} onChange={handleChange} required />
                            {showpassword == 'password' && <Image width={50} height={50} src="/images/eye.png" alt="" className={styles.icon3} onClick={showPassword} />}
                            {showpassword == 'text' && <Image width={50} height={50} src="/images/eye-open-icon.png" alt="" className={styles.icon3} onClick={showPassword} />}
                        </div>
                        {invalidLogin && <p className={styles.redText}>Invalid Credentials, Try Again</p>}
                        <input type="submit" value="SUBMIT" />
                    </form>
                    <p><Link href="/reset-password">Forgot Password?</Link></p>
                    <p>{`Don't Have An Account?`} <Link href="/register">Register Here</Link></p>
                </div>
            </div>
            {/* Form Section */}
            <Footer />
        </>
    )
}

export default Login