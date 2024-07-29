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
    const [project, setProject] = useState(null);

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
                setProject(data);
                console.log("project-details ", data);
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };

        if (id) {
            fetchProjectDetails(id);
        }
    }, [id]);

    if (!project) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <section className={`${styles.propertyImagesSection} animate-on-scroll`}>
                {/* Main property image */}
                {project.image_paths && (
                    <Image
                        width={600}
                        height={400}
                        src={`https://a.khelogame.xyz/property/${project.image_paths[0]}`}
                        alt="Property Image"
                        className={styles.mainHouseImg}
                    />
                )}
                <div className={styles.propertyMoreImages}>
                    {project.moreImages && project.moreImages.map((image, index) => (
                        <Image key={index} width={200} height={200} src={image} alt="" />
                    ))}
                </div>

            </section>

            <section className={`${styles.propertyTitleContentBox} animate-on-scroll`}>
                <div className={styles.contentTitleContentBox1}>
                    <h2>{project.project_name}</h2>
                    <h4>{project.created_at}</h4>
                    <p>Developer Name :{project.developer_name}</p>
                </div>
                <div className={styles.contentTitleContentBox2}>
                    <h3>Starting from {project.price}AED</h3>
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
                    {Object.keys(project.amenities).map((key, index) => (
                        <div key={index} className={styles.aminitiesCardsBox}>
                            {project.amenities[key].map((amenity, index) => (
                                <p key={index}>
                                    <span><i className="fa-solid fa-bed"></i></span>
                                    {amenity} {/* Render the amenity property here */}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section className={`${styles.descriptionContentBox} animate-on-scroll`} id='descriptionSection'>
                <h3>Description</h3>
                <p>{project.description}</p>
            </section>

            <section className={`${styles.addressSection} animate-on-scroll`} id='addressSection'>
                <div className={styles.addressTopContent}>
                    <h2>Property Details</h2>
                    <Link href={project.location}><button className={styles.googleMapsBtn}><i className="fa-solid fa-location-dot"></i>Open On Google Maps</button></Link>
                </div>
                <div className={styles.addressBottomContentBox}>
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Delivery Date</span><span>{project.delivery_date}</span></p>
                        <p><span className={styles.darkText}>Construction Start Date</span><span>{project.construction_start_date}</span></p>
                    </div>
                    <br/>
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Expected Completion Date</span><span>{project.expected_completion_date}</span></p>
                        <p><span className={styles.darkText}>Locality</span><span>{project.locality}</span></p>
                    </div>
                    <br/>
                    <div className={styles.addressBottomBox}>
                        <p><span className={styles.darkText}>Number of buildings</span><span>{project.number_of_buildings}</span></p>
                        <p><span className={styles.darkText}>City</span><span>{project.city}</span></p>
                    </div>
                    <br/>
                </div>
            </section>

            {/* Units Section */}
            <section className={`${styles.descriptionContentBox} animate-on-scroll`} id='units'>
                <h3>Units</h3>
                {project.building_names && Object.entries(project.building_names).map(([buildingName, units]) => (
                    <div key={buildingName}>
                        <h4>Building Name: {buildingName}</h4>
                        {units.map((unit, index) => (
                            <div key={index} className={styles.unit}>
                                <p>{unit.floor_name}</p>
                                <p>{unit.bedrooms} Beds</p>
                                <p>{unit.area} sqft</p>
                                {unit.floor_plan_image && (
                                    <Image
                                        width={200}
                                        height={200}
                                        src={`https://a.khelogame.xyz/property/${unit.floor_plan_image[0]}`}
                                        
                                        alt="Floor Plan"
                                    />
                                )}
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
