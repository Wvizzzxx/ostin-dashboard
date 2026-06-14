const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ICON_DIR = path.join(__dirname, '..', 'icon');
const CSS_OUTPUT = path.join(__dirname, '..', 'css', 'icons.css');

// SVG to URL-encoded string (safe for CSS)
function svgToUrl(svgContent) {
  // Remove xml declaration and newlines
  let cleaned = svgContent
    .replace(/<\?xml[^>]*\?>/i, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim();
  
  // Replace stroke colors with currentColor
  cleaned = cleaned.replace(/stroke="#[0-9a-fA-F]{6}"/gi, 'stroke="currentColor"');
  cleaned = cleaned.replace(/stroke="current"([^)]*)"?/gi, '');
  
  // URL encode
  const encoded = encodeURIComponent(cleaned)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
  
  return `data:image/svg+xml,${encoded}`;
}

function generate() {
  const files = fs.readdirSync(ICON_DIR)
    .filter(f => f.endsWith('.svg'))
    .sort();

  let css = `/* ============================================
   IMPULSE.GURU UI KIT — Icons
   ============================================
   
   Использование:
   <span class="ig-icon ig-icon--activity"></span>
   
   Изменение цвета:
   <span class="ig-icon ig-icon--activity" style="background-color: #ff0000;"></span>
   
   Размеры (по умолчанию 24x24):
   .ig-icon--sm  (16px)
   .ig-icon--md  (24px) - по умолчанию
   .ig-icon--lg  (32px)
   .ig-icon--xl  (48px)
   ============================================ */

/* === Base Icon Style === */
.ig-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: currentColor;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
  vertical-align: middle;
}

/* === Icon Sizes === */
.ig-icon--sm {
  width: 16px;
  height: 16px;
}

.ig-icon--md {
  width: 24px;
  height: 24px;
}

.ig-icon--lg {
  width: 32px;
  height: 32px;
}

.ig-icon--xl {
  width: 48px;
  height: 48px;
}

/* === Color modifiers === */
.ig-icon--primary { background-color: var(--ig-primary); }
.ig-icon--bright { background-color: var(--ig-primary-bright); }
.ig-icon--light { background-color: var(--ig-primary-light); }
.ig-icon--dark { background-color: var(--ig-text-dark); }
.ig-icon--white { background-color: #ffffff; }
.ig-icon--accent { background-color: var(--ig-accent-red); }

/* === Individual Icons === */

`;

  files.forEach(file => {
    const svgPath = path.join(ICON_DIR, file);
    const svgContent = fs.readFileSync(svgPath, 'utf-8');
    const name = file.replace('.svg', '');
    
    // Convert to URL-encoded SVG with currentColor
    const url = svgToUrl(svgContent);
    
    css += `.ig-icon--${name} {\n`;
    css += `  mask-image: url("${url}");\n`;
    css += `  -webkit-mask-image: url("${url}");\n`;
    css += `}\n\n`;
  });

  fs.writeFileSync(CSS_OUTPUT, css, 'utf-8');
  console.log(`✓ Generated ${files.length} icons → css/icons.css`);
}

generate();