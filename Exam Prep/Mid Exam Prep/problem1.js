function solve(input) {
    let days = Number(input.shift());
    let player = Number(input.shift());
    let energy = Number(input.shift());
    let waterPerDayPerPerson = Number(input.shift());
    let foodPerdayPerPerson = Number(input.shift());
    let totalWater = waterPerDayPerPerson * days * player;
    let totalFood = foodPerdayPerPerson * days * player;

    for (let index = 1; index <= days; index++) {
        let currDayEnergyLoss = Number(input.shift());

        energy -= currDayEnergyLoss;
        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            break;
        }

        if (index % 2 == 0) {

            energy += energy * 0.05;
            totalWater -= totalWater * 0.30;
        }
        if (index % 3 == 0) {

            totalFood -= totalFood / player;
            energy += energy * 0.10;
        }
    }
    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
}
solve((["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]))
solve((["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"]))