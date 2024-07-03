import { useState } from "react";
import "./secvices.css"
const Secvices = () => {
    const [toggleStage, setToggleStage] = useState(0)
    
    const toggleTab = (index) => {
        setToggleStage(index)
    }

    return (
        <section className="services section " id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Web <br /> Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab (1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleStage === 1 ? "services__modal active-modal" : "services__modal"}>
                        
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Web Designer</h3>
                            <p className="services__modal-description">Custom web designs that captivate and convert. Your vision, our expertise. From concept to creation, we turn your ideas into reality.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> web page development </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UX element intersection  </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and makeups Of project for clients 
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Web <br /> Developer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab (2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleStage === 2 ? "services__modal active-modal" : "services__modal"}>
                        
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Web Designer</h3>
                            <p className="services__modal-description">Custom web designs that captivate and convert. Your vision, our expertise. From concept to creation, we turn your ideas into reality.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> web page development </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UX element intersection  </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and makeups Of project for clients 
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Visual <br /> Designer</h3>
                    </div>
                    <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className="services__modal">
                        
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Custom web designs that captivate and convert. Your vision, our expertise. From concept to creation, we turn your ideas into reality.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I develop the user interface </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"> web page development </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create UX element intersection  </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I position your company brand </p>
                                </li>
                                <li className="services__modal-service ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and makeups Of project for clients 
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Secvices;