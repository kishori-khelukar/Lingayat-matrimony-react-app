import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getSingleUser, updateUser } from "../services/Service";
import "./Style.css";

const getUserid = () => {
  const userId = JSON.parse(localStorage.getItem("UserID"));
  return userId;
};

export default function FamilyDetails() {
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

  const updateFamily = (data) => {
    console.log("....", data);
    updateUser(data, UserId)
      .then((res) => {
        if (res.data.success) {
          reset(setUserList());
          navigate("/educationDetails");
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
            <span> Family Details</span>
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
                <form onSubmit={handleSubmit(updateFamily)}>
                  <h4>Add/Update Information</h4>

                  <h5 className=" fs-3" style={{ color: "#b30b24" }}>
                    Family Details :
                  </h5>

                  {/*Father Name  */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 w3_details">
                        <label className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          Father Name :
                        </label>

                        <input
                          className="col-xs-12 col-sm-12 col-md-12 col-lg-6"
                          type="text"
                          name="father"
                          //value={userList.userName}
                          placeholder=" "
                          required=""
                          {...register("father", {
                            required: "please enter your father name.",

                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid Name.",
                            },
                          })}
                        />
                        <div>
                          {errors.father && (
                            <span className="text-danger">
                              {errors.father.message}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Father Contact */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Father Contact :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="fatherContact"
                          placeholder=" "
                          required=""
                          {...register("fatherContact", {
                            required: "please enter your fatherContact.",
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Enter Valid Contact.",
                            },
                          })}
                        />
                        <div>
                          {errors.fatherContact && (
                            <span className="text-danger">
                              {errors.fatherContact.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* mother*/}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Mother Name :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="mother"
                          placeholder=" "
                          required=""
                          {...register("mother", {
                            required: "please ente name.",
                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid name.",
                            },
                          })}
                        />
                        <div>
                          {errors.mother && (
                            <span className="text-danger">
                              {errors.mother.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Blood Group  */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Mother Contact :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="motherContact"
                          placeholder=" "
                          required=""
                          {...register("motherContact", {
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Enter Valid Contact.",
                            },
                          })}
                        />
                        <div>
                          {errors.motherContact && (
                            <span className="text-danger">
                              {errors.motherContact.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* brother */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Brother Name :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="brother"
                          placeholder=" "
                          required=""
                          {...register("brother", {
                            required: "please enter name.",
                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid name.",
                            },
                          })}
                        />
                        <div>
                          {errors.brother && (
                            <span className="text-danger">
                              {errors.brother.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* brotherContact */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Brother Contact :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="brotherContact"
                          placeholder=" "
                          required=""
                          {...register("brotherContact", {
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Enter Valid contact.",
                            },
                          })}
                        />
                        <div>
                          {errors.brotherContact && (
                            <span className="text-danger">
                              {errors.brotherContact.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* sister*/}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Sister :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="sister"
                          placeholder=" "
                          required=""
                          {...register("sister", {
                            required: "please enter name.",
                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid Name.",
                            },
                          })}
                        />
                        <div>
                          {errors.sister && (
                            <span className="text-danger">
                              {errors.sister.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* sisterContact */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Sister Contact :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="sisterContact"
                          placeholder=" "
                          required=""
                          {...register("sisterContact", {
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Enter Valid Contact.",
                            },
                          })}
                        />
                        <div>
                          {errors.sisterContact && (
                            <span className="text-danger">
                              {errors.sisterContact.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  {/* caretaker */}
                  <div className="form_but1">
                    <div className="w3_modal_body_grid w3_modal_body_grid1">
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Care Taker :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="careTaker"
                          placeholder=" "
                          required=""
                          {...register("careTaker", {
                            required: "please enter name.",
                            pattern: {
                              value: /^[a-z A-Z]+$/,
                              message: "Enter Valid Name.",
                            },
                          })}
                        />
                        <div>
                          {errors.careTaker && (
                            <span className="text-danger">
                              {errors.careTaker.message}
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Zodiac Name */}
                      <div className="col-sm-6 w3_details">
                        <label className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                          Care Taker Contact :
                        </label>
                        <input
                          className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
                          type="text"
                          name="careTakerContact"
                          placeholder=" "
                          required=""
                          {...register("careTakerContact", {
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Enter Valid Contact.",
                            },
                          })}
                        />
                        <div>
                          {errors.careTakerContact && (
                            <span className="text-danger">
                              {errors.careTakerContact.message}
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
      </div>
    </div>
  );
}
