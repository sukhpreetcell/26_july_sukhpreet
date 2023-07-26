$(document).ready(function() {
    $('#convert').click(function() {
      var btc = $('#btc').val();
  
      $.ajax({
        url: 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
        success: function(data) {
          var rate = JSON.parse(data).bpi.USD.rate_float;
          var usd = btc * rate;
          $('#result').text(btc + ' Bitcoin equals ' + usd + ' USD');
        }
      });
    });
  });
