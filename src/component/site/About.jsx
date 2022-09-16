import React from "react";
import "./Style.css";

export default function About() {
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
            <a href="index.html">Home</a> <span>About Us</span>
          </span>
        </div>
      </div>
      {/* <!-- //breadcrumbs -->
	<!---728x90--->
	<!-- about us --> */}
      <div className="w3l_about">
        <div className="container">
          <h3>About Us</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
      {/* <!---728x90--->
	<!-- success stories --> */}
      <div className="w3_success-stories">
        <div className="container">
          <h4>Our Successful Stories</h4>
          <div className="w3l_about_left col-md-6 text-center">
            <a href="#" data-toggle="modal" data-target="#myModal1">
              <img
                src="assets/images/s1.png"
                alt=" "
                className="img-responsive"
              />
            </a>
            <div className="w3l_about_left_pos">
              <h3>
                Groom <span>& </span>Bride
              </h3>
            </div>
          </div>
          <div className="w3l_about_left col-md-6 text-center">
            <a href="#" data-toggle="modal" data-target="#myModal2">
              <img
                src="assets/images/s2.png"
                alt=" "
                className="img-responsive"
              />
            </a>
            <div className="w3l_about_left_pos1">
              <h3>
                Groom <span>& </span>Bride
              </h3>
            </div>
          </div>
          <div className="w3l_about_left col-md-6 text-center">
            <a href="#" data-toggle="modal" data-target="#myModal3">
              <img
                src="assets/images/s3.png"
                alt=" "
                className="img-responsive"
              />
            </a>
            <div className="w3l_about_left_pos">
              <h3>
                Groom <span>& </span>Bride
              </h3>
            </div>
          </div>
          <div className="w3l_about_left col-md-6 text-center">
            <a href="#" data-toggle="modal" data-target="#myModal4">
              <img
                src="assets/images/s4.png"
                alt=" "
                className="img-responsive"
              />
            </a>
            <div className="w3l_about_left_pos1">
              <h3>
                Groom <span>& </span>Bride
              </h3>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      {/* <!-- Success_Story Modal1 --> */}
      <div id="myModal1" className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Bride and Groom</h4>
            </div>
            <div className="modal-body">
              <div className="success_w3_story">
                <img
                  src="assets/images/s1.png"
                  alt=" "
                  className="img-responsive"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //Success_Story Modal1 -->
			<!-- Success_Story Modal2 --> */}
      <div id="myModal2" className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Bride and Groom</h4>
            </div>
            <div className="modal-body">
              <div className="success_w3_story">
                <img
                  src="assets/images/s2.png"
                  alt=" "
                  className="img-responsive"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //Success_Story Modal2 -->
			<!-- Success_Story Modal3 --> */}
      <div id="myModal3" className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Bride and Groom</h4>
            </div>
            <div className="modal-body">
              <div className="success_w3_story">
                <img
                  src="assets/images/s3.png"
                  alt=" "
                  className="img-responsive"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //Success_Story Modal3 -->
			<!-- Success_Story Modal4 --> */}
      <div id="myModal4" className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Bride and Groom</h4>
            </div>
            <div className="modal-body">
              <div className="success_w3_story">
                <img
                  src="assets/images/s4.png"
                  alt=" "
                  className="img-responsive"
                />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //Success_Story Modal4 -->
		<!-- //Success Stories  -->
		
	<!-- services --> */}
      <div className="agileits_services">
        <div className="container">
          <h2>
            We are no. 1...<span>WHY?</span>
          </h2>
          <div className="col-md-6 w3ls_services-grids">
            <ul className="w3_servicesgrid_info">
              <li className="tick">genuine Profiles in our website.</li>
              <li className="tick">Lorem Ipsum is simply dummy text.</li>
              <li className="tick">
                It is a long established fact that be distracted.
              </li>
            </ul>
          </div>
          <div className="col-md-6 w3ls_services-grids">
            <ul className="w3_servicesgrid_info">
              <li className="tick">Best Service Support</li>
              <li className="tick">There are many variations of passages.</li>
              <li className="tick">
                The standard chunk Ipsum used since the 1500s.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wthree_services-bottom">
        <p>
          Our company have more than<span>200.000 customers</span>around the
          world!
        </p>
      </div>
      {/* <!-- //services -->
	<!-- //about us -->
	
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
