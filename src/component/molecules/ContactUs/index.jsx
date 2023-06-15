import react, { useState } from "react";

import main from "../../../assets/ellipse 5main.png";
import brown from "../../../assets/ellipse 4brown.png";
import green from "../../../assets/ellipse 6green.png";
import lilac from "../../../assets/ellipse 1lilac.png";
import lightblue from "../../../assets/ellipse 3lightblue.png";
import purple from "../../../assets/ellipse 2purple.png";
import sendIcon from "../../../assets/vector (9).png";

import "./contactus.css";

export const ContactUs = () => {
  const initialData = {
    name: "",
    email: "",
    tel: "",
    phone: "",
    message: "",
    budget: "",
  };

  const [formValues, setFormValues] = useState(initialData);
  const handleSubmit = async () => {
    e.preventDefault();

    // POST LOGIC
    const formResponse = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [e.target.name]: e.target.value }),
    });

    setFormValues(initialData);
  };

  const handleChange = (e) =>
    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

  return (
    <>
      <div id="ContactUs">
        <div className="contactus-container">
          <div className="contactus-contactus">
            <div className="contactus-content">
              <span className="contactus-text">
                <span>Get In Touch With Us</span>
              </span>
              <div className="contactus-section">
                <div className="contactus-group29">
                  <div className="contactus-left">
                    <div className="contactus-frame533">
                      <div className="contactus-group30">
                        <span className="contactus-text02">
                          <span>You’re interested in...</span>
                        </span>
                      </div>
                    </div>
                    <form className="contact-form">
                      <div className="contactus-form">
                        <div className="contactus-tabs">
                          <div className="contactus-tags">
                            <div className="contactus-tagpurple">
                              <span className="contactus-text04">
                                <span>
                                  Product Design
                                  <span />
                                </span>
                              </span>
                            </div>
                            <div className="contactus-tagpurple1">
                              <span className="contactus-text06">
                                <span>Web Developpment</span>
                              </span>
                            </div>
                            <div className="contactus-tagpurple2">
                              <span className="contactus-text08">
                                <span>Marketing</span>
                              </span>
                            </div>
                            <div className="contactus-tagpurple3">
                              <span className="contactus-text10">
                                <span>Branding</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="contactus-frame531">
                          <div className="contactus-contactform">
                            <div className="contactus-inputs">
                              <div className="contactus-input">
                                <div className="contactus-wrapper">
                                  <span className="contactus-text12">
                                    <input
                                      type="text"
                                      className="full-name"
                                      name="name"
                                      placeholder="Your name"
                                      value={formValues.name}
                                      onChange={handleChange}
                                      required
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="contactus-input1">
                                <div className="contactus-wrapper1">
                                  <span className="contactus-text14">
                                    <input
                                      type="email"
                                      className="email"
                                      name="email"
                                      placeholder="Your email"
                                      value={formValues.email}
                                      onChange={handleChange}
                                      required
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="contactus-phone">
                                <div className="contactus-framedropdowntriggerlegacy">
                                  <div className="contactus-icon">
                                    <div className="contactus-iconwrapper">
                                      <div className="contactus-flag"></div>
                                    </div>
                                  </div>
                                  <span className="contactus-text16 H5regular">
                                    <input
                                      type="tel"
                                      className="tel"
                                      id="tel"
                                      name="tel"
                                      value="+234"
                                      onChange={handleChange}
                                      required
                                    />
                                  </span>
                                  <div className="contactus-iconwrapper1">
                                    <img
                                      src="/playground_assets/unioni1365-na6m.svg"
                                      alt="UnionI1365"
                                      className="contactus-union"
                                    />
                                  </div>
                                </div>
                                <div className="contactus-input2">
                                  <div className="contactus-wrapper2">
                                    <span className="contactus-text18">
                                      <input
                                        type="tel"
                                        placeholder="Your Phone number"
                                        className="contact-phone"
                                        name="phone"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="contactus-textarea">
                                <span className="contactus-text20">
                                  <span>
                                    <textarea
                                      name="message"
                                      placeholder="Tell us about your project..."
                                      className="tell-us"
                                      value={formValues.message}
                                      onChange={handleChange}
                                      required
                                    ></textarea>
                                    <br></br>
                                    <span></span>
                                  </span>
                                </span>
                              </div>
                              <div className="contactus-input3">
                                <div className="contactus-wrapper3">
                                  <span className="contactus-text25">
                                    <input
                                      type="text"
                                      className="budget"
                                      name="budget"
                                      placeholder="Project budget: (USD)"
                                      value={formValues.budget}
                                      onChange={handleChange}
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={handleSubmit}
                              className="contactus-button"
                            >
                              <div className="contactus-iconwrapper2">
                                <img
                                  src={sendIcon}
                                  alt="UnionI1365"
                                  className="contactus-union1"
                                />
                              </div>
                              <span className="contactus-text27">
                                <span>Send request</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="contactus-quotes">
                  <img
                    src={main}
                    alt="Ellipse5I1365"
                    className="contactus-ellipse5"
                  />
                  <span className="contactus-text29">
                    <span>
                      <span>
                        We offer a wide range
                        <span />
                      </span>
                      <br></br>
                      <span>
                        of services at an affordable price point,
                        <span />
                      </span>
                      <br></br>
                      <span>
                        so businesses can focus on what they do best
                        <span />
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                  </span>
                  <img
                    src={lilac}
                    alt="Ellipse1I1365"
                    className="contactus-ellipse1 circle-animation "
                  />
                  <img
                    src={green}
                    alt="Ellipse6I1365"
                    className="contactus-ellipse6 circle-animation "
                  />
                  <img
                    src={purple}
                    alt="Ellipse2I1365"
                    className="contactus-ellipse2 circle-animation "
                  />
                  <img
                    src={lightblue}
                    alt="Ellipse3I1365"
                    className="contactus-ellipse3 circle-animation "
                  />
                  <img
                    src={brown}
                    alt="Ellipse4I1365"
                    className="contactus-ellipse4 circle-animation "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactus-container-2">
          <div className="contactform-contactform">
            <div className="contactform-content">
              <span className="contactform-text">
                <span className="contactform-text01">
                  <span>Get In Touch With Us</span>
                  <br></br>
                  <span></span>
                </span>
                <span>You’re interested in...</span>
              </span>
              <form>
                <div className="contactform-frame528">
                  <div className="contactform-frame532">
                    <div className="contactform-tags">
                      <div className="contactform-tagpurple">
                        <span className="contactform-text06">
                          <span>
                            Product Design
                            <span />
                          </span>
                        </span>
                      </div>
                      <div className="contactform-tagpurple1">
                        <span className="contactform-text08">
                          <span>Web Developpment</span>
                        </span>
                      </div>
                      <div className="contactform-tagpurple2">
                        <span className="contactform-text10">
                          <span>Marketing</span>
                        </span>
                      </div>
                      <div className="contactform-tagpurple3">
                        <span className="contactform-text12">
                          <span>Branding</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="contactform-contactform1">
                    <div className="contactus-inputs">
                      <div className="contactus-input">
                        <div className="contactus-wrapper">
                          <span className="contactus-text12">
                            <input
                              type="text"
                              className="full-name"
                              name="name"
                              placeholder="Your name"
                              value={formValues.name}
                              onChange={handleChange}
                              required
                            />
                          </span>
                        </div>
                      </div>
                      <div className="contactus-input1">
                        <div className="contactus-wrapper1">
                          <span className="contactus-text14">
                            <input
                              type="email"
                              className="email"
                              name="email"
                              placeholder="Your email"
                              value={formValues.email}
                              onChange={handleChange}
                              required
                            />
                          </span>
                        </div>
                      </div>
                      <div className="contactus-phone">
                        <div className="contactus-framedropdowntriggerlegacy">
                          <div className="contactus-icon">
                            <div className="contactus-iconwrapper">
                              <div className="contactus-flag"></div>
                            </div>
                          </div>
                          <span className="contactus-text16 H5regular">
                            <input
                              type="tel"
                              className="tel"
                              id="tel"
                              name="tel"
                              value="+234"
                              onChange={handleChange}
                              required
                            />
                          </span>
                          <div className="contactus-iconwrapper1">
                            <img
                              src="/playground_assets/unioni1365-na6m.svg"
                              alt="UnionI1365"
                              className="contactus-union"
                            />
                          </div>
                        </div>
                        <div className="contactus-input2">
                          <div className="contactus-wrapper2">
                            <span className="contactus-text18">
                              <input
                                type="tel"
                                placeholder="Your Phone number"
                                className="contact-phone"
                                name="phone"
                                value={formValues.phone}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="contactus-textarea">
                        <span className="contactus-text20">
                          <span>
                            <textarea
                              name="message"
                              placeholder="Tell us about your project..."
                              className="tell-us"
                              value={formValues.message}
                              onChange={handleChange}
                            ></textarea>
                            <br></br>
                            <span></span>
                          </span>
                        </span>
                      </div>
                      <div className="contactus-input3">
                        <div className="contactus-wrapper3">
                          <span className="contactus-text25">
                            <input
                              type="text"
                              className="budget"
                              name="budget"
                              placeholder="Project budget: (USD)"
                              value={formValues.budget}
                              onChange={handleChange}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <button onClick={handleSubmit} className="contactform-button">
                <div className="contactform-iconwrapper2">
                  <img
                    alt="UnionI1438"
                    src="/playground_assets/unioni1365-b6hk.svg"
                    className="contactform-union1"
                  />
                </div>
                <span className="contactform-text29">
                  <span>Send request</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
