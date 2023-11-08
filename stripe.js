const functions = require('firebase-functions');
const stripe = require('stripe')('sk_test_51O9U5MHPogVL1320snpvzVsLmWSudedoRN3stAutWCkAxyyd8dPAmnNPFHmUKhC2EioHtHtXLyAS6pML8i4uZrkd0008MG0eA0');

exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'T-shirt',
                },
                unit_amount: 2000,
            },
            quantity: 1,
        }],
        mode: 'payment',
        ui_mode: 'embedded',
        return_url: `https://your-firebase-app.web.app/checkout/return?session_id={CHECKOUT_SESSION_ID}`
    });

    res.send({ clientSecret: session.client_secret });
});
