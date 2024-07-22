import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "@/styles/Subscription.module.css";
import Link from 'next/link';

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [availablePlans, setAvailablePlans] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSubscriptionData();
  }, []);

  const fetchSubscriptionData = async () => {
    try {
      const response = await fetch('https://a.khelogame.xyz/subscription', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch subscription data');
      }
      const data = await response.json();

      if (data.subscription) {
        setSubscriptions([data.subscription]); // User has an active subscription
      } else if (data.available_plans) {
        setAvailablePlans(data.available_plans); // User has no active subscription
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error fetching subscription data:', error);
      // Handle error state or retry mechanism if needed
    }
  };

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
          <Link href="/user-panel/contact-tracking"><i class="fa-solid fa-address-book"></i> Contact Track</Link>
          <Link href="/user-panel/subscription" className={styles.activeSelection}><i class="fa-solid fa-paper-plane"></i> Subscription</Link>
          <Link href="/user-panel/user-profile"><i className="fa-solid fa-user"></i> View Profile</Link>
        </div>
        <div className={styles.mainContentBox}>
          <h2>Subscription</h2>
          <div className={styles.propertyListTable}>
            <table className={styles.propertyList}>
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Subscription Plan Name</th>
                  <th>Price</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.length > 0 ? (
                  subscriptions.map((subscription, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{subscription.plan_name}</td>
                      <td>{subscription.price}</td>
                      <td>{subscription.description}</td>
                    </tr>
                  ))
                ) : (
                  availablePlans.map((plan, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{plan.plan_name}</td>
                      <td>{plan.price}</td>
                      <td>{plan.description}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default Subscription