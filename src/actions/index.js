export const FETCH_VIDEOS = 'fetch_videos';
export const IMG_SELECTED = 'img_selected';

// const ROOT_URL = 

export async function getVideos() {
	// try {
		var objectURL;

		console.log('fetching');		
		const request = await fetch('https://s3-us-west-1.amazonaws.com/shuai-website', {mode: 'no-cors'});
		console.log(request);
		return {
			type: FETCH_IMGS,
			payload: request
		}
	// }
	// catch (e) {
	// 	console.log('getImages error: ', e);
	// }
}

export function selectImage() {

}