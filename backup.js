import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import styles from "@/styles/AddProperty.module.css";
import { useState,useEffect } from 'react';

const addProperty = () => {
    const [propertyName, setPropertyName] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [imagePath, setImagePath] = useState(null);
    const [mediaPaths, setMediaPaths] = useState([]);
    const [token, setToken] = useState(null);
    const [amenities, setAmenities] = useState({
        recreationAndFamily: [],
        healthAndFitness: [],
        features: [],
        cleaningAndMaintenance: [],
    });

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('property_name', propertyName);
        formData.append('property_type', propertyType);
        formData.append('price', price);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('image_path', imagePath);
        (mediaPaths ?? []).forEach((mediaPath, index) => {
            formData.append(`media_paths[${index}]`, mediaPath);
        });
        // formData.append('amenities', JSON.stringify(amenities));
        if (Object.values(amenities).flat().length > 0) {
            formData.append('amenities', JSON.stringify(amenities));
        }


        try {
            const response = await fetch('https://a.khelogame.xyz/add-property', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAmenityChange = (category, amenity) => {
        setAmenities((prevAmenities) => {
            const categoryAmenities = prevAmenities[category];
            if (categoryAmenities.includes(amenity)) {
                return {
                    ...prevAmenities,
                    [category]: categoryAmenities.filter(item => item !== amenity)
                };
            } else {
                return {
                    ...prevAmenities,
                    [category]: [...categoryAmenities, amenity]
                };
            }
        });
    };

    const amenityCheckbox = (category, label) => (
        <div className={styles.checkBoxDiv}>
            <input
                type="checkbox"
                onChange={() => handleAmenityChange(category, label.toLowerCase().replace(/ /g, '_'))}
            />
            <label>{label}</label>
        </div>
    );
    // return (
    //     <>
    //     <Navbar />
        
    //     <section className={styles.mainContentBigBox}>
    //         <div className={styles.mainSidebarBox}>
    //             <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
    //             <Link href="/user-panel/add-property" className={styles.activeSelection}><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
    //             <Link href="/user-panel/property-list"><i className="fa-solid fa-list"></i> Property List</Link>
    //             <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
    //         </div>
    //         <div className={styles.mainContentBox}>
    //             <h2>Add New Property</h2>
    //             <form onSubmit={handleSubmit}>
    //                 <label>Title</label>
    //                 <input type="text" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} placeholder="Add Property Title" />
    //                 <label>Description</label>
    //                 <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add Property Description" />
    //                 <label>Add Images</label>
    //                 <input type="file" onChange={(e) => setImagePath(e.target.files[0])} />
    //                 <label>Add  Property Images</label>
    //                 <input type="file" onChange={(e) => setMediaPaths(Array.from(e.target.files))} multiple />
    //                 <h3 className={styles.amenitiesText}>Select Amenities For This Property</h3>
    //                 <h4 className={styles.amenitiesNamesText}>Recreation And Family</h4>
    //                 <div className={styles.checkBoxBigBox}>
    //                     <div className={styles.checkBoxDiv}>
    //                         <input type="checkbox" onChange={() => handleAmenityChange('recreationAndFamily', 'barbeque area')} />
    //                         <label>Barbeque Area</label>
    //                     </div>
    //                     <div className={styles.checkBoxDiv}>
    //                         <input type="checkbox" onChange={() => handleAmenityChange('recreationAndFamily', 'day care center')} />
    //                         <label>Day Care Center</label>
    //                     </div>
    //                     <div className={styles.checkBoxDiv}>
    //                         <input type="checkbox" onChange={() => handleAmenityChange('recreationAndFamily', 'kids play area')} />
    //                         <label>Kids Play Area</label>
    //                     </div>
    //                     <div className={styles.checkBoxDiv}>
    //                         <input type="checkbox" onChange={() => handleAmenityChange('recreationAndFamily', 'lawn or garden')} />
    //                         <label>Lawn Or Garden</label>
    //                     </div>
    //                     <div className={styles.checkBoxDiv}>
    //                         <input type="checkbox" onChange={() => handleAmenityChange('recreationAndFamily', 'cafeteria or canteen')} />
    //                         <label>Cafeteria or Canteen</label>
    //                     </div>
    //                 </div>
    //                 {/* Repeat similar blocks for other categories */}
    //                 {/* Add additional input fields for other property details like property type, price, location, etc. */}
    //                 <label>Property Type</label>
    //                 <input type="text" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} placeholder="Add Property Type" />
    //                 <label>Price</label>
    //                 <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Add Price" />
    //                 <label>Location</label>
    //                 <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Add Location" />
                    
    //                 {/* Add a submit button */}
    //                 <button type="submit">Add Property</button>
    //             </form>
    //         </div>
    //     </section>
    //     <Footer />
    // </>
    // )
    return (
        <>
            <Navbar />
            <section className={styles.mainContentBigBox}>
                <div className={styles.mainSidebarBox}>
                    <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                    <Link href="/user-panel/add-property" className={styles.activeSelection}><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
                    <Link href="/user-panel/property-list"><i className="fa-solid fa-list"></i> Property List</Link>
                    <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
                </div>
                <div className={styles.mainContentBox}>
                    <h2>Add New Property</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input
                            type="text"
                            value={propertyName}
                            onChange={(e) => setPropertyName(e.target.value)}
                            placeholder="Add Property Title"
                        />
                        <label>Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Add Property Description"
                        />
                        <label>Add Images</label>
                        <input type="file" onChange={(e) => setImagePath(e.target.files[0])} />
                        <label>Add Property Images</label>
                        <input type="file" onChange={(e) => setMediaPaths(Array.from(e.target.files))} multiple />
                        <h3 className={styles.amenitiesText}>Select Amenities For This Property</h3>
                        <h4 className={styles.amenitiesNamesText}>Recreation And Family</h4>
                        <div className={styles.checkBoxBigBox}>
                            {amenityCheckbox('recreationAndFamily', 'barbeque area')}
                            {amenityCheckbox('recreationAndFamily', 'day care center')}
                            {amenityCheckbox('recreationAndFamily', 'kids play area')}
                            {amenityCheckbox('recreationAndFamily', 'lawn or garden')}
                            {amenityCheckbox('recreationAndFamily', 'cafeteria or canteen')}
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Health And Fitness</h4>
                        <div className={styles.checkBoxBigBox}>
                            {amenityCheckbox('healthAndFitness', 'first aid medical center')}
                            {amenityCheckbox('healthAndFitness', 'gym or health club')}
                            {amenityCheckbox('healthAndFitness', 'jacuzzi')}
                            {amenityCheckbox('healthAndFitness', 'sauna')}
                            {amenityCheckbox('healthAndFitness', 'steam room')}
                            {amenityCheckbox('healthAndFitness', 'swimming pool')}
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Features</h4>
                        <div className={styles.checkBoxBigBox}>
                            {amenityCheckbox('features', 'double glazed windows')}
                            {amenityCheckbox('features', 'centrally air conditioned')}
                            {amenityCheckbox('features', 'central heating')}
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Cleaning And Maintenance</h4>
                        <div className={styles.checkBoxBigBox}>
                            {amenityCheckbox('cleaningAndMaintenance', 'waste disposal')}
                            {amenityCheckbox('cleaningAndMaintenance', 'maintenance staff')}
                            {amenityCheckbox('cleaningAndMaintenance', 'cleaning services')}
                        </div>
                        <label>Property Type</label>
                        <input
                            type="text"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            placeholder="Add Property Type"
                        />
                        <label>Price</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Add Price"
                        />
                        <label>Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Add Location"
                        />
                        <button type="submit">Add Property</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default addProperty
