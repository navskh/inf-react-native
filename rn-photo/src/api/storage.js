import { getAuth } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

export const uploadPhoto = async (uri) => {
    if (uri.startsWith('https')) {
        return uri;
    }

    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            console.log(e);
            reject(new Error('사진 업로드에 실패하였습니다.'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
    });

    const filename = uri.split('/').pop();
    const storageref = ref(getStorage(), `/${getAuth().currentUser.uid}/${filename}`);
    await uploadBytes(storageref, blob);

    blob.close();

    return await getDownloadURL(storageref);
};
