const fs = require('fs-extra');
const path = require('path');
const sanitize = require('sanitize-filename');
const folderPath = path.join(__dirname, '\\server\\models');
const destPath = path.join(__dirname, '\\server\\controllers')
const modelTemplate = fs.readFileSync("./controllerTemplate.js", "utf8")

const ControllerMaker = {
  controllerMaker(testFolder = folderPath) {
    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        fs.readFile(path.join(folderPath, file), 'utf8', function (err, data) {
          if (err) {
            return console.log(err);
          }

          let regex = new RegExp('tableName = \'(.*)\'');
          let tableName = data.match(regex)[1];
          let controllerTemplate = modelTemplate;
          controllerTemplate = controllerTemplate.replace(/Model/g, tableName);
          console.log(controllerTemplate);
          fs.createFileSync(path.join(destPath, file.replace(/.js/, '') + 'Controller.js'));
          fs.writeFileSync(path.join(destPath, file.replace(/.js/, '') + 'Controller.js'), controllerTemplate);
        })

      });
    })
  }
}

module.exports = ControllerMaker