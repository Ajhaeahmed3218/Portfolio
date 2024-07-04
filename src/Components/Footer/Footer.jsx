import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ajhar</h1>

                <ul className="footer__list">

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>


                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>
                    </li>


                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>
                </ul>

                <div className="footer__social">

                    <a href="https://github.com/Ajhaeahmed3218" className="footer__social-link" target='_blank'>
                        <i className="uil uil-github-alt"></i>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100071592883404" className="footer__social-link" target='_blank'>
                        <i className="uil uil-facebook"></i>
                    </a>

                    <a href="http://www.linkedin.com/in/ajhar-ahmed-chowdhury" className="footer__social-link" target='_blank'>
                        <i className="uil uil-linkedin"></i>
                    </a>

                </div>

                <span className="footer__copy">
                    &#169; Crypticalcoder. All rigths reseved
                </span>
            </div>
        </footer>
    );
};

export default Footer;