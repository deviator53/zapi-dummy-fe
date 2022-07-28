import React, { useState } from "react";
import ApiPageSidebar from "../components/ApiPageSidebar";
import { makeStyles } from "@mui/styles";
import { Divider, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

const useStyles = makeStyles({
	main: {
		display: "flex",
		gap: "1rem",
		alignItems: "center",
	},
	title: {
		fontSize: "40px",
		color: "var(--base)",
		display: "flex",
		gap: "2rem",
		marginTop: "-100rem",
		alignItems: "center",
	},
	tp: {
		marginTop: "2rem",
	},
	poxyKeyFlex: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		border: "1px solid #757575",
		padding: "5px 10px",
		maxWidth: "45rem",
	},
	pointer: {
		cursor: "pointer",
	},
});
function SecurityMyApi() {
	const classes = useStyles();

	const [proxySecret, setProxySecret] = useState(false);
	const [threatProtection, setThreatProtection] = useState(false);
	const [requestSchemaValidation, setRequestSchemaValidation] = useState(false);

	function toogleProxySecret() {
		setProxySecret(prevState => {
			return !prevState;
		});
	}
	function toogleThreatProtection() {
		setThreatProtection(prevState => {
			return !prevState;
		});
	}
	function toogleRequestSchemaValidation() {
		setRequestSchemaValidation(prevState => {
			return !prevState;
		});
	}
	return (
		<div className={classes.main}>
			<section>
				<ApiPageSidebar />
			</section>
			<Divider orientation="vertical" flexItem />
			<section>
				<div>
					<Typography className={classes.title} variant="h5">
						Firewall Settings
					</Typography>
					<Typography>
						For security, protect your API by blocking requests that are not
						from the RapidAPI infrastructure. RapidAPI adds the
						"X-RapidAPI-Proxy-Secret" header on every request. This header has a
						unique value for each API.
					</Typography>
					<div className={classes.poxyKeyFlex}>
						<Typography>
							X-RapidAPI-Proxy-Secret:{" "}
							{proxySecret
								? "22252c10-08f3-11ed-ae6a-9d540b87edef"
								: "•••••••••••••••••••••••••"}
						</Typography>

						{proxySecret ? (
							<VisibilityOffIcon
								onClick={toogleProxySecret}
								className={classes.pointer}
							/>
						) : (
							<VisibilityIcon
								onClick={toogleProxySecret}
								className={classes.pointer}
							/>
						)}
					</div>
					<Typography>
						Whitelist ZapiAPI IPs to allow requests only from ZapiAPI.
					</Typography>
				</div>
				<div className={classes.tp}>
					<Typography className={classes.title} variant="h5">
						Threat Protection
					</Typography>
					<Typography>
						Threat protection protects your API from SQL or Javascript injection
						attacks. If enabled, we will automatically compare the paths,
						parameters, headers, and body (application/json,
						application/x-www-form-urlencoded, and non-binary data in
						multipart/form-data only) of all requests against pre-defined RegEx
						patterns, and block matching requests from reaching your servers.
					</Typography>
					{threatProtection ? (
						<div className={classes.main}>
							<ToggleOnIcon
								fontSize="large"
								onClick={toogleThreatProtection}
								className={classes.pointer}
							/>{" "}
							<Typography>Threat protection enabled</Typography>{" "}
						</div>
					) : (
						<div className={classes.main}>
							<ToggleOffIcon
								fontSize="large"
								onClick={toogleThreatProtection}
								className={classes.pointer}
							/>
							<Typography>Threat protection disabled</Typography>
						</div>
					)}
					{threatProtection && (
						<Typography>
							Threat protection requires the “Content-Type” header in requests
							with a body. Requests with a body that do not specify a
							“Content-Type” header will be blocked.
						</Typography>
					)}
				</div>
				<div className={classes.tp}>
					<Typography className={classes.title} variant="h5">
						Request Schema Validation
					</Typography>
					<Typography>
						If enabled, we will automatically validate the path, query and
						header parameters on run time and block all invalid requests. This
						requires “Content-Type” header in requests with a body.
					</Typography>
					<Typography>
						If enabled, we will automatically validate the path, query and
						header parameters on run time and block all invalid requests. This
						requires “Content-Type” header in requests with a body.
					</Typography>
					{requestSchemaValidation ? (
						<div className={classes.main}>
							<ToggleOnIcon
								fontSize="large"
								onClick={toogleRequestSchemaValidation}
								className={classes.pointer}
							/>
							<Typography>Enabled</Typography>
						</div>
					) : (
						<div className={classes.main}>
							<ToggleOffIcon
								fontSize="large"
								onClick={toogleRequestSchemaValidation}
								className={classes.pointer}
							/>
							<Typography>Disabled</Typography>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}

export default SecurityMyApi;
