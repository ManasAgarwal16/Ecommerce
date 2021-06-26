import express from 'express';
import asyncHandler from 'express-async-handler';
import PaytmChecksum from '../PaytmChecksum.js';
import dotenv from 'dotenv';
dotenv.config();
const paymentDetails = asyncHandler(async (req, res) => {
  var paytmParams = {};

  /* initialize an array */
  (paytmParams['MID'] = process.env.PAYTM_MERCHANT_ID),
    (paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE),
    (paytmParams['ORDERID'] = 'YOUR_ORDER_ID_HERE');

  /**
   * Generate checksum by parameters we have
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
   */
  var paytmChecksum = PaytmChecksum.generateSignature(
    paytmParams,
    'YOUR_MERCHANT_KEY'
  );
  paytmChecksum
    .then(function (checksum) {
      console.log('generateSignature Returns: ' + checksum);
    })
    .catch(function (error) {
      console.log(error);
    });
});

export { paymentDetails };
