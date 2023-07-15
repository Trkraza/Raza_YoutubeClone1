import React from "react";
import "../index.css"
const LeftNavMenuItem = ({ text, icon, className, action }) => {
    return (
        <div
            className={
                "text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-red-600 fontchange font-bold" +
                className
            }
            onClick={action}
        >
            <span className="text-xl mr-5">{icon}</span>
            {text}
        </div>
    );
};

export default LeftNavMenuItem;
