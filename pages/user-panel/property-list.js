import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "@/styles/PropertyList.module.css";
import { useRouter } from 'next/router';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [subscriptionPlan, setSubscriptionPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

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
        const fetchData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    throw new Error('User ID not found');
                }

                // Fetch properties and subscription plan
                const response = await fetch(`https://a.khelogame.xyz/get-properties-user/${userId}`);
                if (!response.ok) {
                    console.error('Network response status:', response.status, response.statusText);
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                setProperties(data.properties);
                setSubscriptionPlan(data.subscription_plan || null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleEditClick = (propertyId) => {
        router.push(`/user-panel/edit-property/${propertyId}`);
    };

    const handleDeleteClick = async (propertyId) => {
        try {
            const response = await fetch(`https://a.khelogame.xyz/property/${propertyId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });

            if (response.ok) {
                setProperties(properties.filter(property => property.id !== propertyId));
                console.log('Property Deleted Successfully');
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Navbar />
            <section className={styles.mainContentBigBox}>
                <div className={styles.mainSidebarBox}>
                    <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                    <Link href="/user-panel/add-property"><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
                    <Link href="/user-panel/property-list" className={styles.activeSelection}><i className="fa-solid fa-list"></i> Property List</Link>
                    <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
                    <Link href="/user-panel/contact-tracking"><i className="fa-solid fa-address-book"></i> Contact Track</Link>
                    <Link href="/user-panel/subscription"><i className="fa-solid fa-paper-plane"></i> Subscription</Link>
                    <Link href="/user-panel/user-profile"><i className="fa-solid fa-user"></i> View Profile</Link>
                </div>
                <div className={styles.mainContentBox}>
                    <div className={styles.propertyListTable}>
                        <table className={styles.propertyList}>
                            <thead>
                                <tr>
                                    <th>Property Name</th>
                                    <th>Property Image</th>
                                    <th>Property Type</th>
                                    <th>Created At</th>
                                    {/* <th>Location</th> */}
                                    <th>Price</th>
                                    <th>Status</th>
                                    {subscriptionPlan && <th>Subscription Detail</th>} {/* Conditionally render */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {properties.map(property => (
                                    <tr key={property.id}>
                                        <td>
                                            <Link href={`https://real-estate-gray-zeta.vercel.app/property?id=${property.id}`} target='_blank' className={styles.link_tag}>
                                                {property.property_name}
                                            </Link>
                                        </td>
                                        <td>
                                            <Image
                                                width={200}
                                                height={200}
                                                src={`https://a.khelogame.xyz/${property.media_paths[0]}`}
                                                alt={property.property_name}
                                            />
                                        </td>
                                        <td>{property.property_type}</td>
                                        <td>{new Date(property.created_at).toLocaleDateString()}</td>
                                        {/* <td>{property.location}</td> */}
                                        <td>{property.price}</td>
                                        <td>{property.status}</td>
                                        {subscriptionPlan && <td>{subscriptionPlan.plan_name}</td>}
                                        <td>
                                            <i className="fa-solid fa-pen-to-square" onClick={() => handleEditClick(property.id)}></i>
                                            {/* <i className="fa-solid fa-trash-can" onClick={() => handleDeleteClick(property.id)}></i> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default PropertyList;
