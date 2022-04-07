const fs = require("fs");
const path = require("path");

const PDF_FOLDER_URL = "./convert/";
const CONVERTED_FOLDER_URL = "./converted/";

const convertedList = [];
fs.readdir(CONVERTED_FOLDER_URL, async (err, files) => {
  if (err) {
    return;
  }

  for (const file of files) {
    let filename = path.parse(`${CONVERTED_FOLDER_URL}/${file}`).name;
    convertedList.push(path.join(PDF_FOLDER_URL, filename));
  }

  if (convertedList.length >= 1) {
    for (const convertFile of convertedList) {
      fs.unlinkSync(`./${convertFile}.pdf`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      console.log("removido com success");
    }
  }
});
