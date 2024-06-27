'use client'
import React, { useState } from 'react';
import './circles.css';
import { FaCircle } from "react-icons/fa6";

export default function Circles({ colors,clickedIndex,setClickedIndex}) {

    return (
        <div className="circleContainer">
            {colors.map((color, index) => (
                <div
                    key={index}
                    onClick={() => setClickedIndex(index)}
                    style={{
                        borderColor: 'black',
                        borderWidth: clickedIndex === index ? '4px' : '2px',
                        borderStyle: 'solid',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '36px',
                        height: '36px',
                        cursor: 'pointer'
                    }}
                >
                    <FaCircle
                        size={36}
                        style={{ color: color }}
                    />
                </div>
            ))}
        </div>
    );
}