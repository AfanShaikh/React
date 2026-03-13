import * as types from "./Action"


const initialVal = {
    musicRecords: [],
    isLoading: false,
    isError: false,
}

export const reducer = (oldstate = initialVal, {type,payload}) => {
    switch(type){
        case types.GET_MUSIC_REQUEST:
            return {
                ...oldstate,
                isLoading: true
            }

        case types.GET_MUSIC_SUCCESS:
            return {
                ...oldstate,
                isLoading: false,
                musicRecords: payload
            }

        case types.GET_MUSIC_FAILURE:
            return {
                ...oldstate,
                isLoading: false,
                isError: {msg: true, remark: payload}
            }

        default:
            return oldstate;
    };
};