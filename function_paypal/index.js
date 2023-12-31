/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");

exports.createStripeCheckout = functions.https.onCall(async(data, context)=>{
    const stripe = require("stripe")(functions.config().stripe.secret_key);
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        mode:"payment",
        success_url:"",
        cancel_url:"",
        line_items:[
            {
                quantity:1,
                price_data:{
                    currency:"usd",
                    unit_amount:(100)*100,
                    product_data:{
                        name:"New camera"
                    },
                },
            },
        ],
    });


    return{
        id:session.id,
    };
});
