import {useReducer} from 'react'
import {initialState} from '../App'

export const reducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                },
                additionalPrice: action.payload.price + state.additionalPrice,
                additionalFeatures: state.additionalFeatures.filter(feature => { //try .map
                    return (feature !== action.payload )
                })
            }
            
        case REMOVE_FEATURE:
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    feature: state.car.features.filter(feature => {
                        return (feature!== action.payload.id)
                    })
                }
            }
            additionalFeatures: [
                ...state.additionalFeatures,
                action.payload
            ]
        }
        default: return state
    }
}

//export default reducer