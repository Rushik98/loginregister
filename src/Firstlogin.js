import React from "react";
import "./index.css";

function Firstlogin() {
	return (
		<form className="App">
			<div className="form-inner">
				<h2>Login</h2>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" id="name" />
				</div>

				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" id="email" />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" id="password" />
				</div>
				<input type="submit" value="Login" />
			</div>
		</form>
	);
}

export default Firstlogin;
