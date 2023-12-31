import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Typewriter from "typewriter-effect";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = ({ classicHeader, darkTheme }) => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ref2.current.classList.add('visibleX');
        ref3.current.classList.add('visibleY');
      } else {
        ref2.current.classList.remove('visibleX');
        ref3.current.classList.remove('visibleY');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5
    });

    observer.observe(ref1.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // const form = useRef();
  // const [sendingMail, setSendingMail] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setSendingMail(true);
  //   emailjs
  //     .sendForm(
  //       "service_bpuerla",
  //       "template_6ofqidc",
  //       form.current,
  //       "HXGI8ShFBgop8iy7a"
  //     )
  //     .then(
  //       (result) => {
  //         document.getElementById("contact-form").reset();
  //         toast.success("Message sent successfully!", {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: darkTheme ? "dark" : "light",
  //         });
  //         console.log(result.text);
  //         setSendingMail(false);
  //       },
  //       (error) => {
  //         toast.error("Something went wrong!", {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: darkTheme ? "dark" : "light",
  //         });
  //         console.log(error.text);
  //         setSendingMail(false);
  //       }
  //     );
  // };

  return (
    <section
      id="contact"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <br />
        <br />
        <br />
        <br />
        <div ref={ref1} className="position-relative d-flex text-center mb-5">
          <h2 ref={ref2}
            className={
              "heading1 text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Contact
          </h2>
          <p ref={ref3}
            className={
              "paragraph1 text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Get in Touch
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>

        </div>
        {/* Heading end*/}
        <br />
        <h2 style={{ textAlign: 'center' }} className="text-black">
          <Typewriter
            options={{
              strings: ["Thanks for stopping by!"],
              autoStart: true,
              loop: true,
              delay: 60,
              pauseFor: 1500
            }}
          />
        </h2>
        <br />
        <br />
        <br />
        <br />
        {/* <div className="row gy-5" id="contact-row"> */}
        <div id="contact-row">
          {/* contact details */}
          {/* <div className="col-md-4 col-xl-3 order-1 order-md-0 text-center text-md-start"> */}
          <div className="">
            <div className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i style={{ fontSize: '24px' }} className="fas fa-location-dot" />
              </span>
              <span style={{ fontSize: '24px' }}>New York, NY</span>
            </div>
            <div className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <i style={{ fontSize: '24px' }} className="fas fa-envelope" />
              </span>
              <a style={{ fontSize: '24px' }} href="mailto:bchoi28@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                bchoi28@gmail.com
              </a>
            </div>
          </div>
          {/* <div className="col-md-8 col-xl-9 order-0 order-md-1"> */}
          <div className="">
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            // style={{ marginLeft: '-25px' }}
            >
              <span style={{ fontSize: '24px' }}>Let's Connect!</span>
            </h2>
            <ul
              className={
                "social-icons justify-content-center" +
                (darkTheme ? "social-icons-muted" : "")
              }
            >
              {/* <li className="social-icons-dribbble">
                <Tooltip text="Dribbble" placement="top">
                  <a
                    href="http://www.dribbble.com/harnishdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-dribbble" />
                  </a>
                </Tooltip>
              </li> */}
              <li className="social-icons-facebook">
                <Tooltip text="LinkedIn" placement="top">
                  <a
                    href="https://www.linkedin.com/in/brandonchoi28/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i style={{ fontSize: '30px' }} className="fab fa-linkedin fa-lg" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-twitter">
                <Tooltip text="GitHub" placement="top">
                  <a
                    href="https://github.com/bchoi28"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i style={{ fontSize: '30px' }} className="fab fa-github fa-lg" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-dribbble">
                <Tooltip text="Wellfound" placement="top">
                  <a
                    href="https://wellfound.com/u/brandon-choi-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i style={{ fontSize: '30px' }} className="fab fa-angellist fa-lg" />
                  </a>
                </Tooltip>
              </li>
              {/* <li className="social-icons-email">
                <Tooltip text="Email" placement="top">
                  <a href="mailto:bchoi28@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i style={{ fontSize: '30px' }} className="fas fa-envelope fa-lg" />
                  </a>
                </Tooltip>
              </li> */}
            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* <h2
              className={
                "mb-3 text-5 text-uppercase text-center text-md-start " +
                (darkTheme ? "text-white" : "")
              }
            >
              Ping me!
            </h2> */}
            {/* <form
              className={darkTheme ? "form-dark" : ""}
              id="contact-form"
              action="php/mail.php"
              method="post"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row g-4">
                <div className="col-xl-6">
                  <input
                    name="user_name"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="col-xl-6">
                  <input
                    name="user_email"
                    type="email"
                    className="form-control"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary rounded-pill d-inline-flex"
                  type="submit"
                >
                  {sendingMail ? (
                    <>
                      <span
                        role="status"
                        aria-hidden="true"
                        class="spinner-border spinner-border-sm align-self-center me-2"
                      ></span>
                      Sending.....
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </p>
              <ToastContainer />
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
