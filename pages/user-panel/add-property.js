import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import styles from "@/styles/AddProperty.module.css";
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

const addProperty = () => {
    const [propertyName, setPropertyName] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [bedroom, setBedroom] = useState('');
    const [size, setSize] = useState('');
    const [area, setArea] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [imagePaths, setImagePaths] = useState([]);
    const [mediaPaths, setMediaPaths] = useState([]);
    const [token, setToken] = useState(null);
    const [propertySubtype, setPropertySubtype] = useState('');
    const [saleOrRent, setSaleOrRent] = useState('');
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
        // Check local storage if user is logged in
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus == null) {
            location.href = "/"
        }
    }, []);

    const handlePropertyTypeChange = (e) => {
        setPropertyType(e.target.value);
        setPropertySubtype(''); // Reset propertySubtype when propertyType changes
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('property_name', propertyName);
        formData.append('property_type', propertyType);
        formData.append('property_subtype', propertySubtype);
        formData.append('price', price);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('bedroom', bedroom);
        formData.append('size', size);
        formData.append('area', area);
        formData.append('vehicle', vehicle);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('pincode', pincode);
        formData.append('property_categories', saleOrRent);
        imagePaths.forEach((imageFile, index) => {
            formData.append(`image_path`, imageFile); // key should match server expectations
        });

        mediaPaths.forEach((mediaFile, index) => {
            formData.append('media_path', mediaFile); // key should match server expectations
        });

        if (Object.values(amenities).flat().length > 0) {
            formData.append('amenities', JSON.stringify(amenities));
        }

        console.log('FormData being sent:', Array.from(formData.entries()));

        try {
            const response = await fetch('https://a.khelogame.xyz/add-property', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
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
                onChange={() => handleAmenityChange(category, label)}
            />
            <label>{label}</label>
        </div>
    );

    const propertyCategories = {
        Residential: [
            'Apartment',
            'Townhouse',
            'Penthouse',
            'Residential Building',
            'Residential Villa',
            'Compound',
        ],
        Commercial: [
            'Office',
            'Retail',
            'Staff Accommodation',
            'Warehouse',
            'Commercial Building',
            'Commercial Villa',
            'Factory',
            'Showroom',
        ],
        Land: ['Residential Land', 'Commercial Land', 'Industrial Land', 'Agricultural Land'],
        MultipleUnits: ['Multiple Units'],
    };

    return (
        <>
            <Navbar />
            <section className={styles.mainContentBigBox}>
                <div className={styles.mainSidebarBox}>
                    <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                    <Link href="/user-panel/add-property" className={styles.activeSelection}><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
                    <Link href="/user-panel/property-list"><i className="fa-solid fa-list"></i> Property List</Link>
                    <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
                    <Link href="/user-panel/all-enquiry"><i className="fa-solid fa-comment"></i> All Enquiry</Link>
                </div>
                <div className={styles.mainContentBox}>
                    <h2>Add New Property</h2>
                    <form onSubmit={handleSubmit}>
                        {!propertyType && <div className={styles.propertyTypeBox}>
                            <h3>Property Type</h3>
                            <input type="radio" value="Residential" id="Residential" name='property_type' onChange={handlePropertyTypeChange} />
                            <label htmlFor="Residential">Residential</label>
                            <input type="radio" value="Commercial" id="Commercial" name='property_type' onChange={handlePropertyTypeChange} />
                            <label htmlFor="Commercial">Commercial</label>
                            <input type="radio" value="Land" id="Land" name='property_type' onChange={handlePropertyTypeChange} />
                            <label htmlFor="Land">Land</label>
                            <input type="radio" value="MultipleUnits" id="MultipleUnits" name='property_type' onChange={handlePropertyTypeChange} />
                            <label htmlFor="MultipleUnits">MultipleUnits</label>
                        </div>
                        }

                        {propertyType && !propertySubtype && (
                            <div className={styles.propertyTypeBox}>
                                <h3>Property Category</h3>
                                {propertyCategories[propertyType].map((subtype, index) => (
                                    <>
                                        <input key={index} type="radio" value={subtype} id={subtype} name='property_category' onChange={(e) => setPropertySubtype(e.target.value)} />
                                        <label htmlFor={subtype}>{subtype}</label>
                                    </>
                                ))}
                            </div>
                        )}
                        {propertySubtype &&
                            <>
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
                                <label>Bedroom</label>
                                <input
                                    type="text"
                                    value={bedroom}
                                    onChange={(e) => setBedroom(e.target.value)}
                                    placeholder="Add Number of Bedrooms"
                                />
                                <label>Size</label>
                                <input
                                    type="text"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    placeholder="Add Size"
                                />
                                <label>Vehicle</label>
                                <input
                                    type="text"
                                    value={vehicle}
                                    onChange={(e) => setVehicle(e.target.value)}
                                    placeholder="Add Number of Vehicles"
                                />
                                <label>Area</label>
                                <input
                                    type="text"
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
                                    placeholder="Add Area"
                                />
                                <label>Address</label>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Add Address"
                                />
                                <label>City</label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Add City"
                                />
                                <label>State/Country</label>
                                <input
                                    type="text"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    placeholder="Add State/Country"
                                />
                                <label>Zip/Postal Code</label>
                                <input
                                    type="text"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                    placeholder="Add Zip/Postal Code"
                                />

                                <label>Listing Type</label><br />
                                <select value={saleOrRent} onChange={(e) => setSaleOrRent(e.target.value)}>
                                    <option value="">Select Listing Type</option>
                                    <option value="Rent">For Rent</option>
                                    <option value="Sale">For Sale</option>
                                </select><br />
                                <label>Add Property Images</label>
                                <input type="file" onChange={(e) => setMediaPaths(Array.from(e.target.files))} multiple />
                                <label>Floor Map Images</label>
                                <input type="file" onChange={(e) => setImagePaths(Array.from(e.target.files))} multiple />

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
                                <br />
                                <button type="submit">Add Property</button>
                            </>}
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default addProperty;
