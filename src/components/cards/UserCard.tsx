import React, {useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {User} from '../../constants/interfaces';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {images} from '../../constants/images';
import ViewShot from 'react-native-view-shot';
import {generateFileName} from '../../utils/helpers';

interface Props {
  user: User;
  onEdit: (user: User) => void;
}

const UserCard = ({user, onEdit}: Props) => {
  const ref: any = useRef();

  const image = useMemo(() => {
    return images[Math.floor(Math.random() * 10) + ''] || images[1];
  }, []);

  return (
    <ViewShot
      ref={ref}
      options={{fileName: generateFileName(user), format: 'jpg', quality: 0.9}}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.details}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.gender}>gender : {user.gender}</Text>
          <Text style={styles.gender}>status : {user.status}</Text>
        </View>

        <View style={styles.actions}>
          <Icon
            name="edit"
            size={20}
            color="cyan"
            onPress={() => onEdit(user)}
          />
        </View>
      </View>
    </ViewShot>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    minHeight: 120,
    borderRadius: 10,
    backgroundColor: colors.surface,
    margin: 5,
    elevation: 5,
    shadowColor: colors.black,
  },
  name: {
    // marginLeft: 10,
    fontSize: 15,
    fontWeight: '600',
    color: colors.onSurface,
  },
  details: {
    flex: 1,
    marginHorizontal: 5,
  },
  email: {fontSize: 14, fontWeight: '400', color: colors.onSurface},
  gender: {fontSize: 14, fontWeight: '400', color: colors.gray},
  image: {height: 80, width: 80, borderRadius: 50},
  actions: {
    flexDirection: 'row',
    padding: 10,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default UserCard;
