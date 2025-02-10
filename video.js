<link href="https://vjs.zencdn.net/7.x/video-js.css" rel="stylesheet">
<script src="https://vjs.zencdn.net/7.x/video.js"></script>
<video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="360"
>
    <source src="http://http://185.129.1.242:80/aztv/stream.m3u8" type="application/x-mpegURL">
</video>
<script>
    var player = videojs('my-video');
</script>
