import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../constants/interfaces';

interface UsersInitialState {
  users: Array<User>;
  fetchingUsers: boolean;
  isLoading: boolean;
  error: {error: string} | null;
  modalVisible: boolean;
}

const initialState: UsersInitialState = {
  users: [],
  fetchingUsers: false,
  isLoading: false,
  error: null,
  modalVisible: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.fetchingUsers = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.fetchingUsers = false;
    },
    addUserSuccess: (state, action: PayloadAction<User>) => {
      state.users = [...state.users, action.payload];
      state.isLoading = false;
      state.modalVisible = false;
    },
    editUserSuccess: (state, action: PayloadAction<User>) => {
      const userIndex = state.users.findIndex(user => action.payload.id);
      if (userIndex !== -1) {
        state.users[userIndex] = action.payload;
      }
      state.isLoading = false;
      state.modalVisible = false;
    },
    setUsersLoader: (state, action) => {
      state.fetchingUsers = action.payload;
    },
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
    setModalVisible: (state, action) => {
      state.modalVisible = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
  },
});

export const {
  setUsers,
  setError,
  setLoader,
  clearError,
  addUserSuccess,
  editUserSuccess,
  setUsersLoader,
  setModalVisible,
} = userSlice.actions;

export default userSlice.reducer;
