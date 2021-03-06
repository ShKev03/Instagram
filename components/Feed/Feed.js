import React from "react";
import Left from "./-/Left";
import Right from "./-/Right";

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3  xl:max-w-6xl  mx-auto">
            <Left />
            <Right />
        </main>
    );
}

export default Feed;
