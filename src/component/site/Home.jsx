import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addUsers, getUserLogin } from "../services/Service";
import "./Style.css";

export default function Home() {
  const navigate = useNavigate();
  //state for showing alert-
  const [isShow, setIsShow] = useState(false);
  const [alertClass, setAlertClass] = useState();
  const [msg, setMsg] = useState();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    reset: reset1,
    formState: { errors: errors1 },
  } = useForm();

  const onSave = (data) => {
    addUsers(data)
      .then((res) => {
        console.log(res.status);
        if (res.data && res.data.success) {
          localStorage.setItem("UserID", JSON.stringify(res.data.userId));

          navigate("/profileDetails");
        }
        reset({
          userName: "",
          contact: "",
          password: "",
          dob: "",
          gender: "",
          marriedStatus: "",
          city: "",
        });
      })
      .catch((err) => {
        if (err.response.status === 409) {
          //setError(err.response.data.message);
          //alert
          setIsShow(true);
          setAlertClass("alert alert-danger");
          setMsg(err.response.data.message);
          //end alert
        }
      });
  };
  //login-
  const loginData = (data) => {
    getUserLogin(data).then((res) => {
      console.log(res.data);
      if (res.data) {
        alert("Login Successful..");
        localStorage.setItem("Login", JSON.stringify(res.data));
        navigate("/profileDetails");
      } else {
        alert("Login Failed");
      }
    });
  };

  return (
    <div>
      <div className="w3layouts-banner" id="home">
        <div className="container">
          <div className="logo">
            <h1>
              <a className="cd-logo link link--takiri" href="index.html">
                Match{" "}
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i>Made in
                  heaven.
                </span>
              </a>
            </h1>
          </div>
          <div className="clearfix"></div>
          <div className="agileits-register">
            <h3>Register NOW!</h3>
            {/* display alert */}
            {isShow && (
              <div className={alertClass} role="alert">
                {msg}
              </div>
            )}
            {/* end */}
            <form onSubmit={handleSubmit(onSave)}>
              {/* username */}
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Name*:</span>
                <input
                  type="text"
                  name="userName"
                  placeholder=" "
                  required=""
                  {...register("userName", {
                    required: "please enter your name.",
                    pattern: {
                      value: /^[a-z A-Z]+$/,
                      message: "Enter Valid Name.",
                    },
                  })}
                />
              </div>
              <div>
                {errors.userName && (
                  <span className="text-danger">{errors.userName.message}</span>
                )}
              </div>
              {/* contact no */}
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Contact no*:</span>
                <input
                  type="text"
                  name="contact"
                  placeholder=" "
                  required=""
                  {...register("contact", {
                    required: "please enter your contact",
                    pattern: {
                      value: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/,
                      message: "Enter Valid Contact No",
                    },
                  })}
                />
              </div>
              <div>
                {errors.contact && (
                  <span className="text-danger">{errors.contact.message}</span>
                )}
              </div>
              {/* password */}
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Password*:</span>
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  required=""
                  {...register("password", {
                    required: "please enter password.",
                    pattern: {
                      value: /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/,
                      message: "Enter atleast 8 character",
                    },
                  })}
                />
              </div>
              <div>
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </div>
              {/* gender */}
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Gender*:</span>
                <select
                  id="w3_country"
                  className="frm-field required"
                  {...register("gender", {
                    required: "please enter your married status.",
                  })}
                >
                  <option value="">---Gender---</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                {errors.gender && (
                  <span className="text-danger">{errors.gender.message}</span>
                )}
              </div>
              {/* Date Of Birth: */}
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Date Of Birth*:</span>
                <input
                  name="dob"
                  type="date"
                  required=""
                  {...register("dob", {
                    required: "please enter your birth date.",
                  })}
                />
              </div>
              <div>
                {errors.dob && (
                  <span className="text-danger">{errors.dob.message}</span>
                )}
              </div>
              {/* city */}
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>City*:</span>
                <input
                  type="text"
                  name="city"
                  placeholder=" "
                  required=""
                  {...register("city", {
                    required: "please enter your city.",
                    pattern: {
                      value: /^[a-z A-Z]+$/,
                      message: "Enter Valid city.",
                    },
                  })}
                />
              </div>
              <div>
                {errors.city && (
                  <span className="text-danger">{errors.city.message}</span>
                )}
              </div>

              {/* married status */}
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Marital Status*:</span>
                <select
                  id="w3_country"
                  className="frm-field required"
                  {...register("marriedStatus", {
                    required: "please enter your married status.",
                  })}
                >
                  <option value="">---Married Status---</option>
                  <option value="Never Married">Never Married</option>
                  <option value="Re-Marriage">Re-Marriage</option>
                </select>
              </div>
              <div>
                {errors.marriedStatus && (
                  <span className="text-danger">
                    {errors.marriedStatus.message}
                  </span>
                )}
              </div>

              <div className="w3-agree">
                <input type="checkbox" id="c1" name="cc" />
                <label className="agileits-agree">
                  I have read & agree to the{" "}
                  <a href="terms.html">Terms and Conditions</a>
                </label>
              </div>
              <input type="submit" value="Register me" />
              <div className="clearfix"></div>
              <p className="w3ls-login">
                Already a member?{" "}
                <a href="#" data-toggle="modal" data-target="#myModal">
                  Login
                </a>
              </p>
            </form>
          </div>
          {/* <!-- login --> */}
          <div
            id="myModal"
            className="modal fade"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              {/* <!-- Modal content--> */}
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title">Login to Continue</h4>
                </div>
                <div className="modal-body">
                  <div className="login-w3ls">
                    <form id="signin" onSubmit={handleSubmit1(loginData)}>
                      <label htmlFor="">Contact No :</label>
                      <input
                        type="text"
                        name="contact"
                        placeholder="Contact No"
                        required=""
                        {...register1("contact", {
                          required: "Please Enter contact no.",
                          pattern: {
                            value: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/,
                            message: "Enter Valid Contact No.",
                          },
                        })}
                      />
                      {errors1.contact && (
                        <span className="text-danger">
                          {errors1.contact.message}
                        </span>
                      )}
                      <label>Password :</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required=""
                        {...register1("password", {
                          required: "Please Enter Password.",
                          pattern: {
                            value:
                              /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/,
                            message: "Enter atleast 8 character",
                          },
                        })}
                      />
                      {errors1.password && (
                        <span className="text-danger">
                          {errors1.password.message}
                        </span>
                      )}
                      <div className="w3ls-loginr">
                        <input
                          type="checkbox"
                          id="brand"
                          name="checkbox"
                          value=""
                        />
                        <span> Remember me ?</span>
                        <a href="#">Forgot password ?</a>
                      </div>
                      <div className="clearfix"> </div>
                      <input type="submit" name="submit" value="Login" />
                      <div className="clearfix"> </div>
                      <div className="social-icons">
                        <ul>
                          <li>
                            <a href="#">
                              <span className="icons">
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span className="text">Facebook</span>
                            </a>
                          </li>
                          <li className="twt">
                            <a href="#">
                              <span className="icons">
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span className="text">Twitter</span>
                            </a>
                          </li>
                        </ul>
                        <div className="clearfix"> </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- //Modal --> */}
        </div>
      </div>
      {/* <!---728x90--->
		<!-- Find your soulmate --> */}
      <div className="w3l_find-soulmate text-center">
        <h3>Find Your Soulmate</h3>
        <div className="container">
          <a className="scroll" href="#home">
            <div className="col-md-3 w3_soulgrid">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              <h3>Sign Up</h3>
              <p>Signup for free and Upload your profile</p>
            </div>
          </a>
          <a className="scroll" href="#home">
            <div className="col-md-3 w3_soulgrid">
              <i className="fa fa-search" aria-hidden="true"></i>
              <h3>Search</h3>
              <p>Search for your right partner</p>
            </div>
          </a>
          <a className="scroll" href="#home">
            <div className="col-md-3 w3_soulgrid">
              <i className="fa fa-users" aria-hidden="true"></i>
              <h3>Connect</h3>
              <p>Connect your perfect Match</p>
            </div>
          </a>
          <a className="scroll" href="#home">
            <div className="col-md-3 w3_soulgrid">
              <i className="fa fa-comments-o" aria-hidden="true"></i>
              <h3>Interact</h3>
              <p>Become a member and start Conversation</p>
            </div>
          </a>
          <div className="clearfix"> </div>
        </div>
      </div>
      {/* <!-- //Find your soulmate -->
		<!---728x90--->
		<!-- featured profiles --> */}
      <div className="w3layouts_featured-profiles">
        <div className="container">
          {/* <!-- slider --> */}
          <div className="agile_featured-profiles">
            <h2>Featured Profiles</h2>
            <ul id="flexiselDemo3">
              <li>
                <div className="col-md-3 biseller-column">
                  <a href="groom_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p1.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="groom_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p2.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="bride_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p3.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="groom_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p4.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="bride_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p5.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="bride_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p6.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="groom_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p7.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="bride_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p8.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="col-md-3 biseller-column">
                  <a href="groom_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p9.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="groom_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p10.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="groom_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p11.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="bride_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p12.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="groom_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p7.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="bride_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p5.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="groom_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p1.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 biseller-column">
                  <a href="groom_profile.html">
                    <div className="profile-image">
                      <img
                        src="assets/images/p2.jpg"
                        className="img-responsive"
                        alt="profile image"
                      />
                      <div className="agile-overlay">
                        <h4>Profile ID: 458645</h4>
                        <ul>
                          <li>
                            <span>Age / Height</span>: 26 / 5'0''
                          </li>
                          <li>
                            <span>Caste</span>: Ipsum
                          </li>
                          <li>
                            <span>Religion</span>: Lorem
                          </li>
                          <li>
                            <span>Profession</span>: IT Software
                          </li>
                          <li>
                            <span>Profile Created By</span>: Self
                          </li>
                          <li>
                            <span>Location</span>: Semrd, 7th c, Los
                          </li>
                        </ul>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- //slider --> */}
      </div>

      {/* <!-- Assisted Service -->  */}
      <div className="agile-assisted-service text-center">
        <h4>Assisted Service</h4>
        <p>
          Our Relationship Managers have helped thousands of members find their
          life partners.
        </p>
        <a href="assisted_services.html">Know More</a>
      </div>
      {/* <!-- //Assisted Service -->

		<!-- Location --> */}
      <div className="location w3layouts">
        <div className="container">
          <div className="col-md-6 col-sm-6 w3layouts location-grids location-grids-1">
            <h3>Where We Are</h3>
            <h5>Our Branches</h5>
            <p>250+ branches across World, Largest Network of its Kind.</p>
          </div>
          <div className="col-md-6 col-sm-6 w3layouts location-grids location-grids-2">
            <a href="contact.html">
              <img
                src="assets/images/location.jpg"
                className="img-responsive"
                alt="Agileits W3layouts"
              />
            </a>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      {/* <!-- //Location --> */}
    </div>
  );
}
