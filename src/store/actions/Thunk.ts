import {User} from '../../constants/interfaces';
import {loginSuccess} from '../../screens/login/slice';
import {
  addUserSuccess,
  editUserSuccess,
  setError,
  setUsers,
} from '../../screens/users/slice';
import {
  addUser as addUserService,
  updateUser,
  fetchUsers,
} from '../../services/UserServices';

export const login =
  (email: string, password: string) =>
  async (dispatch: (arg0: {payload: any; type: string}) => void) => {
    dispatch(loginSuccess({}));
  };

export const getUsers =
  () => async (dispatch: (arg0: {payload: any; type: string}) => void) => {
    console.log('fetching users');
    fetchUsers()
      .then(users => {
        console.log('users', users);
        dispatch(setUsers(users));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err));
      });
  };

export const addNewUser =
  (user: User) =>
  async (dispatch: (arg0: {payload: any; type: string}) => void) => {
    console.log('adding new user');
    addUserService(user)
      .then(user => {
        console.log('added user', user);
        dispatch(addUserSuccess(user));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err));
      });
  };

export const editUser =
  (user: User) =>
  async (dispatch: (arg0: {payload: any; type: string}) => void) => {
    console.log('updating user');
    updateUser(user, user.id || 0)
      .then(user => {
        console.log('updated user', user);
        dispatch(editUserSuccess(user));
      })
      .catch(err => {
        console.log(err);
        dispatch(setError(err));
      });
  };
