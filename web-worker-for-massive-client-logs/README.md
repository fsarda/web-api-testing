#Web worker example

In this example we attempt to solve massive console logging by using a service worker.

To run this example on this repo root folder run `npm install; npm run example:webworker` and by default you'll be opening the web worker version (http://127.0.0.1:8080/./web-worker-for-massive-client-logs/). In this default page, you should be able to click and see and interactive interface pretty quick.

By accessin http://127.0.0.1:8080/./web-worker-for-massive-client-logs/index-no-web-worker.html you should experience a very slow loading interface that gets blocked. This does not happen in web worker version since we are handling logging as part of the web worker code.

Check out [example with web worker](./recording/web-worker-version.mov) and [example without web worker](./recording/no-web-worker.mov) recordings
