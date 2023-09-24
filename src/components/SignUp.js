/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";

export default function SignUp() {
  // const validationSchema = Yup.object({
  //   username: Yup.string().required("Username is required"),
  //   last_name: Yup.string().required("Last name is required"),
  //   company: Yup.string().required("Company is required"),
  //   email: Yup.string().required("Email is required"),
  //   password: Yup.string().min(5).required("Password is required"),
  //   confirm_password: Yup.string().min(5).oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm password is required"),
  //   phone: Yup.string().matches(/^\d{4}-\d{7}$/, "Invalid phone number format (11 digits)").required("Phone number is required"),
  // });

  const [myUsername, setMyUsername] = React.useState("");
  const [myEmail, setMyEmail] = React.useState("");
  const [myPassword, setMyPassword] = React.useState("");
  // const navigate = useNavigate();

  const collectData = async (values) => {
    console.warn(values);
    // navigate('/')
    const result = await fetch("http//localhost:3000/signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    console.warn(data);
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      // validationSchema={validationSchema} // Apply the validation schema
    >
      {({ isValid }) => (
        <div style={{ margin: "20px" }}>
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              value={myUsername}
              onChange={(e) => setMyUsername(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              value={myEmail}
              onChange={(e) => setMyEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john.doe@company.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              value={myPassword}
              onChange={(e) => setMyPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <button
            type="submit"
            disabled={!isValid}
            onSubmit={collectData}
            className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      )}
    </Formik>
  );
}
