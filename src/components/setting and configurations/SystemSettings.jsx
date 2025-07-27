import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SystemSettings = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <section className="flex flex-col gap-3">
                <div className="text-3xl font-semibold mb-4 flex items-center">
                    General Setting{" "}
                    <MdOutlineKeyboardArrowRight className=" text-4xl" />
                </div>
            </section>
        </div>
    );
};

export default SystemSettings;
