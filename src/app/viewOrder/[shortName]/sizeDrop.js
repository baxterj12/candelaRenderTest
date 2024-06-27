'use client'
import React, { useState } from 'react';
import './sizeDrop.css';

export default function SizeDrop({ sizes, selectedSize, setSelectedSize}) {

    return (
        <div>
            <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value)}
                className="sizeDropdown">
                {sizes.map((size, index) => (
                    <option key={index} value={size}>
                        {size}
                    </option>
                ))}
            </select>
        </div>
    );
}
