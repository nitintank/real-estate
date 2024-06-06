import React from 'react'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from "../styles/ResetPassword.module.css";
import Image from 'next/image';
import Link from 'next/link';

const ResetPassword = () => {
  const [phone_number, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [new_password, setNewPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')
  const [showpassword, setShowpassword] = useState('password')
  const [showpassword2, setShowpassword2] = useState('password')

  const handleChange = (e) => {
    if (e.target.name == 'phone_number') {
      setPhoneNumber(e.target.value)
    }
    else if (e.target.name == 'otp') {
      setOtp(e.target.value)
    }
    else if (e.target.name == 'new_password') {
      setNewPassword(e.target.value)
    }
    else if (e.target.name == 'confirm_password') {
      setConfirmPassword(e.target.value)
    }
  }

  const sendOTP = async (e) => {
    if (phone_number.length == 13) {
      e.preventDefault()
      const data = { phone_number }
      let res = await fetch('https://a.khelogame.xyz/forgot-password', {
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
    const data = { phone_number, otp, new_password, confirm_password }
    let res = await fetch('https://a.khelogame.xyz/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    let response = await res.json()
    console.log(response)
  }

  const showPassword = () => {
    if (showpassword == 'password') {
      setShowpassword('text')
    }
    else {
      setShowpassword('password')
    }
  }

  const showPassword2 = () => {
    if (showpassword2 == 'password') {
      setShowpassword2('text')
    }
    else {
      setShowpassword2('password')
    }
  }

  return (
    <>
      <Navbar />
      {/* <!-- Reset Password Big Box Section --> */}
      <div class={styles.registerBigBox}>
        <div class={styles.registerContentBox1}>
          <h2>Connecting People & Property</h2>
          <p>Easy way to Buy/ Sell property</p>
          <Image width={200} height={200} src="/images/orange-house.png" alt="" />
        </div>
        <div class={styles.registerContentBox2}>
          <h2>Reset Password,</h2>
          <form method='POST' onSubmit={handleSubmit}>
            <div className={styles.sendOtpBox}>
              <label for="">Enter Phone No.</label>
              <input type="text" placeholder="Enter Phone No." name='phone_number' value={phone_number} onChange={handleChange} required />
              <button onClick={sendOTP}>Send OTP</button>
            </div>
            <label for="">Enter OTP</label>
            <input type="text" placeholder="Enter OTP" name='otp' value={otp} onChange={handleChange} required />
            <div className={styles.sendOtpBox}>
              <label for="">Enter Password</label>
              <input type={showpassword} placeholder="Enter Password" name='new_password' value={new_password} onChange={handleChange} required />
              {showpassword == 'password' && <Image width={50} height={50} src="/images/eye.png" alt="" className={styles.icon3} onClick={showPassword} />}
              {showpassword == 'text' && <Image width={50} height={50} src="/images/eye-open-icon.png" alt="" className={styles.icon3} onClick={showPassword} />}
            </div>
            <div className={styles.sendOtpBox}>
              <label for="">Confirm Password</label>
              <input type={showpassword2} placeholder="Enter Confirm Password" name='confirm_password' value={confirm_password} onChange={handleChange} required />
              {showpassword2 == 'password' && <Image width={50} height={50} src="/images/eye.png" alt="" className={styles.icon3} onClick={showPassword2} />}
              {showpassword2 == 'text' && <Image width={50} height={50} src="/images/eye-open-icon.png" alt="" className={styles.icon3} onClick={showPassword2} />}
            </div>
            <input type="submit" value="SUBMIT" />
          </form>
          <p>Already Have An Account? <Link href="/login">Login Here</Link></p>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
      {/* <form method='POST' onSubmit={handleSubmit}>
                <label>Enter Phone Number </label>
                <input type="text" name='phone_number' value={phone_number} onChange={handleChange} required />
                <button onClick={sendOTP}>Send OTP</button>
                <br />
                <br />
                <label>Enter OTP </label>
                <input type="text" name='otp' value={otp} onChange={handleChange} required />
                <br />
                <br />
                <label>Enter Password </label>
                <input type="text" name='new_password' value={new_password} onChange={handleChange} required />
                <br />
                <br />
                <label>Confirm Password </label>
                <input type="text" name='confirm_password' value={confirm_password} onChange={handleChange} required />
                <br />
                <br />
                <input type="submit" value="LOGIN" />
            </form> */}
    </>
  )
}

export default ResetPassword