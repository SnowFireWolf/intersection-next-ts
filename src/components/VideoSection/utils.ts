import request from '@/utils/request';



const timestamp = () => {
  return new Date().getTime();
}

const getVideoURL = async () => {
  try {
    const response = await request('/api/video');
    // console.log('response', response);
    if (response.status === 200) {
      const data = response.data;
      // console.log('data', data);
      return data.src;
    } else {
      console.error('get video failed');
    }
  } catch (error) {
    console.error('[request video error] ', error);
    throw error;
  }
}

const getVideoAndReturnBlob = async (videoSrc: string) => {
  try {
    const videoResponse = await fetch(videoSrc, {
      mode: 'cors',
      method: 'GET'
    });

    const videoBlob = await videoResponse.blob();

    return videoBlob;
  } catch (error) {
    console.error('fetch video error: ', error)
    throw error;
  }
};



export {
  timestamp,
  getVideoURL,
  getVideoAndReturnBlob,
}
