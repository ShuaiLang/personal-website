export const FETCH_VIDEOS = 'fetch_videos';

const YT_URL = 'https://www.googleapis.com/youtube/v3/videos';
const YT_API_KEY = 'AIzaSyBEKLLlbdHpLlWIYucJmXbuGpJvoskFpuA';
const video_ids = ['CasvAGTXWYQ','soCWqSf7Y7Q','-sh-0WUDAk8'];

export async function getVideos() {
	try {
		var request = [];

		await asyncForEach(video_ids, async(id) => {
			var url = `${YT_URL}?part=snippet&id=${id}&key=${YT_API_KEY}`;
			var video = await (await fetch(url)).json();
			request.push(video.items[0]);
			// console.log('video: ', video);
			
		});
		// console.log('request', request);
		return {
			type: FETCH_VIDEOS,
			payload: request
		}
	}
	catch (e) {
		console.log('getVideos error: ', e);
	}
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}
