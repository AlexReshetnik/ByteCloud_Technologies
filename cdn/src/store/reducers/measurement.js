let defaultState = {
    isShowMeasurement: false,
    measurementPosition: [
        {
            active: false,
            top: 129,
            left: 743
        }, {
            active: false,
            top: 219,
            left: 1212
        }, {
            active: false,
            top: 511,
            left: 1364
        }, {
            active: false,
            top: 160,
            left: 208
        }, {
            active: false,
            top: 678,
            left: 393
        }
    ]
}


const SHOWMEASUREMENT = "SHOWMEASUREMENT"
const HIDEMEASUREMENT = "HIDEMEASUREMENT"
const SETACTIVEMEASUREMENT = "SETACTIVEMEASUREMENT"


export const measurement = (state = defaultState, action) => {
    switch (action.type) {
        case SHOWMEASUREMENT:
            state.isShowMeasurement = true
            return { ...state }
        case HIDEMEASUREMENT:
            state.isShowMeasurement = false

            return { ...state }
        case SETACTIVEMEASUREMENT:

            state.measurementPosition[action.idGroup].active = true
            state.measurementPosition = state.measurementPosition.slice()
          
            return { ...state }


        default:
            return state
    }
}