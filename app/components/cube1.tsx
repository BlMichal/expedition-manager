import React from "react";

export default function Container() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800">
            <div className="flex gap-2 preserve-3d rotate-y">
                {/* First Text Block */}
                <div className="relative pointer-events-none w-[100px] h-[100px]  preserve-3d transition-transform duration-[1.5s] hover:rotate-x">
                    {/* Front Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(0deg) translateZ(100px)" }}
                    >
                        2
                    </span>
                    {/* Back Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(180deg) translateZ(50px)" }}
                    >
                        5
                    </span>
                    {/* Top Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(90deg) translateZ(50px)" }}
                    >
                        3
                    </span>
                    {/* Bottom Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(-90deg) translateZ(50px)" }}
                    >
                        4
                    </span>
                    {/* Left Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateY(-90deg) translateZ(50px)" }}
                    >
                        L
                    </span>
                    {/* Right Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateY(90deg) translateZ(50px)" }}
                    >
                        R
                    </span>
                </div>

                {/* Second Text Block */}
                <div className="relative pointer-events-none w-[100px] h-[100px]  preserve-3d transition-transform duration-[1.5s] hover:rotate-x">
                    {/* Front Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(0deg) translateZ(50px)" }}
                    >
                        2
                    </span>
                    {/* Back Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(180deg) translateZ(50px)" }}
                    >
                        5
                    </span>
                    {/* Top Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(90deg) translateZ(50px)" }}
                    >
                        3
                    </span>
                    {/* Bottom Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(-90deg) translateZ(50px)" }}
                    >
                        4
                    </span>
                    {/* Left Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateY(-90deg) translateZ(50px)" }}
                    >
                        L
                    </span>
                    {/* Right Face */}
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateY(90deg) translateZ(50px)" }}
                    >
                        R
                    </span>
                </div>

                {/* Third Text Block */}
                <div className="relative pointer-events-none w-[100px] h-[100px] preserve-3d transition-transform duration-[1.5s] hover:rotate-x">
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(0deg) translateZ(50px)" }}
                    >
                        2
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(90deg) translateZ(50px)" }}
                    >
                        3
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(180deg) translateZ(50px)" }}
                    >
                        4
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-white bg-gradient-to-b from-gray-700 to-gray-500"
                        style={{ transform: "rotateX(270deg) translateZ(50px)" }}
                    >
                        5
                    </span>
                </div>

                {/* Fourth Text Block */}
                <div className="relative pointer-events-none w-[100px] h-[100px] preserve-3d transition-transform duration-[1.5s] hover:rotate-x bg-green-500">
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(0deg) translateZ(50px)" }}
                    >
                        2
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(90deg) translateZ(50px)" }}
                    >
                        3
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(180deg) translateZ(50px)" }}
                    >
                        5
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(270deg) translateZ(50px)" }}
                    >
                        4
                    </span>
                </div>
                <div className="relative pointer-events-none w-[100px] h-[100px] preserve-3d transition-transform duration-[1.5s] hover:rotate-x bg-green-500">
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(0deg) translateZ(50px)" }}
                    >
                        2
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(90deg) translateZ(50px)" }}
                    >
                        3
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(180deg) translateZ(50px)" }}
                    >
                        5
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(270deg) translateZ(50px)" }}
                    >
                        4
                    </span>
                </div>
                <div className="relative pointer-events-none w-[100px] h-[100px] preserve-3d transition-transform duration-[1.5s] hover:rotate-x bg-green-500">
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(0deg) translateZ(50px)" }}
                    >
                        2
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(90deg) translateZ(50px)" }}
                    >
                        3
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(180deg) translateZ(50px)" }}
                    >
                        5
                    </span>
                    <span
                        className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-4xl text-gray-800 bg-gradient-to-b from-green-500 to-green-400"
                        style={{ transform: "rotateX(270deg) translateZ(50px)" }}
                    >
                        4
                    </span>
                </div>
            </div>
        </div>
    );
}
