let data = {
    Backblaze: {
        name: "backblaze",
        minimum_payment: 7,
        price_Storage: 0.005,
        price_Transfer: 0.01,
        color: "red",
    },
    Bunny: {
        name: "bunny",
        maximum_payment: 10,
        price_Storage: {
            HDD: 0.01,
            SSD: 0.02
        },
        price_Transfer: 0.01,
        color: "orange"
    },
    Scaleway: {
        name: "scaleway",
        price_Storage: {
            Multi: {
                free: 75,
                after: 0.06
            },
            Single: {
                free: 75,
                after: 0.03
            },
        },
        price_Transfer: {
            free: 75,
            after: 0.02
        },
        color: "violet"
    },
    Vultr: {
        name: "vultr",
        minimum_payment: 5,
        price_Storage: 0.01,
        price_Transfer: 0.01,
        color: "blue"
    }
}

let storage = document.querySelector('#Storage').addEventListener('input', recalculation)
let transfer = document.querySelector('#Transfer').addEventListener('input', recalculation)
let storage_val = 0
let transfer_val = 0
let bank = {
    cache: {},
    querySelector(target) {
        if (!bank.cache[target]) {
            bank.cache[target] = document.querySelector(target)
        }
        return bank.cache[target]
    }
}
recalculation()
function recalculation(e) {
    if (e && e.target.id == "Storage") {
        storage_val = e.target.value
        bank.querySelector("#Storage").nextElementSibling.textContent = `Storage : ${storage_val}`
    }
    if (e && e.target.id == "Transfer") {
        transfer_val = e.target.value
        bank.querySelector("#Transfer").nextElementSibling.textContent = `Transfer : ${transfer_val}`
    }
    let cheapest = { prise:Infinity, name: "" }
    for (const key in data) {
        let { name, minimum_payment, maximum_payment, price_Storage, price_Transfer } = data[key]

        let current_price = 0

        if (price_Storage.__proto__.constructor.name !== "Object") {
            current_price += price_Storage * storage_val
        } else {
            for (const key in price_Storage) {
                bank.querySelector(`#${key}`).addEventListener("change", recalculation)
                if (price_Storage[key].__proto__.constructor.name === "Object") {

                    if (bank.querySelector(`#${key}`).checked &&
                        storage_val > price_Storage[key].free)
                        current_price += price_Storage[key].after * (storage_val - price_Storage[key].free)

                } else {
                    if (bank.querySelector(`#${key}`).checked)
                        current_price += price_Storage[key] * storage_val
                }
            }
        }

        if (price_Transfer.__proto__.constructor.name !== "Object") {
            current_price += price_Transfer * transfer_val
        } else {
            if (transfer_val > price_Transfer.free)
                current_price += price_Transfer.after * (transfer_val - price_Transfer.free)
        }

        if (minimum_payment)
            current_price = current_price < minimum_payment ? minimum_payment : current_price

        if (maximum_payment) {
            current_price = current_price > maximum_payment ? maximum_payment : current_price
        }
        console.log(cheapest.prise+"--------"+current_price);
        if (cheapest.prise > current_price) {
            cheapest.key = key
            cheapest.name = name
          //  console.log(cheapest.prise+"--------"+current_price);
            cheapest.prise = current_price
        }
       
        let item = bank.querySelector(`#${name}`)
        item.style.width = (current_price*4).toFixed(2) + "px"
        item.querySelector(".price").innerText = current_price.toFixed(2) + "$"
        item.style.backgroundColor ="rgb(0, 128, 255)";
    }
    console.log(cheapest.name);
    document.querySelector(`#${cheapest.name}`).style.backgroundColor = data[cheapest.key].color;
}