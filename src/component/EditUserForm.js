import React, { useState, useEffect } from "react";

const EditUserForm = ({ setEditing, currentUser, updateUser }) => {
	const [user, setUser] = useState(currentUser);

	useEffect(() => {
		setUser(currentUser);
	}, [currentUser]);
	// You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

	const handleInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<form
			className="loginhead"
			onSubmit={(event) => {
				event.preventDefault();
				updateUser(user.id, user);
			}}
		>
			<label className="frlabel">Body</label>
			<br />
			<input
				type="text"
				name="body"
				value={user.body}
				onChange={handleInputChange}
			/>
			<br />
			<label>Title</label>
			<br />
			<input
				type="text"
				name="title"
				value={user.title}
				onChange={handleInputChange}
			/>
			{/* <br /> */}
			{/* <br /> */}
			<button className="btn btn-primary mx-2">Update user</button>
			<button
				onClick={() => setEditing(false)}
				className="btn btn-danger button muted-button"
			>
				Cancel
			</button>
		</form>
	);
};

export default EditUserForm;
