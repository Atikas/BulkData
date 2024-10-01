let temperature = 22;
let mode = "Heating";
let wifiConnected = true;

const btn_thermostat_state = document.getElementById("btn_thermostat_state");
const btn_wifi_state = document.getElementById("btn_wifi_state");
const btn_temp_increase = document.getElementById("btn_temp_increase");
const btn_temp_decrease = document.getElementById("btn_temp_decrease");
const temperatureDisplay = document.getElementById("temperature");

const wifi_state = document.getElementById("wifi_state");

btn_temp_increase.addEventListener("click", () => {
    if (temperature <= -10 || temperature >= 40) {
        //showTemperatureError("Sensor failure: Temperature out of range!");
    }
    else if (mode == "Heating" || mode == "Cooling") {
        temperature++;
        temperatureDisplay.textContent = `${mode}: ${temperature}`;
    }
});

btn_temp_decrease.addEventListener("click", () => {
    if (temperature <= -10 || temperature >= 40) {
        //showTemperatureError("Sensor failure: Temperature out of range!");
    }
    else if (mode == "Heating" || mode == "Cooling") {
        temperature--;
        temperatureDisplay.textContent = `${mode}: ${temperature}`;
    }
});

cool.addEventListener("change", () => {
    mode = "Cooling";
    temperatureDisplay.textContent = `${mode}: ${temperature}`;
});
heat.addEventListener("change", () => {
    if (mode == "Off") mode = "Heating ";
    else mode = "Heating";
    temperatureDisplay.textContent = `${mode}: ${temperature}`;
});
off.addEventListener("change", () => {
    mode = "Off";
    temperatureDisplay.textContent = "--";
});

btn_wifi_state.addEventListener("click", () => {
    if (wifiConnected) {
        wifiConnected = false;
        wifi_state.textContent = "OFF";
    } else {

        wifi_state.textContent = "Connecting...";
    }
})


