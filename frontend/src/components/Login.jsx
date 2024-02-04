import { useFormik } from 'formik';
import React from 'react'
import { enqueueSnackbar } from 'notistack';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';


const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

const Login = () => {



  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values));
      console.log(values);

      // send request to backend/REST API
      const response = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.status);
      console.log(response.statusText);

      if (response.status === 200) {
        enqueueSnackbar('Loggedin Successfully', { variant: 'success' });

        const data = await response.json();
        console.log(data);
        //to uave user data  in session ,inbuilt api- sessionstorage
        sessionStorage.setItem('user', JSON.stringify(data));

      } else if (response.status === 401) {
        enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }


    },
    validationSchema: LoginSchema
  });


  return (
    <div>
      <section style={{ backgroundColor: "#B06161" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card w-100" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://i.pinimg.com/474x/70/0d/f5/700df5b522327cf57c58a26480ceafbd.jpg"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={loginForm.handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className=" fas fa-martini-glass-citrus fa-3x me-3"
                            // className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#000g" }}
                          />
                          <span className="h1 fw-bold mb-0">Eatery</span>
                        </div>
                        <h4
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1, color: "#628E90" }}
                        >
                          Login with your account
                        </h4>
                        <div className="form mb-4">
                          <label className="form-label" htmlFor="email">
                            Email address
                          </label>
                          <span className='text-danger ms-3'>{loginForm.touched.email && loginForm.errors.email}</span>
                          <input type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mb-4' />


                        </div>
                        <div className="form mb-4">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <span className='text-danger ms-3'>{loginForm.touched.password && loginForm.errors.password}</span>
                          <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mb-4' />


                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-primary btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          
                          <Link to="/Signup" style={{ color: "#393f81" }}>
                  Register Here
                </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login;
