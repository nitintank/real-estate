import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/AboutUs.module.css";

const aboutUs = () => {
    return (
        <>
            <Navbar />
            {/* <!-- Top Introduction Box --> */}
            <section className={styles.topIntroductionBox}>
                <div className={styles.topIntroInnerBox1}>
                    <h2>OUR MISSION AND VISION</h2>
                    <p>{`"Empowering dreams through personalized real estate experiences, where innovation meets integrity for a brighter tomorrow."`}</p>
                </div>
                <div className={styles.topIntroInnerBox2}>
                    <Image width={500} height={500} src="/images/about-house.png" alt="" />
                </div>
            </section>

            {/* <!-- Why Us Section --> */}

            <section className={styles.whyUsSection}>
                <h2>Why Us</h2>
                <p>Best real estate agents you will ever see in your life. If you encounter any problems do not hesitate to knock our agents.</p>
                <div className={styles.whyCardsBigBox}>
                    <div className={styles.whyCardBox}>
                        <Image width={100} height={100} src="/images/about-icon-1.png" alt="" />
                        <h4>WIDE RANGE</h4>
                        <p>Benefits</p>
                    </div>
                    <div className={styles.whyCardBox}>
                        <Image width={100} height={100} src="/images/about-icon-2.png" alt="" />
                        <h4>FINEST COMMUNITY</h4>
                        <p>Support</p>
                    </div>
                    <div className={styles.whyCardBox}>
                        <Image width={100} height={100} src="/images/about-icon-3.png" alt="" />
                        <h4>INVESTMENT</h4>
                        <p>Interest</p>
                    </div>
                    <div className={styles.whyCardBox}>
                        <Image width={100} height={100} src="/images/about-icon-4.png" alt="" />
                        <h4>HOMES MATCH</h4>
                        <p>Lifestyle</p>
                    </div>
                </div>
            </section>

            {/* <!-- Our Story Section --> */}

            <section className={styles.ourStorySection}>
                <h2>Our Story</h2>
                <div className={styles.ourStoryBigBox}>
                    <div className={styles.ourStoryContentBox}>
                        <Image width={200} height={200} src="/images/about-us-home-1.png" alt="" />
                    </div>
                    <div className={styles.ourStoryContentBox}>
                        <h3>THE START</h3>
                        <p>His plan: to start the first printed real estate classified in the UAE. Al Bab World, a property print magazine launches in the UAE. With the objective of generating leads for agents. 70,000 copies of Al Bab World is delivered for free every two weeks</p>
                    </div>
                </div>
                <div className={styles.ourStoryBigBox}>
                    <div className={`${styles.ourStoryContentBox} ${styles.orderM1}`}>
                        <h3>THE START</h3>
                        <p>His plan: to start the first printed real estate classified in the UAE. Al Bab World, a property print magazine launches in the UAE. With the objective of generating leads for agents. 70,000 copies of Al Bab World is delivered for free every two weeks</p>
                    </div>
                    <div className={styles.ourStoryContentBox}>
                        <Image width={200} height={200} src="/images/about-us-home-2.png" alt="" />
                    </div>
                </div>
            </section>

            {/* <!-- Our Value Section --> */}

            <section className={styles.ourValueSection}>
                <h2>Our Value</h2>
                <p>As a homegrown UAE brand, we are keen to address the needs of both the local and expat communities. To facilitate the needs of property seekers in the region, we have studied the market extensively and focused on building</p>
                <div className={styles.popularAreasImageBox}>
                    <Image width={200} height={200} src="/images/property-5.jpeg" alt="" className={styles.popularAreasImage1} />
                    <Image width={200} height={200} src="/images/property-2.webp" alt="" className={styles.popularAreasImage2} />
                    <Image width={200} height={200} src="/images/property-3.webp" alt="" className={styles.popularAreasImage2} />
                    <Image width={200} height={200} src="/images/property-1.webp" alt="" className={styles.popularAreasImage1} />
                </div>
            </section>
            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default aboutUs