import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function RegisterPage() {
	const [registerData, setregisterData] = useState({
		firstname: "",
		lastname: "",
		password: "",
		email: "",
	});

	const onChange = (e) => {
		setregisterData((value) => {
			return {
				...value,
				[e.target.name]: e.target.value,
			};
		});
	};
	const formSubmit = (e) => {
		e.preventDefault();
		setregisterData({
			firstname: "",
			lastname: "",
			password: "",
			email: "",
		});
		localStorage.setItem("signup-data", JSON.stringify(registerData));
	};
	return (
		<form className="App">
			<div className="form-inner">
				<h2>Register</h2>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						name="firstname"
						type="text"
						onChange={onChange}
						value={registerData.firstname}
						className="form-control"
						placeholder="First Name"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="lastname">LastName:</label>
					<input
						name="lastname"
						onChange={onChange}
						value={registerData.lastname}
						type="text"
						className="form-control"
						placeholder="Last Name"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						name="email"
						onChange={onChange}
						value={registerData.email}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Email"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						name="password"
						onChange={onChange}
						value={registerData.password}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
						required
					/>
				</div>
				<input
					type="submit"
					value="Register"
					className="mx-3"
					onClick={formSubmit}
				/>
				<Link to="/" className="loginimp">
					Login
				</Link>
			</div>
		</form>
	);
}

export default RegisterPage;
