const ebookConverter = require("node-ebook-converter");
const fs = require("fs");
const path = require("path");
const { exit } = require("process");

const PDF_FOLDER_URL = "./convert/";
const CONVERT_FOLDER_URL = "./converted/";

ebookConverter.setPoolSize(4);

fs.readdir(PDF_FOLDER_URL, async (err, files) => {
  if (err == true) {
    exit(0);
  }

  console.log(files);
  for (const file of files) {
    console.log(file);

    let filename = path.parse(`${PDF_FOLDER_URL}/${file}`).name;

    ebookConverter
      .convert({
        input: `${PDF_FOLDER_URL}/${file}`,
        output: `${CONVERT_FOLDER_URL}/${filename}.mobi`,
        delete: false,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }
});
