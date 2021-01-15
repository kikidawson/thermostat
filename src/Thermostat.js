'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.MEDIUM_USAGE_LIMIT = 18;
    this.HIGH_USAGE_LIMIT = 25;
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

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  turnUp() {
    if (this.isMaximumTemperature()) {
      return // works as guard condition
    };
    this.temperature++
  };

  turnDown() {
    if (this.isMinimumTemperature()) {
      return // works as guard condition
    };
    this.temperature--
  };

  togglePowerSavingMode() {
    if (this.isPowerSavingModeOn()) {
      this.powerSavingMode = false
    } else {
      this.powerSavingMode = true
    };
  };

  reset() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  };

  usage() {
    if (this.temperature < this.MEDIUM_USAGE_LIMIT) {
      return "low-usage";
    } else if (this.temperature <= this.HIGH_USAGE_LIMIT) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };
  };
};
