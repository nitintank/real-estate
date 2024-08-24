import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "@/styles/ContactTracking.module.css";
import Link from 'next/link';

const contactTracking = () => {
  const [numbercount, setNumbercount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Utility function to check if the token has expired
  const isTokenExpired = (token) => {
    if (!token) return true;
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const { exp } = JSON.parse(jsonPayload);
    const currentTime = Math.floor(Date.now() / 1000);

    return exp < currentTime;
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('username');

    // If token is not found or token is expired, redirect to login
    if (!accessToken || !username || isTokenExpired(accessToken)) {
      location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const fetchClickCountData = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError('User ID not found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://a.khelogame.xyz/number_of_click/property?user_id=${userId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setNumbercount(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchClickCountData();
  }, []);

  return (
    <>
      <Navbar />
      {/* <!-- Main Content Big Box --> */}
      <section className={styles.mainContentBigBox}>
        <div className={styles.mainSidebarBox}>
          <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
          <Link href="/user-panel/add-property"><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
          <Link href="/user-panel/property-list"><i className="fa-solid fa-list"></i> Property List</Link>
          <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
          <Link href="/user-panel/contact-tracking" className={styles.activeSelection}><i class="fa-solid fa-address-book"></i> Contact Track</Link>
          <Link href="/user-panel/subscription"><i class="fa-solid fa-paper-plane"></i> Subscription</Link>
          <Link href="/user-panel/user-profile"><i className="fa-solid fa-user"></i> View Profile</Link>
        </div>
        <div className={styles.mainContentBox}>
          <h2>Contact Tracking</h2>
          <div className={styles.propertyListTable}>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <table className={styles.propertyList}>
                <thead>
                  <tr>
                    <th>S No.</th>
                    <th>Property Name</th>
                    <th>Property Type</th>
                    <th>Number Of Click On Contact Us</th>
                  </tr>
                </thead>
                <tbody>
                  {numbercount.map((property, index) => (
                    <tr key={property.property_id}>
                      <td>{index + 1}</td>
                      <td>
                        <Link href={`https://real-estate-gray-zeta.vercel.app/property?id=${property.property_id}`} target='_blank' className={styles.linkTag}>
                          {property.property_name}
                        </Link>
                      </td>
                      <td>{property.property_type}</td>
                      <td>{property.number_of_click}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default contactTracking