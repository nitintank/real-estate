import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import styles from "../styles/Projects.module.css";
import Image from 'next/image';
import Link from 'next/link';
import useIntersectionObserver from '../pages/hooks/useIntersectionObserver';
import { useRouter } from 'next/router';

const SearchProjectFilter = () => {
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(styles.animate);
                observer.unobserve(entry.target);
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };

    useIntersectionObserver(observerCallback, observerOptions);

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        location: '',
        propertyType: '',
        bedrooms: '',
        price: '',
    });
    const router = useRouter();
    const { query } = router;

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleSearch = () => {
        router.push({
            pathname: router.pathname,
            query: { ...filters },
        });
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://a.khelogame.xyz/projects');
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched projects:', data);
                    const filteredProjects = data.filter(project => {
                        return (
                            (!query.location || project.location.toLowerCase().includes(query.location.toLowerCase())) &&
                            (!query.propertyType || project.property_type === query.propertyType) &&
                            (!query.price || {
                                "1-1000000": project.price >= 1 && project.price <= 1000000,
                                "1000000-2000000": project.price > 1000000 && project.price <= 2000000,
                                "2000000-5000000": project.price > 2000000 && project.price <= 5000000,
                                "5000000": project.price > 5000000,
                            }[query.price]) &&
                            (!query.bedroom || project.bedroom === query.bedroom)
                        );
                    });
                    console.log('Filtered projects:', filteredProjects);
                    setProjects(filteredProjects);
                } else {
                    const errorData = await response.json();
                    console.error('Error fetching projects:', errorData);
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [query]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />

<br/>
           <section className={`${styles.topIntroductionBox} animate-on-scroll`}>
           <div className={styles.searchBiggerBox}>
                <div className={styles.formBox}>
                    <input
                        type="text"
                        name="location"
                        value={filters.location}
                        onChange={handleFilterChange}
                        placeholder="Enter An Address, City Or Zip Code"
                    />
                </div>
                <div className={styles.formBox}>
                    <select
                        name="propertyType"
                        value={filters.propertyType}
                        onChange={handleFilterChange}
                    >
                        <option value="">Property Type</option>
                        <option value="Flat/ Apartment">Flat/ Apartment</option>
                        <option value="Residential House">Residential House</option>
                        <option value="Villa">Villa</option>
                        <option value="Builder Floor Apartment">Builder Floor Apartment</option>
                        <option value="Residential Land/ Plot">Residential Land/ Plot</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Studio Apartment">Studio Apartment</option>
                        <option value="Commercial Office Space">Commercial Office Space</option>
                        <option value="Office in IT Park/ SEZ">Office in IT Park/ SEZ</option>
                        <option value="Commercial Shop">Commercial Shop</option>
                        <option value="Commercial Showroom">Commercial Showroom</option>
                        <option value="Commercial Land">Commercial Land</option>
                        <option value="Warehouse/ Godown">Warehouse/ Godown</option>
                        <option value="Industrial Land">Industrial Land</option>
                        <option value="Industrial Building">Industrial Building</option>
                        <option value="Industrial Shed">Industrial Shed</option>
                        <option value="Agricultural Land">Agricultural Land</option>
                        <option value="Farm House">Farm House</option>
                    </select>
                </div>
                <div className={styles.formBox}>
                    <select
                        name="bedrooms"
                        value={filters.bedrooms}
                        onChange={handleFilterChange}
                    >
                        <option value="">Bedrooms</option>
                        <option value="1-2">1-2</option>
                        <option value="3-4">3-4</option>
                        <option value="5">5 +</option>
                    </select>
                </div>
                <div className={styles.formBox}>
                    <select
                        name="price"
                        value={filters.price}
                        onChange={handleFilterChange}
                    >
                        <option value="">Price</option>
                        <option value="1-1000000">1-1000000</option>
                        <option value="1000000-2000000">1000000-2000000</option>
                        <option value="2000000-5000000">2000000-5000000</option>
                        <option value="5000000">5000000+</option>
                    </select>
                </div>
                <div className={`${styles.formBox} ${styles.flexEnd}`}>
                    <button onClick={handleSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i> Search
                    </button>
                </div>
            </div>
            </section>  

            <section className={`${styles.mainSection} animate-on-scroll`}>
                <div className={styles.mainSectionBox1}>
                    <p>POPULAR AREAS</p>
                    <h3>Recent Projects</h3>
                    <div className={styles.latestPropertiesBigBox}>
                        {projects.map(project => (
                            <Link href={`/project-details?id=${project.project_id}`} className={styles.latestPropertiesInnerBox} key={project.project_id}>
                                <Image width={200} height={200} src={`https://a.khelogame.xyz/property/${project.image_paths[0]}`} alt="" />
                                <div className={styles.latestPropertiesContentBox}>
                                    <p className={styles.miniText}>{project.location}</p>
                                    <h3>{project.project_name}</h3>
                                    <p className={styles.priceText}>AED {project.price}</p>
                                    <p className={styles.propertyDescription}>{project.developer_name}</p>
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
                </div>
            </section>

            <Footer />
        </>
    );
};

export default SearchProjectFilter;
