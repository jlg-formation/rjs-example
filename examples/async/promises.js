const fs = require("node:fs");

const readdir = (...args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    fs.readdir(...args, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

const readFile = (...args) => {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    fs.readFile(...args, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

readdir(".")
  .then((files) => {
    console.log("files: ", files);
    return readFile(files[0], { encoding: "utf-8" });
  })
  .then((content) => {
    console.log("content: ", content);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
