// Example function: resolves or rejects randomly
const prom = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("✅ Success from server")
        : reject("❌ Server Error")
    }, 1000);
  });
};

const retry = (fn, retries) => {
  return fn().then(
    (res) => res, // success: resolve immediately
    (err) => {
      if (retries > 1) {
        console.log(err + " ,Retrying...");
        return retry(fn, retries - 1); // retry
      }
      return Promise.reject(err); // no retries left → reject
    }
  );
};

retry(prom, 3)
  .then((res) => console.log("Resolved:", res))
  .catch((err) => console.log("Rejected:", err));
