export default async function fetchVideos() {
  const apiKey = 'AIzaSyCrLyAZGuuHSF8ooYXtJSpTqxZ6EqeEZmo';

  const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=tech&maxResults=5&type=video`, {next: {revalidate: 7200}});

  const data = res.json();
  return data;
}