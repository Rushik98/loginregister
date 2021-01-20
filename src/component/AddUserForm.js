import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
	const [user, setUser] = useState({ id: null, body: "", title: "" });

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const onClick = (e) => {
		e.preventDefault();
		addUser(user);
		setUser({ id: null, body: "", title: "" });
	};

	return (
		<form>
			<label>Body</label>
			<br />
			<input type="text" name="body" value={user.body} onChange={onChange} />
			<br />
			<label>Title</label>
			<br />
			<input type="text" name="title" value={user.title} onChange={onChange} />
			<button
				className="btn btn-success mx-2"
				onClick={onClick}
				disabled={!user.body || !user.title}
			>
				Add Post
			</button>
		</form>
	);
};

export default AddUserForm;
