import React from 'react'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Login.module.css";
import Image from 'next/image';
import Link from 'next/link';

const login = () => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        if (e.target.name == 'identifier') {
            setIdentifier(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
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
        console.log(response)
    }

    return (
        <>
            <Navbar />
            {/* <!-- Login Big Box Section --> */}
            <div class={styles.registerBigBox}>
                <div class={styles.registerContentBox1}>
                    <h2>Connecting People & Property</h2>
                    <p>Easy way to Buy/ Sell property</p>
                    <Image width={200} height={200} src="/images/new-building-png.png" alt="" />
                </div>
                <div class={styles.registerContentBox2}>
                    <h2>Login Here,</h2>
                    <form method='POST' onSubmit={handleSubmit}>
                        <label for="">Enter Email or Phone No.</label>
                        <input type="text" placeholder="Enter Email or Phone No." name='identifier' value={identifier} onChange={handleChange} required />
                        <label for="">Enter Password</label>
                        <input type="text" placeholder="Enter Password" name='password' value={password} onChange={handleChange} required />
                        <input type="button" value="SUBMIT" />
                    </form>
                    <p><Link href="/reset-password">Forgot Password?</Link></p>
                    <p>Don't Have An Account? <Link href="/register">Register Here</Link></p>
                </div>
            </div>
            {/* Form Section */}
            <Footer />
        </>
    )
}

export default login