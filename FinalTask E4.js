// Task 1

const ownProperty = {
    city: "Perm",
    age: "301"
}

for (let key in ownProperty) {
    if (ownProperty.hasOwnProperty(key)) {
        console.log(key);
    }
}

// Task 2
let f = {
    message: "Hello!"
}

const twoTypeFunc = (str, f) => {
    console.log(str in f);
};

twoTypeFunc('message', f);

// Task 3

function empty() {
    return Object = {};
}

console.log(empty());

// Task 4

function Device(){
    this.pluggedIn = function () {
        return this._isPluggedIn;
    };
};

function Fridge(name, brand, capacity, color, nofrost, power){
    this.name = name,
    this.brand = brand,
    this.capacity = capacity,
    this.color = color,
    this.nofrost = nofrost,
    this.power = power,
    this._isPluggedIn = false; // Добавляем свойство _isPluggedIn и инициализируем его значением false
};

function Kettle(name, brand, capacity, color, material, power){
    this.name = name,
    this.brand = brand,
    this.capacity = capacity,
    this.color = color,
    this.material = material,
    this.power = power,
    this._isPluggedIn = false; // Добавляем свойство _isPluggedIn и инициализируем его значением false
};

Fridge.prototype = new Device()
Kettle.prototype = new Device()

const fridge = new Fridge('Fridge', 'Indesit', 250, 'white', true, 590)
const kettle = new Kettle('Kettle', 'Bork', 1.5, 'black', 'metal&glass', 2400)

console.log(fridge)
console.log(kettle)

function sumPowerAllDevices(...devices) {
    let sumPower = 0;

    devices.forEach(device => {
        if (device.pluggedIn()) {
            sumPower += device.power;
        }
    });

    return sumPower;
}

fridge.pluggedIn(true); // Устанавливаем значение _isPluggedIn на true для холодильника
kettle.pluggedIn(true); // Устанавливаем значение _isPluggedIn на true для чайника

const sumPower = sumPowerAllDevices(fridge, kettle);
console.log(`Sum power all devices is ${sumPower} w`);
