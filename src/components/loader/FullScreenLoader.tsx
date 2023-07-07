import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import colors from '../../theme/colors';

interface Props {
  showLoader: boolean;
  message?: string;
}

const FullScreenLoader = ({showLoader, message = ''}: Props) => {
  if (!showLoader) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.white} size={40} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  message: {
    marginTop: 16,
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
  },
});

export default FullScreenLoader;
