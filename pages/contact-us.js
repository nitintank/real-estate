import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/ContactUs.module.css";
import { useState } from 'react'

const contactUs = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [messageSent, setmessageSent] = useState(false)

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'phone_number') {
            setPhoneNumber(e.target.value)
        }
        else if (e.target.name == 'message') {
            setMessage(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { name, email, phone_number, message }
        let res = await fetch('https://a.khelogame.xyz/contact-us', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let response = await res.json()

        if (response.message == "Message received successfully") {
            setmessageSent(true)
        }
    }

    return (
        <>
            <Navbar />
            {/* <!-- Form Section --> */}
            <section className={styles.formSection}>
                <div className={styles.formContentBigBox}>
                    <div className={styles.formContentBox1}>
                        <Image width={200} height={200} src="/images/contact-us-house-img.png" priority={true} alt="" />
                    </div>
                    <div className={styles.formContentBox}>
                        <form method='POST' onSubmit={handleSubmit}>
                            <h2>Contact Us</h2>
                            {messageSent && <p className={styles.whiteText}>Message Sent Successfully, Our Team Will Contact You Back Really Soon!!</p>}
                            {!messageSent && <>
                                <label htmlFor="">Enter Name</label>
                                <input type="text" placeholder="Enter Name" name='name' value={name} onChange={handleChange} required />
                                <label htmlFor="">Enter Email</label>
                                <input type="text" placeholder="Enter Email" name='email' value={email} onChange={handleChange} required />
                                <label htmlFor="">Enter Phone No.</label>
                                <input type="text" placeholder="Enter Phone No." name='phone_number' value={phone_number} onChange={handleChange} required />
                                <label htmlFor="">Message</label>
                                <textarea id="" rows="6" placeholder="Enter Message" name='message' value={message} onChange={handleChange} required></textarea>
                                <input type="submit" value="SUBMIT" />
                            </>}
                        </form>
                    </div>
                </div>
            </section>
            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default contactUs