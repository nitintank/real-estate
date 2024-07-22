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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

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
        applyFilters();
    }, [filters]);

    // const applyFilters = () => {
    //     let tempProperties = [...properties];

    //     if (filters.propertyType) {
    //         tempProperties = tempProperties.filter(
    //             (property) => property.property_categories === filters.propertyType
    //         );
    //     }

    //     if (filters.subType) {
    //         tempProperties = tempProperties.filter(
    //             (property) => property.property_type === filters.subType
    //         );
    //     }

    //     if (filters.location) {
    //         const locationLower = filters.location.toLowerCase();
    //         tempProperties = tempProperties.filter(
    //             (property) =>
    //                 property.city.toLowerCase().includes(locationLower) ||
    //                 property.address.toLowerCase().includes(locationLower)
    //         );
    //     }

    //     if (filters.keyword) {
    //         const keywordLower = filters.keyword.toLowerCase();
    //         tempProperties = tempProperties.filter((property) =>
    //             `${property.property_name} ${property.description}`
    //                 .toLowerCase()
    //                 .includes(keywordLower)
    //         );
    //     }

    //     if (filters.bedroom) {
    //         if (filters.bedroom === '5+') {
    //             tempProperties = tempProperties.filter((property) => property.bedroom >= 5);
    //         } else {
    //             tempProperties = tempProperties.filter(
    //                 (property) => property.bedroom === parseInt(filters.bedroom)
    //             );
    //         }
    //     }


    //     if (filters.selectedAmenities.length > 0) {
    //         console.log(filters, "filters");
    //         console.log("tempProperties>>>>", tempProperties);
    //         console.log("properties>>>>", properties);

    //         // Start filtering from the original set of properties
    //         let updatedProperties = properties.slice();

    //         updatedProperties = updatedProperties.filter(property =>
    //             filters.selectedAmenities.every(amenity => {
    //                 console.log("property=>>", property);
    //                 console.log("amenity=>>", amenity);

    //                 return property.amenities.some(propAmenity => {
    //                     console.log("propAmenity=>>", propAmenity);
    //                     console.log("propAmenity.amenity === amenity ::", propAmenity.amenity, "::", amenity);
    //                     console.log("propAmenity.amenity === amenity ::", propAmenity.amenity === amenity);
    //                     return propAmenity.amenity === amenity;
    //                 });
    //             })
    //         );

    //         setFilteredProperties(updatedProperties);
    //     } else {
    //         setFilteredProperties(properties);
    //     }
    // };

    const applyFilters = () => {
        let tempProperties = [...properties];
      
        if (filters.propertyType) {
          tempProperties = tempProperties.filter(
            (property) => property.property_categories === filters.propertyType
          );
        }
      
        if (filters.subType) {
          tempProperties = tempProperties.filter(
            (property) => property.property_type === filters.subType
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
      
        if (filters.selectedAmenities.length > 0) {
          tempProperties = tempProperties.filter(property =>
            filters.selectedAmenities.every(amenity =>
              property.amenities.some(propAmenity => propAmenity.amenity === amenity)
            )
          );
        }
      
        setFilteredProperties(tempProperties);
      };
    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
    };

    const handleAmenityChange = (amenity) => {
        console.log("curretn aminity:=>", amenity)
        setFilters((prevFilters) => {
            const newSelectedAmenities = prevFilters.selectedAmenities.includes(amenity)
                ? prevFilters.selectedAmenities.filter((a) => a !== amenity)
                : [...prevFilters.selectedAmenities, amenity];
            console.log(newSelectedAmenities, "newSelectedAmenities")
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
                            onChange={(e) => handleFilterChange('location', e.target.value)}
                        />
                    </div>
                    <div className={styles.formBox}>
                        <label>Type</label>
                        <select onChange={(e) => handleFilterChange('propertyType', e.target.value)}>
                            <option value="">Property Type</option>
                            <option value="Rent">For Rent</option>
                            <option value="Buy">For Buy</option>
                        </select>
                    </div>
                    <div className={styles.formBox}>
                        <label>Category</label>
                        <select onChange={(e) => handleFilterChange('subType', e.target.value)}>
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
                            ))
                        ) : (
                            <p>No properties found for the selected filters.</p>
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
                <h2 className={styles.modal_h2}>Select Amenities For This Property</h2>
                <h3 className={styles.modal_h3}>Recreation And Family</h3>
                <div className={styles.modal_Label}>
                    {amenityCheckbox('recreationAndFamily', 'barbeque area')}
                    {amenityCheckbox('recreationAndFamily', 'day care center')}
                    {amenityCheckbox('recreationAndFamily', 'kids play area')}
                    {amenityCheckbox('recreationAndFamily', 'lawn or garden')}
                    {amenityCheckbox('recreationAndFamily', 'cafeteria or canteen')}
                </div>
                <h3 className={styles.modal_h3}>Health And Fitness</h3>
                <div className={styles.modal_Label}>
                    {amenityCheckbox('healthAndFitness', 'first aid medical center')}
                    {amenityCheckbox('healthAndFitness', 'gym or health club')}
                    {amenityCheckbox('healthAndFitness', 'jacuzzi')}
                    {amenityCheckbox('healthAndFitness', 'sauna')}
                    {amenityCheckbox('healthAndFitness', 'swimming pool')}
                </div>
                <h3 className={styles.modal_h3}>Business and Security</h3>
                <div className={styles.modal_Label}>
                    {amenityCheckbox('businessAndSecurity', 'conference room')}
                    {amenityCheckbox('businessAndSecurity', 'business center')}
                    {amenityCheckbox('businessAndSecurity', 'intercom')}
                    {amenityCheckbox('businessAndSecurity', 'atm')}
                    {amenityCheckbox('businessAndSecurity', 'cctv security')}
                </div>
                <h3 className={styles.modal_h3}>Nearby Locations And Other Facilities</h3>
                <div className={styles.modal_Label}>
                    {amenityCheckbox('nearbyLocationsAndOtherFacilities', 'community center')}
                    {amenityCheckbox('nearbyLocationsAndOtherFacilities', 'mosque')}
                    {amenityCheckbox('nearbyLocationsAndOtherFacilities', 'market area')}
                    {amenityCheckbox('nearbyLocationsAndOtherFacilities', 'public parking')}
                    {amenityCheckbox('nearbyLocationsAndOtherFacilities', 'school')}
                </div>
                <h3 className={styles.modal_h3}>Other Facilities</h3>
                <div className={styles.modal_Label}>
                    {amenityCheckbox('otherFacilities', 'maintenance staff')}
                    {amenityCheckbox('otherFacilities', 'security staff')}
                    {amenityCheckbox('otherFacilities', 'cleaning services')}
                </div>
                <button onClick={closeModal} className={styles.modal_save_btn}>Save</button>
            </Modal>
            <Footer />
        </>
    );
};

export default Search;

