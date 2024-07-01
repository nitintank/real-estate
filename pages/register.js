import React from 'react'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Register.module.css";
import Image from 'next/image';
import Link from 'next/link';
import useIntersectionObserver from '../pages/hooks/useIntersectionObserver';

const Register = () => {

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

  const [username, setUserName] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [otp, setOTP] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const role = 'user'
  const [invalidOTP, setInvalidOTP] = useState(false)
  const [otpSent, setotpSent] = useState(false)
  const [userexist, setUserexist] = useState(false)
  const [showpassword, setShowpassword] = useState('password')

  const handleChange = (e) => {
    if (e.target.name == 'username') {
      setUserName(e.target.value)
    }
    else if (e.target.name == 'phone_number') {
      setPhoneNumber(e.target.value)
    }
    else if (e.target.name == 'otp') {
      setOTP(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }

  const sendOTP = async (e) => {
    if (phone_number.length == 13) {
      e.preventDefault()
      const data = { phone_number }
      let res = await fetch('https://a.khelogame.xyz/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      let response = await res.json()

      if (response.message == "OTP sent to your phone number") {
        setotpSent(true)
      }
      else if (response.error == "User with this phone number already exists") {
        setUserexist(true)
      }
    }
    else {
      alert("Error Occured, Try Again!!")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { phone_number, otp, email, username, password, role }
    let res = await fetch('https://a.khelogame.xyz/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    let response = await res.json()

    if (response.error == "Invalid OTP") {
      setInvalidOTP(true)
      setotpSent(false)
    }
    else if (response.message == "User registered and OTP verified successfully") {
      location.href = "/user-panel/dashboard"
    }
  }

  const showPassword = () => {
    if (showpassword == 'password') {
      setShowpassword('text')
    }
    else {
      setShowpassword('password')
    }
  }

  return (
    <>
      <Navbar />
      {/* <!-- Register Big Box Section --> */}
      <div className={styles.registerBigBox}>
        <div className={`${styles.registerContentBox1} animate-on-scroll`}>
          <h2>Connecting People & Property</h2>
          <p>Easy way to Buy/ Sell property</p>
          <Image width={200} height={200} src="/images/register-house.png" alt="" />
        </div>
        <div className={`${styles.registerContentBox2} animate-on-scroll`}>
          <h2>Register Here,</h2>
          <form method='POST' onSubmit={handleSubmit}>
            <label htmlFor="">Enter Name</label>
            <input type="text" placeholder="Enter Name" name='username' value={username} onChange={handleChange} required />
            <div className={styles.sendOtpBox}>
              <label htmlFor="">Enter Phone No.</label>
              <input type="text" placeholder="Enter Phone No." name='phone_number' value={phone_number} onChange={handleChange} required />
              <button onClick={sendOTP}>Send OTP</button>
            </div>
            {otpSent && <p className={styles.greenText}>OTP Sent To Your Number</p>}
            {userexist && <p className={styles.redText}>User Already Exists, Try To Login</p>}
            <label htmlFor="">Enter OTP</label>
            <input type="text" placeholder="Enter OTP" name='otp' value={otp} onChange={handleChange} required />
            {invalidOTP && <p className={styles.redText}>OTP Is Invalid</p>}
            <label htmlFor="">Enter Email</label>
            <input type="text" placeholder="Enter Email" name='email' value={email} onChange={handleChange} required />
            <div className={styles.sendOtpBox}>
              <label htmlFor="">Enter Password</label>
              <input type={showpassword} placeholder="Enter Password" name='password' value={password} onChange={handleChange} required />
              {showpassword == 'password' && <Image width={50} height={50} src="/images/eye.png" alt="" className={styles.icon3} onClick={showPassword} />}
              {showpassword == 'text' && <Image width={50} height={50} src="/images/eye-open-icon.png" alt="" className={styles.icon3} onClick={showPassword} />}
            </div>
            <input type="submit" value="SUBMIT" />
          </form>
          <p>Already Have An Account? <Link href="/login">Login Here</Link></p>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default Register