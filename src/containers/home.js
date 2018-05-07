import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import "../styles/bootswatch.css";
import { getUserData } from "../actions/index.js"
import { bindActionCreators } from 'redux';

class Home extends Component {
	fireGetAction() {
		this.props.getUserData();
		// alert(this.props.users.length);
	}
	userList() {		
		if (this.props.users) {
			console.log(this.props.users);
			if (this.props.users.length != 0) {
				return (
					this.props.users.map((user) => {
						return (
							<tr key={user._id}>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>{user.contactNo}</td>
							</tr>
						)
						// <tr><td>hello</td></tr>
					})
				)
			}
		}
		else {
			return []
		}
	}
	render() {
		return (
			<div>
			<button onClick={() => this.fireGetAction()}>Get Data </button>
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Username</th>
						<th scope='col'>Contact No</th>
					</tr>
				</thead>
				<tbody>
					{this.userList()}
				</tbody>
			</table>
			</div>
		)
	}
}

var mapStateToProps = (state) => {
	return {
		users: state.users
	};
}

var mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getUserData: getUserData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
