import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';

import { setProfileImage, getProfileImage } from '../services/images';

const filesType = ['image/png', 'image/jpg', 'image/jpeg'];
const MAX_FILE_SIZE = 1000;

export default function useProfileImage(filename = null) {
  const [img, setImg] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (filename) {
      fetchImage(filename).then(setImg);
    }
  }, [filename]);

  const uploadImage = async (userId, file = {}) => {
    try {
      const isLessThan1MG = (size) => size * 0.001 < MAX_FILE_SIZE;

      if (!filesType.includes(file.type) && !isLessThan1MG(file.size))
        throw new TypeError('Check image and try again');

      const formData = new FormData();

      formData.append('avatar', file);

      const { data, status } = await setProfileImage(userId, formData);
      toast.success('user profile changed successfully');

      if (status === 200) return data?.data?.urlImg;
    } catch (error) {
      let message;
      if (error instanceof TypeError) {
        message = error.message;
      } else {
        message = error.response?.data.error.message;
      }
      console.error(error?.response);
      toast.error(message);
      return '';
    }
  };

  const fetchImage = async (code) => {
    const response = await getProfileImage(code);
    const blob = new Blob([response.data]);
    const objectURL = URL.createObjectURL(blob);
    return objectURL;
  };

  return { uploadImage, img };
}
