import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import styles from "@/styles/AddProperty.module.css";

const addProperty = () => {
    return (
        <>
            <Navbar />
            {/* <!-- Main Content Big Box --> */}
            <section className={styles.mainContentBigBox}>
                <div className={styles.mainSidebarBox}>
                    <Link href="/user-panel/dashboard"><i className="fa-solid fa-chart-line"></i> Dashboard</Link>
                    <Link href="/user-panel/add-property" className={styles.activeSelection}><i className="fa-solid fa-house-chimney"></i> Add Property</Link>
                    <Link href="/user-panel/property-list"><i className="fa-solid fa-list"></i> Property List</Link>
                    <Link href="/user-panel/all-reviews"><i className="fa-solid fa-comment"></i> All Reviews</Link>
                </div>
                <div className={styles.mainContentBox}>
                    <h2>Add New Property</h2>
                    <form>
                        <label for="">Title</label>
                        <input type="text" placeholder="Add Property Title" />
                        <label for="">Description</label>
                        <input type="text" placeholder="Add Property Description" />
                        <label for="">Add Images</label>
                        <input type="file" />

                        <h3 className={styles.amenitiesText}>Select Amenities For This Property</h3>
                        <h4 className={styles.amenitiesNamesText}>Recreation And Family</h4>
                        <div className={styles.checkBoxBigBox}>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Barbeque Area</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Day Care Center</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Kids Play Area</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Lawn Or Garden</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Cafeteria or Canteen</label>
                            </div>
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Health And Fitness</h4>
                        <div className={styles.checkBoxBigBox}>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Medical Center</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Gym Or Health Club</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Jacuzzi</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Sauna</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Steam Room</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Swimming Pool</label>
                            </div>
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Features</h4>
                        <div className={styles.checkBoxBigBox}>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Double Glazed Windows</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Centerally Air-Conditioned</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Central Heating</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Electricity Backup</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Furnished</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Parking Spaces</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Storage Areas</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Study Room</label>
                            </div>
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Cleaning And Maintenance</h4>
                        <div className={styles.checkBoxBigBox}>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Waste Disposal</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Maintenance Staff</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Cleaning Services</label>
                            </div>
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Technology</h4>
                        <div className={styles.checkBoxBigBox}>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Broadband Internet</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Satellite/Cable TV</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Intercom</label>
                            </div>
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Business And Security</h4>
                        <div className={styles.checkBoxBigBox}>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Business Center</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Conference Room</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Security Staff</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">CCTV Security</label>
                            </div>
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Miscellaneous</h4>
                        <div className={styles.checkBoxBigBox}>
                            <div className={`${styles.checkBoxDiv} ${styles.dBlock}`}>
                                <label for="">View</label>
                                <input type="text" />
                            </div>
                            <div className={`${styles.checkBoxDiv} ${styles.dBlock}`}>
                                <label for="">Floor</label>
                                <input type="text" />
                            </div>
                            <div className={`${styles.checkBoxDiv} ${styles.dBlock}`}>
                                <label for="">Other Main Features</label>
                                <input type="text" />
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Freehold</label>
                            </div>
                            <div className={`${styles.checkBoxDiv} ${styles.dBlock}`}>
                                <label for="">Pet Policy</label>
                                <select name="" id="">
                                    <option value="">Not Allowed</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                            </div>
                            <div className={`${styles.checkBoxDiv} ${styles.dBlock}`}>
                                <label for="">Other Rooms</label>
                                <input type="text" />
                            </div>
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Laundry And Kitchen</h4>
                        <div className={styles.checkBoxBigBox}>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Laundry Room</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Laundry Facility</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Shared Kitchen</label>
                            </div>
                        </div>
                        <h4 className={styles.amenitiesNamesText}>Building</h4>
                        <div className={styles.checkBoxBigBox}>
                            <div className={`${styles.checkBoxDiv} ${styles.dBlock}`}>
                                <label for="">Completion Year</label>
                                <input type="text" />
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Balcony Or Terrace</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Lobby In Building</label>
                            </div>
                            <div className={`${styles.checkBoxDiv} ${styles.dBlock}`}>
                                <label for="">Flooring</label>
                                <select name="" id="">
                                    <option value="">Other</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                            </div>
                            <div className={`${styles.checkBoxDiv} ${styles.dBlock}`}>
                                <label for="">Elevators In Building</label>
                                <input type="text" />
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Service Elevators</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Prayer Room</label>
                            </div>
                            <div className={styles.checkBoxDiv}>
                                <input type="checkbox" name="" id="" />
                                <label for="">Reception/Waiting Room</label>
                            </div>
                            <div className={`${styles.checkBoxDiv} ${styles.dBlock}`}>
                                <label for="">Total Floors</label>
                                <input type="text" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* Footer Section */}
            <Footer />
        </>
    )
}

export default addProperty