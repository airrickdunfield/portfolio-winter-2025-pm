import homeBanner from "../assets/images/home-banner.jpg";

import Header from "../global/Header"
import Footer from "../global/Footer";

import "./Home.css";

function Home() {

    return(
        <>
            <div className="container" id="SUPER_COOL_HOME_PAGE">
                <div className="grid vertical-center ">
                    <div className="col-12 col-4-lg">
                        <img src={homeBanner} alt="a cool web dev witch" />
                    </div>
                    <div className="col-12 col-6-lg">
                        <h1 className="h2">If you need a potion or website, I have you covered</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat quam vero at ex possimus doloribus excepturi corrupti? Saepe, distinctio maxime deserunt quis ipsa repellendus est repudiandae debitis nam voluptates!</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home;