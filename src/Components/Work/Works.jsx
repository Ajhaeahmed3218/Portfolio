import "./works.css"
import AboutImg from "../../assets/nuhash.jpeg";

const Works = () => {
    return (
        <section className="work section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent works</span>


            <div className="container">
                <ul className="cards">
                    <li>
                        <a href="" className="card">
                            <img src="https://i.ibb.co/09McdDK/Screenshot-2024-07-04-175745.png" className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img className="card__thumb" src={AboutImg} alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Alpha Clash Pro</h3>
                                        <span className="card__status">5 months ago</span>
                                    </div>
                                </div>
                                <p className="card__description">Alpha Clash Pro is a typing game designed to enhance users typing skills. <br /><span ><b><a target="_blank" href="https://ajhaeahmed3218.github.io/Alpha-Clash-Pro">Visit</a></b></span></p>

                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="" className="card">
                            <img src="https://i.ibb.co/Jns9rFk/Screenshot-2024-07-04-182733.png" className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img className="card__thumb" src={AboutImg} alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Forumify</h3>
                                        <span className="card__status">1 months ago</span>
                                    </div>
                                </div>
                                <p className="card__description">Forumify is a dynamic forum website designed for engaging discussions and content sharing. <br /><b><a target="_blank" href="https://assignment-12-f42e4.web.app/">Visit</a></b></p>
                            </div>
                        </a>
                    </li>
                    {/* <li>
                        <a href="" className="card">
                            <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Jessica Parker</h3>
                                        <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>
                                        <span className="card__status">1 hour ago</span>
                                    </div>
                                </div>
                                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a>
                    </li> */}
                    <li>
                        <a href="" className="card">
                            <img src="https://i.ibb.co/XCBLJxR/Screenshot-2024-07-04-183620.png" className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                    <img className="card__thumb" src={AboutImg} alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">kim Cattrall</h3>
                                        <span className="card__status">3 hours ago</span>
                                    </div>
                                </div>
                                <p className="card__description">P-Ticket P-Ticket is a sleek web platform designed for hassle-free bus ticket bookings.  <br /><span ><b><a target="_blank" href="https://ajhaeahmed3218.github.io/Assignment-Five/">Visit</a></b></span></p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Works;