import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "@/styles/PropertyList.module.css";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const propertylist = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const userId = localStorage.getItem('userId'); 
                if (!userId) {
                    throw new Error('User ID not found');
                }
                const response = await fetch(`https://a.khelogame.xyz/get-properties-user/${userId}`);
                if (!response.ok) {
                    console.error('Network response status:', response.status, response.statusText);
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                setProperties(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
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
                console.log('Property deleted successfully');
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
                                    <th>Location</th>
                                    <th>Price</th>
                                    <th>Amenities</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {properties.map(property => (
                                    <tr key={property.id}>
                                        <td>{property.property_name}</td>
                                        <td>
                                            <Image
                                                width={200}
                                                height={200}
                                                src={property.image_path ? `https://a.khelogame.xyz/${property.image_path}` : '/images/default-property.png'}
                                                alt={property.property_name}
                                            />
                                        </td>
                                        <td>{property.property_type}</td>
                                        <td>{new Date(property.created_at).toLocaleDateString()}</td>
                                        <td>{property.location}</td>
                                        <td>{property.price}</td>
                                        <td>
                                            {(property.amenities || []).map((amenity, index) => (
                                                <span key={index}>{amenity} </span>
                                            ))}
                                        </td>
                                        <td>{property.status}</td>
                                        <td>
                                            <i className="fa-solid fa-pen-to-square" onClick={() => handleEditClick(property.id)}></i>
                                            <i className="fa-solid fa-trash-can" onClick={() => handleDeleteClick(property.id)}></i>
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

export default propertylist