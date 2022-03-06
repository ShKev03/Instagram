import Head from "next/head";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Powered from "../components/Powered/Powered";
import withTransition from "../HOC/withTransition";

function Home() {
    return (
        <div className="bg-gray-50 h-screen">
            <Head>
                <title>Instagram</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Header />
            <Feed />
            <Powered />
        </div>
    );
}

export default withTransition(Home);
