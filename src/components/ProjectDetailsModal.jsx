import React, { useEffect, useRef } from "react";

import Slider from "react-slick";

const ProjectDetailsModal = ({ darkTheme, projectDetails }) => {
    const sliderRef = useRef();

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    useEffect(() => {
        sliderRef.current.slickGoTo(0);
    }, [projectDetails]);

    return (
        <>
            <div
                className="modal fade bg-dark-1"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl">
                    <div
                        className={
                            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
                        }
                    >
                        <div className="modal-body">
                            <button
                                type="button"
                                className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                            <div
                                className={
                                    "container ajax-container " +
                                    (darkTheme ? "bg-dark-2 text-light" : "")
                                }
                            >
                                <h2
                                    className={
                                        "text-6 font-weight-600 text-center mb-4" +
                                        (darkTheme ? " text-white" : "")
                                    }
                                >
                                    {projectDetails?.logo}
                                </h2>
                                <div className="row g-4">
                                    <div className="col-md-7">
                                        <Slider {...settings} ref={sliderRef}>
                                            <div className="item">
                                                <img
                                                    id={`firstImage${projectDetails?.id}`}
                                                    className="img-fluid"
                                                    alt=""
                                                    src={projectDetails?.firstImage}
                                                />
                                            </div>
                                            {projectDetails?.sliderImages?.length > 0 &&
                                                projectDetails?.sliderImages?.map((image, index) => (
                                                    <div className="item" key={index}>
                                                        <img
                                                            id={`sliderImage${projectDetails?.id}`}
                                                            className="img-fluid"
                                                            alt="slider"
                                                            src={image} />
                                                    </div>
                                                ))}
                                        </Slider>
                                    </div>
                                    <div className="col-md-5">
                                        {/* <br /> */}
                                        <h4
                                            className={
                                                "text-4 font-weight-600" +
                                                (darkTheme ? " text-white" : "")
                                            }
                                        >
                                            Description:
                                        </h4>
                                        <p>{projectDetails?.projectInfo}</p>
                                        <h4
                                            className={
                                                "text-4 font-weight-600 mt-4" +
                                                (darkTheme ? " text-white" : "")
                                            }
                                        >
                                            Details:
                                        </h4>
                                        <ul
                                            className={
                                                "list-style-2 " + (darkTheme ? "list-style-light" : "")
                                            }
                                        >
                                            {/* <li>
                        <span
                          className={
                            "text-dark font-weight-600 me-2" +
                            (darkTheme ? " text-white" : "")
                          }
                        >
                          Client:
                        </span>
                        {projectDetails?.client}
                      </li> */}
                                            <li>
                                                <span
                                                    className={
                                                        "text-dark font-weight-600 me-2" +
                                                        (darkTheme ? " text-white" : "")
                                                    }
                                                >
                                                    Technologies:
                                                </span>
                                                {projectDetails?.technologies}
                                            </li>
                                            <li>
                                                <span
                                                    className={
                                                        "text-dark font-weight-600 me-2" +
                                                        (darkTheme ? " text-white" : "")
                                                    }
                                                >
                                                    Category:
                                                </span>
                                                {projectDetails?.category}
                                            </li>
                                            {/* <li>
                        <span
                          className={
                            "text-dark font-weight-600 me-2" +
                            (darkTheme ? " text-white" : "")
                          }
                        >
                          Date:
                        </span>
                        {projectDetails?.date}
                      </li> */}
                                            <li>
                                                <span
                                                    className={
                                                        "text-dark font-weight-600 me-2" +
                                                        (darkTheme ? " text-white" : "")
                                                    }
                                                >
                                                    Live Link:
                                                </span>
                                                <a
                                                    href={projectDetails?.url?.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {projectDetails?.url?.name}
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="row no-gutters align-items-center" id="last-row"
                                        >
                                            <div
                                                className={
                                                    "col-auto text-dark font-weight-600" +
                                                    (darkTheme ? " text-white" : "")
                                                }
                                            >
                                                Repository:
                                            </div>
                                            <div className="col-auto">
                                                <ul
                                                    className={
                                                        "social-icons" +
                                                        (darkTheme ? " social-icons-muted" : "")
                                                    }
                                                >
                                                    <li style={{ marginLeft: '-12px' }} className="social-icons-facebook">
                                                        <a
                                                            data-toggle="tooltip"
                                                            href={projectDetails?.socialLinks?.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            data-original-title="GitHub"
                                                        >
                                                            <i className="fab fa-github fa-lg" />
                                                        </a>
                                                    </li>
                                                    {/* <li className="social-icons-twitter">
                            <a
                              data-toggle="tooltip"
                              href={projectDetails?.socialLinks?.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-original-title="Twitter"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li className="social-icons-google">
                            <a
                              data-toggle="tooltip"
                              href={projectDetails?.socialLinks?.google}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-original-title="Google"
                            >
                              <i className="fab fa-google" />
                            </a>
                          </li>
                          <li className="social-icons-instagram">
                            <a
                              data-toggle="tooltip"
                              href={projectDetails?.socialLinks?.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-original-title="Instagram"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li className="social-icons-email">
                            <a
                              data-toggle="tooltip"
                              href={projectDetails?.socialLinks?.mail}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-original-title="Email"
                            >
                              <i className="fas fa-envelope" />
                            </a>
                          </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsModal;
