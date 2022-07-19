import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
const PasswordReset = () => {
    const classes = useStyles()
    const [validUrl, setValidUrl] = useState(false);
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
    const url = `http://localhost:3000/api-hub/auth/auth/reset/${param.id}/${param.token}`;

    useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(url, { password });
			setMsg(data.message);
			setError("");
			window.location = "/login";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};


  return (
      <>
    <Stack direction='column' height='60vh' alignItems='center' justifyContent='center' textAlign='center' py={1} px={2}>
    <Typography variant='h5' gutterBottom>
      Reset your password
    </Typography>
    {error && <div className="error_msg">{error}</div>}
	{msg && <div className="success_msg">{msg}</div>}
    <form className={classes.form} onSubmit={handleSubmit}>
      <InputField fullWidth type='password' name="password" value={password} required onChange={(e) => setPassword(e.target.value)} label='Password' placeholder='Enter your new password' />
      <InputField fullWidth type='password' name="passwordConfirm" value={password} required onChange={(e) => setPassword(e.target.value)} label='Confirm Password' placeholder='Confirm your new password' />
      <Button type='submit' variant='contained'>
        Submit
      </Button>
    </form>
    <Typography variant='body1' mt={6}>
      <Link to='/login'>
        &larr; Back to log in.
      </Link>
    </Typography>
  </Stack>
  </>
  )
}

export default PasswordReset;