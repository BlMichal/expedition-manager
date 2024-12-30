'use client'


const Cube = ({ rotateX, rotateY }) => {
    return (
        <div
            className="w-[60px] h-[60px] relative"
            style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformOrigin: 'center',
            }}
        >
            {/* Front Face */}
            <div
                className="absolute w-full h-full border border-1 bg-red-500 opacity-60"
                style={{
                    transform: `translateZ(30px)`,
                }}
            >
                1
            </div>
            {/* Back Face */}
            <div
                className="absolute w-full h-full border border-1 bg-red-500 opacity-60"
                style={{
                    transform: `translateZ(-30px)`,
                }}
            >
                2
            </div>
            {/* Right Face */}
            <div
                className="absolute w-full h-full border border-1 bg-red-500 opacity-60"
                style={{
                    transform: `rotateY(90deg) translateZ(30px)`,
                }}
            >
                3
            </div>
            {/* Left Face */}
            <div
                className="absolute w-full h-full border border-1 bg-red-500 opacity-60"
                style={{
                    transform: `rotateY(-90deg) translateZ(30px)`,
                }}
            >
                4
            </div>
            {/* Top Face */}
            <div
                className="absolute w-full h-full border border-1 bg-red-500 opacity-60"
                style={{
                    transform: `rotateX(90deg) translateZ(30px)`,
                }}
            >
                5
            </div>
            {/* Bottom Face */}
            <div
                className="absolute w-full h-full border border-1 bg-red-500 opacity-60"
                style={{
                    transform: `rotateX(-90deg) translateZ(30px)`,
                }}
            >
                6
            </div>
        </div>
    );
};

export default Cube;