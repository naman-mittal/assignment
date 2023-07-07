import moment from 'moment';
import RNFS from 'react-native-fs';
import {dirPicutures} from '../constants/paths';

export const saveImage = async (imagePath: string) => {
  console.log('path', RNFS.ExternalStorageDirectoryPath);
  try {
    // set new image name and filepath
    const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.jpg`;
    const newFilepath = `${dirPicutures}/${newImageName}`;
    // move and save image to new filepath
    const imageMoved = await moveAttachment(imagePath, newFilepath);
    console.log('image moved', imageMoved);
    return newFilepath;
  } catch (error) {
    console.log(error);
  }
};

const moveAttachment = async (filePath: string, newFilepath: string) => {
  return new Promise((resolve, reject) => {
    RNFS.mkdir(dirPicutures)
      .then(() => {
        RNFS.moveFile(filePath, newFilepath)
          .then(() => {
            console.log('FILE MOVED', filePath, newFilepath);
            resolve(true);
          })
          .catch(error => {
            console.log('moveFile error', error);
            reject(error);
          });
      })
      .catch(err => {
        console.log('mkdir error', err);
        reject(err);
      });
  });
};

export const getAllImages = async () => {
  try {
    const files = await RNFS.readDir(dirPicutures);
    return files;
  } catch (err) {
    console.log('error in getting images', err);
    return [];
  }
};

export const deleteImage = async (imagePath: string) => {
  try {
    await RNFS.unlink(imagePath);
  } catch (err) {
    console.log(err);
  }
};
