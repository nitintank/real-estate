import React from 'react'
import styles from "../styles/Footer.module.css";
import Image from 'next/image';

const footer = () => {
  return (
    <>
    <footer className={styles.footerSection}>
        <div className={styles.footerContentUpperBigBox}>
          <div className={styles.footerContentBox}>
            <Image width={200} height={200} src="/images/las-vegas.png" alt="" className={styles.footerLogoImg} />
            <p>Get to know about newly posted properties as soon as they are posted</p>
          </div>
          <div className={styles.footerContentBox}>
            <ul>
              <li>Home</li>
              <li>Property</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={`${styles.footerContentBox} ${styles.bgFooterBuilding}`}>
            <div className={styles.socialMediaBox}>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className={styles.inputSearchBox}>
              <input type="text" placeholder="Search Here" />
              <button>Search</button>
            </div>
            <p className={styles.footerEmailText}><i className="fa-solid fa-envelope"></i> Propertyconnect.com</p>
          </div>
        </div>

        <div className={styles.footerBottomBox}>
          <p>@Get to know about.desihned by me</p>
          <div className={styles.contactDetailBox}>
            <p><i className="fa-solid fa-phone"></i> 9998786797</p>
            <p><i className="fa-brands fa-whatsapp"></i> 9998786797</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer