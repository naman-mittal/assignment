import React, {useState} from 'react';
import {View, Modal, Text, StyleSheet} from 'react-native';
import {User} from '../../constants/interfaces';
import colors from '../../theme/colors';
import TextInput from '../input/TextInput';
import RadioForm from 'react-native-simple-radio-button';
import SelectDropdown from 'react-native-select-dropdown';
import SimpleButton from '../button/SimpleButton';
import FullScreenLoader from '../loader/FullScreenLoader';
import {validateEmail} from '../../utils/validators';

interface Props {
  user: User | null;
  onSave: (user: User) => void;
  onCancel: () => void;
  visible: boolean;
  title: string;
  isLoading: boolean;
}

const UserModal = ({
  user,
  visible,
  onCancel,
  title,
  onSave,
  isLoading,
}: Props) => {
  const [name, setName] = useState<string>(user?.name || '');
  const [email, setEmail] = useState<string>(user?.email || '');
  const [gender, setGender] = useState<string>(user?.gender || '');
  const [status, setStatus] = useState<string>(user?.status || '');

  const [errors, setErrors] = useState<{
    name: string;
    email: string;
    gender: string;
    status: string;
  }>({name: '', email: '', gender: '', status: ''});

  const validateForm = () => {
    const nameErr =
      name.length > 4 ? '' : 'name should be of length 5 at least';
    const emailErr = validateEmail(email);
    const genderErr = gender ? '' : 'please select the gender';
    const statusErr = status ? '' : 'please select the status';

    setErrors({
      name: nameErr,
      email: emailErr,
      gender: genderErr,
      status: statusErr,
    });

    return !nameErr && !emailErr && !genderErr && !statusErr;
  };

  const onPressSave = () => {
    const newUser = {
      id: user?.id || 0,
      name,
      email,
      gender,
      status,
    };

    console.log('user', newUser);
    if (validateForm()) {
      onSave(newUser);
    }
  };

  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
      onRequestClose={onCancel}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {title && <Text style={styles.title}>{title}</Text>}
          <TextInput
            label="Name"
            placeholder="enter your name"
            value={name}
            setValue={setName}
            error={errors.name}
          />
          <TextInput
            label="Email"
            placeholder="enter your email"
            value={email}
            setValue={setEmail}
            error={errors.email}
          />
          <Text style={styles.label}>Gender</Text>
          <SelectDropdown
            defaultValue={gender}
            dropdownStyle={styles.dropdownStyle}
            buttonStyle={styles.dropDownButton}
            buttonTextStyle={styles.dropdownText}
            data={['female', 'male']}
            onSelect={selected => setGender(selected)}
          />
          {errors.gender.length > 0 && (
            <Text style={styles.errorText}>{errors.gender}</Text>
          )}
          <Text style={[styles.label, styles.marginTop10]}>Status</Text>
          <SelectDropdown
            defaultValue={status}
            dropdownStyle={styles.dropdownStyle}
            buttonStyle={styles.dropDownButton}
            buttonTextStyle={styles.dropdownText}
            data={['active', 'inactive']}
            onSelect={selected => setStatus(selected)}
          />
          {errors.status.length > 0 && (
            <Text style={styles.errorText}>{errors.status}</Text>
          )}
          <View style={styles.actions}>
            <View style={styles.actionButton}>
              <SimpleButton
                name="Cancel"
                onPress={onCancel}
                backgroundColor={colors.gray}
              />
            </View>

            <View style={styles.actionButton}>
              <SimpleButton name="Save" onPress={onPressSave} />
            </View>
          </View>
        </View>
        <FullScreenLoader showLoader={isLoading} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
    color: colors.black,
  },
  dropDownButton: {
    borderRadius: 15,
    height: 50,
  },
  dropdownText: {
    color: colors.black,
    fontWeight: '400',
    fontSize: 14,
  },
  dropdownStyle: {borderRadius: 10},
  marginTop10: {
    marginTop: 10,
  },
  actions: {
    marginTop: 30,
    flexDirection: 'row',
  },
  actionButton: {
    flex: 1,
    margin: 5,
  },
  errorText: {
    color: colors.error,
    marginTop: 5,
    fontWeight: '500',
  },
});

export default UserModal;
