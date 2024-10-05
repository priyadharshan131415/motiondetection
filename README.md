
# Motion Detection with AI using TensorFlow.js and COCO-SSD

This project demonstrates motion detection and object recognition in real-time using a webcam feed. The project uses the [TensorFlow.js](https://www.tensorflow.org/js) library along with the [COCO-SSD model](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) for detecting objects from the webcam feed in real-time.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Real-time Webcam Feed**: The project uses the device's webcam to capture live video.
- **Motion Detection**: The captured video is analyzed for motion detection (pending further implementation).
- **Object Detection**: The COCO-SSD model detects objects in real-time from the webcam feed and labels them.
  
## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/motion-detection-ai.git
    ```

2. Navigate to the project directory:
    ```bash
    cd motion-detection-ai
    ```

3. Open `index.html` in your browser. No additional server setup is required as TensorFlow.js and the COCO-SSD model are served from CDNs.

## Usage
Once you open the `index.html` file in your browser, allow the page to access your webcam. The video feed will begin, and real-time object detection will be displayed on the screen.

The `motionDetection.js` file is responsible for handling:
- Initializing the webcam feed.
- Running the COCO-SSD object detection model.
- Displaying bounding boxes and labels for detected objects.

Currently, motion detection is being planned but is not implemented yet.

## Project Structure
```
motion-detection-ai/
│
├── index.html         # Main HTML file
├── motionDetection.js # JavaScript for webcam, TensorFlow.js, and object detection
├── README.md          # This README file
└── assets/            # Any additional assets like images, stylesheets
```

## Technologies Used
- **TensorFlow.js**: A JavaScript library for building and training machine learning models directly in the browser.
- **COCO-SSD Model**: Pretrained object detection model that can detect 90 types of common objects.
- **HTML5 Canvas**: Used to draw motion and object detection boxes over the video stream.

## Contributing
Contributions are welcome! If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
