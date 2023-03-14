




let defaultState = {
    isShowMans: true,
    mans: [
        {
            countActivenMan: 0,
            positionMans: {
                top: 223,
                left: 822
            },
        }, {
            countActivenMan: 0,
            positionMans: {
                top: 295,
                left: 1156
            },
        }, {
            countActivenMan: 0,
            positionMans: {
                top: 588,
                left: 1298
            },
        }, {
            countActivenMan: 0,
            positionMans: {
                top: 251,
                left: 255
            },
        }, {
            countActivenMan: 0,
            positionMans: {
                top: 523,
                left: 441
            },
        }
    ]
}


const SETCOUNTACTIVE = "SETCOUNTACTIVE"
const HIDEMANS = "HIDEMANS"


export const mans = (state = defaultState, action) => {
    switch (action.type) {
        case SETCOUNTACTIVE:
            state.mans[action.idGroup].countActivenMan = action.countActive
            state.mans = state.mans.slice()
            return { ...state }
        case HIDEMANS:
            state.isShowMans = false
            return { ...state }


        default:
          
            return state
    }
}