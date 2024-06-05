import React from 'react'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/Register.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {

  const [username, setUserName] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [otp, setOTP] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const role = 'user'

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
      console.log(response)
    }
    else {
      alert("Hello")
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
    console.log(response)
  }

  return (
    <>
      <Navbar />
      {/* <!-- Register Big Box Section --> */}
      <div class={styles.registerBigBox}>
        <div class={styles.registerContentBox1}>
          <h2>Connecting People & Property</h2>
          <p>Easy way to Buy/ Sell property</p>
          <Image width={200} height={200} src="/images/register-house.png" alt="" />
        </div>
        <div class={styles.registerContentBox2}>
          <h2>Register Here,</h2>
          <form method='POST' onSubmit={handleSubmit}>
            <label for="">Enter Name</label>
            <input type="text" placeholder="Enter Name" name='username' value={username} onChange={handleChange} required />
            <div className={styles.sendOtpBox}>
              <label for="">Enter Phone No.</label>
              <input type="text" placeholder="Enter Phone No." name='phone_number' value={phone_number} onChange={handleChange} required />
              <button onClick={sendOTP}>Send OTP</button>
            </div>
            <label for="">Enter OTP</label>
            <input type="text" placeholder="Enter Phone No." name='otp' value={otp} onChange={handleChange} required />
            <label for="">Enter Email</label>
            <input type="text" placeholder="Enter Email" name='email' value={email} onChange={handleChange} required />
            <label for="">Enter Password</label>
            <input type="text" placeholder="Enter Password" name='password' value={password} onChange={handleChange} required />
            <input type="submit" value="SUBMIT" />
          </form>
          <p>Already Have An Account? <Link href="/login">Login Here</Link></p>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
      {/* <form method='POST' onSubmit={handleSubmit}>
        <label>Enter Name </label>
        <input type="text" name='username' value={username} onChange={handleChange} required />
        <br />
        <br />
        <label>Enter Phone Number </label>
        <input type="text" name='phone_number' value={phone_number} onChange={handleChange} required />
        <button onClick={sendOTP}>Send OTP</button>
        <br />
        <br />
        <label>Enter OTP </label>
        <input type="text" name='otp' value={otp} onChange={handleChange} required />
        <br />
        <br />
        <label>Enter Email </label>
        <input type="text" name='email' value={email} onChange={handleChange} required />
        <br />
        <br />
        <label>Enter Password </label>
        <input type="text" name='password' value={password} onChange={handleChange} required />
        <br />
        <br />
        <input type="submit" value="SUBMIT" />
      </form> */}
    </>
  )
}

export default Register