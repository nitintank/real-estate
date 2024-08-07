import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import styles from "../styles/Property.module.css";
import Link from 'next/link';
import useIntersectionObserver from '../pages/hooks/useIntersectionObserver';

const ProjectDetails = () => {
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

    const router = useRouter();
    const { id } = router.query;
    const [Projectdetails, setProjectdetails] = useState(null);

    useEffect(() => {
        const fetchProjectDetails = async (projectId) => {
            try {
                if (!projectId) {
                    throw new Error('Project ID is undefined');
                }
                const response = await fetch(`https://a.khelogame.xyz/projects/${projectId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch project details');
                }
                const data = await response.json();
                setProjectdetails(data);
                console.log("project-details ", data);
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };

        if (id) {
            fetchProjectDetails(id);
        }
    }, [id]);

    if (!Projectdetails) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <section className={`${styles.propertyImagesSection} animate-on-scroll`}>
                {/* Main property image */}
                {Projectdetails.project.image_paths && Projectdetails.project.image_paths.length > 0 && (
                    <Image
                        width={600}
                        height={400}
                        src={`https://a.khelogame.xyz/property/${Projectdetails.project.image_paths[0]}`}
                        alt="Property Image"
                        className={styles.mainHouseImg}
                    />
                )}
                <div className={styles.propertyMoreImages}>
                    {Projectdetails.project.moreImages && project.moreImages.map((image, index) => (
                        <Image key={index} width={200} height={200} src={image} alt={`Additional Image ${index}`} />
                    ))}
                </div>
            </section>

            <section className={`${styles.propertyTitleContentBox} animate-on-scroll`}>
                <div className={styles.contentTitleContentBox1}>
                    <h2>{Projectdetails.project.project_name}</h2>
                    <h4>{new Date(Projectdetails.project.created_at).toLocaleDateString()}</h4>
                    <p>Developer Name: {Projectdetails.project.developer_name}</p>
                </div>
                <div className={styles.contentTitleContentBox2}>
                    <h3>Starting from {Projectdetails.project.price} AED</h3>
                    <button>Contact Us</button>
                </div>
            </section>

            <section className={`${styles.amenitiesContentBox} animate-on-scroll`}>
                <ul>
                    <li className={styles.activeSelection}>Amenities</li>
                    <Link href="#descriptionSection" scroll={false}><li>Description</li></Link>
                    <Link href="#units" scroll={false}><li>Units</li></Link>
                </ul>
                <div className={styles.amenitiesCardsBigBox}>
                    {Projectdetails.project.amenities && Object.keys(Projectdetails.project.amenities).length > 0 ? (
                        Object.keys(Projectdetails.project.amenities).map((key, index) => (
                            <div key={index} className={styles.aminitiesCardsBox}>
                                {Projectdetails.project.amenities[key].map((amenity, index) => (
                                    <p key={index}>
                                        <span><i className="fa-solid fa-bed"></i></span>
                                        {amenity}
                                    </p>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>No amenities available.</p>
                    )}
                </div>
            </section>

            <section className={`${styles.descriptionContentBox} animate-on-scroll`} id='descriptionSection'>
                <h3>Description</h3>
                <p>{Projectdetails.project.description}</p>
            </section>

            <section className={`${styles.addressSection} animate-on-scroll`} id='addressSection'>
                <div className={styles.addressTopContent}>
                    <h2>Property Details</h2>
                    {Projectdetails.project.location && (
                        <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(Projectdetails.project.location)}`}>
                            <button className={styles.googleMapsBtn}>
                                <i className="fa-solid fa-location-dot"></i> Open On Google Maps
                            </button>
                        </Link>
                    )}
                </div>
                <div className={styles.addressBottomContentBox}>
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Delivery Date</span><span>{new Date(Projectdetails.project.delivery_date).toLocaleDateString()}</span></p>
                        <p><span className={styles.darkText}>Construction Start Date</span><span>{new Date(Projectdetails.project.construction_start_date).toLocaleDateString()}</span></p>
                    </div>
                    <br />
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Expected Completion Date</span><span>{new Date(Projectdetails.project.expected_completion_date).toLocaleDateString()}</span></p>
                        <p><span className={styles.darkText}>Locality</span><span>{Projectdetails.project.locality}</span></p>
                    </div>
                    <br />
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Number of buildings</span><span>{Projectdetails.project.number_of_buildings}</span></p>
                        <p><span className={styles.darkText}>City</span><span>{Projectdetails.project.city}</span></p>
                    </div>
                    <br />
                </div>
            </section>

            <section className={`${styles.descriptionContentBox} animate-on-scroll`} id='units'>
                <h3>Units</h3>
                {Projectdetails.buildings && Projectdetails.buildings.map((building, buildingIndex) => (
                    <div key={buildingIndex}>
                        <h4>Building Name: {building.building_name}</h4>
                        {building.floors.map((floor, floorIndex) => (
                            <div key={floorIndex} className={styles.unit}>
                                <p>{floor.floor_name}</p>
                                <p>{floor.bedrooms || 'N/A'} Beds</p>
                                <p>{floor.area || 'N/A'} sqft</p>
                                {floor.floor_plan_image && (
                                    <Image
                                        width={200}
                                        height={200}
                                        src={`https://a.khelogame.xyz/property/${floor.floor_plan_image}`}
                                        alt="Floor Plan"
                                    />
                                )}
                                <p>Price: {floor.floor_price} AED</p>
                            </div>
                        ))}
                    </div>
                ))}
            </section>

            <Footer />
        </>
    );
};

export default ProjectDetails;
