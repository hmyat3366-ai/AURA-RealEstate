const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/User/Desktop/AURA/aura-web/src/pages';
const updates = {
  'BrooklynExplorer.jsx': [1, 3, 4],
  'MiamiExplorer.jsx': [6, 7, 8],
  'AlaskaExplorer.jsx': [9, 10, 11],
  'LosAngelesExplorer.jsx': [13, 14, 15],
  'CaliforniaExplorer.jsx': [17, 18, 19],
  'TexasExplorer.jsx': [21, 22, 23]
};

Object.keys(updates).forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    console.log('File not found: ' + file);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let ids = updates[file];
  let counter = 0;
  
  content = content.replace(/to="\/properties"(.*?View Listings)/g, (match, p1) => {
    if (counter < ids.length) {
      const newStr = 'to="/properties/' + ids[counter] + '"' + p1;
      counter++;
      return newStr;
    }
    return match;
  });
  
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + file);
});
