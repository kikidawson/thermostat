'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('turns up the temperature', function() {
    thermostat.turnUp()

    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('turns down the temperature', function() {
    thermostat.turnDown()

    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('the minimum temperature is 10 degrees', function() {
    for (let i = 0; i < 11; i++) {
      thermostat.turnDown()
    };

    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('by default it starts with PSM on', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can turn PSM off', function() {
    thermostat.togglePowerSavingMode()
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can turn PSM back on', function() {
    thermostat.togglePowerSavingMode()
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.togglePowerSavingMode()
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('has max temp of 25 degrees if power saving mode is on', function() {
    for (let i = 0; i < 6; i++) {
      thermostat.turnUp()
    };

    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('has max temp of 32 degrees if power saving mode is off', function() {
    thermostat.togglePowerSavingMode()
    for (let i = 0; i < 14; i++) {
      thermostat.turnUp()
    };
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it('resets to 20 degrees', function() {
    thermostat.turnUp()
    thermostat.reset()
    expect(thermostat.getTemperature()).toEqual(20);
  });

  describe('shows energy usage', function() {
    it('shows low usage if below 18 degs', function() {
      for (var i = 0; i < 4; i++) {
        thermostat.turnDown()
      };
      expect(thermostat.usage()).toEqual("low-usage")
    });

    it('shows medium usage if 25 degs or below', function() {
      expect(thermostat.usage()).toEqual("medium-usage")
    });

    it('shows high usage if above 25 degs', function() {
      thermostat.powerSavingMode = false;
      for (var i = 0; i < 7; i++) {
        thermostat.turnUp()
      };
      expect(thermostat.usage()).toEqual("high-usage")
    });
  });
});
