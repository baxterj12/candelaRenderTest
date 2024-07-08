import { Client, Environment } from 'square';
import {NextRequest, NextResponse} from 'next/server'
import InitMiddleware from './../lib/init-middleware.js';

const cors = InitMiddleware();
console.log("entered API")

//matbe: put this in resource
const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production
});

const {checkoutApi} = client;

export async function POST(req, res) {
  //await cors(req, res);
  console.log("POST request received");
  try {
    const { cartItems, totalCost} = await req.json();
    const lineItems = cartItems.map(item => {
      let itemName = item.product.name;
      if (item.product.colors[0] !== "N/A") {
        itemName += " " + item.colorName
      }
      if (item.product.sizes[0] !== "N/A" && item.product.sizes[0] !== "One size fits all") {
        itemName += " " + item.size
      }

      return {
          name: itemName, // Constructed name based on conditions
          quantity: "1", // Assuming each item has a 'quantity' property
          basePriceMoney: {
              amount: item.product.price * 100, // Assuming each item has a 'price' property
              currency: 'USD'
          }
      };
    });
    const response = await checkoutApi.createPaymentLink({
      idempotencyKey: new Date().getTime().toString(),
      order: {
        locationId: process.env.SQUARE_LOCATION_ID,
        lineItems: lineItems
      },
      checkoutOptions: {
        askForShippingAddress: true,
        acceptedPaymentMethods: {
          applePay: true,
          googlePay: true,
          cashAppPay: true,
          afterpayClearpay: true
        }
      }
    });

    return NextResponse.json({ url: response.result.paymentLink.url }, { status: 200 });
  } catch (error) {
    console.log("in POST error")
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export default async function handler(req, res) {
  await cors(req, res);
  //return POST(req, res);
  if (req.method === 'POST') {
    return POST(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed By Choice' });
  }
}