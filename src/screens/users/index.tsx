import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import colors from '../../theme/colors';
import FullScreenLoader from '../../components/loader/FullScreenLoader';
import {useDispatch, useSelector} from 'react-redux';
import {setLoader, setModalVisible, setUsersLoader} from './slice';
import {RootState} from '../../store';
import {addNewUser, editUser, getUsers} from '../../store/actions/Thunk';
import UserCard from '../../components/cards/UserCard';
import FloatingActionButton from '../../components/button/FloatingActionButton';
import UserModal from '../../components/modal/UserModal';
import {User} from '../../constants/interfaces';

const Users = () => {
  const {users, isLoading, fetchingUsers, modalVisible} = useSelector(
    (state: RootState) => state.user,
  );

  const [mode, setMode] = useState<'edit' | 'add'>('add');
  //   const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsersLoader(true));
    dispatch(getUsers() as any);
  }, []);

  const onPressAddButton = () => {
    setMode('add');
    setUser(null);
    dispatch(setModalVisible(true));
  };

  const onCancel = () => {
    dispatch(setModalVisible(false));
  };

  const onSave = (user: User) => {
    dispatch(setLoader(true));
    mode === 'add'
      ? dispatch(addNewUser(user) as any)
      : dispatch(editUser(user) as any);
  };

  const onEdit = (selectedUser: User) => {
    setMode('edit');
    setUser(selectedUser);
    dispatch(setModalVisible(true));
  };

  return (
    <>
      <View style={styles.container}>
        {modalVisible && (
          <UserModal
            user={user}
            visible={modalVisible}
            onSave={onSave}
            onCancel={onCancel}
            isLoading={isLoading}
            title={mode === 'add' ? 'Add User' : 'Edit User'}
          />
        )}
        <FlatList
          data={users}
          renderItem={({item}) => <UserCard user={item} onEdit={onEdit} />}
          keyExtractor={item => item.id + ''}
        />
      </View>
      <FloatingActionButton name="+" onPress={onPressAddButton} />
      <FullScreenLoader
        showLoader={fetchingUsers}
        message="Fetching users..."
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.black,
  },
});

export default Users;
