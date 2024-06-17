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
  const [otpSent, setotpSent] = useState(false)
  const [invalidOTP, setInvalidOTP] = useState(false)
  const [changeComplete, setChangeComplete] = useState(false)
  const [notMatch, setNotMatch] = useState(false)

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

      if (response.message == "OTP sent to your phone number") {
        setotpSent(true)
      }
    }
    else {
      alert("Error Occured, Try Again!!")
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
    
    if (response.error == "Invalid OTP") {
      setInvalidOTP(true)
      setotpSent(false)
    }
    else if (response.message == "Password reset successfully") {
      setChangeComplete(true)
    }
    else if (response.message == "Password and confirm password do not match") {
      setNotMatch(true)
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
            {otpSent && <p className={styles.greenText}>OTP Sent To Your Number</p>}
            <label for="">Enter OTP</label>
            <input type="text" placeholder="Enter OTP" name='otp' value={otp} onChange={handleChange} required />
            {invalidOTP && <p className={styles.redText}>OTP Is Invalid</p>}
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
            {notMatch && <p className={styles.redText}>Password & Confirm Password Is Not Same, Try Again</p>}
            <input type="submit" value="SUBMIT" />
            {changeComplete && <p className={styles.redText}>Done, Password Changed Successfully</p>}
          </form>
          <p>Already Have An Account? <Link href="/login">Login Here</Link></p>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default ResetPassword