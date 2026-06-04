const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Ensure imports exist
  if (!content.includes("import Navbar")) {
    content = content.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport Navbar from '../components/Navbar';\nimport Footer from '../components/Footer';");
  }

  // Remove original nav block (from {/* BEGIN: Navigation */} to {/* END: Navigation */})
  content = content.replace(/\{\/\*  BEGIN: Navigation  \*\/\}([\s\S]*?)\{\/\*  END: Navigation  \*\/\}/gi, '<Navbar />');
  
  // Also catch raw <nav> if comments were missing
  if (!content.includes('<Navbar />')) {
      content = content.replace(/<nav[\s\S]*?<\/nav>/i, '<Navbar />');
  }

  // Remove original footer block
  content = content.replace(/\{\/\*  BEGIN: Footer  \*\/\}([\s\S]*?)\{\/\*  END: Footer  \*\/\}/gi, '<Footer />');
  if (!content.includes('<Footer />')) {
      content = content.replace(/<footer[\s\S]*?<\/footer>/i, '<Footer />');
  }

  // Basic Button / Link routing mapping based on text content
  // Convert <a href="#">...</a> to <Link to="...">...</Link>
  // Convert <button ...>Text</button> to <Link to="..." className="...">Text</Link> where it implies navigation
  
  // Just converting <a> to Link globally with generic / route if we don't know it, but we can do specific replaces
  content = content.replace(/<a ([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/gi, (match, p1, p2, p3) => {
    let to = "/";
    const text = p3.toLowerCase();
    if (text.includes("property") || text.includes("listing")) to = "/properties";
    if (text.includes("agent") || text.includes("team")) to = "/agents";
    if (text.includes("service")) to = "/services";
    if (text.includes("region") || text.includes("neighborhood")) to = "/neighborhoods";
    if (text.includes("sign in") || text.includes("account")) to = "/auth";
    
    return `<Link ${p1}to="${to}"${p2}>${p3}</Link>`;
  });

  // Buttons that should be links
  content = content.replace(/<button ([^>]*)>([\s\S]*?)<\/button>/gi, (match, p1, p2) => {
    let to = null;
    const text = p2.toLowerCase();
    if (text.includes("explore listing") || text.includes("discover listing") || text.includes("view property") || text.includes("view listings")) to = "/properties";
    else if (text.includes("meet the team") || text.includes("view agents")) to = "/agents";
    else if (text.includes("let's connect")) to = "/";
    else if (text.includes("sign in") || text.includes("create account")) to = "/auth";
    else if (text.includes("discover regions") || text.includes("explore neighborhoods")) to = "/neighborhoods";
    
    if (to) {
        return `<Link to="${to}" ${p1}>${p2}</Link>`;
    }
    return match; // Keep as button if no match
  });

  // Fix missing <Link> issues if any left as <a> without href
  content = content.replace(/<a([^>]*)>(.*?)<\/a>/gi, (match, p1, p2) => {
      if(!p1.includes('href') && !p1.includes('to=')){
          return `<Link to="/" ${p1}>${p2}</Link>`;
      }
      if(p1.includes('href') && !p1.includes('href="#"')){
          // leave external links alone
          return match;
      }
      return match;
  });

  fs.writeFileSync(filePath, content);
  console.log(`Processed ${file}`);
});
