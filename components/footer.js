import React, { useState, useEffect } from 'react';
import styles from "../styles/Footer.module.css";
import Image from 'next/image';

const footer = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
            <p><i className="fa-solid fa-phone"></i> {profile.support_contact_number}</p>
            <p><i className="fa-brands fa-whatsapp"></i> {profile.emergency_contact_number}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer