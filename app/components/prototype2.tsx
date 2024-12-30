'use client'

import { useState } from "react";

export default function Home() {
    const [blocks, setBlocks] = useState([]);
    const [width, setWidth] = useState(100); // Default block width
    const [height, setHeight] = useState(50); // Default block height

    const containerWidth = 1200;
    const containerHeight = 400;

    const addBlock = () => {
        const lastBlock = blocks[blocks.length - 1];
        let x = 0;
        let y = 0;

        if (lastBlock) {
            // Determine the next block's position
            if (lastBlock.y + lastBlock.height + height <= containerHeight) {
                // Stack vertically in the same column
                x = lastBlock.x + lastBlock.width;
                y = lastBlock.y + lastBlock.height;
            } else {
                // Move to the next column
                x = lastBlock.x + lastBlock.width;
                y = 0;
            }
        }

        // Check if the block fits in the container
        if (x + width > containerWidth || y + height > containerHeight) {
            alert("No more space to add blocks!");
            return;
        }

        const newBlock = {
            id: Math.random().toString(36).substr(2, 9), // Random unique ID
            x,
            y,
            width,
            height,
        };

        setBlocks([...blocks, newBlock]);
    };

    const deleteBlock = (id) => {
        setBlocks(blocks.filter((block) => block.id !== id));
    };

    return (
        <div className="p-5">
            <div className="mb-5">
                <label className="mr-4">
                    Width:{" "}
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(parseInt(e.target.value))}
                        className="border rounded p-2 mr-4"
                    />
                </label>
                <label className="mr-4">
                    Height:{" "}
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(parseInt(e.target.value))}
                        className="border rounded p-2 mr-4"
                    />
                </label>
                <button
                    onClick={addBlock}
                    className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
            <div
                id="container"
                className="border-2 border-gray-800 bg-gray-100 relative"
                style={{
                    width: `${containerWidth}px`,
                    height: `${containerHeight}px`,
                }}
            >
                {blocks.map((block) => (
                    <div
                        key={block.id}
                        className="absolute bg-blue-500 bg-opacity-50 border border-blue-800 flex items-center justify-center"
                        style={{
                            left: `${block.x}px`,
                            top: `${block.y}px`,
                            width: `${block.width}px`,
                            height: `${block.height}px`,
                        }}
                    >
                        <button
                            onClick={() => deleteBlock(block.id)}
                            className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center cursor-pointer"
                            title="Delete block"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
