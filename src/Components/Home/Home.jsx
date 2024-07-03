import Data from "./Data";
import ScrpllDown from "./ScrpllDown";
import Social from "./Social";
import "./home.css"


const Home = () => {
    return (
        <div>
            <section className="home section" id="home" ></section>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <div className="home__img"></div>

                    <Data />
                </div>
                <ScrpllDown />

            </div>
        </div>
    );
};

export default Home;