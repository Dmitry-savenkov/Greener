// Lib
import { handleActions } from 'redux-actions';

// Actions
import { UserDataLoaded } from '../actions/user';

const initialState = {
  userName: 'Helena',
  userLastName: 'Andres',
  location: 'Europe',
  email: 'helenaGomes@mail.com',
  avatar: require('../../assets/images/avatar.png'),
  budget: 535,
  monthlyCap: 321,
  notifications: true,
  newsletter: false,
};

export default handleActions(
  {
    [UserDataLoaded]: (state: any, { payload }: any) => ({
      ...state,
    }),
  },
  initialState,
);
