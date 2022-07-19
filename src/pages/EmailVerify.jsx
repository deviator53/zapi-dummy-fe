import React, { useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Button, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'




const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(false);
	const param = useParams();

    useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:3000/api-hub/auth/auth/reset/${param.id}/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);
  return (
    <>
    {validUrl ? (
        <div className="container">
            <h1>Email verified successfully</h1>
            <Link to="/login">
            <Button type='submit' variant='contained'>
                    Submit
            </Button>
            </Link>
		</div>
    ) : (
        <h1>404 Page Not Found</h1>
    )}
    </>
  )
}

export default EmailVerify;