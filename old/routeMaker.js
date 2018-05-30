const fs = require('fs-extra');
const path = require('path');
const sanitize = require('sanitize-filename');
const folderPath = path.join(__dirname, '\\server\\models');
const destPath = path.join(__dirname, '\\config\\routes')
const routeTemplate = fs.readFileSync("./routesTemplate.js", "utf8")

const RouteMaker = {
  routeMaker(testFolder = folderPath) {
    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        fs.readFile(path.join(folderPath, file), 'utf8', function (err, data) {
          if (err) {
            return console.log(err);
          }

          let regex = new RegExp('tableName = \'(.*)\'');
          let tableName = data.match(regex)[1];
          let thisRouterTemplate = routeTemplate;
          thisRouterTemplate = thisRouterTemplate.replace(/Model/g, tableName);

          fs.createFileSync(path.join(destPath, file.replace(/.js/, '') + 'Routes.js'));
          fs.writeFileSync(path.join(destPath, file.replace(/.js/, '') + 'Routes.js'), thisRouterTemplate);
        })

      });
    })
  }
}

module.exports = RouteMaker