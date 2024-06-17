import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Rent.module.css";
import Link from 'next/link';
import Image from 'next/image';

const rent = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('https://a.khelogame.xyz/get-properties');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Assuming data is an array of properties
                const rentProperties = data.filter(property => property.property_categories === 'Rent');
                setProperties(rentProperties);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
            <>
                <Navbar />
                {/* Top Introduction Box */}
                <section className={styles.topIntroductionBox}>
                <div className={styles.topIntroInnerBox1}>
                    <h2>Properties For Rent</h2>
                    <p>Find the prefect property for rent</p>
                </div>
                <div className={styles.topIntroInnerBox2}>
                    <Image width={200} height={200} src="/images/orange-house.png" alt="" priority={true} />
                </div>
                <div className={styles.searchBiggerBox}>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Rent</option>
                            <option value="">Buy</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Property Type</option>
                            <option value="">Villa</option>
                            <option value="">Bungalow</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Beds</option>
                            <option value="">1+</option>
                            <option value="">2+</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Price</option>
                            <option value="">10 Lakh</option>
                            <option value="">50 Lakh</option>
                        </select>
                    </div>
                    <div className={`${styles.formBox} ${styles.flexEnd}`}>
                        <button><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                    </div>
                </div>
            </section>
        
                {/* Latest Properties Section */}
                <section className={styles.latestPropertiesSection}>
                    <p>DUBAI REAL ESTATE</p>
                    <h2>Latest Properties</h2>
                    <div className={styles.latestPropertiesBigBox}>
                    
                        {properties.map((property, index)  => (
                            <Link href={`/property?id=${property.id}`} key={index}>
                            <div key={property.id} className={styles.latestPropertiesInnerBox}>
                            <Image
                    width={600}
                    height={400}
                    src={property.image_path ? `https://a.khelogame.xyz/${property.image_path}` : '/images/default-property.png'}
                    
                    alt="Property Image"
                    className={styles.mainHouseImg}
                />
                                <div className={styles.latestPropertiesContentBox}>
                                    <p className={styles.miniText}>{property.property_type}, {property.transaction_type}</p>
                                    <h3>{property.title}</h3>
                                    <p className={styles.priceText}>{property.price}</p>
                                    <p className={styles.propertyDescription}>{property.description}</p>
                                    <div className={styles.innerPropertyContent}>
                                        <p><i className="fa-solid fa-bed"></i> {property.bedrooms}</p>
                                        <p><i className="fa-solid fa-shower"></i> {property.bathrooms}</p>
                                        <p><i className="fa-solid fa-maximize"></i> {property.area}ft</p>
                                        <p><i className="fa-solid fa-car"></i> {property.parking_spaces} Cars</p>
                                        <p><i className="fa-solid fa-up-right-from-square"></i> {property.lot_area}ft</p>
                                    </div>
                                    <hr />
                                    <div className={styles.innerButtonBox}>
                                        <button><i className="fa-solid fa-phone"></i> Call</button>
                                        <button><i className="fa-solid fa-envelope"></i> Email</button>
                                        <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))}
                        
                    </div>
                </section>
        
                <Footer />
            </>
        );
        


}

export default rent