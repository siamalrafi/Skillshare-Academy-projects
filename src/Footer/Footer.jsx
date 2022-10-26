import React from 'react';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div >
            <>
                <div className="">
                    <footer
                        className="text-center text-white"
                        style={{ backgroundColor: "#3f51b5" }}
                    >
                        <div className="">
                            <section className="mt-5">
                                <div className="row text-center d-flex justify-content-center pt-5">
                                    <div className="col-md-2">
                                        <h6 className="text-uppercase font-weight-bold">
                                            <Link href="#!" className="text-white">
                                                About us
                                            </Link>
                                        </h6>
                                    </div>

                                    <div className="col-md-2">
                                        <h6 className="text-uppercase font-weight-bold">
                                            <Link href="#!" className="text-white">
                                                Products
                                            </Link>
                                        </h6>
                                    </div>

                                    <div className="col-md-2">
                                        <h6 className="text-uppercase font-weight-bold">
                                            <Link href="#!" className="text-white">
                                                Awards
                                            </Link>
                                        </h6>
                                    </div>


                                    <div className="col-md-2">
                                        <h6 className="text-uppercase font-weight-bold">
                                            <Link href="#!" className="text-white">
                                                Help
                                            </Link>
                                        </h6>
                                    </div>

                                    <div className="col-md-2">
                                        <h6 className="text-uppercase font-weight-bold">
                                            <Link href="#!" className="text-white">
                                                Contact
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            </section>
                            <hr />
                            <section>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <p>
                                            The best contribution of this world. consectetur adipisicing elit. Sunt
                                            distinctio earum repellat Then you can do . voluptatibus placeat nam,
                                            commodi optio pariatur est quia magnam eum hambole corrupti dicta,
                                            aliquam sequi voluptate finally.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="text-center mb-3">
                                <Link className="text-white h3 me-4">
                                    <FaFacebook></FaFacebook>
                                </Link>
                                <Link className="text-white h3 me-4">
                                    <FaTwitter />

                                </Link>
                                <Link className="text-white h3 me-4">
                                    <FaGoogle />
                                </Link>
                                <Link className="text-white h3 me-4">
                                    <FaInstagram />
                                </Link>
                                <Link className="text-white h3 me-4">
                                    <FaLinkedin></FaLinkedin>                                </Link>
                                <Link className="text-white h3 me-4">
                                    <FaGithub />
                                </Link>
                            </section>
                        </div>

                        <div
                            className="text-center p-3"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                        >
                            © 2022 Copyright:
                            <Link className="text-white ps-3" href="https://mdbootstrap.com/">
                                RHD-Limit.com
                            </Link>
                        </div>
                    </footer>
                </div>
            </>


        </div >
    )
};

export default Footer;