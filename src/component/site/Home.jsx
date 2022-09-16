import React from "react";
import { useForm } from "react-hook-form";
import { addUsers } from "../services/Service";
import "./Style.css";

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSave = (data) => {
    addUsers(data).then((res) => {});
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
            <form onSubmit={handleSubmit(onSave)}>
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Name:</span>
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required=""
                  {...register("name", {
                    required: "Please Enter Your Name.",
                    pattern: {
                      value: /^[a-z A-Z]+$/,
                      message: "Enter Valid Name.",
                    },
                  })}
                />
                {errors.name && (
                  <span className="text-denger">{errors.name.message}</span>
                )}
              </div>
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Contact no:</span>
                <input
                  type="text"
                  name="contact"
                  placeholder=" "
                  required=""
                  {...register("contact", {
                    required: "Please Enter Your Contact",
                    pattern: {
                      value: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/,
                      message: "Enter Valid Contact No",
                    },
                  })}
                />
                {errors.contact && (
                  <span className="text-denger">{errors.contact.message}</span>
                )}
              </div>
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Password:</span>
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  required=""
                  {...register("password", {
                    required: "Please Enter Password.",
                    pattern: {
                      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                      message:
                        "password must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter.",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-denger">{errors.password.message}</span>
                )}
              </div>
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Date Of Birth:</span>
                <input
                  className="date"
                  id="datepicker"
                  name="dob"
                  type="text"
                  value="mm/dd/yyyy"
                  onfocus="this.value = '';"
                  onblur="if (this.value == '') {this.value = '2/08/2013';}"
                  required=""
                  {...register("dob", {
                    required: "Please Enter Date of Birth.",
                  })}
                />
              </div>
              <div className="w3_modal_body_grid">
                <span>Gender:</span>
                <div className="w3_gender">
                  <div className="colr ert">
                    <label className="radio">
                      <input type="radio" name="gender" />
                      <i></i>Male
                    </label>
                  </div>
                  <div className="colr">
                    <label className="radio">
                      <input type="radio" name="gender" />
                      <i></i>Female
                    </label>
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="clearfix"> </div>
              </div>

              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>Marrital Status:</span>
                <input
                  type="text"
                  name="marriedStatus"
                  placeholder=" "
                  required=""
                  {...register("marriedStatus", {
                    required: "Please Enter Your Married Status.",
                    pattern: {
                      value: /^[a-z A-Z]+$/,
                      message: "Enter Valid Married Status.",
                    },
                  })}
                />
                {errors.marriedStatus && (
                  <span className="text-denger">
                    {errors.marriedStatus.message}
                  </span>
                )}
              </div>
              <div className="w3_modal_body_grid w3_modal_body_grid1">
                <span>City:</span>
                <input
                  type="text"
                  name="city"
                  placeholder=" "
                  required=""
                  {...register("city", {
                    required: "Please Enter Your city.",
                    pattern: {
                      value: /^[a-z A-Z]+$/,
                      message: "Enter Valid city.",
                    },
                  })}
                />
                {errors.city && (
                  <span className="text-denger">{errors.city.message}</span>
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
          {/* <!-- Modal --> */}
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
                    <form id="signin" action="#" method="post">
                      <label>User Name </label>
                      <input
                        type="text"
                        name="User Name"
                        placeholder="Username"
                        required=""
                      />
                      <label>Password</label>
                      <input
                        type="password"
                        name="Password"
                        placeholder="Password"
                        required=""
                      />
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

      {/* <!-- mobile-app --> */}
      <div className="wthree-mobilaapp main-grid-border">
        <div className="container">
          <div className="app">
            <div className="col-md-6 w3ls_app-left mpl">
              <h3>Matrimonial mobile app on your smartphone!</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="agileits_app-devices">
                <h5>Download the App</h5>
                <a href="#">
                  <img src="assets/images/1.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/images/2.png" alt="" />
                </a>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-md-offset-1 col-md-5 app-image">
              <img src="assets/images/mob.png" alt="" />
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      {/* <!-- /mobile-app -->

		<!-- browse profiles --> */}
      <div className="w3layouts-browse text-center">
        <div className="container">
          <h3>Browse Matchmaking Profiles by</h3>
          <div className="col-md-4 w3-browse-grid">
            <h4>By Country</h4>
            <ul>
              <li>
                <a href="nri_list.html">Country 1</a>
              </li>
              <li>
                <a href="nri_list.html">Country 2</a>
              </li>
              <li>
                <a href="nri_list.html">Country 3</a>
              </li>
              <li>
                <a href="nri_list.html">Country 4</a>
              </li>
              <li>
                <a href="nri_list.html">Country 5</a>
              </li>
              <li>
                <a href="nri_list.html">Country 6</a>
              </li>
              <li>
                <a href="nri_list.html">Country 7</a>
              </li>
              <li>
                <a href="nri_list.html">Country 8</a>
              </li>
              <li>
                <a href="nri_list.html">Country 9</a>
              </li>
              <li>
                <a href="nri_list.html">Country 10</a>
              </li>
              <li>
                <a href="nri_list.html">Country 11</a>
              </li>
              <li className="more">
                <a href="nri_list.html">more..</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 w3-browse-grid">
            <h4>By Religion</h4>
            <ul>
              <li>
                <a href="r_list.html">Religion 1</a>
              </li>
              <li>
                <a href="r_list.html">Religion 2</a>
              </li>
              <li>
                <a href="r_list.html">Religion 3</a>
              </li>
              <li>
                <a href="r_list.html">Religion 4</a>
              </li>
              <li>
                <a href="r_list.html">Religion 5</a>
              </li>
              <li>
                <a href="r_list.html">Religion 6</a>
              </li>
              <li>
                <a href="r_list.html">Religion 7</a>
              </li>
              <li>
                <a href="r_list.html">Religion 8</a>
              </li>
              <li>
                <a href="r_list.html">Religion 9</a>
              </li>
              <li>
                <a href="r_list.html">Religion 10</a>
              </li>
              <li>
                <a href="r_list.html">Religion 11</a>
              </li>
              <li className="more">
                <a href="r_list.html">more..</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 w3-browse-grid">
            <h4>By Community</h4>
            <ul>
              <li>
                <a href="r_list.html">Community 1</a>
              </li>
              <li>
                <a href="r_list.html">Community 2</a>
              </li>
              <li>
                <a href="r_list.html">Community 3</a>
              </li>
              <li>
                <a href="r_list.html">Community 4</a>
              </li>
              <li>
                <a href="r_list.html">Community 5</a>
              </li>
              <li>
                <a href="r_list.html">Community 6</a>
              </li>
              <li>
                <a href="r_list.html">Community 7</a>
              </li>
              <li>
                <a href="r_list.html">Community 8</a>
              </li>
              <li>
                <a href="r_list.html">Community 9</a>
              </li>
              <li className="more">
                <a href="r_list.html">more..</a>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      {/* <!-- //browse profiles -->

		<!-- Assisted Service --> */}
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
