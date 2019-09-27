import uuid from 'uuid/v4';

const INITIAL_STATE = {
        data: [
                    {
                        id: uuid(),
                        name: 'React hooks',
                    },
                    {
                        id: uuid(),
                        name: 'React native',
                    },
                    {
                        id: uuid(),
                        name: 'ReactJS',
                    }
                 ],
}


export default function course(state = INITIAL_STATE, { type, payload }){
    switch (type) {
        case 'LIST_COURSE':
                return state.data;
        case 'ADD_COURSE':
            return { data: [ ...state.data, payload]};
        default:
            return state;
    }
}