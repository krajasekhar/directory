import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import axios from 'axios';
import { signupUser } from '../actions/index.js';
import "../styles/bootswatch.css";

const InnerForm = props => {
	const { values, errors, touched, dirty, handleSubmit,
		isSubmitting, handleChange, handleBlur, handleReset } = props;
	return (
		<div>
			<h1>Signup</h1>
			<form onSubmit={handleSubmit} className="container form-group d-block">
				<div className="form-group row col-sm-6 col-xs-6">
					<label htmlFor="name" className="control-label">Name</label>
					<input type="text"
						id="name"
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
						className={
							errors.name && touched.name
								? "form-control is-invalid"
								: "form-control"
						}
					/>
					{errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}
				</div>
				<div className="form-group row col-sm-6 col-xs-6">
					<label htmlFor="username" className="control-label">Username</label>
					<input type="text"
						id="username"
						value={values.username}
						onChange={handleChange}
						onBlur={handleBlur}
						className={errors.username && touched.username
							? "form-control is-invalid"
							: "form-control"
						}
					/>
					{errors.username && touched.username && <div className="input-feedback">{errors.username}</div>}
				</div>
				<div className="form-group row col-sm-6 col-xs-6">
					<label htmlFor="password" className="control-label">Password</label>
					<input type="password"
						id="password"
						value={values.password}
						onChange={handleChange}
						onBlur={handleBlur}
						className={errors.password && touched.password
							? "form-control is-invalid"
							: "form-control"
						}
					/>
					{errors.password && touched.password && <div className="input-feedback">{errors.password}</div>}
				</div>
				<div className="form-group row col-sm-6 col-xs-6">
					<label htmlFor="contactno" className="control-label">Contact No</label>
					<input type="text"
						id="contactno"
						value={values.contactno}
						onChange={handleChange}
						onBlur={handleBlur}
						className={errors.contactno && touched.contactno
							? "form-control is-invalid"
							: "form-control"
						}
					/>
					{errors.contactno && touched.contactno && <div className="input-feedback">{errors.contactno}</div>}
				</div>
				<button type="button" className="btn btn-warning"
					onClick={handleReset}
					disabled={!dirty || isSubmitting}
				>Reset</button>
				<button type="submit"
					className="btn btn-primary"
					disabled={isSubmitting}
				>Submit</button>
				<br />
				{JSON.stringify(props)}
			</form>
		</div>
	);

};

const MyForm = withFormik({
	mapPropsToValues: () => ({
		name: "",
		username: "",
		password: "",
		contactno: ""
	}),
	validationSchema: Yup.object().shape({
		name: Yup.string()
			.matches(/^(?!.*[^A-Za-z0-9\s]+)/, "Invalid Name")
			.required("Name is required"),
		username: Yup.string()
			.matches(/^(?!.*[^A-Za-z0-9]+)/, "Invalid Username")
			.required("Username is required"),
		password: Yup.string()
			.min(4, "Password should contain minimum 4 characters")
			.matches(/(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)/, "Password must contain atleast 1 uppercase, 1 lowercase, 1 number")
			.required("Password is required"),
		contactno: Yup.string()
			.matches(/^(?!.*[^0-9]+)/, "Invalid Contact number")
			.required("Contact number is required"),

	}),
	handleSubmit: (values, { setSubmitting }) => {
		setSubmitting(false);
		signupUser(values);
		axios.post("http://localhost:8080/signup",values);
		// axios.get("http://localhost:8080/signup");
		// axios.post("http://localhost:5000/signup")
		//   .then(function(response){
		//     alert("response");
		//   })
		//   .catch(function (error) {
		//     alert(error);
		//   });
	},
	displayName: "Signup Form"
})(InnerForm);

export default MyForm;
