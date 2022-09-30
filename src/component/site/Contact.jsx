import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { addFeedback } from "../services/Service";
export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //add student method-
  const onSave = (data) => {
    addFeedback(data)
      .then((res) => {
        if (res.data.success) {
        }
        reset({
          name: "",
          contact: "",
          feedback: "",
        });
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
      {/* <!-- //inner banner -->	
	
	<!-- breadcrumbs --> */}
      <div className="w3layouts-breadcrumbs text-center">
        <div className="container">
          <span className="agile-breadcrumbs">
            <a href="index.html">Home</a> <span>Contact Us</span>
          </span>
        </div>
      </div>
      {/* <!-- //breadcrumbs -->
<!---728x90--->
	<!-- contact section --> */}
      <div className="w3ls_contact_section">
        <div className="container">
          <div className="w3_C_headquarters text-center">
            <h4>Headquarters</h4>
            <div className="agileits_address">
              <div className="col-md-4 agile_address">
                <i className="fa fa-home" aria-hidden="true"></i>
                <p>28-4, 5th Cross, USA-5842123</p>
              </div>
              <div className="col-md-4 agile_address">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p>645-555-000-456</p>
              </div>
              <div className="col-md-4 agile_address">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="mailto:mail@matchmadeinheaven.com">
                  mail@matchmadeinheaven.com
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          {/* <!---728x90---> */}
          <div className="w3_locations">
            {/* <h2>Contact Us</h2> */}
            <div className="resp-tabs-container hor_1">
              <div>
                {/* <!--vertical Tabs--> */}

                <div id="ChildVerticalTab_1">
                  <ul className="resp-tabs-list ver_1">
                    <li>Contact Us</li>
                    {/* <li>Contact</li>
                    <li>Feedback</li> */}
                  </ul>
                  <div className="resp-tabs-container ver_1">
                    <div>
                      <section className="w3_g_address">
                        {/* form start */}
                        <form onSubmit={handleSubmit(onSave)}>
                          <div className="w3_modal_body_grid w3_modal_body_grid1">
                            <span>Full Name :</span>
                            <input
                              type="text"
                              name="name"
                              placeholder=""
                              required=""
                              {...register("name", {
                                required: "Please Enter Your Name.",
                                pattern: {
                                  value: /^[a-z A-Z]+$/,
                                  message: "Enter valid Name",
                                },
                              })}
                            />
                          </div>
                          <div>
                            {errors.name && (
                              <span className="text-danger">
                                {errors.name.message}
                              </span>
                            )}
                          </div>
                          <div className="w3_modal_body_grid w3_modal_body_grid1">
                            <span>Contact To :</span>
                            <input
                              type="text"
                              name="contact"
                              placeholder=" "
                              required=""
                              {...register("contact", {
                                required: "Please Enter Your Contact.",
                                pattern: {
                                  value: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/,
                                  message: "Enter valid Contact",
                                },
                              })}
                            />
                          </div>
                          <div>
                            {errors.contact && (
                              <span className="text-danger">
                                {errors.contact.message}
                              </span>
                            )}
                          </div>
                          <div className="w3_modal_body_grid w3_modal_body_grid1">
                            <span>Type Your Text :</span>
                            <input
                              type="text"
                              name="feedback"
                              placeholder=" "
                              required=""
                              {...register("feedback", {
                                required: "Please Enter Your Feedback.",
                                pattern: {
                                  value: /^[a-z A-Z]+$/,
                                  message: "Enter valid Feedback",
                                },
                              })}
                            />
                          </div>
                          <div>
                            {errors.feedback && (
                              <span className="text-danger">
                                {errors.feedback.message}
                              </span>
                            )}
                          </div>
                          <div className="w3agile_banner_btom_login_left3">
                            <input type="submit" value="Submit" />
                          </div>
                          <div className="clearfix"></div>
                        </form>
                        {/* form end */}
                      </section>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
