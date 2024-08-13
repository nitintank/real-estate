import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../styles/Search.module.css";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next');

const Search = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [filters, setFilters] = useState({
        keyword: '',
        bedroom: '',
        propertyType: '',
        subType: '',
        location: '',
        selectedAmenities: []
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
        if (filterName === 'location') {
            setLocation(value);
        }
    };

    const fetchProperties = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://a.khelogame.xyz/get-properties');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProperties(data);
            setFilteredProperties(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (router.isReady) {
            fetchProperties();
        }
    }, [router.isReady]);

    useEffect(() => {
        if (router.query) {
            const newFilters = { ...filters };
            Object.keys(router.query).forEach(key => {
                newFilters[key] = router.query[key];
                if (key === 'location') {
                    setLocation(router.query[key]);
                }
            });
            setFilters(newFilters);
        }
    }, [router.query]);

    useEffect(() => {
        applyFilters();
    }, [filters, properties]);

    const applyFilters = () => {
        let tempProperties = [...properties];

        if (filters.propertyType) {
            tempProperties = tempProperties.filter(
                (property) => property.property_type === filters.propertyType
            );
        }

        if (filters.subType) {
            tempProperties = tempProperties.filter(
                (property) => property.property_categories === filters.subType
            );
        }

        if (filters.location) {
            const locationLower = filters.location.toLowerCase();
            tempProperties = tempProperties.filter(
                (property) => property.location && property.location.toLowerCase().includes(locationLower)
            );
        }

        if (filters.keyword) {
            const keywordLower = filters.keyword.toLowerCase();
            tempProperties = tempProperties.filter((property) =>
                `${property.property_name} ${property.description}`
                    .toLowerCase()
                    .includes(keywordLower)
            );
        }

        if (filters.bedroom) {
            if (filters.bedroom === '5+') {
                tempProperties = tempProperties.filter((property) => property.bedroom >= 5);
            } else {
                tempProperties = tempProperties.filter(
                    (property) => property.bedroom === parseInt(filters.bedroom, 10)
                );
            }
        }

        if (filters.selectedAmenities?.length > 0) {
            tempProperties = tempProperties.filter(property =>
                filters.selectedAmenities.every(amenity =>
                    property.amenities.some(propAmenity => propAmenity.amenity === amenity)
                )
            );
        }

        setFilteredProperties(tempProperties);
    };

    const handleAmenityChange = (amenity) => {
        setFilters((prevFilters) => {
            const newSelectedAmenities = prevFilters.selectedAmenities.includes(amenity)
                ? prevFilters.selectedAmenities.filter((a) => a !== amenity)
                : [...prevFilters.selectedAmenities, amenity];
            return { ...prevFilters, selectedAmenities: newSelectedAmenities };
        });
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const amenityCheckbox = (category, amenity) => (
        <label key={amenity}>
            <input
                type="checkbox"
                onChange={() => handleAmenityChange(amenity)}
                checked={filters.selectedAmenities.includes(amenity)}
            />
            {amenity}
        </label>
    );

    const handleSearch = () => {
        applyFilters();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Navbar />
            <section className={styles.topIntroductionBox}>
                <div className={styles.searchBiggerBox}>
                    <div className={styles.formBox}>
                        <label>Keywords</label>
                        <input
                            type="text"
                            placeholder="Enter Keywords"
                            onChange={(e) => handleFilterChange('keyword', e.target.value)}
                        />
                    </div>
                    <div className={styles.formBox}>
                        <label>Location</label>
                        <input
                            type="text"
                            placeholder="Enter Location"
                            value={location}
                            onChange={(e) => handleFilterChange('location', e.target.value)}
                        />
                    </div>
                    <div className={styles.formBox}>
                        <label>Type</label>
                        <select onChange={(e) => handleFilterChange('subType', e.target.value)}>
                            <option value="">Property Type</option>
                            <option value="Rent">For Rent</option>
                            <option value="Buy">For Buy</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <label>Category</label>
                        <select onChange={(e) => handleFilterChange('propertyType', e.target.value)}>
                            <option value="">Select Property Type</option>
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Land">Land</option>
                            <option value="MultipleUnits">Multiple Units</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <label>Bedrooms</label>
                        <select onChange={(e) => handleFilterChange('bedroom', e.target.value)}>
                            <option value="">Any</option>
                            <option value="1">1 Bedroom</option>
                            <option value="2">2 Bedrooms</option>
                            <option value="3">3 Bedrooms</option>
                            <option value="4">4 Bedrooms</option>
                            <option value="5">5 Bedrooms</option>
                            <option value="5+">5+ Bedrooms</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <label>Amenities</label>
                        <button onClick={openModal} className={styles.amenities_btn}>Select Amenities</button>
                    </div>
                    <div className={`${styles.formBox} ${styles.flexEnd}`}>
                        <button onClick={handleSearch} className={styles.search_btn}>
                            <i className="fa-solid fa-magnifying-glass"></i> Search
                        </button>
                    </div>
                </div>
            </section>
            <section className={styles.searchResultsSection}>
                <h2>Search Results</h2>
                <div className={styles.searchResultsBox}>
                    <div className={styles.latestPropertiesBigBox}>
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map((property, index) => (
                                <Link href={`/property?id=${property.id}`} key={index} className={styles.latestPropertiesInnerBox}>
                                    <Image
                                        width={600}
                                        height={400}
                                        src={`https://a.khelogame.xyz/${property.media_paths[0]}`}
                                        alt="Property Image"
                                        className={styles.mainHouseImg}
                                    />
                                    <div className={styles.latestPropertiesContentBox}>
                                        <p className={styles.miniText}>{property.property_type}</p>
                                        <h3>{property.property_name}</h3>
                                        <p className={styles.priceText}>{property.price}</p>
                                        <p className={styles.propertyDescription}>{property.description.substring(0, 110) + '...'}</p>
                                        {/* <div className={styles.innerPropertyContent}>
                                            <p><i className="fa-solid fa-bed"></i> {property.bedroom} Bed</p>
                                            <p><i className="fa-solid fa-shower"></i> {property.washroom} Bath</p>
                                            <p><i className="fa-solid fa-location-dot"></i> {property.location}</p>
                                        </div> */}
                                        <div className={styles.innerPropertyContent}>
                  <p><i className="fa-solid fa-bed"></i> {property.bedroom}</p>
                  <p><i className="fa-solid fa-shower"></i> {property.bathroom}</p>
                  <p><i className="fa-solid fa-maximize"></i> {property.area}</p>
                  <p><i className="fa-solid fa-car"></i> {property.parking}</p>
                  <p><i className="fa-solid fa-up-right-from-square"></i> {property.size}</p>
                </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No properties found matching the filters.</p>
                        )}
                    </div>
                </div>
            </section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Select Amenities"
            >
                <h2>Select Amenities</h2>
                <button onClick={closeModal} style={{ backgroundColor: '#333', color: '#fff', border: 'none', padding: '5px 10px' }}>Close</button>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {['Gym', 'Laundry', 'Dishwasher', 'Pets', 'Parking', 'Fireplace'].map(amenity => amenityCheckbox('Amenities', amenity))}
                </div>
            </Modal>
            <Footer />
        </>
    );
};

export default Search;
