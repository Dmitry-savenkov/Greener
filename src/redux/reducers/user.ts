// Lib
import { handleActions } from 'redux-actions';

import { UserDataLoaded } from '../actions/user';

const initialState = {
    users: {
        loading: false
    }
};

export default handleActions(
    {
        [UserDataLoaded]: (state: any, { payload }: any) => ({
            ...state
        })
    },
    initialState
);
