const fs = require('fs');
const path = require('path');

let content = fs.readFileSync(path.join(__dirname, 'index-original.html'), 'utf-8');
const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : content;

bodyContent = bodyContent.replace(/class=/g, 'className=');
bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
bodyContent = bodyContent.replace(/style="([^"]*)"/g, '');

const voidTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
voidTags.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
    bodyContent = bodyContent.replace(regex, `<${tag}$1 />`);
});

bodyContent = bodyContent.replace(/stroke-width=/g, 'strokeWidth=');
bodyContent = bodyContent.replace(/stroke-linecap=/g, 'strokeLinecap=');
bodyContent = bodyContent.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
bodyContent = bodyContent.replace(/fill-rule=/g, 'fillRule=');
bodyContent = bodyContent.replace(/clip-rule=/g, 'clipRule=');
bodyContent = bodyContent.replace(/viewBox=/g, 'viewBox=');
bodyContent = bodyContent.replace(/viewbox=/g, 'viewBox=');
bodyContent = bodyContent.replace(/xmlns:xlink=/g, 'xmlnsXlink='); 

const jsxContent = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst Home = () => {\n  return (\n    <>\n${bodyContent}\n    </>\n  );\n};\n\nexport default Home;\n`;

fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'Home.jsx'), jsxContent);
console.log(`Converted index-original.html to src/pages/Home.jsx`);
