'use client'
import React, { useState } from 'react';
import './item.css';
import Circles from './circles.js'
import SizeDrop from './sizeDrop.js'
import Button from './button.js'
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";

export default function Item({ product }) {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [closedProcess, setClosedProcess] = useState(true);
  const [closedArtist, setClosedArtist] = useState(true);
  const [closedMeasurements, setClosedMeasurements] = useState(true);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

    return (
      <div>
        <div className="preorderContainer">
          <div className="images">
            <img src={product.images[product.images.length-3]} className="image1" />
            <div className='imageCol'>
              <img src={product.images[product.images.length-2]} className="imageInCol"/>
              <img src={product.images[product.images.length-1]} className="imageInCol"/>
            </div>
          </div>
          <div className="text">
            <h1 className="name">{product.name}</h1>
            <p className="price">${product.price.toFixed(2)}</p>
            {product.colors[0]!="N/A" &&
            <Circles colors={product.colors} clickedIndex={clickedIndex} setClickedIndex={setClickedIndex}/>}
            {product.sizes[0]!="N/A" &&
            <SizeDrop sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>}
            <p className="desc">{product.desc}</p>
            <Button product={product} clickedIndex={clickedIndex} selectedSize={selectedSize}/>
            {product.status==="Pre-Order" &&
            <p className="disclaimer">Because our items are 100% handmade by artisans in 
            El Salvador, our pre-order process takes between 4-6 weeks. Once you have 
            placed your pre-order, we will updating you on the production process. This 
            will allow you take a closer look at how we make our items while getting 
            to know our brand better! </p>}
            <div className="nameAndChevron" onClick={() => setClosedProcess(!closedProcess)}>
              <p>The Process</p>
              {closedProcess ? <FaChevronRight className="chevrons"/> :
              <FaChevronDown className="chevrons"/>}
            </div>
            {!closedProcess && <p className="additionalInfo">{product.process}</p>}
            <div className="nameAndChevron" onClick={() => setClosedArtist(!closedArtist)}>
              <p>The Artist</p>
              {closedArtist ? <FaChevronRight className="chevrons"/> :
              <FaChevronDown className="chevrons"/>}
            </div>
            {!closedArtist && <p className="additionalInfo">{product.artist}</p>}
            <div className="nameAndChevron" onClick={() => setClosedMeasurements(!closedMeasurements)}>
              <p>The Measurements</p>
              {closedMeasurements ? <FaChevronRight className="chevrons"/> :
              <FaChevronDown className="chevrons"/>}
            </div>
            {!closedMeasurements && product.measurements 
                .map((measurement, index) => (
                  <div key={index}>
                    <p className='additionalInfo'>{measurement}</p>
                  </div>
              ))
            }
            <div className="preorderBuffer"/>
          </div>
        </div>
      </div>
    );
  }