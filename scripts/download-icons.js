import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.dirname(__dirname);

// Icon sources with their base URLs
const ICON_SOURCES = {
  simpleicons: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons',
  devicon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons'
};

// Map of icon names to their sources and paths
const ICONS = {
  // Languages
  javascript: { url: `${ICON_SOURCES.devicon}/javascript/javascript-original.svg` },
  python: { url: `${ICON_SOURCES.devicon}/python/python-original.svg` },
  csharp: { url: `${ICON_SOURCES.devicon}/csharp/csharp-original.svg` },
  cpp: { url: `${ICON_SOURCES.devicon}/cplusplus/cplusplus-original.svg` },
  php: { url: `${ICON_SOURCES.devicon}/php/php-original.svg` },
  html5: { url: `${ICON_SOURCES.devicon}/html5/html5-original.svg` },
  css3: { url: `${ICON_SOURCES.devicon}/css3/css3-original.svg` },

  // Frameworks & Tools
  react: { url: `${ICON_SOURCES.devicon}/react/react-original.svg` },
  nextjs: { url: `${ICON_SOURCES.devicon}/nextjs/nextjs-original.svg` },
  nodejs: { url: `${ICON_SOURCES.devicon}/nodejs/nodejs-original.svg` },
  express: { url: `${ICON_SOURCES.devicon}/express/express-original.svg` },
  threejs: { url: `${ICON_SOURCES.simpleicons}/threedotjs.svg` },
  tailwind: { url: `${ICON_SOURCES.devicon}/tailwindcss/tailwindcss-original.svg` },
  bootstrap: { url: `${ICON_SOURCES.devicon}/bootstrap/bootstrap-original.svg` },
  wordpress: { url: `${ICON_SOURCES.devicon}/wordpress/wordpress-original.svg` },
  unity: { url: `${ICON_SOURCES.devicon}/unity/unity-original.svg` },

  // Management
  git: { url: `${ICON_SOURCES.devicon}/git/git-original.svg` },
  mongodb: { url: `${ICON_SOURCES.devicon}/mongodb/mongodb-original.svg` },
  mysql: { url: `${ICON_SOURCES.devicon}/mysql/mysql-original.svg` },
  postgresql: { url: `${ICON_SOURCES.devicon}/postgresql/postgresql-original.svg` },
  obsidian: { url: `${ICON_SOURCES.simpleicons}/obsidian.svg` },
  'google-workspace': { url: `${ICON_SOURCES.devicon}/google/google-original.svg` },
  office: { url: `${ICON_SOURCES.simpleicons}/microsoft-office.svg` },

  // Design
  photoshop: { url: `${ICON_SOURCES.devicon}/photoshop/photoshop-original.svg` },
  illustrator: { url: `${ICON_SOURCES.devicon}/illustrator/illustrator-plain.svg` },
  indesign: { url: `${ICON_SOURCES.devicon}/aftereffects/aftereffects-original.svg` },
  premiere: { url: `${ICON_SOURCES.devicon}/premierepro/premierepro-original.svg` },
  aftereffects: { url: `${ICON_SOURCES.devicon}/aftereffects/aftereffects-original.svg` },
  'affinity-photo': { url: `${ICON_SOURCES.simpleicons}/affinityphoto.svg` },
  'affinity-designer': { url: `${ICON_SOURCES.simpleicons}/affinitydesigner.svg` },
  'affinity-publisher': { url: `${ICON_SOURCES.simpleicons}/affinitypublisher.svg` },
  figma: { url: `${ICON_SOURCES.devicon}/figma/figma-original.svg` },
  blender: { url: `${ICON_SOURCES.devicon}/blender/blender-original.svg` },
  davinci: { url: `${ICON_SOURCES.simpleicons}/davinciresolve.svg` }
};

// Custom icons that need manual handling
const MANUAL_ICONS = [
  'enfold',
  'monday'
];

// Create icons directory if it doesn't exist
const iconDir = path.join(projectRoot, 'public', 'icons');
if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir, { recursive: true });
}

// CSS for monochrome icons
const monochromeIconsCSS = `
/* Dark icons */
.icon-threejs,
.icon-threejs path { color: #000000; fill: #000000; }
.icon-nextjs,
.icon-nextjs path { color: #000000; fill: #000000; }
.icon-express,
.icon-express path { color: #000000; fill: #000000; }

/* Colored icons */
.icon-obsidian,
.icon-obsidian path { color: #483699; fill: #483699; }
.icon-affinity-photo,
.icon-affinity-photo path { color: #00E5FF; fill: #00E5FF; }
.icon-affinity-designer,
.icon-affinity-designer path { color: #FF3B30; fill: #FF3B30; }
.icon-affinity-publisher,
.icon-affinity-publisher path { color: #FF298A; fill: #FF298A; }
.icon-davinci,
.icon-davinci path { color: #FF3366; fill: #FF3366; }
.icon-office,
.icon-office path { color: #D83B01; fill: #D83B01; }

/* Add hover effects for better visibility on light backgrounds */
.icon-nextjs:hover,
.icon-nextjs:hover path,
.icon-threejs:hover,
.icon-threejs:hover path,
.icon-express:hover,
.icon-express:hover path { 
  color: #666666;
  fill: #666666;
}
`;

// Download function
async function downloadIcon(name, url, outputPath) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const fileStream = fs.createWriteStream(outputPath);
      await new Promise((resolve, reject) => {
        response.body.pipe(fileStream);
        response.body.on('error', reject);
        fileStream.on('finish', resolve);
      });
      console.log(`✅ Downloaded: ${name}`);
    } else {
      console.error(`❌ Failed to download ${name}: ${response.status}`);
    }
  } catch (error) {
    console.error(`❌ Error downloading ${name}:`, error.message);
  }
}

// Main download function
async function downloadIcons() {
  console.log('🚀 Starting icon download...');

  for (const [name, icon] of Object.entries(ICONS)) {
    const outputPath = path.join(iconDir, `${name}.svg`);
    await downloadIcon(name, icon.url, outputPath);
  }

  // Create CSS file for monochrome icons
  const cssPath = path.join(projectRoot, 'src/styles/icons.css');
  fs.writeFileSync(cssPath, monochromeIconsCSS);
  console.log('✅ Created icons.css with color definitions');

  // List manual icons that need to be added
  if (MANUAL_ICONS.length > 0) {
    console.log('\n⚠️ The following icons need to be added manually:');
    MANUAL_ICONS.forEach(icon => {
      console.log(`   - ${icon}`);
    });
  }

  console.log('\n✨ Download process completed!');
}

// Run the download
downloadIcons().catch(console.error); 