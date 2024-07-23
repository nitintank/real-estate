import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Rent.module.css";
import Link from 'next/link';
import Image from 'next/image';
import useIntersectionObserver from '../pages/hooks/useIntersectionObserver';

const rent = () => {

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(styles.animate);
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    useIntersectionObserver(observerCallback, observerOptions);

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category] = useState('buy');
    const [propertyType, setPropertyType] = useState('');
    const [propertySubtype, setPropertySubtype] = useState('');
    const [price, setPrice] = useState('');

    const fetchProperties = async (filters = {}) => {
        try {
            const response = await fetch('https://a.khelogame.xyz/get-properties');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            let filteredProperties = data;

            // Filter by category
            filteredProperties = filteredProperties.filter(property => property.property_categories === 'Rent');

            console.log('Filtered by category:', filteredProperties);

            // Filter by property typecon
            console.log(filters, "filters");
            console.log(filters.propertyType, "filters.propertyType");
            if (filters.propertyType) {
                filteredProperties = filteredProperties.filter((property) => {
                    console.log(property, "properties");
                    console.log(property.property_type, "property.property_type");

                    return property.property_type === filters.propertyType
                })
            }

            if (filters.price) {
                const priceRange = filters.price.split('-').map(Number);
                const minPrice = priceRange[0];
                const maxPrice = priceRange[1] || Infinity;

                filteredProperties = filteredProperties.filter((property) => {
                    const propertyPrice = property.price;
                    return propertyPrice >= minPrice && propertyPrice <= maxPrice;
                });
            }


            console.log('Filtered by property type:', filteredProperties);

            // Filter by property subtype
            if (filters.propertySubtype) {
                filteredProperties = filteredProperties.filter(property => property.property_subtype === filters.propertySubtype);
            }

            console.log('Filtered by property subtype:', filteredProperties);

            setProperties(filteredProperties);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    const handleSearch = () => {
        fetchProperties({ propertyType, propertySubtype, price });
    };

    const handlePropertyTypeChange = (e) => {
        console.log(e.target.value, "targeted value");
        setPropertyType(e.target.value);
        setPropertySubtype(''); // Reset property subtype when property type changes
    };


    const handlePriceChange = (e) => {
        console.log(e.target.value, "targeted value");
        setPrice(e.target.value)
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Navbar />
            {/* Top Introduction Box */}
            <section className={`${styles.topIntroductionBox} animate-on-scroll`}>
                <div className={styles.topIntroInnerBox1}>
                    <h2>Properties For Rent</h2>
                    <p>Find the prefect property for rent</p>
                </div>
                <div className={styles.topIntroInnerBox2}>
                    <Image width={200} height={200} src="/images/orange-house.png" alt="" priority={true} />
                </div>
                <div className={styles.searchBiggerBox}>
                    <div className={styles.formBox}>
                        <label htmlFor="">Property Type</label>
                        {/* <select name="" id="">
                            <option value="">Rent</option>
                            <option value="">Buy</option>
                        </select> */}
                        <div className={styles.selectBox}>
                            <div className={styles.selectBox__current} tabIndex="1">
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="11" value="SelectProperty" name="propertyType" onChange={handlePropertyTypeChange} defaultChecked={true} />
                                    <p className={styles.selectBox__inputText}>Select Property Type</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="0" value="Residential" name="propertyType" onChange={handlePropertyTypeChange} />
                                    <p className={styles.selectBox__inputText}>Residential</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="1" value="Commercial" name="propertyType" onChange={handlePropertyTypeChange} />
                                    <p className={styles.selectBox__inputText}>Commercial</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="2" value="Land" name="propertyType" onChange={handlePropertyTypeChange} />
                                    <p className={styles.selectBox__inputText}>Land</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="3" value="MultipleUnits" name="propertyType" onChange={handlePropertyTypeChange} />
                                    <p className={styles.selectBox__inputText}>Multiple Units</p>
                                </div>
                                <img className={styles.selectBox__icon} src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                            </div>
                            <ul className={styles.selectBox__list}>
                                <li>
                                    <label className={styles.selectBox__option} htmlFor="0" aria-hidden="aria-hidden">Residential</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} htmlFor="1" aria-hidden="aria-hidden">Commercial</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} htmlFor="2" aria-hidden="aria-hidden">Land</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} htmlFor="3" aria-hidden="aria-hidden">Multiple Units</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.formBox}>
                        <label htmlFor="">Price</label>
                        {/* <select name="" id="">
                            <option value="">Property Type</option>
                            <option value="">Villa</option>
                            <option value="">Bungalow</option>
                        </select> */}
                        <div className={styles.selectBox}>
                            <div className={styles.selectBox__current} tabIndex="1">
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="12" value="Price" name="price" defaultChecked={true} onChange={handlePriceChange} />
                                    <p className={styles.selectBox__inputText}>Price</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="5" value="1-1000000" name="price" defaultChecked={true} onChange={handlePriceChange} />
                                    <p className={styles.selectBox__inputText}>1-1000000</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="6" value="1000000-4999999" name="price" onChange={handlePriceChange} />
                                    <p className={styles.selectBox__inputText}>1000000-4999999</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="7" value="5000000-10000000" name="price" onChange={handlePriceChange} />
                                    <p className={styles.selectBox__inputText}>5000000 & Above</p>
                                </div>
                                <Image width={100} height={100} className={styles.selectBox__icon} src="/images/arrow.svg" alt="Arrow Icon" aria-hidden="true" />
                            </div>
                            <ul className={styles.selectBox__list}>
                                <li>
                                    <label className={styles.selectBox__option} htmlFor="5" aria-hidden="aria-hidden">1-1000000</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} htmlFor="6" aria-hidden="aria-hidden">1000000-4999999</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} htmlFor="7" aria-hidden="aria-hidden">5000000 & Above</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.formBox} ${styles.flexEnd}`}>
                        <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                    </div>
                </div>
            </section>

            {/* Latest Properties Section */}
            <section className={styles.latestPropertiesSection}>
                <p>DUBAI REAL ESTATE</p>
                <h2>Latest Properties</h2>
                <div className={styles.latestPropertiesBigBox}>

                    {properties.map((property, index) => (
                        <Link href={`/property?id=${property.id}`} key={index} className={styles.latestPropertiesInnerBox}>
                            <Image
                                width={600}
                                height={400}
                                src={`https://a.khelogame.xyz/${property.media_paths[0]}`}
                                alt="Property Image"
                                className={styles.mainHouseImg}
                            />
                            <div className={styles.latestPropertiesContentBox}>
                                <p className={styles.miniText}>{property.property_type}, {property.transaction_type}</p>
                                <h3>{property.property_name}</h3>
                                <p className={styles.priceText}>{property.price}</p>
                                <p className={styles.propertyDescription}>{property.description.substring(0, 60) + '...'}</p>
                                <div className={styles.innerPropertyContent}>
                                    <p><i className="fa-solid fa-bed"></i> {property.bedroom}</p>
                                    <p><i className="fa-solid fa-shower"></i> {property.bathrooms}</p>
                                    <p><i className="fa-solid fa-maximize"></i> {property.area}</p>
                                    <p><i className="fa-solid fa-car"></i> {property.vehicle}</p>
                                    <p><i className="fa-solid fa-up-right-from-square"></i> {property.size}</p>
                                </div>
                                <hr />
                                <div className={styles.innerButtonBox}>
                                    <button><i className="fa-solid fa-phone"></i> Call</button>
                                    <button><i className="fa-solid fa-envelope"></i> Email</button>
                                    <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
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