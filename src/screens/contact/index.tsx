import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactUs = () => {
  const renderContactDetails = (iconName: string, value: string) => {
    return (
      <View style={styles.row}>
        <Icon name={iconName} color={colors.onPrimary} size={30} />
        <Text style={styles.bodyText}>{value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.thanksText}>Please let us know!</Text>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/email.png')}></Image>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Contact Details</Text>
        {renderContactDetails('phone', '+917310584332')}
        {renderContactDetails('email-outline', 'namanmittal153@gmail.com')}
      </View>
      <View style={styles.footer}>
        <Text style={styles.thanksText}>Please follow us!</Text>
        <View style={styles.icons}>
          <Icon
            style={styles.iconStyle}
            name="facebook"
            color={'#3b5998'}
            size={40}
          />
          <Icon
            style={styles.iconStyle}
            name="twitter"
            color={'#00acee'}
            size={40}
          />
          <Icon
            style={styles.iconStyle}
            name="instagram"
            color={'#962fbf'}
            size={40}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thanksText: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '600',
    marginBottom: 16,
  },
  imageStyle: {
    borderRadius: 80,
    borderWidth: 2,
    height: 150,
    width: 150,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    color: colors.onPrimary,
  },
  bodyText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    color: colors.onPrimary,
    textAlign: 'center',
    lineHeight: 25,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconStyle: {
    marginHorizontal: 20,
  },
});
export default ContactUs;
