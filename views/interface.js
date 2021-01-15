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

})
