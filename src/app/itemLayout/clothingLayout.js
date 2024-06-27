'use client'
import react, {useState} from 'react';
import './clothingLayout.css';
import Link from 'next/link';

export default function ClothingLayout({images, desc, name, price, shortName, status}) {
    const newhref = `/viewOrder/${shortName}`;
    return (
        <div className="itemContainer">
                <img src={images[0]} className="firstCol"/>
            <div className="secondCol">
                <img src={images[1]}/>
                <img src={images[2]}/>
            </div>
            <div className="thridCol">
                <img src={images[3]} className="thirdImg"/>
                <Link href={newhref}>
                {
                status==="Available" ? <p className='preOrderbutton'>View Item</p> : 
                <p className='preOrderbutton'>{status}</p>
                }
                </Link>
            </div>
        </div>
    );
}