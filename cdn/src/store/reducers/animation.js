
const NONE = "NONE" //НЕМАЄ
const RED_ANIMATION = "RED_ANIMATION" //ПОЯВЛЯЮСЯ ЧЕРВОНІ ЛІНІЇ
//АНІМАЦІЯ НА ЧЕРВОНИХ ЛІНІЯХ
// ПОКАЗУЄТЬСЯ ЧАС НАД ДЕВАЙСАМИ
//ЧЕРВОНІ ПРОПАДАЮТЬ ПОЯВЛЯЮТЬСЯ СИНІ
//ЗАПУСКАЄТЬСЯ НА СИНІХ АНІМАЦІЯ
//ПОКАЗУЄТЬСЯ ЧАС НАД ДЕВАЙСАМИ
//ПО КЛІКУ ПОЯВЛЯЄТСЬЯ ТАБЛИЧКА
const STOP_RED_ANIMATION = "STOP_RED_ANIMATION"
const BLUE_ANIMATION = "BLUE_ANIMATION"
const STOP_BLUE_ANIMATION = "STOP_BLUE_ANIMATION"


let defaultState = {
    animationDuration: 5000,
    stage: NONE
}

export const animation = (state = defaultState, action) => {
    switch (action.type) {
        case NONE:
            return { ...state, stage: NONE }

        case RED_ANIMATION: {
            let svg = document.querySelector('#svg')
            svg.classList.remove('blue_animation')
            svg.classList.add("red_animation")
            return { ...state, stage: RED_ANIMATION }
        }

        case STOP_RED_ANIMATION: {
            return { ...state, stage: STOP_RED_ANIMATION }
        }


        case BLUE_ANIMATION: {

            let svg = document.querySelector('#svg')
            svg.classList.remove('red_animation')
            svg.classList.add("blue_animation")
            return { ...state, stage: BLUE_ANIMATION }
        }

        case STOP_BLUE_ANIMATION: {
            return { ...state, stage: STOP_BLUE_ANIMATION }
        }

     
        default:
            return state
    }
}