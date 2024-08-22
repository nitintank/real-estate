import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/AgentDetail.module.css";
import Image from 'next/image';
import Link from 'next/link';
import useIntersectionObserver from '../pages/hooks/useIntersectionObserver';

const agentDetail = () => {

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

    const [agentDetails, setAgentDetails] = useState({});
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loader
    const [submissionMessage, setSubmissionMessage] = useState(''); // State for form submission message

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        message: ''
    });

    useEffect(() => {
        if (id) {
            fetchAgentDetails(id);
            fetchPropertiesByAgent(id);
        }
    }, [id]);

    const fetchAgentDetails = async (agentId) => {
        try {
            const response = await fetch(`https://a.khelogame.xyz/agents/${agentId}`);
            if (response.ok) {
                const data = await response.json();
                setAgentDetails(data);
                setLoading(false);
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchPropertiesByAgent = async (agentId) => {
        try {
            const response = await fetch(`https://a.khelogame.xyz/get-agent-properties?agent_id=${agentId}`);
            if (response.ok) {
                const data = await response.json();
                setProperties(data);
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionMessage('');

        try {
            const response = await fetch(`https://a.khelogame.xyz/create-agent-inquiry/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmissionMessage('Message Sent Successfully!!');
                setFormData({ name: '', email: '', phone_number: '', message: '' });
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                setSubmissionMessage('Error Sending Message');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmissionMessage('Error Sending Message');
        } finally {
            setIsSubmitting(false); 
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            {/* <!-- Agent Card Box Section --> */}
            <section className={`${styles.agentCardBox} animate-on-scroll`}>
                <div className={styles.agentDetailBox1}>
                    <Image width={200} height={200} src={`https://a.khelogame.xyz/${agentDetails.image_path}`} alt="" />
                </div>
                <div className={styles.agentDetailBox2}>
                    <h3>{agentDetails.name}</h3>
                    <p className={styles.agentAboutPara}>Company Agent at The James Estate Agents</p>
                    <div className={styles.agentOtherDetailsBox}>
                        <p><span>Address:</span> {agentDetails.address}</p>
                        <p><span>Office Phone:</span> {agentDetails.office_phone_number}</p>
                        <p><span>Mobile Phone:</span> {agentDetails.phone_number}</p>
                    </div>
                    <div className={styles.agentSocialMedia}>
                        {agentDetails.twitter && <Link href={agentDetails.twitter}><i className="fa-brands fa-twitter"></i></Link>}
                        {agentDetails.youtube && <Link href={agentDetails.youtube}><i className="fa-brands fa-youtube"></i></Link>}
                        {agentDetails.facebook && <Link href={agentDetails.facebook}><i className="fa-brands fa-facebook"></i></Link>}
                        {agentDetails.instagram && <Link href={agentDetails.instagram}><i className="fa-brands fa-instagram"></i></Link>}
                    </div>
                </div>
            </section>

            {/* <!-- About Agent Box --> */}
            <section className={`${styles.agentAboutBox} animate-on-scroll`}>
                <h3>About {agentDetails.name}</h3>
                <p>{agentDetails.description}</p>
            </section>

            {/* <!-- Track Record Section --> */}

            <section className={`${styles.trackRecordSection} animate-on-scroll`}>
                <h3>Track Record</h3>
                <p>Transactions submitted by agent to Property Finder</p>
                <div className={styles.trackRecordContentBox}>
                    <div className={styles.trackRecordContent}>
                        <h4>39</h4>
                        <p>Closed Deal</p>
                    </div>
                    <div className={styles.trackRecordContent}>
                        <h4>4 <span>Sale</span> 35 <span>Rent</span></h4>
                        <p>Deal Type</p>
                    </div>
                    <div className={styles.trackRecordContent}>
                        <h4>7.4M <span>AED</span></h4>
                        <p>Rent Total Deal Value</p>
                    </div>
                    <div className={styles.trackRecordContent}>
                        <h4>17.9M <span>AED</span></h4>
                        <p>Sale Total Deals Value</p>
                    </div>
                </div>
            </section>

            {/* <!-- Latest Properties Section --> */}

            <section className={`${styles.latestPropertiesSection} animate-on-scroll`}>
                <h2>Latest Properties</h2>
                <div className={styles.latestPropertiesBigBox}>
                {properties.map((property) => (
                    <Link href={`/property?id=${property.id}`} className={styles.latestPropertiesInnerBox} key={property.id}>
                        <Image width={200} height={200} src={`https://a.khelogame.xyz/${property.image_path}`} alt="" />
                        <div className={styles.latestPropertiesContentBox}>
                            <p className={styles.miniText}>{property.property_type}</p>
                            <h3>{property.property_name}</h3>
                            <p className={styles.priceText}>AED {property.price}</p>
                            <p className={styles.propertyDescription}>{property.description}</p>
                            <div className={styles.innerPropertyContent}>
                                <p><i className="fa-solid fa-bed"></i> {property.bedrooms}</p>
                                <p><i className="fa-solid fa-shower"></i> {property.bathrooms}</p>
                                <p><i className="fa-solid fa-maximize"></i> {property.area}</p>
                                <p><i className="fa-solid fa-car"></i> {property.parking}</p>
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

            {/* <!-- Contact Me Section --> */}

            <section className={`${styles.contactMeSection} animate-on-scroll`}>
                <h3>Contact Me</h3>

                <div className={styles.contactMeFormBigBox}>
                    <div className={styles.contactMeForm1}>
                    <form onSubmit={handleSubmit}>
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="">Phone</label>
                            <input
                                type="text"
                                name="phone_number"
                                placeholder="Enter Phone"
                                value={formData.phone_number}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="">Message</label>
                            <input
                                type="text"
                                name="message"
                                placeholder="Enter Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <input type="submit" value="Send Message" disabled={isSubmitting} />
                        </form>
                        {isSubmitting && <p className={styles.msg_para}>Sending Message...</p>}
                        {submissionMessage && <p className={styles.msg_para}>{submissionMessage}</p>}
                    </div>
                    <div className={styles.contactMeForm2}>
                        <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                        <button><i className="fa-solid fa-phone"></i> Call</button>
                        <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
                    </div>
                </div>

            </section>

            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default agentDetail