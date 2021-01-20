import React from "react";
import { useState } from "react";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import "../App.css";

function HomePage() {
	const usersData = [{ id: 1, body: "Rohan", title: "floppy" }];

	// Setting state
	const [users, setUsers] = useState(usersData);
	const [currentUser, setCurrentUser] = useState({
		id: null,
		body: "",
		title: "",
	});
	const [editing, setEditing] = useState(false);

	// CRUD operations
	const addUser = (user) => {
		user.id = users.length + 1;
		setUsers([...users, user]);
	};

	const deleteUser = (id) => {
		setEditing(false);

		setUsers(users.filter((user) => user.id !== id));
	};

	const updateUser = (id, updatedUser) => {
		setEditing(false);

		setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
	};

	const editRow = (user) => {
		setEditing(true);

		setCurrentUser({ id: user.id, body: user.body, title: user.title });
	};

	return (
		<div className="container">
			<h1 className="crudtitle" >List of Post</h1>
			<div className="main_div">
				<div className="main1 card border-0 shadow p-4 w-50 mx-auto m-5">
					{editing ? (
						<>
							<h2>Edit Post</h2>
							<EditUserForm
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</>
					) : (
						<>
							<h2>Add Post</h2>
							<AddUserForm addUser={addUser} />
						</>
					)}
				</div>
				<div className="main1 card border-0 shadow p-4 w-50 mx-auto">
					<h2>View Post</h2>
					<table>
						<thead>
							<tr>
								<th>Body</th>
								<th>Title</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{users.length > 0 ? (
								users.map((user) => (
									<tr key={user.id}>
										<td>{user.body}</td>
										<td>{user.title}</td>
										<td>
											<button
												onClick={() => {
													editRow(user);
												}}
												className="btn btn-warning button muted-button mx-2"
											>
												Edit
											</button>
											<button
												onClick={() => deleteUser(user.id)}
												className="btn btn-danger button muted-button"
											>
												Delete
											</button>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={3}>No users</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
