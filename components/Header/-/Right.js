import React from "react";
import {
    HeartIcon,
    MenuIcon,
    PaperAirplaneIcon,
    PlusCircleIcon,
    SearchIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function HeaderRight() {
    return (
        <div className="flex items-center justify-end space-x-4 mr-5">
            <HomeIcon className="headerRBtn" />
            <MenuIcon className="h-6 md:hidden cursor-pointer" />
            <PaperAirplaneIcon className="headerRBtn rotate-45" />
            <PlusCircleIcon className="headerRBtn" />
            <UserGroupIcon className="headerRBtn" />
            <HeartIcon className="headerRBtn" />
            <img
                src="https://tny.sh/dummy-profile-pic"
                alt=""
                className="cursor-pointer rounded-xl w-10 h-10 headerRAvatar"
            />
        </div>
    );
}

export default HeaderRight;
