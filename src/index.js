import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let USInput = $("#USInput").val();
    let moneyType = $("#moneyTypes").val(); 
    let promise = CurrencyService.getCurrency();
    promise.then(function (response) {
      let outputString = "";
      const body = JSON.parse(response);
      let outputAED = body.conversion_rates.AED;
      let outputCAD = body.conversion_rates.CAD;
      let outputEUR = body.conversion_rates.EUR;
      let outputMXN = body.conversion_rates.MXN;
      let outputCNY = body.conversion_rates.CNY;
      if (moneyType === "AED") {
        outputString = USInput * outputAED;
        $(".output").html(
          `<p>$${outputString} AED</p>`
        );
      } else if (moneyType === "CAD") {
        outputString = USInput * outputCAD;
        $(".output").html(
          `<p>$${outputString} CAD</p>`
        );
      } else if (moneyType === "EUR") {
        outputString = USInput * outputEUR;
        $(".output").html(
          `<p>$${outputString} EUR</p>`
        );
      } else if (moneyType === "MXN") {
        outputString = USInput * outputMXN;
        $(".output").html(
          `<p>$${outputString} MXN</p>`
        );
      } else if (moneyType === "CNY") {
        outputString = USInput * outputCNY;
        $(".output").html(
          `<p>$${outputString} CNY</p>`
        );
      } else {
        $(".output").text(
          `That currency is not in this data base`
        );
      }
    },
    function(error) {
      $(".showError").text(
        `There was an error processing your request; ${error}`
      );
    });
  });
});


