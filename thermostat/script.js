let set_temperature = 22;
let current_temperature = 20;
let mode = "Heating";
let wifiConnected = true;
let fan_mode = "auto";
let senson_connection = "ok"

const btn_thermostat_state = document.getElementById("btn_thermostat_state");
const btn_wifi_state = document.getElementById("btn_wifi_state");
const btn_temp_increase = document.getElementById("btn_temp_increase");
const btn_temp_decrease = document.getElementById("btn_temp_decrease");
const thermostat_temperature_display = document.getElementById("thermostat_temperature_display");
const fan_img = document.getElementById("fan_img");

const fan_on = document.getElementById("fan-on");
const fan_auto = document.getElementById("fan-auto");

const wifi_state = document.getElementById("wifi_state");
const sensor_temperature_display = document.getElementById("sensor_temperature_display");

const debug_sensor_connection = document.getElementById("debug_sensor_connection");
const sensor_disconnected_display = document.getElementById("sensor_disconnected_display");

btn_temp_increase.addEventListener("click", () => {
    if (set_temperature <= -10 || set_temperature >= 40) {
        //showTemperatureError("Sensor failure: Temperature out of range!");
    }
    else if (mode == "Heating" || mode == "Cooling") {
        set_temperature++;
        thermostat_temperature_display.textContent = `${mode}: ${set_temperature}`;
    }
    autoRoation();
});

btn_temp_decrease.addEventListener("click", () => {
    if (set_temperature <= -10 || set_temperature >= 40) {
        //showTemperatureError("Sensor failure: Temperature out of range!");
    }
    else if (mode == "Heating" || mode == "Cooling") {
        set_temperature--;
        thermostat_temperature_display.innerHTML = `${mode}: ${set_temperature}`;
    }
    autoRoation();
});





cool.addEventListener("change", () => {
    mode = "Cooling";
    thermostat_temperature_display.innerHTML = `${mode}: ${set_temperature}`;
    startRotation();
});
heat.addEventListener("change", () => {
    if (mode == "Off") mode = "Heating ";
    else mode = "Heating";
    thermostat_temperature_display.innerHTML = `${mode}: ${set_temperature}`;
    startRotation();
});
off.addEventListener("change", () => {
    mode = "Off";
    thermostat_temperature_display.innerHTML = "--";
    if (fan_mode === "auto") {
        stopRotation();
    }
});
fan_on.addEventListener("change", () => {
    fan_mode = "on";
    startRotation();
});
fan_auto.addEventListener("change", () => {
    fan_mode = "auto";
    if (mode === "Off") {
        stopRotation();
    }
});

btn_wifi_state.addEventListener("click", () => {
    if (wifiConnected) {
        wifiConnected = false;
        wifi_state.innerHTML = "OFF";
    } else {

        wifi_state.innerHTML = "Connecting...";
    }
})


function autoRoation() {
    if (fan_mode === "auto") {
        if (mode === "Heating" && current_temperature > set_temperature) {
            stopRotation();
        }
        else if (mode === "Heating" && current_temperature <= set_temperature) {
            startRotation();
        }

    }
}

function startRotation() {
    document.getElementById('fan_image').classList.add('rotate');
}

function stopRotation() {
    document.getElementById('fan_image').classList.remove('rotate');
}




document.addEventListener("DOMContentLoaded", () => {
    sensor_temperature_display.innerHTML = current_temperature;
    thermostat_temperature_display.innerHTML = `${mode}: ${set_temperature}`;
    //debug_sensor_connection.innerHTML = `${senson_connection}`;
    startRotation();
});


