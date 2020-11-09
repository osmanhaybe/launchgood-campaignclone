

// 10 dollar donation button
var stripe = Stripe('pk_test_olmYBEVDEJql4loxOuC9dYH6');

var checkoutButton = document.getElementById('checkout-button-price_1HlgqvESR5ndN153hWFkfIvL');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1HlgqvESR5ndN153hWFkfIvL', quantity: 1}],
      mode: 'payment',
      successUrl: 'https://launchgood-campaignclone.netlify.app/success',
      cancelUrl: 'https://launchgood-campaignclone.netlify.app',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });


 
// 20 dollar donation button

var stripe = Stripe('pk_test_olmYBEVDEJql4loxOuC9dYH6');

var checkoutButton = document.getElementById('checkout-button-price_1HlgqwESR5ndN153NWmWAQMH');
checkoutButton.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    lineItems: [{price: 'price_1HlgqwESR5ndN153NWmWAQMH', quantity: 1}],
    mode: 'payment',
    successUrl: 'https://launchgood-campaignclone.netlify.app/success',
    cancelUrl: 'https://launchgood-campaignclone.netlify.app',
  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
});


//50 dollar donations
var stripe = Stripe('pk_test_olmYBEVDEJql4loxOuC9dYH6');

  var checkoutButton = document.getElementById('checkout-button-price_1HlgqvESR5ndN153XN63hivJ');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1HlgqvESR5ndN153XN63hivJ', quantity: 1}],
      mode: 'payment',
      successUrl: 'https://launchgood-campaignclone.netlify.app/success',
      cancelUrl: 'https://launchgood-campaignclone.netlify.app',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });



//75 dollar button

var stripe = Stripe('pk_test_olmYBEVDEJql4loxOuC9dYH6');

  var checkoutButton = document.getElementById('checkout-button-price_1HlgqvESR5ndN1531vIAwdEb');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1HlgqvESR5ndN1531vIAwdEb', quantity: 1}],
      mode: 'payment',
      successUrl: 'https://launchgood-campaignclone.netlify.app/success',
      cancelUrl: 'https://launchgood-campaignclone.netlify.app',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });


//100 dollar donation

var stripe = Stripe('pk_test_olmYBEVDEJql4loxOuC9dYH6');

  var checkoutButton = document.getElementById('checkout-button-price_1HlgqxESR5ndN153ZiXavXBr');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1HlgqxESR5ndN153ZiXavXBr', quantity: 1}],
      mode: 'payment',
      successUrl: 'https://launchgood-campaignclone.netlify.app/success',
      cancelUrl: 'https://launchgood-campaignclone.netlify.app',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });


//150 dollar donate button

var stripe = Stripe('pk_test_olmYBEVDEJql4loxOuC9dYH6');

  var checkoutButton = document.getElementById('checkout-button-price_1HlgqwESR5ndN153CWcQtoWA');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1HlgqwESR5ndN153CWcQtoWA', quantity: 1}],
      mode: 'payment',
      successUrl: 'https://launchgood-campaignclone.netlify.app/success',
      cancelUrl: 'https://launchgood-campaignclone.netlify.app',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });


// 200 dollar button

var stripe = Stripe('pk_test_olmYBEVDEJql4loxOuC9dYH6');

  var checkoutButton = document.getElementById('checkout-button-price_1HlgqwESR5ndN153tf89bRfl');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1HlgqwESR5ndN153tf89bRfl', quantity: 1}],
      mode: 'payment',
      successUrl: 'https://launchgood-campaignclone.netlify.app/success',
      cancelUrl: 'https://launchgood-campaignclone.netlify.app',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });

// 250 dollar button donation
var stripe = Stripe('pk_test_olmYBEVDEJql4loxOuC9dYH6');

  var checkoutButton = document.getElementById('checkout-button-price_1HlgqwESR5ndN153aWBACB6N');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1HlgqwESR5ndN153aWBACB6N', quantity: 1}],
      mode: 'payment',
      successUrl: 'https://launchgood-campaignclone.netlify.app/success',
      cancelUrl: 'https://launchgood-campaignclone.netlify.app',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
