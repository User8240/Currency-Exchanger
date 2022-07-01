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
      console.log(response);
      console.log(body);

      let outputAED = body.conversion_rates.AED;
      console.log(outputAED);

      if (moneyType === "AED") {
        outputString = USInput * outputAED;

        $(".output").html(
          `<p>"${outputString}" AED</p>`
        );
      } else {
        $(".output").text(
          `That currency is not in this data base`
        );
      }
    }),
    function (error) {
      console.log(error);
      $(".showError").text(
        `There was an error processing your request; ${error}`
      );
    };
  });
});


