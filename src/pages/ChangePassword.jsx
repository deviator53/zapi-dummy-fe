import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import axios from "axios";
import { Button, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { InputField } from '../components'

const useStyles = makeStyles({
  form: {
    width: '50%',
    display: 'grid',
    placeItems: 'center',
    gap: '2rem',
    marginTop: '3rem',
    '@media screen and (max-width: 800px)': {
      width: '90%'
    },
    '@media screen and (min-width: 1270px)': {
      width: '60%'
    }
  }
})
const identity_url = process.env.REACT_APP_IDENTITY_URL

const ChangePassword = () => {
  const classes = useStyles()
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  
  // const dispatch = useDispatch()
  const { user} = useSelector(store => store.user)


  const url = `${identity_url}/auth/changepassword/${user.userId}`;
  

  const PASSWORD_REGEX = /^(?=.*[a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%_]).{8,20}$/

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== passwordConfirm) {
			setNewPassword("");
			setPasswordConfirm("");
			setTimeout(()=>{
				setError("");
			}, 5000);
			return setError("Passwords don't match");

		} 

    if (oldPassword === newPassword) {
      setOldPassword("");
      setNewPassword("");
      setPasswordConfirm("");

      setTimeout(()=> {
        setError("");
      },5000)
      return setError("New Password Should be different");
    }

    // if (!PASSWORD_REGEX.test(newPassword)) {
    //   setError("Password must be between 8 - 20 characters and must include a capital letter, a small letter, a number and a special character");
    //   setTimeout(()=> {
    //     setError("");
    //   },8000);
    // } 



    const userData = { oldPassword, newPassword }
    try{
      const res = await axios.patch(url, userData);
      console.log(res);
    setMsg("Password Changed Successfully");
				window.location = "/login";
    } catch (error){
      setOldPassword('');
      setNewPassword('');
      setPasswordConfirm('');
      setError(error.response.data.message);
				setTimeout(()=> {
					setError("");
				},8000);
      
    }


    // Suduko@12345
    // disabled={!password || !newPassword || !passwordConfirm || !PASSWORD_REGEX.test(newPassword)} 
  }
  return (
    <>
    <Stack direction='column' height='60vh' alignItems='center' justifyContent='center' textAlign='center' py={1} px={2}>
    <Typography variant='h5' gutterBottom>
      Change your password
    </Typography>
    {error && <div className="error_msg">{error}</div>}
	{msg && <div className="success_msg">{msg}</div>}
    <form className={classes.form} onSubmit={handleSubmit}>
      <InputField fullWidth type='password' name="oldPassword" value={oldPassword} required onChange={(e) => setOldPassword(e.target.value)} label='Old Password' placeholder='Enter your current password' />
      <InputField fullWidth type='password' name="newpassword" value={newPassword} required onChange={(e) => setNewPassword(e.target.value)} label='New Password' placeholder='Enter your New password' />
      <InputField fullWidth type='password' name="passwordConfirm" value={passwordConfirm} required onChange={(e) => setPasswordConfirm(e.target.value)} label='Confirm Password' placeholder='Confirm your new password' />
      <Button disabled={!oldPassword || !newPassword || !passwordConfirm || !PASSWORD_REGEX.test(newPassword)} type='submit' variant='contained'>
        Submit
      </Button>
    </form>
    <Typography variant='body1' mt={6}>
      <Link to='/login'>
        &larr; Back to log in.
      </Link>
    </Typography>
  </Stack> 
  </>  )
}

export default ChangePassword;