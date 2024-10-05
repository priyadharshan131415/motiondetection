const video = document.getElementById('webcam');
const motionCanvas = document.getElementById('motionCanvas');
const motionCtx = motionCanvas.getContext('2d');
const aiCanvas = document.getElementById('aiCanvas');
const aiCtx = aiCanvas.getContext('2d');

let previousFrameData = null;


let model;

cocoSsd.load().then((loadedModel) => {
    model = loadedModel;
    console.log('AI model loaded');
});


navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
            motionCanvas.width = video.videoWidth;
            motionCanvas.height = video.videoHeight;
            aiCanvas.width = video.videoWidth;
            aiCanvas.height = video.videoHeight;
            detectMotion();
        };
    })
    .catch((err) => {
        console.error("Error accessing webcam:", err);
    });


function detectMotion() {
    motionCtx.drawImage(video, 0, 0, motionCanvas.width, motionCanvas.height);
    const currentFrameData = motionCtx.getImageData(0, 0, motionCanvas.width, motionCanvas.height);

    if (previousFrameData) {
        const diff = getFrameDifference(currentFrameData, previousFrameData);

        if (diff > 10000) { // Threshold for detecting motion (adjust as needed)
            console.log('Motion detected');
            motionCtx.strokeStyle = 'red';
            motionCtx.lineWidth = 4;
            motionCtx.strokeRect(10, 10, motionCanvas.width - 20, motionCanvas.height - 20);
            
            
            detectObjectsWithAI();
        }
    }

    previousFrameData = currentFrameData;
    requestAnimationFrame(detectMotion);
}


function getFrameDifference(current, previous) {
    let diff = 0;
    for (let i = 0; i < current.data.length; i += 4) {
        
        const rDiff = Math.abs(current.data[i] - previous.data[i]);
        const gDiff = Math.abs(current.data[i + 1] - previous.data[i + 1]);
        const bDiff = Math.abs(current.data[i + 2] - previous.data[i + 2]);

        diff += rDiff + gDiff + bDiff;
    }
    return diff;
}


function detectObjectsWithAI() {
    model.detect(video).then((predictions) => {
        aiCtx.clearRect(0, 0, aiCanvas.width, aiCanvas.height);
        predictions.forEach((prediction) => {
            
            const [x, y, width, height] = prediction.bbox;
            aiCtx.strokeStyle = 'green';
            aiCtx.lineWidth = 4;
            aiCtx.strokeRect(x, y, width, height);

            
            aiCtx.fillStyle = 'green';
            aiCtx.font = '18px Arial';
            aiCtx.fillText(`${prediction.class} (${Math.round(prediction.score * 100)}%)`, x, y - 10);
        });
    });
}
