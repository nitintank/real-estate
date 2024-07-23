import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Agents.module.css";
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useIntersectionObserver from '../pages/hooks/useIntersectionObserver';

const agents = () => {

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

    const [agents, setAgents] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const response = await fetch('https://a.khelogame.xyz/all_agents');
                if (!response.ok) {
                    throw new Error('Failed to fetch agents');
                }
                const data = await response.json();
                setAgents(data);
            } catch (error) {
                console.error('Error fetching agents:', error);
            }
        };

        fetchAgents();
    }, []);

    return (
        <>
            <Navbar />
            {/* <!-- Top Introduction Box --> */}

            <section className={`${styles.topIntroductionBox} animate-on-scroll`}>
                <div className={styles.topIntroInnerBox1}>
                    <p>POPULAR AREAS</p>
                    <h2>Find Your Agent To Find A Home Agents</h2>
                </div>
                <div className={styles.topIntroInnerBox2}>
                    <Image width={500} height={500} src="/images/agent-vector.png" alt="" priority={true} />
                </div>
            </section>

            {/* <!-- Trusted Agents Section --> */}

            <section className={`${styles.trustedAgentsSection} animate-on-scroll`}>
                <h2>We Are Have <span>Trusted<br />Expert</span> Agent</h2>
                <div className={styles.agentsBigBox}>
                    {agents.map(agent => (
                        <Link href={`/agent-detail?id=${agent.id}`} className={styles.agentsCardsBox} key={agent.id}>
                            {/* <p className={styles.housingExpertPara}>Housing Expert Pro</p> */}
                            <Image width={200} height={200} src={`https://a.khelogame.xyz/${agent.image_path}`} alt={agent.name} />
                            <h3>{agent.name}</h3>
                            <hr />
                            <ul>
                                <li>{agent.address}</li>
                                <li>{agent.office_phone_number}</li>
                            </ul>
                            <div className={styles.totalPropertyBox}>
                                <div className={styles.totalPropertyContentBox}>
                                    <h4>{agent.experience}</h4>
                                    <p>Years Experience</p>
                                </div>
                                <div className={styles.totalPropertyContentBox}>
                                    <h4>8</h4>
                                    <p>Properties</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default agents