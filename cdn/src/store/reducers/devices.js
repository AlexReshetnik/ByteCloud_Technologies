


export  let devicesDefaultState = {

    devicesPosition: [{
        Phone: {
            top: 245,
            left: 794
        },
        Laptop: {
            top: 174,
            left: 880
        },
        Computer: {
            top: 253,
            left: 922
        }
    }, {
        Phone: {
            top: 270,
            left: 1171
        },
        Laptop: {
            top: 331,
            left: 1108
        },
        Computer: {
            top: 317,
            left: 1211
        }
    },{
        Phone: {
            top: 645,
            left: 1356
        },
        Laptop: {
            top: 583,
            left: 1327
        },
        Computer: {
            top: 590,
            left: 1269
        }
    },{
        Phone: {
            top: 253,
            left: 228
        },
        Laptop: {
            top: 233,
            left: 316
        },
        Computer: {
            top: 299,
            left: 285
        }
    },{
        Phone: {
            top: 625,
            left: 439
        },
        Laptop: {
            top: 543,
            left: 474
        },
        Computer: {
            top: 485,
            left: 421
        }
    }]
}


export const devices = (state = devicesDefaultState, action) => {
    switch (action.type) {

    
        default:
            return state
    }
}