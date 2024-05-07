import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import imageOne from '../assets/images/Signup.png'
import UserIcon from "../svg components/UserIcon";
import Email from "../svg components/Email";
import PassLock from "../svg components/PassLock";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap h-screen">
      <div className="h-screen w-full md:w-1/2 bg-[#4BCBEB]">
        <div className="mt-13 flex items-center justify-center">
          <img src={imageOne} className="mx-auto w-80 py-28" alt="Signup"></img>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center mb-28">
        <div className="w-full max-w-xs">
          <h1 className="font-bold text-lg mb-6">Sign Up For An Account</h1>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validate={values => {
              const errors = {};
              
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              if (!values.password) {
                errors.password = 'Required';
              } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters long';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              axios.post('http://localhost:3000/api/users/register', values)
                .then(result => {
                  console.log(result)
                  navigate('/login')
                })
                .catch(err => console.log(err))
                .finally(() => setSubmitting(false));
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="relative">
                  <div className="flex">
                    <div className="mt-3 ml-2 absolute ">
                      <UserIcon></UserIcon>
                    </div>
                  </div>
                </div>
                <Field
                  className="w-full mb-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md py-3 pl-10 pr-6 sm:text-sm focus:ring-1"
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                />
                <ErrorMessage name="name" component="div" className="pb-1 text-xs text-red-500" />

                <div className="relative">
                  <div className="flex">
                    <div className="mt-3 ml-2 absolute ">
                      <Email></Email>
                    </div>
                  </div>
                </div>
                <Field
                  className="w-full mb-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md py-3 pl-10 pr-6 sm:text-sm focus:ring-1"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="pb-1 text-xs text-red-500" />

                <div className="relative">
                  <div className="flex">
                    <div className="mt-3 ml-2 absolute ">
                      <PassLock></PassLock>
                    </div>
                  </div>
                </div>
                <Field
                  className="w-full mb-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md py-3 pl-10 pr-6 sm:text-sm focus:ring-1"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="pb-2 text-xs text-red-500" />

                <div className="pb-10">
                  <input className="mr-2 h-4 w-3" type="checkbox" />
                  <label className="text-xs text-slate-500">
                    {" "}
                    By creating an account means you agree to the{" "}
                    <span className="font-bold text-black">Terms</span> <br />
                    <span className="ml-7">
                      <span className="font-bold text-black">Conditions</span> and
                      our <span className="font-bold text-black">Privacy Policy</span>
                    </span>
                  </label>
                </div>
                <button
                  className="px-2  w-full bg-[#4BCBEB] rounded-lg text-white relative"
                  type="submit"
                  disabled={isSubmitting}
                  style={{ minHeight: "45px" }}
                >
                  {isSubmitting && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <FontAwesomeIcon icon={faSpinner} className="fa-spin text-white" />
                    </div>
                  )}
                  {!isSubmitting && "Sign Up"}
                </button>
              </Form>
            )}
          </Formik>
          <br />
          <Link to="/login" className="block text-center mt-5">
            <p className="text-xs">
              Already have an account?{" "}
              <span className="font-bold text-[#4BCBEB]">Log In</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
