import React from 'react'
import styles from "../styles/Home.module.css";
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import useIntersectionObserver from '../pages/hooks/useIntersectionObserver';

const index = () => {

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

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [propertyType, setPropertyType] = useState('');
  const [subtype, setSubtype] = useState('');
  const [location, setLocation] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [agents, setAgents] = useState([]);
  const [selected, setSelected] = useState('loco1');

  const router = useRouter();

  const fetchProperties = async (filters = {}) => {
    setLoading(true);
    try {
      const response = await fetch('https://a.khelogame.xyz/get-properties');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      let filteredProperties = data;

      // Filter by property type
      if (filters.propertyType) {
        filteredProperties = filteredProperties.filter((property) => property.property_type === filters.propertyType);
        console.log(filters.propertyType,"filters.propertyType====")
       
      }

      // Filter by property subtype
      if (filters.subtype) {
        filteredProperties = filteredProperties.filter((property) => property.property_categories === filters.subtype);
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

      if (filters.bedroom) {
        filteredProperties = filteredProperties.filter((property) => {
          if (filters.bedroom === '5+') {
            return property.bedroom >= 5;
          } else {
            return property.bedroom === parseInt(filters.bedroom);
          }
        });
      }

      // console.log('Filtered properties:', filteredProperties);
      setProperties(filteredProperties);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRadioChange = (event) => {
    setSelected(event.target.id);
  };

  const handlePropertyTypeChange = (e) => {
    console.log(e.target.value,"prpotype");
    setPropertyType(e.target.value);
  };

  const handlePropertySubtypeChange = (e) => {
    setSubtype(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);

  };

  const handleBedroomsChange = (e) => {
    setBedroom(e.target.value);
  };
  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: { propertyType, subtype, location, bedroom }
    });
    fetchProperties({ propertyType, subtype, location, bedroom });
  };

  const handleSelectSearch = (propertyType) => {
    router.push({
      pathname: '/search',
      query: { propertyType, subtype, location, bedroom }
    });
    fetchProperties({ propertyType, subtype, location, bedroom });
  };

  const handleCategoryClick = (propertyType) => {
    router.push({
      pathname: '/search',
      query: { propertyType },
    });
  
  };
  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    fetch('https://a.khelogame.xyz/agent-details')
      .then(response => response.json())
      .then(data => setAgents(data))
      .catch(error => console.error('Error fetching agent details:', error));
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const currentDate = new Date();
  const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  // const latestProperties = properties;
  const latestProperties = properties
  .filter(property => {
    const propertyDate = new Date(property.created_at);
    return propertyDate >= oneWeekAgo;
  })
  .slice(-3);

  return (
    <>
      <Navbar />

      {/* <!-- Top Introduction Box --> */}

      <section className={`${styles.topIntroductionBox} animate-on-scroll`}>
        <div className={styles.topIntroInnerBox1}>
          <h2>Find Your Next<br />Real Estate In Dubai</h2>
          <p>Through our proprietary platform, We are changing how agents and clients navigate the process of finding
            or selling a home.</p>
        </div>
        <div className={styles.topIntroInnerBox2}>
          <Image width={200} height={200} src="/images/house_png_2-e1646989822282.png" alt="" priority={true} />
        </div>
        <div className={styles.searchBiggerBox}>
          <div className={styles.formBiggerBox}>
            <div className={styles.formBox2}>
              <input
                type="radio"
                name="loco"
                id="loco1"
                defaultChecked={true}
                onChange={handleRadioChange}
              />
              <label htmlFor="loco1" className={`${styles.LBorderRadius} ${selected === 'loco1' ? styles.selectedLabel : ''}`}>
                Rent
              </label>
            </div>
            <div className={styles.formBox2}>
              <input type="radio" name="loco" id="loco2" onChange={handleRadioChange} />
              <label htmlFor="loco2" className={selected === 'loco2' ? styles.selectedLabel : ''}>
                Buy
              </label>
            </div>
            <div className={styles.formBox2}>
              <input type="radio" name="loco" id="loco3" onChange={handleRadioChange} />
              <label htmlFor="loco3" className={selected === 'loco3' ? styles.selectedLabel : ''}>
                New Projects
              </label>
            </div>
            <div className={styles.formBox2}>
              <input type="radio" name="loco" id="loco4" onChange={handleRadioChange} />
              <label htmlFor="loco4" className={`${styles.RBorderRadius} ${selected === 'loco4' ? styles.selectedLabel : ''}`}>
                Type
              </label>
            </div>
          </div>
          <div className={styles.formBiggerBox}>
            <div className={styles.formBox}>
              {/* <label for="">Location</label> */}
              <input type="text" placeholder="Enter Location" onChange={handleLocationChange} />
              {/* <input type="text" placeholder="Enter An Address, City Or Zip Code"  onChange={(e)=> setLocations(e.target.value)}/> */}
            </div>
            <div className={styles.formBox}>
              {/* <label for="">Property Type</label> */}
              {/* <select name="" id="">
              <option value="">Property Type</option>
              <option value="">Rentals</option>
              <option value="">Sales</option>
            </select> */}
              <div className={styles.selectBox}>
                <div className={styles.selectBox__current} tabindex="1">
                  <div className={styles.selectBox__value}>
                    <input className={styles.selectBox__input} type="radio" id="0" value="PropertyType" name="Housing" defaultChecked={true} />
                    <p className={styles.selectBox__inputText}>Property Type</p>
                  </div>
                  <div className={styles.selectBox__value}>
                    <input className={styles.selectBox__input} type="radio" id="1" value="Rent" name="Housing" onChange={(e) => handlePropertySubtypeChange(e)} />
                    <p className={styles.selectBox__inputText}>For Rent</p>
                  </div>
                  <div className={styles.selectBox__value}>
                    <input className={styles.selectBox__input} type="radio" id="2" value="Sale" name="Housing" onChange={(e) => handlePropertySubtypeChange(e)} />
                    <p className={styles.selectBox__inputText}>For Buy</p>
                  </div>
                  <img className={styles.selectBox__icon} src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                </div>
                <ul className={styles.selectBox__list}>
                  {/* <li>
                    <label className={styles.selectBox__option} for="0" aria-hidden="aria-hidden">Property Type</label>
                  </li> */}
                  <li>
                    <label className={styles.selectBox__option} for="1" aria-hidden="aria-hidden">For Rent</label>
                  </li>
                  <li>
                    <label className={styles.selectBox__option} for="2" aria-hidden="aria-hidden">For Buy</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.formBox}>
              {/* <label for="">Category</label> */}
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
            <div className={styles.formBox}>
              <div className={styles.selectBox}>
                <div className={styles.selectBox__current} tabindex="1">
                  <div className={styles.selectBox__value}>
                    <input className={styles.selectBox__input} type="radio" name="bedroom" defaultChecked={true} />
                    <p className={styles.selectBox__inputText}>Select Bedrooms</p>
                  </div>
                  <div className={styles.selectBox__value}>
                    <input className={styles.selectBox__input} type="radio" id="9" value="1" name="bedroom" onChange={handleBedroomsChange} />
                    <p className={styles.selectBox__inputText}>1</p>
                  </div>
                  <div className={styles.selectBox__value}>
                    <input className={styles.selectBox__input} type="radio" id="10" value="2" name="bedroom" onChange={handleBedroomsChange} />
                    <p className={styles.selectBox__inputText}>2</p>
                  </div>
                  <div className={styles.selectBox__value}>
                    <input className={styles.selectBox__input} type="radio" id="11" value="3" name="bedroom" onChange={handleBedroomsChange} />
                    <p className={styles.selectBox__inputText}>3</p>
                  </div>
                  <div className={styles.selectBox__value}>
                    <input className={styles.selectBox__input} type="radio" id="12" value="4" name="bedroom" onChange={handleBedroomsChange} />
                    <p className={styles.selectBox__inputText}>4</p>
                  </div>
                  <div className={styles.selectBox__value}>
                    <input className={styles.selectBox__input} type="radio" id="13" value="5" name="bedroom" onChange={handleBedroomsChange} />
                    <p className={styles.selectBox__inputText}>5</p>
                  </div>
                  <div className={styles.selectBox__value}>
                    <input className={styles.selectBox__input} type="radio" id="14" value="5+" name="bedroom" onChange={handleBedroomsChange} />
                    <p className={styles.selectBox__inputText}>5</p>
                  </div>
                  <Image width={100} height={100} className={styles.selectBox__icon} src="/images/arrow.svg" alt="Arrow Icon" aria-hidden="true" />
                </div>
                <ul className={styles.selectBox__list}>
                  <li>
                    <label className={styles.selectBox__option} for="9" aria-hidden="aria-hidden">1</label>
                  </li>
                  <li>
                    <label className={styles.selectBox__option} for="10" aria-hidden="aria-hidden">2</label>
                  </li>
                  <li>
                    <label className={styles.selectBox__option} for="11" aria-hidden="aria-hidden">3</label>
                  </li>
                  <li>
                    <label className={styles.selectBox__option} for="12" aria-hidden="aria-hidden">4</label>
                  </li>
                  <li>
                    <label className={styles.selectBox__option} for="13" aria-hidden="aria-hidden">5</label>
                  </li>
                  <li>
                    <label className={styles.selectBox__option} for="14" aria-hidden="aria-hidden">5+</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.formBox} ${styles.flexEnd}`}>
              <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i> Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Property Categories Section --> */}

      {/* <section className={styles.propertyCategoriesSection}>
        <h2>{`We've Got Properties In Dubai For Everyone`}</h2>
        <div className={styles.propertyCategoriesImagesBox}>
          <div className={styles.propertyCategoryImgBox}>
            <Image width={200} height={200} src="/images/about-us-home-1.png" alt="" />
            <div className={styles.content}>
              <p>Residential</p>
            </div>
          </div>
          <div className={styles.propertyCategoryImgBox}>
            <Image width={200} height={200} src="/images/about-us-home-2.png" alt="" />
            <div className={styles.content}>
              <p>Commercial</p>
            </div>
          </div>
          <div className={styles.propertyCategoryImgBox}>
            <Image width={200} height={200} src="/images/about-us-home-1.png" alt="" />
            <div className={styles.content}>
              <p>Land</p>
            </div>
          </div>
          <div className={styles.propertyCategoryImgBox}>
            <Image width={200} height={200} src="/images/about-us-home-2.png" alt="" />
            <div className={styles.content}>
              <p>Multiple Units</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className={styles.propertyCategoriesSection}>
        <h2>{`We've Got Properties In Dubai For Everyone`}</h2>
        <div className={styles.propertyCategoriesImagesBox}>
          <div
            className={styles.propertyCategoryImgBox}
            onClick={() => handleSelectSearch('Residential')}
          >
            <Image width={200} height={200} src="/images/about-us-home-1.png" alt="Residential" />
            <div className={styles.content}>
              <p>Residential</p>
            </div>
          </div>
          <div
            className={styles.propertyCategoryImgBox}
            onClick={() => handleSelectSearch('Commercial')}
          >
            <Image width={200} height={200} src="/images/about-us-home-2.png" alt="Commercial" />
            <div className={styles.content}>
              <p>Commercial</p>
            </div>
          </div>
          <div
            className={styles.propertyCategoryImgBox}
            onClick={() => handleSelectSearch('Land')}
          >
            <Image width={200} height={200} src="/images/about-us-home-1.png" alt="Land" />
            <div className={styles.content}>
              <p>Land</p>
            </div>
          </div>
          <div
            className={styles.propertyCategoryImgBox}
            onClick={() => handleSelectSearch('Multiple Units')}
          >
            <Image width={200} height={200} src="/images/about-us-home-2.png" alt="Multiple Units" />
            <div className={styles.content}>
              <p>Multiple Units</p>
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
                src={`https://a.khelogame.xyz/${property.media_paths[0]}`}
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
                  <p><i className="fa-solid fa-shower"></i> {property.bathroom}</p>
                  <p><i className="fa-solid fa-maximize"></i> {property.area}</p>
                  <p><i className="fa-solid fa-car"></i> {property.parking}</p>
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

      <section className={`${styles.popularAreasSection} animate-on-scroll`}>
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

      <section className={`${styles.glideSupportSection} animate-on-scroll`}>
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
          <br />
          <p>The Whole Team Spires Are Considered Integrat Parts Of The Architectural Design Of Buldings, Changes To
            Which Would Substandally Change.</p>
          <br />
          <p>The Appedronce And Design Of The Bunding Whenios Antennos Mou Be Added Or Remowees Witholk Such
            consequences.</p>
        </div>
      </section>

      {/* <!-- Find Perfect Home Section --> */}

      <section className={`${styles.findPerfectHomeSection} animate-on-scroll`}>
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

      <section className={`${styles.trustedAgentsSection} animate-on-scroll`}>
        {/* <Image width={200} height={200} src="/images/blue-wave-2.png" alt="" className={styles.wave2Img} /> */}
        <h2>We Are Have <span>Trusted<br />Expert</span> Agent</h2>
        <div className={styles.agentsBigBox}>
          {agents.slice(0, 4).map(agent => (
            <Link href={`/agent-detail?id=${agent.id}`} className={styles.agentsCardsBox}>
              {/* <p className={styles.housingExpertPara}>Housing Expert Pro</p> */}
              <Image width={200} height={170} src={`https://a.khelogame.xyz/${agent.image_path}`} alt="" />
              <h3>{agent.name}</h3>
              <hr />
              <ul>
                <li>{agent.address}</li>
              </ul>
              <div className={styles.totalPropertyBox}>
                <div className={styles.totalPropertyContentBox}>
                  <h4>{agent.experience}</h4>
                  <p>Years Experience</p>
                </div>
                <div className={styles.totalPropertyContentBox}>
                  <h4>{agent.property_count}</h4>
                  <p>Properties</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* <!-- What Client Says Section --> */}

      <section className={`${styles.whatClientSaysSection} animate-on-scroll`}>
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

      <section className={`${styles.downloadAndroidAppSection} animate-on-scroll`}>
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

      <section className={`${styles.upperFooterSection} animate-on-scroll`}>
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