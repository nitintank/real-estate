import React from 'react'
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link';

const index = () => {
  return (
    <>
      <Navbar />
      {/* <!-- Top Introduction Box --> */}

      <section className={styles.topIntroductionBox}>
        <div className={styles.topIntroInnerBox1}>
          <h2>Find Your Next<br />Real Estate In Dubai</h2>
          <p>Through our proprietary platform, We are changing how agents and clients navigate the process of finding
            or selling a home.</p>
        </div>
        <div className={styles.topIntroInnerBox2}>
          <Image width={200} height={200} src="/images/house_png_2-e1646989822282.png" alt="" priority={true} />
        </div>
        <div className={styles.searchBiggerBox}>
          <div className={styles.formBox}>
            <label for="">Location</label>
            <input type="text" placeholder="Enter An Address, City Or Zip Code" />
          </div>
          <div className={styles.formBox}>
            <label for="">Type</label>
            {/* <select name="" id="">
              <option value="">Property Type</option>
              <option value="">Rentals</option>
              <option value="">Sales</option>
            </select> */}
            <div className={styles.selectBox}>
              <div className={styles.selectBox__current} tabindex="1">
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="0" value="1" name="Ben" />
                  <p className={styles.selectBox__inputText}>Rentals</p>
                </div>
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="1" value="2" name="Ben" defaultChecked={true} />
                  <p className={styles.selectBox__inputText}>Sales</p>
                </div>
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="2" value="3" name="Ben" />
                  <p className={styles.selectBox__inputText}>Sold</p>
                </div>
                <img className={styles.selectBox__icon} src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
              </div>
              <ul className={styles.selectBox__list}>
                <li>
                  <label className={styles.selectBox__option} for="0" aria-hidden="aria-hidden">Rentals</label>
                </li>
                <li>
                  <label className={styles.selectBox__option} for="1" aria-hidden="aria-hidden">Sales</label>
                </li>
                <li>
                  <label className={styles.selectBox__option} for="2" aria-hidden="aria-hidden">Sold</label>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.formBox}>
            <label for="">Category</label>
            {/* <select name="" id="">
              <option value="">Property Category</option>
              <option value="">Apartments</option>
              <option value="">Houses</option>
              <option value="">Villas</option>
              <option value="">Duplexes</option>
            </select> */}
            <div className={styles.selectBox}>
              <div className={styles.selectBox__current} tabindex="1">
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="5" value="1" name="Ben1" />
                  <p className={styles.selectBox__inputText}>Apartments</p>
                </div>
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="6" value="2" name="Ben1" defaultChecked={true} />
                  <p className={styles.selectBox__inputText}>Houses</p>
                </div>
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="7" value="3" name="Ben1" />
                  <p className={styles.selectBox__inputText}>Villas</p>
                </div>
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="8" value="4" name="Ben1" />
                  <p className={styles.selectBox__inputText}>Duplexes</p>
                </div>
                <Image width={100} height={100} className={styles.selectBox__icon} src="/images/arrow.svg" alt="Arrow Icon" aria-hidden="true" />
              </div>
              <ul className={styles.selectBox__list}>
                <li>
                  <label className={styles.selectBox__option} for="5" aria-hidden="aria-hidden">Apartments</label>
                </li>
                <li>
                  <label className={styles.selectBox__option} for="6" aria-hidden="aria-hidden">Houses</label>
                </li>
                <li>
                  <label className={styles.selectBox__option} for="7" aria-hidden="aria-hidden">Villas</label>
                </li>
                <li>
                  <label className={styles.selectBox__option} for="8" aria-hidden="aria-hidden">Duplexes</label>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.formBox} ${styles.flexEnd}`}>
            <button><i className="fa-solid fa-magnifying-glass"></i> Search</button>
          </div>
        </div>
      </section>

      {/* <!-- Property Categories Section --> */}

      <section className={styles.propertyCategoriesSection}>
        <h2>{`We've Got Properties In Dubai For Everyone`}</h2>
        <div className={styles.propertyCategoriesImagesBox}>
          <div className={styles.propertyCategoryImgBox}>
            <Image width={200} height={200} src="/images/about-us-home-1.png" alt="" />
            <div className={styles.content}>
              <p>For Sale <span>Apartments, Sales</span></p>
            </div>
          </div>
          <div className={styles.propertyCategoryImgBox}>
            <Image width={200} height={200} src="/images/about-us-home-2.png" alt="" />
            <div className={styles.content}>
              <p>For Sale <span>Apartments, Sales</span></p>
            </div>
          </div>
          <div className={styles.propertyCategoryImgBox}>
            <Image width={200} height={200} src="/images/about-us-home-1.png" alt="" />
            <div className={styles.content}>
              <p>For Sale <span>Apartments, Sales</span></p>
            </div>
          </div>
          <div className={styles.propertyCategoryImgBox}>
            <Image width={200} height={200} src="/images/about-us-home-2.png" alt="" />
            <div className={styles.content}>
              <p>For Sale <span>Apartments, Sales</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Latest Properties Section --> */}

      <section className={styles.latestPropertiesSection}>
        <p>DUBAI REAL ESTATE</p>
        <h2>Latest Properties</h2>
        <div className={styles.latestPropertiesBigBox}>
          <div className={styles.latestPropertiesInnerBox}>
            <Image width={200} height={200} src="/images/property-1.webp" alt="" />
            <div className={styles.latestPropertiesContentBox}>
              <p className={styles.miniText}>Apartment, Sales</p>
              <h3>Luxury 6 Bed Mansion In Jumeria</h3>
              <p className={styles.priceText}>AED 10,0000</p>
              <p className={styles.propertyDescription}>Beautiful, updated, ground floor Co-op apartment in the desirable
                bay terrace neighborhood....</p>
              <div className={styles.innerPropertyContent}>
                <p><i className="fa-solid fa-bed"></i> 5</p>
                <p><i className="fa-solid fa-shower"></i> 5</p>
                <p><i className="fa-solid fa-maximize"></i> 29,000ft</p>
                <p><i className="fa-solid fa-car"></i> 2 Cars</p>
                <p><i className="fa-solid fa-up-right-from-square"></i> 600ft</p>
              </div>
              <hr />
              <div className={styles.innerButtonBox}>
                <button><i className="fa-solid fa-phone"></i> Call</button>
                <button><i className="fa-solid fa-envelope"></i> Email</button>
                <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
              </div>
            </div>
          </div>
          <div className={styles.latestPropertiesInnerBox}>
            <Image width={200} height={200} src="/images/property-2.webp" alt="" />
            <div className={styles.latestPropertiesContentBox}>
              <p className={styles.miniText}>Apartment, Sales</p>
              <h3>Luxury 6 Bed Mansion In Jumeria</h3>
              <p className={styles.priceText}>AED 10,0000</p>
              <p className={styles.propertyDescription}>Beautiful, updated, ground floor Co-op apartment in the desirable
                bay terrace neighborhood....</p>
              <div className={styles.innerPropertyContent}>
                <p><i className="fa-solid fa-bed"></i> 5</p>
                <p><i className="fa-solid fa-shower"></i> 5</p>
                <p><i className="fa-solid fa-maximize"></i> 29,000ft</p>
                <p><i className="fa-solid fa-car"></i> 2 Cars</p>
                <p><i className="fa-solid fa-up-right-from-square"></i> 600ft</p>
              </div>
              <hr />
              <div className={styles.innerButtonBox}>
                <button><i className="fa-solid fa-phone"></i> Call</button>
                <button><i className="fa-solid fa-envelope"></i> Email</button>
                <button><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Popular Areas Section --> */}

      <section className={styles.popularAreasSection}>
        <p>POPULAR AREAS</p>
        <h2>Explore Most Popular Areas</h2>
        <div className={styles.popularAreasImageBox}>
          <Image width={200} height={200} src="/images/property-5.jpeg" alt="" className={styles.popularAreasImage1} />
          <Image width={200} height={200} src="/images/property-2.webp" alt="" className={styles.popularAreasImage2} />
          <Image width={200} height={200} src="/images/property-3.webp" alt="" className={styles.popularAreasImage2} />
          <Image width={200} height={200} src="/images/property-1.webp" alt="" className={styles.popularAreasImage1} />
        </div>
        {/* <Image width={200} height={200} src="/images/blue-wave.png" alt="" className={styles.waveImg} /> */}
      </section>

      {/* <!-- Glide Support Section --> */}

      <section className={styles.glideSupportSection}>
        <div className={styles.glideSupportBox1}>
          <div className={styles.glideContentBox1}>
            <Image width={200} height={200} src="/images/card-1.png" alt="" />
            <p>Agents Make Life Simoler For You And Your Clients.</p>
          </div>
          <div className={styles.glideContentBox2}>
            <Image width={200} height={200} src="/images/card-2.png" alt="" />
            <p>Agents Make Life Simoler For You And Your Clients.</p>
          </div>
          <div className={styles.glideContentBox3}>
            <Image width={200} height={200} src="/images/card-3.png" alt="" />
            <p>Agents Make Life Simoler For You And Your Clients.</p>
          </div>
          <div className={styles.glideContentBox4}>
            <Image width={200} height={200} src="/images/card-4.png" alt="" />
            <p>Agents Make Life Simoler For You And Your Clients.</p>
          </div>
        </div>
        <div className={styles.glideSupportBox2}>
          <h2>Glide Supports</h2>
          <p>The Whole Team Spires Are Considered Integrat Parts Of The Architectural Design Of Buldings, Changes To
            Which Would Substandally Change.</p>
          <br />
          <p>The Appedronce And Design Of The Bunding Whenios Antennos Mou Be Added Or Remowees Witholk Such
            consequences.</p>
        </div>
      </section>

      {/* <!-- Find Perfect Home Section --> */}

      <section className={styles.findPerfectHomeSection}>
        <div className={styles.findPerfectHomeBox1}>
          <div className={`${styles.perfectHomeBox} ${styles.bgWhite}`}>
            <Image width={200} height={200} src="/images/icon-1.png" alt="" />
            <div className={styles.prefectHomeContentBox}>
              <h3><span>Find Real Estate</span></h3>
              <p>Based On Your View Based On Your View</p>
            </div>
          </div>
          <div className={styles.perfectHomeBox}>
            <Image width={200} height={200} src="/images/icon-2.png" alt="" />
            <div className={styles.prefectHomeContentBox}>
              <h3>Meet Relator</h3>
              <p>Based On Your View Based On Your View</p>
            </div>
          </div>
          <div className={styles.perfectHomeBox}>
            <Image width={200} height={200} src="/images/icon-3.png" alt="" />
            <div className={styles.prefectHomeContentBox}>
              <h3>Take The Keys</h3>
              <p>Based On Your View Based On Your View</p>
            </div>
          </div>
          <Image width={200} height={200} src="/images/comment-box.png" alt="" className={styles.commentBoxImg} />
        </div>
        <div className={styles.findPerfectHomeBox2}>
          <p>Based On Your View</p>
          <h2>How It Works? <br /><span>Find A Perfect Home</span></h2>
        </div>
      </section>

      {/* <!-- Trusted Agents Section --> */}

      <section className={styles.trustedAgentsSection}>
        {/* <Image width={200} height={200} src="/images/blue-wave-2.png" alt="" className={styles.wave2Img} /> */}
        <h2>We Are Have <span>Trusted<br />Expert</span> Agent</h2>
        <div className={styles.agentsBigBox}>
          <div className={styles.agentsCardsBox}>
            <p className={styles.housingExpertPara}>Housing Expert Pro</p>
            <Image width={200} height={170} src="/images/agent-img.png" alt="" />
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

      {/* <!-- What Client Says Section --> */}

      <section className={styles.whatClientSaysSection}>
        <h2>What Clients Say</h2>
        <hr />
        <div className={styles.testimonialBigBox}>
          <div className={styles.testimonialBox}>
            <Image width={200} height={200} src="/images/contact-card.png" alt="" className={styles.testimonialUserImg} />
            <h3>Take The Keys</h3>
            <p>{`Don't worry we have amazing agents, have high dedication to work. and uphold equality.`}</p>
            <Image width={200} height={200} src="/images/star.png" alt="" className={styles.testimonialStarImg} />
          </div>
          <div className={`${styles.testimonialBox} ${styles.bgLightBrown}`}>
            <Image width={200} height={200} src="/images/contact-card.png" alt="" className={styles.testimonialUserImg} />
            <h3>Take The Keys</h3>
            <p>{`Don't worry we have amazing agents, have high dedication to work. and uphold equality.`}</p>
            <Image width={200} height={200} src="/images/star.png" alt="" className={styles.testimonialStarImg} />
          </div>
          <div className={styles.testimonialBox}>
            <Image width={200} height={200} src="/images/contact-card.png" alt="" className={styles.testimonialUserImg} />
            <h3>Take The Keys</h3>
            <p>{`Don't worry we have amazing agents, have high dedication to work. and uphold equality.`}</p>
            <Image width={200} height={200} src="/images/star.png" alt="" className={styles.testimonialStarImg} />
          </div>
        </div>
      </section>

      {/* <!-- Download Android App Section --> */}

      <section className={styles.downloadAndroidAppSection}>
        <div className={styles.downloadAndroidBox1}>
          <h3>Download Our Mobile App</h3>
          <p>and never miss out any update</p>
          <ul>
            <li>Get to know about newly posted properties as soon as they are posted</li>
            <li>Manage your properties with ease and get instant alerts about responses</li>
          </ul>
          <Image width={200} height={200} src="/images/android-apk.png" alt="" className={styles.androidDownloadBtn} />
        </div>
        <div className={styles.downloadAndroidBox2}>
          <Image width={200} height={200} src="/images/android-phone-blue.png" alt="" />
        </div>
      </section>

      {/* <!-- Upper Footer Section --> */}

      <section className={styles.upperFooterSection}>
        <div className={styles.radioInput}>
          <label>
            <input value="value-1" name="value-radio" id="value-1" type="radio" checked="true" />
            <span>For Sale</span>
          </label>
          <label>
            <input value="value-2" name="value-radio" id="value-2" type="radio" />
            <span>To Rent</span>
          </label>
          <span className={styles.selection}></span>
        </div>

        <div className={styles.footerPropertyAvailableBigBox}>
          <div className={styles.footerPropertyBox}>
            <h3>Dubai Apartments</h3>
            <a href="#">Dubai Marina</a>
            <a href="#">Downtown Dubai</a>
            <a href="#">Business Bay</a>
            <a href="#">Palm Jumeria</a>
            <a href="#">Dubailand</a>
          </div>
          <div className={styles.footerPropertyBox}>
            <h3>Abu Dhabi Apartments</h3>
            <a href="#">Dubai Marina</a>
            <a href="#">Downtown Dubai</a>
            <a href="#">Business Bay</a>
            <a href="#">Palm Jumeria</a>
            <a href="#">Dubailand</a>
          </div>
          <div className={styles.footerPropertyBox}>
            <h3>Other Emirates Apartments</h3>
            <a href="#">Dubai Marina</a>
            <a href="#">Downtown Dubai</a>
            <a href="#">Business Bay</a>
            <a href="#">Palm Jumeria</a>
            <a href="#">Dubailand</a>
          </div>
          <div className={styles.footerPropertyBox}>
            <h3>Dubai Apartments</h3>
            <a href="#">Dubai Marina</a>
            <a href="#">Downtown Dubai</a>
            <a href="#">Business Bay</a>
            <a href="#">Palm Jumeria</a>
            <a href="#">Dubailand</a>
          </div>
          <div className={styles.footerPropertyBox}>
            <h3>Abu Dhabi Villas</h3>
            <a href="#">Dubai Marina</a>
            <a href="#">Downtown Dubai</a>
            <a href="#">Business Bay</a>
            <a href="#">Palm Jumeria</a>
            <a href="#">Dubailand</a>
          </div>
          <div className={styles.footerPropertyBox}>
            <h3>Dubai Villas</h3>
            <a href="#">Dubai Marina</a>
            <a href="#">Downtown Dubai</a>
            <a href="#">Business Bay</a>
            <a href="#">Palm Jumeria</a>
            <a href="#">Dubailand</a>
          </div>
          <div className={styles.footerPropertyBox}>
            <h3>Popular Searches</h3>
            <a href="#">Dubai Marina</a>
            <a href="#">Downtown Dubai</a>
            <a href="#">Business Bay</a>
            <a href="#">Palm Jumeria</a>
            <a href="#">Dubailand</a>
          </div>
          <div className={styles.footerPropertyBox}>
            <h3>Abu Dhabi Apartments</h3>
            <a href="#">Dubai Marina</a>
            <a href="#">Downtown Dubai</a>
            <a href="#">Business Bay</a>
            <a href="#">Palm Jumeria</a>
            <a href="#">Dubailand</a>
          </div>
          <div className={styles.footerPropertyBox}>
            <h3>Other Emirates Apartments</h3>
            <a href="#">Dubai Marina</a>
            <a href="#">Downtown Dubai</a>
            <a href="#">Business Bay</a>
            <a href="#">Palm Jumeria</a>
            <a href="#">Dubailand</a>
          </div>
        </div>
      </section>

      {/* <!-- Footer Section --> */}
      <Footer />

    </>
  )
}

export default index