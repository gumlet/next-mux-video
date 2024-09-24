import Video from 'next-video';
// import awesomeVideo from 'https://play-v2.gumlet.io/embed/6685517070a16ee4eb1f321c';
 
export default function Home() {
  return <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />;
}