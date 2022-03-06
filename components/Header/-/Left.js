import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeaderLeft() {
    return (
        <div id="header-left" className="flex ml-5">
            <div
                href="/AboutPage"
                id="insta-text"
                className="relative hidden lg:inline-grid w-24 cursor-pointer"
            >
                <Link href="/AboutPage.js">
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />
                </Link>
            </div>
            <div
                id="insta-logo"
                className="relative inline-grid lg:hidden w-10 flex-shrink-0 cursor-pointer"
            >
                <Link href="/AboutPage">
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit="contain"
                    />
                </Link>
            </div>
        </div>
    );
}

export default HeaderLeft;
