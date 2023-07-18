import { storage } from '@/appwrite';

export const getImageURL = async (image: Image) => {
    const URL = storage.getFilePreview(image.bucketId, image.fileId);
    return URL;
};
