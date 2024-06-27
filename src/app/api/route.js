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
    const response = await checkoutApi.createPaymentLink({
      idempotencyKey: new Date().getTime().toString(),
      quickPay: {
        name: cartItems,
        priceMoney: {
          amount: totalCost * 100,
          currency: 'USD'
        },
        locationId: process.env.SQUARE_LOCATION_ID
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