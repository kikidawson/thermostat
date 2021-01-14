
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


function updateTemperature() {
  $('#temp').text(thermostat.temperature);
}

})