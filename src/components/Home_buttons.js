import React from "react";
import { Link } from "react-router-dom";

export default function buttons() {
    return (
        <div className="flex justify-center gap-5 color-white">
            <Link to={'play'} className="hover:bg-white hover:text-blue-600 hover:font-bold bg-blue-600 text-white px-2 py-1 rounded-lg">
                Play
            </Link>
            {/* <Link to={'community'} className="hover:bg-white hover:text-blue-600 hover:font-bold bg-blue-600 text-white px-2 py-1 rounded-lg">
                Community
            </Link>
            <Link to={'about'} className="hover:bg-white hover:text-blue-600 hover:font-bold bg-blue-600 text-white px-2 py-1 rounded-lg">
                About
            </Link> */}
        </div>
    );
}