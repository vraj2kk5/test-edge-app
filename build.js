const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(distDir, 'index.html'));
fs.copyFileSync(path.join(__dirname, 'styles.css'), path.join(distDir, 'styles.css'));
fs.copyFileSync(path.join(__dirname, 'app.js'), path.join(distDir, 'app.js'));

console.log('✨ Build succeeded! Output copied to dist/ directory.');
