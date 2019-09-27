import uuid from 'uuid/v4';

const INITIAL_STATE = {
        data: [
            {
                id: uuid(),
                name: 'Lucas',
                job: 'Developer'
            },
            {
                id: uuid(),
                name: 'Rogerio',
                job: 'Administrator'
            }
        ],
}


export default function users(state = INITIAL_STATE, { type, payload }){
    switch (type) {
        case 'ADD_USER':
            return { data: [ ...state.data, payload ]}
        default:
            return state;
    }
}