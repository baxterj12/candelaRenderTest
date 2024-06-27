import React from 'react';
import fs from 'fs';
import path from 'path';
import TopBar from '../../topBar.js';
import './item.css';
import Item from './item.js'

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  return products.map(product => ({
    shortName: product.shortName,
    smallLogo: `/preorder/[shortName]/smallLogo.svg`,
    candelaMissUniverse: `/candelaMissUniverse.mp4`,
    candelaLogo: `/candelaLogo.png`
  }));
}

export default function PreorderPage({ params }) {

  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);
  const product = products.find(product => product.shortName === params.shortName);
  for (let i = 0; i < product.images.length; i++) {
    product.images[i] = `../${product.images[i]}`;
  }
  return (
    <div>
      <title>Candela | Preorder</title>
      <TopBar/>
      <Item product={product}/>
    </div>
  );
}