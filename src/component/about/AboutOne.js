import React from "react";
import FormOne from "../contact/FormOne";

const AboutOne = () => {
  return (
    <section className="section section-padding-equal bg-color-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us">
              <div className="section-heading heading-left mb-0">
                <span className="subtitle">About Us</span>

                <h2 className="title mb--40">
                  {" "}
                  We design, code &amp; develop.
                </h2>
                <p>
                We are a dynamic and innovative web application development 
                agency that is dedicated to helping businesses achieve their online goals. 
                Our team of experienced developers and designers utilize the latest technologies 
                and methodologies to deliver custom web solutions that are tailored to meet the unique 
                needs of each of our clients..{" "}
                </p>
                <p>
                With a focus on user experience and optimal performance, 
                we work closely with clients to ensure their web applications are 
                not only visually appealing but also functional and easy to use.{" "}
                </p>
                <p>
                Whether you're looking to launch a new web app, improve your existing one, 
                or require ongoing support and maintenance, 
                we have the expertise to deliver the results you need.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-form-box">
              <h3 className="title">Book a free appointment.</h3>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-6 list-unstyled">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="line"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt="line"
          />
        </li>
      </ul>
    </section>
  );
};

export default AboutOne;
