import React from "react";
import HeaderLeft from "./-/Left";
import HeaderCenter from "./-/Center";
import HeaderRight from "./-/Right";

function Header() {
    return (
        <div className="bg-white shadow-sm md:shadow-md sticky top-0 z-30">
            <div
                id="header"
                className="flex justify-between max-w-6xl bg-white lg:m-auto "
            >
                {/* left header */}
                <HeaderLeft/>

                {/* middle header */}
                <HeaderCenter/>

                {/* right header */}
                <HeaderRight/>
            </div>
        </div>
    );
}

export default Header;