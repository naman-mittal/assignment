import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SimpleButton from '../../components/button/SimpleButton';
import {useDispatch} from 'react-redux';
import {login} from '../../store/actions/Thunk';
import TextInput from '../../components/input/TextInput';
import {validateEmail} from '../../utils/validators';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [errors, setErrors] = useState<{email: string; password: string}>({
    email: '',
    password: '',
  });

  const validateForm = () => {
    const emailError = validateEmail(email);
    const passError = password.length > 0 ? '' : 'please enter the password';

    setErrors({email: emailError, password: passError});

    return !emailError && !passError;
  };

  const onLogin = () => {
    console.log('on press');
    if (validateForm()) {
      dispatch(login('', '') as any);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/images/target.png')}
      />
      <TextInput
        label="Email"
        placeholder="enter your email"
        value={email}
        setValue={setEmail}
        error={errors.email}
      />
      <TextInput
        label="Password"
        placeholder="enter your password"
        value={password}
        setValue={setPassword}
        error={errors.password}
      />
      <SimpleButton
        buttonStyle={styles.buttonStyle}
        name="Login"
        onPress={onLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 20,
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginBottom: 40,
    alignSelf: 'center',
  },
});

export default Login;
