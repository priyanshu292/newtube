
const GOOGLE_API_KEY = "AIzaSyDYAcRmRCgXffm_5daKhJIyPb8TPiHdmy8";

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26q%3D";