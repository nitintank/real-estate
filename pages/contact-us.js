import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/ContactUs.module.css";

const contactUs = () => {
    return (
        <>
            <Navbar />
            {/* <!-- Form Section --> */}
            <section className={styles.formSection}>
                <div className={styles.formContentBigBox}>
                    <div className={styles.formContentBox1}>
                        <Image width={200} height={200} src="/images/contact-us-house-img.png" alt="" />
                    </div>
                    <div className={styles.formContentBox}>
                        <form action="">
                            <h2>Contact Us</h2>
                            <label for="">Enter Name</label>
                            <input type="text" placeholder="Enter Name" />
                            <label for="">Enter Email</label>
                            <input type="text" placeholder="Enter Email" />
                            <label for="">Enter Phone No.</label>
                            <input type="text" placeholder="Enter Phone No." />
                            <label for="">Message</label>
                            <textarea name="" id="" rows="6" placeholder="Enter Message"></textarea>
                            <input type="button" value="SUBMIT" />
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