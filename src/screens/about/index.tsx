import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.thanksText}>Thanks for Visiting!</Text>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/user_7.jpg')}></Image>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>About App</Text>
        <Text style={styles.bodyText}>
          This is an assignment app, which includes the user module & gallery
          module. In user module you can see the list of users, add new user &
          edit a user. In gallery module, you can capture an image and apply the
          emojis to it. Hope you will enjoy it!
        </Text>
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
    // padding: 10,
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
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    alignSelf: 'center',
    color: colors.onPrimary,
  },
  bodyText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.onPrimary,
    textAlign: 'center',
    lineHeight: 25,
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

export default AboutUs;
