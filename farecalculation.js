const vehicles = ["Auto", "Bike", "Premium Sedan", "Sedan", "Small", "XL"];
const price_factors = [2.5, 1.75, 4.5, 4, 3.75, 7];

function fareCalculator(type, distance, time) {
    var current_vehicle_id = vehicles.indexOf(type);
    var price_factor = price_factors[current_vehicle_id];

    var fare = price_factor * (distance + time);
    return fare;
}

console.log(fareCalculator("Auto", 8.6, 28));