import React from "react";
import "./Style.css";

export default function GroomProfile() {
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
                  <i className="fa fa-heart" aria-hidden="true"></i>Made in heaven.
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
            <a href="index.html">Home</a> <a href="matches.html">Matches</a>{" "}
            <span>Bridegroom Profile Details</span>
          </span>
        </div>
      </div>
      {/* <!-- //breadcrumbs -->
<!---728x90---> */}

      {/* <!-- Bridegroom Profile Details --> */}
      <div className="w3ls-list">
        <div className="container">
          <h2>Bridegroom Profile Details</h2>
          <div className="col-md-9 profiles-list-agileits">
            <div className="single_w3_profile">
              <div className="agileits_profile_image">
                <img
                  src="assets/images/profile-image-men.jpg"
                  alt="profile image"
                />
              </div>
              <div className="w3layouts_details">
                <h4>Profile ID : CSD57DG</h4>
                <span>Last Online 1 day ago.</span>
                <p>
                  25 Years, 5' 8" , Christian, Protestant, MCA/PGDCA, Rs. 15 -
                  20 Lakh, Software.
                </p>
                <a href="#" data-toggle="modal" data-target="#myModal">
                  View Contact
                </a>
                <a href="#" data-toggle="modal" data-target="#myModal">
                  Send interest
                </a>
                <a href="#" data-toggle="modal" data-target="#myModal">
                  Report Profile
                </a>
                <a href="#" data-toggle="modal" data-target="#myModal">
                  Block Profile
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="profile_w3layouts_details">
              <div className="agileits_aboutme">
                <h4>About me</h4>
                <h5>Brief about me:</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                <h5>Family Details:</h5>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Mother :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Housewife</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Father :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Govt. Employee</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Sister's :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Not Specified</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Brother's :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Not Specified</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Family Income :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Not Specified</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Stay :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">sed, USA</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Family Values :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Moderate</div>
                  <div className="clearfix"> </div>
                </div>
                <h5>Education Details:</h5>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Highest Education :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">MBA/PGDM</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    UG Degree :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">B.Tech</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    School :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Not Filled in</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    PG Degree :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Not Specified</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    PG College :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Not Specified</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Occupation :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Not Specified</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Annual Income :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Not Filled in</div>
                  <div className="clearfix"> </div>
                </div>
                <h5>Lifestyle:</h5>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Appearance :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Fair, 55kg</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Assets :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Not Filled in</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Habits :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">
                    Vegetarian, Doesn't Drink, Doesn't Smoke
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Languages Known :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">English, Hindi, Urdu</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Blood Group :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">AB+</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Stay :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">sed, USA</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Family Values :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Moderate</div>
                  <div className="clearfix"> </div>
                </div>
                <h5>Desired Partner:</h5>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Age :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">20 - 23 Years</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Height :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">5' 2" to 5' 6"</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Marital Status :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Never Married</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Religion :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Doesn't Matter</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Caste :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">Doesn't Matter</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Education :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Occupation :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">IT Software</div>
                  <div className="clearfix"> </div>
                </div>
                <div className="form_but1">
                  <label className="col-sm-3 control-label1" for="Relation">
                    Income :{" "}
                  </label>
                  <div className="col-sm-9 w3_details">No Income</div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 w3ls-aside">
            <h3>Search by Profile ID:</h3>
            <form action="#" method="get">
              <input
                className="text"
                type="text"
                name="profile_id"
                placeholder="Enter Profile ID"
                required=""
              />
              <input type="submit" value="Search" />
              <div className="clearfix"></div>
            </form>
            <div className="view_profile">
              <h3>Similar Profiles</h3>
              <ul className="profile_item">
                <a href="#">
                  <li className="profile_item-img">
                    <img
                      src="assets/images/p1.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </li>
                  <li className="profile_item-desc">
                    <h6>ID : 2458741</h6>
                    <p>
                      29 Yrs, 5Ft 5in Christian MBA/PGDM, Rs 10 - 15 lac Mark...
                    </p>
                  </li>
                  <div className="clearfix"> </div>
                </a>
              </ul>
              <ul className="profile_item">
                <a href="#">
                  <li className="profile_item-img">
                    <img
                      src="assets/images/p2.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </li>
                  <li className="profile_item-desc">
                    <h6>ID : 2458741</h6>
                    <p>
                      29 Yrs, 5Ft 5in Christian MBA/PGDM, Rs 10 - 15 lac Mark...
                    </p>
                  </li>
                  <div className="clearfix"> </div>
                </a>
              </ul>
              <ul className="profile_item">
                <a href="#">
                  <li className="profile_item-img">
                    <img
                      src="assets/images/p3.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </li>
                  <li className="profile_item-desc">
                    <h6>ID : 2458741</h6>
                    <p>
                      29 Yrs, 5Ft 5in Christian MBA/PGDM, Rs 10 - 15 lac Mark...
                    </p>
                  </li>
                  <div className="clearfix"> </div>
                </a>
              </ul>
              <ul className="profile_item">
                <a href="#">
                  <li className="profile_item-img">
                    <img
                      src="assets/images/p4.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </li>
                  <li className="profile_item-desc">
                    <h6>ID : 2458741</h6>
                    <p>
                      29 Yrs, 5Ft 5in Christian MBA/PGDM, Rs 10 - 15 lac Mark...
                    </p>
                  </li>
                  <div className="clearfix"> </div>
                </a>
              </ul>
              <ul className="profile_item">
                <a href="#">
                  <li className="profile_item-img">
                    <img
                      src="assets/images/p5.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </li>
                  <li className="profile_item-desc">
                    <h6>ID : 2458741</h6>
                    <p>
                      29 Yrs, 5Ft 5in Christian MBA/PGDM, Rs 10 - 15 lac Mark...
                    </p>
                  </li>
                  <div className="clearfix"> </div>
                </a>
              </ul>
              <ul className="profile_item">
                <a href="#">
                  <li className="profile_item-img">
                    <img
                      src="assets/images/p6.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </li>
                  <li className="profile_item-desc">
                    <h6>ID : 2458741</h6>
                    <p>
                      29 Yrs, 5Ft 5in Christian MBA/PGDM, Rs 10 - 15 lac Mark...
                    </p>
                  </li>
                  <div className="clearfix"> </div>
                </a>
              </ul>
              <ul className="profile_item">
                <a href="#">
                  <li className="profile_item-img">
                    <img
                      src="assets/images/p7.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </li>
                  <li className="profile_item-desc">
                    <h6>ID : 2458741</h6>
                    <p>
                      29 Yrs, 5Ft 5in Christian MBA/PGDM, Rs 10 - 15 lac Mark...
                    </p>
                  </li>
                  <div className="clearfix"> </div>
                </a>
              </ul>
              <ul className="profile_item">
                <a href="#">
                  <li className="profile_item-img">
                    <img
                      src="assets/images/p8.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </li>
                  <li className="profile_item-desc">
                    <h6>ID : 2458741</h6>
                    <p>
                      29 Yrs, 5Ft 5in Christian MBA/PGDM, Rs 10 - 15 lac Mark...
                    </p>
                  </li>
                  <div className="clearfix"> </div>
                </a>
              </ul>
            </div>
          </div>
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
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                            </span>
                            <span className="text">Facebook</span>
                          </a>
                        </li>
                        <li className="twt">
                          <a href="#">
                            <span className="icons">
                              <i className="fa fa-twitter" aria-hidden="true"></i>
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

      {/* <!-- //Bridegroom Profile Details -->
	<!---728x90--->
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

	<!-- Get started --> */}
      <div className="w3layous-story text-center">
        <div className="container">
          <h4>
            Your story is waiting to happen!{" "}
            <a href="index.html">Get started</a>
          </h4>
        </div>
      </div>
      {/* <!-- //Get started --> */}
    </div>
  );
}
