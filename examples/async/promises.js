const fs = require("node:fs");

const promisfy =
  (func) =>
  (...args) => {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      func(...args, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  };

const readdir = promisfy(fs.readdir);
const readFile = promisfy(fs.readFile);

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
