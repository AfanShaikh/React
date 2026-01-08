import * as types from '../Todos/Action'

const initialValue = { todo: [ ] };


export const todoReducer = (state = initialValue,{ type, payload }) =>{
    switch ( type ){
        case types.ADDTODOS:{
            if(payload.trim() === ''){
                return state;
            } else {
                const todoValue = {
                    id: Date.now(),
                    text: payload,
                    editText: payload,
                    isEdit: false,
                    isComplete: false
                };
                return {
                    ...state,
                    todo: [...state.todo, todoValue]
                };
            }
        }

        case types.DELETETODOS:{
            return{
                ...state,
                todo: state.todo.filter((el) => el.id !== payload) ,
            };
        }


        case types.EDITTODOS: {
            return {
                ...state,
                todo: state.todo.map((el) =>
                el.id === payload
                    ? { ...el, isEdit: true }
                    : el
                ),
            };
        }

        
        case types.CONFIRMTODO: {
            return {
                ...state,
                todo: state.todo.map((el) =>
                el.id === payload
                    ? { ...el, text: el.editText, isEdit: false }
                    : el
                ),
            };
            }

        case types.UPDATETEXT: {
        return {
            ...state,
            todo: state.todo.map((el) =>
            el.id === payload.id
                ? { ...el, editText: payload.text }
                : el
            ),
        };
        }

        case types.CANCELTODO: {
            return {
                ...state,
                todo: state.todo.map((el) =>
                el.id === payload
                    ? { ...el, editText: el.text, isEdit: false }
                    : el
                ),
            };
        }



        default:
            return state;
    }
}
