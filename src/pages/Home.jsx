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
                            <p className="h1">hello</p>
                            <h1 className="h2">I'm airrick the front end dev</h1>
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    )

}

export default Home;