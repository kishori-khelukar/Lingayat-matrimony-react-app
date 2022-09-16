import React from "react";
import { useForm } from "react-hook-form";
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
                            <span>Full Name/पूर्ण नाव:</span>
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
                            {errors.name && (
                              <span className="text-danger">
                                {errors.name.message}
                              </span>
                            )}
                          </div>
                          <div className="w3_modal_body_grid w3_modal_body_grid1">
                            <span>Contact To/संपर्क क्रमांक:</span>
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
                            {errors.contact && (
                              <span className="text-danger">
                                {errors.contact.message}
                              </span>
                            )}
                          </div>
                          <div className="w3_modal_body_grid w3_modal_body_grid1">
                            <span>Type Your Text/अभिप्राय:</span>
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
      {/* <!-- //contact section -->

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
      {/* <!-- //browse profiles --> */}
    </div>
  );
}
