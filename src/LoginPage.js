import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const LoginPage = (props) => {
	const [value] = useState(
		localStorage.getItem("signup-data")
			? JSON.parse(localStorage.getItem("signup-data"))
			: null
	);
	const [loginData, setloginData] = useState({
		email: "",
		password: "",
	});

	const onChange = (e) => {
		setloginData((value) => {
			return {
				...value,
				[e.target.name]: e.target.value,
			};
		});
	};
	const formSubmit = (e) => {
		e.preventDefault();
		if (
			loginData.email === value.email &&
			loginData.password === value.password
		) {
			props.history.push("/home");
		}
	};

	return (
		<form className="App">
			<div className="form-inner">
				<h2>Login</h2>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						name="email"
						type="email"
						value={loginData.email}
						onChange={onChange}
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						name="password"
						value={loginData.password}
						onChange={onChange}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
						required
					/>
				</div>
				<input
					type="submit"
					onClick={formSubmit}
					value="Login"
					className="mx-2"
				/>

				<Link to="/register" className="loginimp">
					Register
				</Link>
			</div>
		</form>
	);
};

export default LoginPage;
