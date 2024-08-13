import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "@/styles/ContactTracking.module.css";
import Link from 'next/link';

const contactTracking = () => {
  const [numbercount, setNumbercount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
                      <Link href={`https://real-estate-gray-zeta.vercel.app/property?id=${property.property_id}`}>
                      <td>{property.property_name}</td>
                      </Link>
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