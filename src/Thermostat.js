'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
  };

  getTemperature() {
    return this.temperature;
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature() {
    if (this.powerSavingMode) {
      return this.temperature === this.MAX_TEMP_PSM_ON;
    } else {
      return this.temperature === this.MAX_TEMP_PSM_OFF;
    }
  }

  turnUp() {
    if (this.isMaximumTemperature()) {
      return
    } else {
      this.temperature++
    };
  };

  turnDown() {
    if (this.isMinimumTemperature()) {
      return
    } else {
      this.temperature--
    }
  };

  togglePowerSavingMode() {
    if (this.powerSavingMode) {
      this.powerSavingMode = false
    } else {
      this.powerSavingMode = true
    };
  };

  reset() {
    this.temperature = 20
  };

  usage() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };
  };
};
