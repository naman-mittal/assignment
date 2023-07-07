import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ButtonProps {
  name: string;
  onPress: () => void;
  disabled?: boolean;
}

const FloatingActionButton = ({
  name,
  onPress,
  disabled = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
      <Icon name="add" size={30} color={colors.onPrimary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 30,
    elevation: 20,
    shadowColor: '#52006A',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: colors.onPrimary,
  },
});

export default FloatingActionButton;
