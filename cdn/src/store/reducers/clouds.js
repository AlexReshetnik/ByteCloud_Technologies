let defaultState = {
    isShowCloud: false,
    cloudPosition: [
        {
            active: true,
            top: 275,
            left: 220
        },
        {
            active: true,
            top: 220,
            left: 411
        },
        {
            active: true,
            top: 248,
            left: 857
        },
        {
            active: true,
            top: 455,
            left: 1230
        },
    ],
}


const SHOWCLOUD = "SHOWCLOUD"
const HIDECLOUD = "HIDECLOUD"
const HIDEALLCLOUD = "HIDEALLCLOUD"

export const clouds = (state = defaultState, action) => {
    switch (action.type) {
        case SHOWCLOUD:
            state.isShowCloud = true
            return { ...state }
        case HIDECLOUD:
            state.cloudPosition[action.idCloud] = false

            return { ...state }
        case HIDEALLCLOUD:
            state.isShowCloud = false

            return { ...state }

      

        default:
            return state
    }
}