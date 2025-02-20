

const zoomOverlay = document.getElementById('zoomOverlay');
const zoomedImage = document.getElementById('zoomedImage');
const zoomedVideo = document.getElementById('zoomedVideo');

const postMedia = document.querySelectorAll('.post-media');


function handleZoomIn(event) {   
    if (event.target.tagName === 'IMG') {
        zoomedImage.src = event.target.src;
        zoomedImage.style.display = 'block';  
        zoomedVideo.style.display = 'none';   
    } else if (event.target.tagName === 'VIDEO') {
        zoomedVideo.src = event.target.src;
        zoomedVideo.style.display = 'block';  
        zoomedImage.style.display = 'none';   
    }   
    zoomOverlay.style.display = 'flex';
}


postMedia.forEach(media => {
    media.addEventListener('click', handleZoomIn);
});
zoomOverlay.addEventListener('click', function() {
    zoomOverlay.style.display = 'none';
    zoomedImage.style.display = 'none';  
    zoomedVideo.style.display = 'none';  
});
