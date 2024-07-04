import { useState } from "react";
import "./qualification.css"

const Qualification = () => {
    const [toggleStage, setToggleStage] = useState(1)

    const toggleTab = (index) => {
        setToggleStage(index)
    }
    return (
        <section className="qualification section " id="qualification">
            <div>
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My Personel Journey</span>
            </div>

            <div className="qualification__container container">

                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)} className={toggleStage === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification-icon" ></i>
                        Education
                    </div>

                    <div onClick={() => toggleTab(2)} className={toggleStage === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification-icon" ></i>
                        Experience
                    </div>

                </div>

                <div className="qualification__section">

                    <div className={toggleStage === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Manhajul Madani- 2nd year</h3>
                                <span className="qualification__subtitle">Al Madrasa Ad Diniya Sylhet</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Shorhejamir</h3>
                                <span className="qualification__subtitle">Al Madrasa Ad Diniya Sylhet</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2020 - 2021
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Hifzul Quran</h3>
                                <span className="qualification__subtitle">Nurul Quran Madrasa Moulvibazar</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2016 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Qariul Quran</h3>
                                <span className="qualification__subtitle">Nurul Quran Madrasa Moulvibazar</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2015
                                </div>
                            </div>



                        </div>

                    </div>

                    <div className={toggleStage === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developing</h3>
                                <span className="qualification__subtitle">programming hero</span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    2024 -  Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                   
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle"></span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i>
                                    
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Qualification;