import React from 'react'
import styles from "../styles/Home.module.css";
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const index = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [propertyType, setPropertyType] = useState('Commercial');
  const [Subtype, setSubtype] = useState('Sale');
  const router = useRouter();
  const [location, setLocation] = useState('');


  const fetchProperties = async (filters = {}) => {
    // setLoading(true);
    try {
      const response = await fetch('https://a.khelogame.xyz/get-properties');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      let filteredProperties = data;

      // Filter by property type
      if (filters.propertyType) {
        filteredProperties = filteredProperties.filter((property) => {
          return property.property_type === filters.propertyType;
        });
      }

      // Filter by property subtype
      if (filters.Subtype) {
        filteredProperties = filteredProperties.filter((property) => {
          return property.property_categories === filters.Subtype;
        });
      }

      // Filter by location (city or address)
      if (filters.location) {
        const locationLower = filters.location.toLowerCase();
        filteredProperties = filteredProperties.filter((property) => {
          const cityLower = property.city.toLowerCase();
          const addressLower = property.address.toLowerCase();
          return cityLower.includes(locationLower) || addressLower.includes(locationLower);
        });
      }

      console.log('Filtered properties:', filteredProperties);
      setProperties(filteredProperties);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const handlePropertySubtypeChange = (e) => {
    setSubtype(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    fetchProperties({ propertyType, Subtype, location });
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000); // Calculate 7 days ago
  const latestProperties = properties
    .filter(property => {
      const propertyDate = new Date(property.created_at);
      return propertyDate >= oneWeekAgo;
    })
    .slice(-2);
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
            <input type="text" placeholder="Enter An Address, City Or Zip Code" onChange={handleLocationChange}/>
            {/* <input type="text" placeholder="Enter An Address, City Or Zip Code"  onChange={(e)=> setLocations(e.target.value)}/> */}
          </div>
          <div className={styles.formBox}>
            <label for="">Property Type</label>
            {/* <select name="" id="">
              <option value="">Property Type</option>
              <option value="">Rentals</option>
              <option value="">Sales</option>
            </select> */}
            <div className={styles.selectBox}>
              <div className={styles.selectBox__current} tabindex="1">
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="0" value="Rent" name="Housing" onChange={(e)=>handlePropertySubtypeChange(e)} />
                  <p className={styles.selectBox__inputText}>For Rent</p>
                </div>
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="1" value="Sale" name="Housing" defaultChecked={true} onChange={(e)=>handlePropertySubtypeChange(e)} />
                  <p className={styles.selectBox__inputText}>For Buy</p>
                </div>
                <img className={styles.selectBox__icon} src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
              </div>
              <ul className={styles.selectBox__list}>
                <li>
                  <label className={styles.selectBox__option} for="0" aria-hidden="aria-hidden">For Rent</label>
                </li>
                <li>
                  <label className={styles.selectBox__option} for="1" aria-hidden="aria-hidden">For Buy</label>
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
                  <input className={styles.selectBox__input} type="radio" id="5" value="Residential" name="propertyType" onChange={handlePropertyTypeChange} />
                  <p className={styles.selectBox__inputText}>Residential</p>
                </div>
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="6" value="Commercial" name="propertyType" onChange={handlePropertyTypeChange} defaultChecked={true} />
                  <p className={styles.selectBox__inputText}>Commercial</p>
                </div>
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="7" value="Land" name="propertyType" onChange={handlePropertyTypeChange} />
                  <p className={styles.selectBox__inputText}>Land</p>
                </div>
                <div className={styles.selectBox__value}>
                  <input className={styles.selectBox__input} type="radio" id="8" value="MultipleUnits" name="propertyType" onChange={handlePropertyTypeChange} />
                  <p className={styles.selectBox__inputText}>Multiple Units</p>
                </div>
                <Image width={100} height={100} className={styles.selectBox__icon} src="/images/arrow.svg" alt="Arrow Icon" aria-hidden="true" />
              </div>
              <ul className={styles.selectBox__list}>
                <li>
                  <label className={styles.selectBox__option} for="5" aria-hidden="aria-hidden">Residential</label>
                </li>
                <li>
                  <label className={styles.selectBox__option} for="6" aria-hidden="aria-hidden">Commercial</label>
                </li>
                <li>
                  <label className={styles.selectBox__option} for="7" aria-hidden="aria-hidden">Land</label>
                </li>
                <li>
                  <label className={styles.selectBox__option} for="8" aria-hidden="aria-hidden">Multiple Units</label>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.formBox} ${styles.flexEnd}`}>
            <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i> Search</button>
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
          {latestProperties.map((property, index) => (
            <Link href={`/property?id=${property.id}`} key={index} className={styles.latestPropertiesInnerBox}>
              <Image
                width={600}
                height={400}
                src={`https://a.khelogame.xyz/${property.media_path}`}
                alt="Property Image"
                className={styles.mainHouseImg}
              />
              {/* <Image width={200} height={200} src={property.image} alt={property.property_name} /> */}
              {/* <Image width={200} height={200} src="/images/property-1.webp" alt="" /> */}
              <div className={styles.latestPropertiesContentBox}>
                <p className={styles.miniText}>{property.property_type}</p>
                <h3>{property.property_name}</h3>
                <p className={styles.priceText}>{property.price}</p>
                <p className={styles.propertyDescription}>{property.description.substring(0, 110) + '...'}</p>
                <div className={styles.innerPropertyContent}>
                  <p><i className="fa-solid fa-bed"></i> {property.bedroom}</p>
                  <p><i className="fa-solid fa-shower"></i> {property.bathrooms}</p>
                  <p><i className="fa-solid fa-maximize"></i> {property.area}</p>
                  <p><i className="fa-solid fa-car"></i> {property.vehicle}</p>
                  <p><i className="fa-solid fa-up-right-from-square"></i> {property.size}</p>
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