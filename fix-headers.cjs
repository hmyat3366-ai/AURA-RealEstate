const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace entire MainHeader block with <Navbar /> if it exists
  const headerRegex = /\{\/\*\s*BEGIN:\s*MainHeader\s*\*\/\}([\s\S]*?)\{\/\*\s*END:\s*MainHeader\s*\*\/\}/gi;
  content = content.replace(headerRegex, (match, p1) => {
    // If we've already injected <Navbar /> inside, we just want to replace the whole thing with <Navbar />
    return '<Navbar />';
  });

  fs.writeFileSync(filePath, content);
  console.log(`Fixed header in ${file}`);
});
