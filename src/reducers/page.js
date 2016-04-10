import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL,
    GET_PHOTOS_RESET
} from '../constants/Page'

const initialState = {
    year: 2016,
    photos: [],
    fetching: false,
    error: '',
    photosCame: false
}

export default function page(state = initialState, action) {

    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, fetching: true, error: '', photosCame: false }

        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, fetching: false, error: '', photosCame: true }

        case GET_PHOTOS_FAIL:
            return { ...state, error: action.payload.message, fetching: false, photosCame: false }

        case GET_PHOTOS_RESET:
            return state;

        default:
            return state;
    }

}