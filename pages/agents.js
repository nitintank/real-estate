import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Agents.module.css";
import Image from 'next/image';
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
                <div className={styles.searchBiggerBox}>
                    <div className={styles.formBox}>
                        <label for="">Area</label>
                        <input type="text" placeholder="Enter An Address, City Or Zip Code" />
                    </div>
                    <div className={styles.formBox}>
                        <label for="">Location</label>
                        <input type="text" placeholder="Enter Location" />
                    </div>
                    <div className={styles.formBox}>
                        <label for="">Language</label>
                        {/* <select name="" id="">
                            <option value="">Language</option>
                            <option value="">English</option>
                            <option value="">Hindi</option>
                        </select> */}
                        <div className={styles.selectBox}>
                            <div className={styles.selectBox__current} tabindex="1">
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="0" value="1" name="Ben" />
                                    <p className={styles.selectBox__inputText}>Hindi</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="1" value="2" name="Ben" defaultChecked={true} />
                                    <p className={styles.selectBox__inputText}>English</p>
                                </div>
                                <div className={styles.selectBox__value}>
                                    <input className={styles.selectBox__input} type="radio" id="2" value="3" name="Ben" />
                                    <p className={styles.selectBox__inputText}>Marathi</p>
                                </div>
                                <img className={styles.selectBox__icon} src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                            </div>
                            <ul className={styles.selectBox__list}>
                                <li>
                                    <label className={styles.selectBox__option} for="0" aria-hidden="aria-hidden">Hindi</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="1" aria-hidden="aria-hidden">English</label>
                                </li>
                                <li>
                                    <label className={styles.selectBox__option} for="2" aria-hidden="aria-hidden">Marathi</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.formBox} ${styles.flexEnd}`}>
                        <button><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                    </div>
                </div>
            </section>

            {/* <!-- Trusted Agents Section --> */}

            <section className={`${styles.trustedAgentsSection} animate-on-scroll`}>
                <h2>We Are Have <span>Trusted<br />Expert</span> Agent</h2>
                <div className={styles.agentsBigBox}>
                    <div className={styles.agentsCardsBox}>
                        <p className={styles.housingExpertPara}>Housing Expert Pro</p>
                        <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                        <h3>KK Jaipur</h3>
                        <hr />
                        <ul>
                            <li>Mansarovar</li>
                            <li>Sunder Nagar</li>
                        </ul>
                        <div className={styles.totalPropertyBox}>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>7</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>8</h4>
                                <p>Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.agentsCardsBox}>
                        <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                        <h3>KK Jaipur</h3>
                        <hr />
                        <ul>
                            <li>Mansarovar</li>
                            <li>Sunder Nagar</li>
                        </ul>
                        <div className={styles.totalPropertyBox}>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>7</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>8</h4>
                                <p>Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.agentsCardsBox}>
                        <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                        <h3>KK Jaipur</h3>
                        <hr />
                        <ul>
                            <li>Mansarovar</li>
                            <li>Sunder Nagar</li>
                        </ul>
                        <div className={styles.totalPropertyBox}>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>7</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>8</h4>
                                <p>Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.agentsCardsBox}>
                        <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                        <h3>KK Jaipur</h3>
                        <hr />
                        <ul>
                            <li>Mansarovar</li>
                            <li>Sunder Nagar</li>
                        </ul>
                        <div className={styles.totalPropertyBox}>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>7</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>8</h4>
                                <p>Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.agentsCardsBox}>
                        <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                        <h3>KK Jaipur</h3>
                        <hr />
                        <ul>
                            <li>Mansarovar</li>
                            <li>Sunder Nagar</li>
                        </ul>
                        <div className={styles.totalPropertyBox}>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>7</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>8</h4>
                                <p>Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.agentsCardsBox}>
                        <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                        <h3>KK Jaipur</h3>
                        <hr />
                        <ul>
                            <li>Mansarovar</li>
                            <li>Sunder Nagar</li>
                        </ul>
                        <div className={styles.totalPropertyBox}>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>7</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>8</h4>
                                <p>Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.agentsCardsBox}>
                        <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                        <h3>KK Jaipur</h3>
                        <hr />
                        <ul>
                            <li>Mansarovar</li>
                            <li>Sunder Nagar</li>
                        </ul>
                        <div className={styles.totalPropertyBox}>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>7</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>8</h4>
                                <p>Properties</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.agentsCardsBox}>
                        <Image width={200} height={200} src="/images/agent-img.png" alt="" />
                        <h3>KK Jaipur</h3>
                        <hr />
                        <ul>
                            <li>Mansarovar</li>
                            <li>Sunder Nagar</li>
                        </ul>
                        <div className={styles.totalPropertyBox}>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>7</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className={styles.totalPropertyContentBox}>
                                <h4>8</h4>
                                <p>Properties</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default agents