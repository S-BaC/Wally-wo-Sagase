import React from "react";
import { Link } from "react-router-dom";

export default function buttons() {
    return (
        <div className="flex justify-center gap-5 color-white">
            <Link to={'play'} className="bg-blue-600 text-white px-2 py-1 rounded-lg">
                Play
            </Link>
            <Link to={'community'} className="bg-blue-600 text-white px-2 py-1 rounded-lg">
                Community
            </Link>
            <Link to={'about'} className="bg-blue-600 text-white px-2 py-1 rounded-lg">
                About
            </Link>
        </div>
    );
}