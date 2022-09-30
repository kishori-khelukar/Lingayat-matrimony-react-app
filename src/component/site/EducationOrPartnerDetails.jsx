import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getSingleUser, updateUser } from "../services/Service";
import "./Style.css";

const getUserid = () => {
  const userId = JSON.parse(localStorage.getItem("UserID"));
  return userId;
};

export default function EducationOrPartnerDetails() {
  const navigate = useNavigate();
  const UserId = getUserid();
  console.log(">>>>>>", UserId);

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
    });
  };
  //update method for add and update form-

  const updateEducation = (data) => {
    console.log("....", data);
    updateUser(data, UserId)
      .then((res) => {
        if (res.data.success) {
          reset(setUserList());
          //navigate("/familyDetails");
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
            <span> Education/Desired Partner Details</span>
          </span>
        </div>
      </div>
      {/* <!-- //breadcrumbs -->
<!---728x90---> */}

      {/* <!-- Bridegroom Profile Details --> */}
      <div className="w3ls-list">
        <div className="container">
          <div className="col-md-12 profiles-list-agileits">
            <div className="profile_w3layouts_details">
              <div className="agileits_aboutme">
                {/* start form */}
                <form onSubmit={handleSubmit(updateEducation)}>
                  <h4>Add/Update Information</h4>

                  <h5 className=" fs-3" style={{ color: "#b30b24" }}>
                    Educational Details :
                  </h5>

                  {/*education  */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 w3_details">
                        <label className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          Education :
                        </label>

                        <input
                          className="col-xs-12 col-sm-12 col-md-12 col-lg-6"
                          type="text"
                          name="education"
                          placeholder=" "
                          required=""
                          {...register("education", {
                            required: "please enter your education.",

                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Details.",
                            },
                          })}
                        />
                        <div>
                          {errors.education && (
                            <span className="text-danger">
                              {errors.education.message}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* business */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Business/Occupation :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="business"
                          placeholder=" "
                          required=""
                          {...register("business", {
                            required: "please enter your business/ocuupation.",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Details.",
                            },
                          })}
                        />
                        <div>
                          {errors.business && (
                            <span className="text-danger">
                              {errors.business.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* Annual_income*/}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Annual Income :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="Annual_income"
                          placeholder=" "
                          required=""
                          {...register("Annual_income", {
                            required: "please enter annual income.",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Annual Income.",
                            },
                          })}
                        />
                        <div>
                          {errors.Annual_income && (
                            <span className="text-danger">
                              {errors.Annual_income.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* designation  */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Designation :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="designation"
                          placeholder=" "
                          required=""
                          {...register("designation", {
                            required: "please enter designation.",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Designation.",
                            },
                          })}
                        />
                        <div>
                          {errors.designation && (
                            <span className="text-danger">
                              {errors.designation.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* workPlace */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          WorkPlace :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="workPlace"
                          placeholder=" "
                          required=""
                          {...register("workPlace", {
                            required: "please enter workPlace.",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid WorkPlace.",
                            },
                          })}
                        />
                        <div>
                          {errors.workPlace && (
                            <span className="text-danger">
                              {errors.workPlace.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* Desired pertner */}
                  <h5 className=" fs-3" style={{ color: "#b30b24" }}>
                    Desired Partner :
                  </h5>
                  {/* partnerAge*/}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Age :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="partnerAge"
                          placeholder=" "
                          required=""
                          {...register("partnerAge", {
                            required: "please enter age.",
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Enter Valid age.",
                            },
                          })}
                        />
                        <div>
                          {errors.partnerAge && (
                            <span className="text-danger">
                              {errors.partnerAge.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* partnerheight */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Height :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="partnerheight"
                          placeholder=" "
                          required=""
                          {...register("partnerheight", {
                            required: "please enter height.",
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Enter Valid Height.",
                            },
                          })}
                        />
                        <div>
                          {errors.partnerheight && (
                            <span className="text-danger">
                              {errors.partnerheight.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* Married Status */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Married Status :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="partnerMarriedStatus"
                          placeholder=" "
                          required=""
                          {...register("partnerMarriedStatus", {
                            required: "please enter married status.",
                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid Married Status.",
                            },
                          })}
                        />
                        <div>
                          {errors.partnerMarriedStatus && (
                            <span className="text-danger">
                              {errors.partnerMarriedStatus.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* caste */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Caste :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="caste"
                          placeholder=" "
                          required=""
                          {...register("caste", {
                            required: "please enter caste.",
                            pattern: {
                              value: /^[a-zA-Z]+$/,
                              message: "Enter Valid caste.",
                            },
                          })}
                        />
                        <div>
                          {errors.caste && (
                            <span className="text-danger">
                              {errors.caste.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* religion */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Religion :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="religion"
                          placeholder=" "
                          required=""
                          {...register("religion", {
                            required: "please enter religion.",
                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid Religion.",
                            },
                          })}
                        />
                        <div>
                          {errors.religion && (
                            <span className="text-danger">
                              {errors.religion.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* expectation  */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Expectation :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="expectation"
                          placeholder=" "
                          required=""
                          {...register("expectation", {
                            required: "please enter expectation.",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Expectation.",
                            },
                          })}
                        />
                        <div>
                          {errors.expectation && (
                            <span className="text-danger">
                              {errors.expectation.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* partnerIncome */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Income :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="partnerIncome"
                          placeholder=" "
                          required=""
                          {...register("partnerIncome", {
                            required: "please enter income.",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Income.",
                            },
                          })}
                        />
                        <div>
                          {errors.partnerIncome && (
                            <span className="text-danger">
                              {errors.partnerIncome.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* partnerOccupation  */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Occupation :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="partnerOccupation"
                          placeholder=" "
                          required=""
                          {...register("partnerOccupation", {
                            pattern: {
                              required: "please enter occupation.",
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Occupation.",
                            },
                          })}
                        />
                        <div>
                          {errors.partnerOccupation && (
                            <span className="text-danger">
                              {errors.partnerOccupation.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/*  */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Education :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="Annual_income"
                          placeholder=" "
                          required=""
                          {...register("partnerEducation", {
                            required: "please enter education.",
                            pattern: {
                              value: /^[a-zA-Z0-9]+$/,
                              message: "Enter Valid Education.",
                            },
                          })}
                        />
                        <div>
                          {errors.partnerEducation && (
                            <span className="text-danger">
                              {errors.partnerEducation.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* button */}
                      <div className="col-sm-6 w3_detail">
                        <div
                          className="w3agile_banner_btom_login_left3"
                          style={{ float: "left" }}
                        >
                          <input
                            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                            type="submit"
                            value="Submit"
                          />
                        </div>
                      </div>
                      {/* end button */}
                    </div>
                    <div className="clearfix"> </div>
                  </div>

                  {/*  */}
                </form>
                {/* end form */}
              </div>
            </div>
          </div>
          {/* col 8 */}
          <div className="clearfix"></div>
        </div>
       
      </div>
    </div>
  );
}
