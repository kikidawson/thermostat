'use strict';

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature()


  $('#temperature-up').on('click', function() {
    thermostat.turnUp()
    updateTemperature()
  })

  $('#temperature-down').on('click', function() {
    thermostat.turnDown()
    updateTemperature()
  })

  $('#toggle-power-saving').on('click', function() {
    thermostat.togglePowerSavingMode()
    if (thermostat.isPowerSavingModeOn()) {
      $('#power-saving-mode').text("ON")
    } else {
      $('#power-saving-mode').text("OFF")
    }
  })

  $('#reset').on('click', function() {
    thermostat.reset()
    updateTemperature()
  })

  function updateTemperature() {
    $('#temp').text(thermostat.getTemperature());
    $('#temp').attr('class', thermostat.usage());
  }

  $('#location').change(function() {
    var location = $('#location').val();
    displayWeather(location)
  })

  function displayWeather(location) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location
    var token = '&appid=3014bf26bfd5415237902ed40e810f29'
    var units = '&units=metric'
    $.get(url, token, units, function(data) {
      $('#temperature-outside').text(data.main.temp);
    })
  }

})
