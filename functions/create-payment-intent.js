const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')('sk_test_51I87djFp5pnuKUXgGTrom34HsLSDp9b0qPjVpncQ9iFCiFX68kcCHOtkCg0bNNujCtwkkt9E1KPYGIfF1M71TNg400GLPhxUGV')
exports.handler = async function (event, context) {
  const { cart, shipping_fee, total_amount } = JSON.parse(event.body)

  const calculateOrderAmount = () => {
    return shipping_fee + total_amount
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: 'inr',
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
