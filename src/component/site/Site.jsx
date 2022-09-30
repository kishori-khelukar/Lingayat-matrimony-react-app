import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Style.css";

export default function Site() {
  return (
    <div>
      {/* header  */}
      <header>
        <div className="navbar navbar-inverse-blue navbar">
          {/* <div className="navbar navbar-inverse-blue navbar-fixed-top"> */}
          <div className="navbar-inner">
            <div className="container">
              <div className="menu">
                <div className="cd-dropdown-wrapper">
                  <a className="cd-dropdown-trigger" href="#0">
                    Browse Profiles by
                  </a>
                  <nav className="cd-dropdown">
                    <a href="#0" className="cd-close">
                      Close
                    </a>
                    <ul className="cd-dropdown-content">
                      <li>
                        <a href="matches.html">All Profiles</a>
                      </li>
                      <li className="has-children">
                        <a href="#">Mother Tongue</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back">
                            <a href="#">Menu</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 1</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 2</a>{" "}
                          </li>
                          <li>
                            <a href="l_list.html">Language 3</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 4</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 5</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 6</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 7</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 8</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 9</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 10</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 11</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 12</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 13</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 14</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 15</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 16</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 17</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 18</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 19</a>
                          </li>
                          <li>
                            <a href="l_list.html">Language 20</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="#">Caste</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back">
                            <a href="#">Menu</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 1</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 2</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 3</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 4</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 5</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 6</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 7</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 8</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 9</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 10</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 11</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 12</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 13</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 14</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 15</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 16</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 17</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 18</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 19</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 20</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 21</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 22</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 23</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 24</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 25</a>
                          </li>
                          <li>
                            <a href="c_list.html">Caste 26</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="products2.html">Religion</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back">
                            <a href="#">Menu</a>
                          </li>
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
                          <li>
                            <a href="r_list.html">Religion 12</a>
                          </li>
                          <li>
                            <a href="r_list.html">Religion 13</a>
                          </li>
                          <li>
                            <a href="r_list.html">Religion 14</a>
                          </li>
                          <li>
                            <a href="r_list.html">Religion 15</a>
                          </li>
                          <li>
                            <a href="r_list.html">Religion 16</a>
                          </li>
                          <li>
                            <a href="r_list.html">Religion 17</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="#">City</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back">
                            <a href="#">Menu</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 1</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 2</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 3</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 4</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 5</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 6</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 7</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 8</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 9</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 10</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 11</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 12</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 13</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 14</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 15</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 16</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 17</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 18</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 19</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 20</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 21</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 22</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 23</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 24</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 25</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 26</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 27</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 28</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 29</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 30</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 31</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 32</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 33</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 34</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 35</a>
                          </li>
                          <li>
                            <a href="city_list.html">City 36</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="#">Occupation</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back">
                            <a href="#">Menu</a>
                          </li>
                          <li>
                            <a href="o_list.html">IT Software </a>
                          </li>
                          <li>
                            <a href="o_list.html">Teacher </a>
                          </li>
                          <li>
                            <a href="o_list.html">Business man </a>
                          </li>
                          <li>
                            <a href="o_list.html">Lawyers</a>
                          </li>
                          <li>
                            <a href="o_list.html">Defence </a>
                          </li>
                          <li>
                            <a href="o_list.html">IAS </a>
                          </li>
                          <li>
                            <a href="o_list.html">Govt.Services </a>
                          </li>
                          <li>
                            <a href="o_list.html">Doctors </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="#">State</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back">
                            <a href="#">Menu</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 1</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 2</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 3</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 4</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 5</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 6</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 7</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 8</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 9</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 10</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 11</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 12</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 13</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 14</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 15</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 16</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 17</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 18</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 19</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 20</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 21</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 22</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 23</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 24</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 25</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 26</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 27</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 28</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 29</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 30</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 31</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 32</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 33</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 34</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 35</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 36</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 37</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 38</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 39</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 40</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 41</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 42</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 43</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 44</a>
                          </li>
                          <li>
                            <a href="s_list.html">State 45</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="#">NRI</a>
                        <ul className="cd-secondary-dropdown is-hidden">
                          <li className="go-back">
                            <a href="#">Menu</a>
                          </li>
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
                          <li>
                            <a href="nri_list.html">Country 12</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* sidebar */}

              <nav className="navbar nav_bottom" role="navigation">
                <div className="navbar-header nav_2">
                  <button
                    type="button"
                    className="navbar-toggle collapsed navbar-toggle1"
                    data-toggle="collapse"
                    data-target="#bs-megadropdown-tabs"
                  >
                    Menu
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-megadropdown-tabs"
                >
                  <ul
                    className="nav navbar-nav nav_1"
                    style={{ display: "inline-block", float: "right" }}
                  >
                    <li className="">
                      <Link to="">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/search">Search</Link>
                    </li>
                    {/* quick search */}
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Quick Search<span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <div className="banner-bottom-login">
                          <div className="w3agile_banner_btom_login">
                            <form action="#" method="post">
                              <div className="w3agile__text w3agile_banner_btom_login_left">
                                <h4>I'm looking for a</h4>
                                <select
                                  id="country"
                                  onchange="change_country(this.value)"
                                  className="frm-field required"
                                >
                                  <option value="null">Bride</option>
                                  <option value="null">Groom</option>
                                </select>
                              </div>
                              <div className="w3agile__text w3agile_banner_btom_login_left1">
                                <h4>Aged</h4>
                                <select
                                  id="country1"
                                  onchange="change_country(this.value)"
                                  className="frm-field required"
                                >
                                  <option value="null">20</option>
                                  <option value="null">21</option>
                                  <option value="null">22</option>
                                  <option value="null">23</option>
                                  <option value="null">24</option>
                                  <option value="null">25</option>
                                  <option value="null">- - -</option>
                                </select>
                                <span>To </span>
                                <select
                                  id="country2"
                                  onchange="change_country(this.value)"
                                  className="frm-field required"
                                >
                                  <option value="null">30</option>
                                  <option value="null">31</option>
                                  <option value="null">32</option>
                                  <option value="null">33</option>
                                  <option value="null">34</option>
                                  <option value="null">35</option>
                                  <option value="null">- - -</option>
                                </select>
                              </div>
                              <div className="w3agile__text w3agile_banner_btom_login_left2">
                                <h4>Religion</h4>
                                <select
                                  id="country3"
                                  onchange="change_country(this.value)"
                                  className="frm-field required"
                                >
                                  <option value="null">Hindu</option>
                                  <option value="null">Muslim</option>
                                  <option value="null">Christian</option>
                                  <option value="null">Sikh</option>
                                  <option value="null">Jain</option>
                                  <option value="null">Buddhist</option>
                                  <option value="null">
                                    No Religious Belief
                                  </option>
                                </select>
                              </div>
                              <div className="w3agile_banner_btom_login_left3">
                                <input type="submit" value="Search" />
                              </div>
                              <div className="clearfix"> </div>
                            </form>
                          </div>
                        </div>
                      </ul>
                    </li>
                    {/* end quick */}
                    <li className="last">
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>

              {/* end */}
              {/* <!-- end pull-right --> */}
              <div className="clearfix"> </div>
            </div>
            {/* <!-- end container --> */}
          </div>

          {/* <!-- end navbar-inner --> */}
        </div>

        {/* <!-- end navbar-inverse-blue --> */}
      </header>
      {/* <!-- /header --> */}
      <Outlet />

      {/*  browse profiles */}
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

      {/* <!-- Get started --> */}
      <div className="w3layous-story text-center">
        <div className="container">
          <h4>
            Your story is waiting to happen!{" "}
            <a className="scroll" href="#home">
              Get started
            </a>
          </h4>
        </div>
      </div>
      {/* <!-- //Get started --> */}
      {/* <!-- footer --> */}
      <footer>
        <div className="footer">
          <div className="container">
            <div className="footer-info w3-agileits-info">
              <div className="col-md-4 address-left agileinfo">
                <div className="footer-logo header-logo">
                  <h6>Get in Touch.</h6>
                </div>
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> 123 San Sebastian, New
                    York City USA.
                  </li>
                  <li>
                    <i className="fa fa-mobile"></i> 333 222 3333{" "}
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> +222 11 4444{" "}
                  </li>
                  <li>
                    <i className="fa fa-envelope-o"></i>{" "}
                    <a href="mailto:example@mail.com">mail@example.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-8 address-right">
                <div className="col-md-4 footer-grids">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="feedback.html">Feedback</a>
                    </li>
                    <li>
                      <a href="help.html">Help</a>
                    </li>
                    <li>
                      <a href="tips.html">Safety Tips</a>
                    </li>
                    <li>
                      <a href="typo.html">Typography</a>
                    </li>
                    <li>
                      <a href="icons.html">Icons Page</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 footer-grids">
                  <h3>Quick links</h3>
                  <ul>
                    <li>
                      <a href="terms.html">Terms of use</a>
                    </li>
                    <li>
                      <a href="privacy_policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="sitemap.html">Sitemap</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 footer-grids">
                  <h3>Follow Us on</h3>
                  <section className="social">
                    <ul>
                      <li>
                        <a className="icon fb" href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a className="icon tw" href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="icon gp" href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="container">
            <p>
              © 2017 Match. All rights reserved | Design by{" "}
              <a href="http://w3layouts.com/"> W3layouts.</a>
            </p>
          </div>
        </div>
      </footer>
      {/* <!-- //footer --> */}
    </div>
  );
}
