import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Modal,
} from 'react-native';
import colors from '../../theme/colors';
import SimpleButton from '../../components/button/SimpleButton';
import * as ImagePicker from 'react-native-image-picker';
import {deleteImage, getAllImages, saveImage} from '../../utils/GalleryHelpers';
import {useEvent} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import FloatingActionButton from '../../components/button/FloatingActionButton';
import FullScreenLoader from '../../components/loader/FullScreenLoader';
import PhotoEditor from 'react-native-photo-editor';
import {request, PERMISSIONS} from 'react-native-permissions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Gallery = () => {
  const [images, SetImages] = React.useState<any>(null);
  const [loading, setLoader] = React.useState<boolean>(true);

  const [selectedImage, setSelectedImage] = React.useState<string>('');
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const renderImage = (image: any) => {
    console.log('image', image);
    return (
      <View style={styles.imageContainerStyle}>
        <TouchableOpacity
          key={image.name}
          style={{flex: 1}}
          onPress={() => {
            setSelectedImage(`file://${image.path}`);
            setModalVisible(true);
          }}>
          <FastImage
            style={styles.imageStyle}
            source={{uri: `file://${image.path}`}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const fetchImages = () => {
    getAllImages().then((res: any) => {
      console.log('res', res);
      SetImages(res);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    });
  };

  React.useEffect(() => {
    setLoader(true);
    request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(granted =>
      console.log('granted=>>>', granted),
    );
    fetchImages();
  }, []);

  const onCloseImageModal = () => {
    setModalVisible(false);
    setSelectedImage('');
  };

  const captureImage = () => {
    console.log(ImagePicker.launchCamera);
    ImagePicker.launchCamera({mediaType: 'photo'}, data => {
      console.log('callback', data);

      saveImage(data.assets?.[0].uri || '').then(newFilePath => {
        PhotoEditor.Edit({
          path: newFilePath || '',
          hiddenControls: ['crop', 'draw', 'share', 'text', 'save'],
          onDone: () => fetchImages(),
          onCancel: () => {
            deleteImage(newFilePath || '').then(() => fetchImages());
          },
        });
      });
    });
  };

  return (
    <>
      {images?.length ? (
        <View style={styles.container}>
          <Modal
            visible={modalVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={onCloseImageModal}>
            <View style={styles.modalStyle}>
              <FastImage
                style={styles.fullImageStyle}
                source={{uri: selectedImage}}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <Icon
              name="close"
              color={colors.white}
              size={30}
              onPress={onCloseImageModal}
              style={{position: 'absolute', top: '15%', right: '5%'}}
            />
          </Modal>

          {images && (
            <FlatList
              data={images}
              numColumns={3}
              renderItem={({item}) => renderImage(item)}
            />
          )}
        </View>
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            Click Add button to capture image
          </Text>
        </View>
      )}
      <FloatingActionButton name="+" onPress={captureImage} />
      <FullScreenLoader showLoader={loading} message="Fetching images..." />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '600',
  },
  title: {
    color: colors.black,
  },
  imageContainerStyle: {
    flex: 1,
    margin: 1,
    borderWidth: 1,
  },
  imageStyle: {
    height: 120,
    width: '100%',
  },
  modalStyle: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
});

export default Gallery;
