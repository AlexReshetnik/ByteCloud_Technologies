let data = {
    Backblaze: {
        name: "backblaze",
        minimum_payment: 7,
        price_Storage: 0.005,
        price_Transfer: 0.01
    },
    Bunny: {
        name: "bunny",
        maximum_payment: 10,
        price_Storage: {
            HDD: 0.01,
            SSD: 0.02
        },
        price_Transfer: 0.01
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
    },
    Vultr: {
        name: "vultr",
        minimum_payment: 5,
        price_Storage: 0.01,
        price_Transfer: 0.01,
    }
}
let max_width = document.querySelector(".col").clientWidth

let backblaze = document.querySelector("#backblaze")
let bunny = document.querySelector("#bunny")
let scaleway = document.querySelector("#scaleway")
let vultr = document.querySelector("#vultr")

let backblaze_price = backblaze.querySelector(".price")
let bunny_price = bunny.querySelector(".price")
let scaleway_price = scaleway.querySelector(".price")
let vultr_price = vultr.querySelector(".price")


let storage = document.querySelector('#Storage')
let transfer = document.querySelector('#Transfer')
let storage_val = 0
let transfer_val = 0

storage.addEventListener('input', recalculation)
transfer.addEventListener('input', recalculation)

//bunny
let HDD = document.querySelector("#HDD")
let SSD = document.querySelector("#SSD")
let targetBunnyStorage = "HDD"
HDD.addEventListener("change", bunnyChangeStorage)
SSD.addEventListener("change", bunnyChangeStorage)
function bunnyChangeStorage(e) {
    targetBunnyStorage = e.target.id
    recalculation()
}

//scaleway
let Multi = document.querySelector("#Multi")
let Single = document.querySelector("#Single")
let targetScalewayStorage = "Multi"
Multi.addEventListener("change", scalewayChangeStorage)
Single.addEventListener("change", scalewayChangeStorage)
function scalewayChangeStorage(e) {
    targetScalewayStorage = e.target.id
    recalculation()
}


recalculation()
function recalculation(e) {
    if (e && e.target.id == "Storage") {
        storage_val = e.target.value
        console.dir(storage.nextElementSibling.textContent=`Storage : ${storage_val}`);
    }
    if (e && e.target.id == "Transfer") {
        transfer_val = e.target.value
        console.dir( transfer.nextElementSibling.textContent=`Transfer : ${transfer_val}`);
    }

    //backblaze
    let current_backblaze_price = data.Backblaze.price_Storage * storage_val + data.Backblaze.price_Transfer * transfer_val
    current_backblaze_price = current_backblaze_price < data.Backblaze.minimum_payment ? data.Backblaze.minimum_payment : current_backblaze_price.toFixed(2)
    backblaze.style.width = current_backblaze_price + "px"
    backblaze_price.innerText = current_backblaze_price + "$"

    //bunny
    let current_bunny_price = data.Bunny.price_Storage[targetBunnyStorage] * storage_val + data.Bunny.price_Transfer * transfer_val
    current_bunny_price = current_bunny_price < data.Bunny.maximum_payment ? current_bunny_price.toFixed(2) : data.Bunny.maximum_payment
    bunny.style.width = current_bunny_price + "px"
    bunny_price.innerText = current_bunny_price + "$"

    //scaleway
    let current_scaleway_price = 0
    if (storage_val > data.Scaleway.price_Storage[targetScalewayStorage].free) {
        current_scaleway_price += data.Scaleway.price_Storage[targetScalewayStorage].after * (storage_val - data.Scaleway.price_Storage[targetScalewayStorage].free)
    }
    if (transfer_val > data.Scaleway.price_Transfer.free) {
        current_scaleway_price += data.Scaleway.price_Transfer.after * (storage_val - data.Scaleway.price_Transfer.free)
    }

    scaleway.style.width = current_scaleway_price.toFixed(2) + "px"
    scaleway_price.innerText = current_scaleway_price.toFixed(2) + "$"

    //vultr
    let current_vultr_price = data.Backblaze.price_Storage * storage_val + data.Backblaze.price_Transfer * transfer_val
    current_vultr_price = current_vultr_price < data.Backblaze.minimum_payment ? data.Backblaze.minimum_payment : current_vultr_price.toFixed(2)
    vultr.style.width = current_vultr_price + "px"
    vultr_price.innerText = current_vultr_price + "$"

      document.querySelector(`#${cheapest.name}`).style.backgroundColor = data[cheapest.key].color;
}