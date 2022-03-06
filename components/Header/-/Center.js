import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

function HeaderCenter() {
    return (
        <div id="middle-header" className="max-w-xs">
            <div
                id="search-container"
                className=" relative mt-1 p-3 rounded-md "
            >
                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                    id="search-input"
                    className="bg-gray-50 w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-lg"
                    type="text"
                    placeholder="Search"
                />
            </div>
        </div>
    );
}

export default HeaderCenter;
