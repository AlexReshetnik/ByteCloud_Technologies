


export let serverDefaultState = {
    serverData: [
        {
            isMain: false,
            active: false,
            top: 275,
            left: 220
        },
        {
            isMain: false,
            active: false,
            top: 220,
            left: 411
        },
        {
            isMain: false,
            active: false,
            top: 248,
            left: 857
        },
        {
            isMain: false,
            active: false,
            top: 455,
            left: 1230
            
        },
    ],
}



const SETSERVER = "SETSERVER"


export const server = (state = serverDefaultState, action) => {
    switch (action.type) {
        case SETSERVER:

            if (state.serverData.find(i => i.active == true) == undefined) {
                state.serverData[action.idCloud].isMain = true
            }
            state.serverData[action.idCloud].active = true
            state.serverData = state.serverData.slice()
            return { ...state }
          
        default:
            return state
    }
}