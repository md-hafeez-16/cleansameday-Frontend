// compress-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "src/assets");
const outputDir = path.join(process.cwd(), "src/assets_optimized");

// Ensure output folder exists
if (!fs.existsSync(outputDir)) {
  
  fs.mkdirSync(outputDir, { recursive: true });
}

const processImages = async (dir, outDir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subfolders
      const newOut = path.join(outDir, file);
      if (!fs.existsSync(newOut)) fs.mkdirSync(newOut);
      await processImages(filePath, newOut);
    } else {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        const outFile = path.join(
          outDir,
          file.replace(ext, ".webp") // Convert everything to webp
        );

        console.log(`Compressing: ${file} → ${outFile}`);
        await sharp(filePath)
          .resize({ width: 1600 }) // resize if needed (max 1600px wide)
          .webp({ quality: 75 })   // quality 75 (balance size & quality)
          .toFile(outFile);
      }
    }
  }
};

processImages(inputDir, outputDir)
  .then(() => console.log("✅ All images optimized!"))
  .catch((err) => console.error(err));
