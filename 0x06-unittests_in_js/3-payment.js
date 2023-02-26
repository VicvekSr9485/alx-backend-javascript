const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const sum = Utils.calculateNumber(Utils.SUM, totalAmount, totalShipping);
    console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
