import Header from "../global/Header"
import Footer from "../global/Footer";

import "./Home.css";

function Home() {

    return(
        <>
            <Header />
                <main className="container">
                    <div className="grid">
                        <div className="col-12">
                            <h1>Home page</h1>
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    )

}

export default Home;