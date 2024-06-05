import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Agents.module.css";
import Image from 'next/image';

const agents = () => {
    return (
        <>  
            <Navbar />
            {/* <!-- Top Introduction Box --> */}

            <section className={styles.topIntroductionBox}>
                <div className={styles.topIntroInnerBox1}>
                    <p>POPULAR AREAS</p>
                    <h2>Find Your Agent To Find A Home Agents</h2>
                </div>
                <div className={styles.topIntroInnerBox2}>
                    <Image width={500} height={500} src="/images/agent-vector.png" alt="" priority={true} />
                </div>
                <div className={styles.searchBiggerBox}>
                    <div className={styles.formBox}>
                        <input type="text" placeholder="Enter An Address, City Or Zip Code" />
                    </div>
                    <div className={styles.formBox}>
                        <input type="text" placeholder="Enter Location" />
                    </div>
                    <div className={styles.formBox}>
                        <select name="" id="">
                            <option value="">Language</option>
                            <option value="">English</option>
                            <option value="">Hindi</option>
                        </select>
                    </div>
                    <div className={`${styles.formBox} ${styles.flexEnd}`}>
                        <button><i className="fa-solid fa-magnifying-glass"></i> Search</button>
                    </div>
                </div>
            </section>

            {/* <!-- Trusted Agents Section --> */}

            <section className={styles.trustedAgentsSection}>
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