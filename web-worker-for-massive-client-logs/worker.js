onmessage = (e) => {
  const workerResult = `Result: ${e.data}`;
  console.log("Message received from main script", workerResult);
};
