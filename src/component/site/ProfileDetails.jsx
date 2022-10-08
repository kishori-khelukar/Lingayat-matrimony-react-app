import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getSingleUser, updateUser } from "../services/Service";
import "./Style.css";

const getUserid = () => {
  const userId = JSON.parse(localStorage.getItem("UserID"));
  return userId;
};

export default function ProfileDetails() {
  const navigate = useNavigate();
  const UserId = getUserid();
  console.log(">>>>>>", UserId);
  const bloodGroup = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const branch = [
    "Lingayat-Wani/लिंगायत-वाणी",
    "Dixiwant/दीक्षिवंत",
    "Pancham/पंचम",
    "Shilvant(Chilwant)/शिलवंत (चिलवंत)",
    "Jangam(swami)/जंगम (स्वामी)",
    "Chaturth/चतुर्थ",
    "Other/इतर",
  ];
  const zodiac = [
    "Aries/मेष",
    "Taurus/वृषभ",
    "Gemini/मिथुन",
    "Cancer/कर्क",
    "Leo/सिंह",
    "Virgo/कन्या",
    "Libra/तुला",
    "Scorpius/वृश्चिक",
    "Sagittarius/धनु",
    "Capricornus/मकर",
    "Aquarius/कुंभ",
    "Pisces/मीन",
  ];

  const [userList, setUserList] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  useEffect(() => {
    loadSingleUser(UserId);
  }, [UserId]);

  //get single user id from localhost-
  const loadSingleUser = (id) => {
    getSingleUser(id).then((res) => {
      console.log(">>>>>>>>", res.data);
      setUserList(res.data);
      reset(res.data);
    });
  };
  //update method for add and update form-

  const updateUsers = (data) => {
    console.log("....", data);
    updateUser(data, UserId)
      .then((res) => {
        if (res.data.success) {
          reset(setUserList());
          navigate("/familyDetails");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* <!-- inner banner -->	 */}
      <div className="w3layouts-inner-banner">
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
        </div>
      </div>
      {/* <!-- //inner banner -->	 */}

      {/* <!-- breadcrumbs --> */}
      <div className="w3layouts-breadcrumbs text-center">
        <div className="container">
          <span className="agile-breadcrumbs">
            <a href="index.html">Home</a> - <a href="matches.html">Matches</a>-
            <span> Profile Details</span>
          </span>
        </div>
      </div>
      {/* <!-- //breadcrumbs -->
<!---728x90---> */}

      {/* <!-- Bridegroom Profile Details --> */}
      <div className="w3ls-list">
        <div className="container">
          <div className="col-md-12 profiles-list-agileits">
            <div className="single_w3_profile">
              <div className="agileits_profile_image">
                <img
                  src="assets/images/profile-image-men.jpg"
                  alt="profile image"
                />
              </div>

              <div className="w3layouts_details">
                <h4 style={{ color: "#b30b24" }}>
                  Name : {userList && userList.userName}
                </h4>
                <p style={{ color: "rgb(37, 150, 190)" }}>
                  {" "}
                  Personal Details :
                </p>
                <p style={{ display: "inline" }}>
                  Name : {userList && userList.userName} ,
                </p>
                &emsp;
                <p style={{ display: "inline" }}>
                  Gender: {userList && userList.gender} .
                </p>
                &emsp;
                <p>City: {userList && userList.city}.</p>
                <p>Married Status: {userList && userList.marriedStatus} .</p>
                <p>Contact:{userList && userList.contact}.</p>
                <p style={{ color: "rgb(37, 150, 190)" }}> Add Photo :</p>
                <a href="#" data-toggle="modal" data-target="#myModal">
                  Passport Photo
                </a>
                <a href="#" data-toggle="modal" data-target="#myModal2">
                  Full Size Photo
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="profile_w3layouts_details">
              <div className="agileits_aboutme">
                {/* start form */}
                <form onSubmit={handleSubmit(updateUsers)}>
                  <h4>Add/Update Information</h4>

                  <h5 className=" fs-3" style={{ color: "#b30b24" }}>
                    Personal And Lifestyle Details :
                  </h5>

                  {/*Name  */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 w3_details">
                        <label className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          Full Name :
                        </label>

                        <input
                          className="col-xs-12 col-sm-12 col-md-12 col-lg-6"
                          type="text"
                          name="userName"
                          //defaultValue={userList ? userList.userName : ""}
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

                      {/* Address */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Address :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="address"
                          //defaultValue={userList ? userList.address : ""}
                          placeholder=" "
                          required=""
                          {...register("address", {
                            required: "please enter your address.",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Address.",
                            },
                          })}
                        />
                        <div>
                          {errors.address && (
                            <span className="text-danger">
                              {errors.address.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* age*/}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Age :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="age"
                          placeholder=" "
                          required=""
                          {...register("age", {
                            required: "please enter your age.",
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Enter Valid Age.",
                            },
                          })}
                        />
                        <div>
                          {errors.age && (
                            <span className="text-danger">
                              {errors.age.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Blood Group  */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Blood Group :
                        </label>
                        <select
                          id="w3_country"
                          className="frm-field required"
                          {...register("bloodGroup", {
                            required: "please enter your blood group.",
                          })}
                        >
                          <option value="">--Select Blood Group--</option>
                          {bloodGroup &&
                            bloodGroup.map((index, i) => (
                              <option className="dropdown-item" value={index}>
                                {index}
                              </option>
                            ))}
                        </select>
                        <div>
                          {errors.bloodGroup && (
                            <span className="text-danger">
                              {errors.bloodGroup.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* height */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Height :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="height"
                          placeholder="in foot"
                          required=""
                          {...register("height", {
                            required: "please enter your height.",
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Enter Valid Height.",
                            },
                          })}
                        />
                        <div>
                          {errors.height && (
                            <span className="text-danger">
                              {errors.height.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* wight */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Weight :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="weight"
                          placeholder=" "
                          required="in kg"
                          {...register("weight", {
                            required: "please enter your weight.",
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Enter Valid Weight.",
                            },
                          })}
                        />
                        <div>
                          {errors.weight && (
                            <span className="text-danger">
                              {errors.weight.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* Birth Place ,Birth time*/}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Birth Place :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="birthPlace"
                          placeholder=" "
                          required=""
                          {...register("birthPlace", {
                            required: "please enter your birth place.",
                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid Birth Place.",
                            },
                          })}
                        />
                        <div>
                          {errors.birthPlace && (
                            <span className="text-danger">
                              {errors.birthPlace.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Birth time */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Birth time :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="birthTime"
                          placeholder=" "
                          required=""
                          {...register("birthTime", {
                            required: "please enter your birth time.",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Birth Time.",
                            },
                          })}
                        />
                        <div>
                          {errors.birthTime && (
                            <span className="text-danger">
                              {errors.birthTime.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* Branch */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Branch :
                        </label>
                        <select
                          id="w3_country"
                          className="frm-field required"
                          {...register("branch", {
                            required: "please enter your Branch.",
                          })}
                        >
                          <option value="">--Select Branch--</option>
                          {branch &&
                            branch.map((brc, i) => (
                              <option className="dropdown-item" value={brc}>
                                {brc}
                              </option>
                            ))}
                        </select>
                        <div>
                          {errors.branch && (
                            <span className="text-danger">
                              {errors.branch.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Zodiac Name */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Zodiac Name :
                        </label>
                        <select
                          id="w3_country"
                          className="frm-field required"
                          {...register("zodiac", {
                            required: "please enter your zodiac.",
                          })}
                        >
                          <option value="">--Select Branch--</option>
                          {zodiac &&
                            zodiac.map((index, i) => (
                              <option className="dropdown-item" value={index}>
                                {index}
                              </option>
                            ))}
                        </select>
                        <div>
                          {errors.zodiac && (
                            <span className="text-danger">
                              {errors.zodiac.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/*  Appearance*/}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Appearance(color) :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="appearance"
                          placeholder=" "
                          required=""
                          {...register("appearance", {
                            required: "please enter your appearance.",
                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid appearance.",
                            },
                          })}
                        />
                        <div>
                          {errors.appearance && (
                            <span className="text-danger">
                              {errors.appearance.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Habits */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Habits :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="habits"
                          placeholder=" "
                          required=""
                          {...register("habits", {
                            required: "please enter your habits.",
                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid habits.",
                            },
                          })}
                        />
                        <div>
                          {errors.habits && (
                            <span className="text-danger">
                              {errors.habits.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/*Language Known  */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Language Known :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="languages_known"
                          placeholder=" "
                          required=""
                          {...register("languages_known", {
                            required: "please enter your languages known.",
                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid languages known.",
                            },
                          })}
                        />
                        <div>
                          {errors.languages_known && (
                            <span className="text-danger">
                              {errors.languages_known.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Assets */}
                      {/* <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Assets :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="assets"
                          placeholder=" "
                          required=""
                          {...register("assets", {
                            required: "please enter your assets.",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Assets.",
                            },
                          })}
                        />
                        <div>
                          {errors.assets && (
                            <span className="text-danger">
                              {errors.assets.message}
                            </span>
                          )}
                        </div>
                      </div> */}
                      <div className="col-sm-6 w3_detail">
                        <div
                          className="w3agile_banner_btom_login_left3"
                          style={{ float: "left" }}
                        >
                          <input
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                            type="submit"
                            value="Save And Continue"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </form>
                {/* end form */}
              </div>
            </div>
          </div>
          {/* col 8 */}
          <div className="clearfix"></div>
        </div>
        {/* <!-- Modal --> */}
        <div id="myModal" className="modal fade" tabindex="-1" role="dialog">
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Upload Passport Photo</h4>
              </div>
              <div className="modal-body">
                <div className="login-w3ls">
                  <form id="signin" action="#" method="post">
                    <input
                      type="file"
                      name="User Name"
                      placeholder="Username"
                      required=""
                    />

                    <div className="w3ls-loginr"></div>
                    <div className="clearfix"> </div>
                    <input type="submit" name="submit" value="Upload" />
                    <div className="clearfix"> </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second model */}
        <div id="myModal2" className="modal fade" tabindex="-1" role="dialog">
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title">Upload Full Photo</h4>
              </div>
              <div className="modal-body">
                <div className="login-w3ls">
                  <form id="signin" action="#" method="post">
                    <input
                      type="file"
                      name="User Name"
                      placeholder="Username"
                      required=""
                    />

                    <div className="w3ls-loginr"></div>
                    <div className="clearfix"> </div>
                    <input type="submit" name="submit" value="Upload" />
                    <div className="clearfix"> </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //Modal --> */}
      </div>
    </div>
  );
}
