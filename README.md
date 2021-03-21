# reactnative-socketio
Working demo of React Native communication with Node.js via Socket.io.
This was a trial of linking a RN app with Socket.io before adopting into another project.
## How to run
### Node.js Server:
Requires Node.js, Express.js, Socket.io, Ngrok
1. cd server
2. DEBUG=server:* npm start
3. Run Ngrok for port 3000, copy the link and paste in mobileapp's App.js `socketURL` var

### React Native App:
Requires Android Studio, React Native, Android SDK, Socket.io-client
1. cd mobileapp
2. npx react-native run-android

## Screenshots
<img src="https://github.com/HalmonLui/reactnative-socketio/blob/main/readme/app_screenshot_released.jpg" alt="Released button" width="200px"/>
<img src="https://github.com/HalmonLui/reactnative-socketio/blob/main/readme/app_screenshot_pressed.jpg" alt="Pressed button" width="200px"/>
<img src="https://github.com/HalmonLui/reactnative-socketio/blob/main/readme/node_server.PNG" alt="Node.js server logs" width="200px"/>
