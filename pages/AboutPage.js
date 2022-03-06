import Head from "next/head";
import withTransition from "../HOC/withTransition";
import Header from "../components/About/Header.js";
import Powered from "../components/Powered/Powered";
import About from "../components/About/About";

function AboutPage() {
    return (
        <div className="bg-gray-100 h-screen">
            <Head>
                <title>About App</title>
                <link rel="icon" href="/Main-Logo.png" />
            </Head>
            <Header />
            <div className="w-full">
                <img src="logo.png" className="mx-auto my-10 shadow-xl p-3 rounded-2xl" alt="" width="200" height="200" />
            </div>
            <About/>
            <Powered />
        </div>
    );
}

export default withTransition(AboutPage);
