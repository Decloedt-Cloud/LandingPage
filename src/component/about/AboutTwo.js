import React from "react";
import FormOne from "../contact/FormOne";
import Accordion from "react-bootstrap/Accordion";
import { FaCompress, FaCode, FaGlobe } from "react-icons/fa";

const AboutTwo = () => {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="why-choose-us">
              <div className="section-heading heading-left">
                <span className="subtitle">About Us</span>
                <h3 className="title">Who we are?</h3>
                <p>
                we are dedicated to providing innovative and effective software solutions 
                to help businesses succeed in today's digital age. Our team of experienced developers, 
                designers, and project managers work closely with our clients to understand their unique needs and goals, 
                and then develop customized solutions that meet those needs.
                </p>
              </div>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FaCompress /> Strategy
                  </Accordion.Header>
                  <Accordion.Body>
                  At Decloedt agency, we believe that successful software projects start with a solid 
                  strategy. That's why we take the time to understand your business needs, 
                  goals, and challenges before we start any development work. 
                  We work closely with you to create a comprehensive strategy 
                  that will guide our design and development efforts, ensuring 
                  that we deliver solutions that meet your specific needs and drive your business forward.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FaCode /> Design
                  </Accordion.Header>
                  <Accordion.Body>
                  We know that great software isn't just about functionality - it's also about user experience. 
                  That's why our design team is dedicated to creating intuitive, 
                  user-friendly interfaces that make it easy for your customers to use your software. 
                  We use the latest design tools and techniques to create beautiful, 
                  responsive designs that are optimized for all devices, 
                  from desktop computers to mobile phones.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FaGlobe /> Development
                  </Accordion.Header>
                  <Accordion.Body>
                  Our team of experienced developers has a proven track record of delivering 
                  high-quality software solutions on time and on budget. We use the latest technologies 
                  and best practices to build robust, scalable applications that can grow and evolve with your business. 
                  Whether you need a custom web application, a mobile app, or a complex enterprise solution, 
                  we have the expertise to deliver the results you need.
                  We pride ourselves on our attention to detail and our commitment to excellence, 
                  and we always go the extra mile to ensure that our clients are completely satisfied with our work.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-form-box shadow-box mb--30">
              <h3 className="title">
                {" "}
                Get a free Decloedt quote now.
              </h3>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
