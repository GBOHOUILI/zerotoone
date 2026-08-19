const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "../public/images");

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg"];

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();

    if (!IMAGE_EXTENSIONS.includes(ext)) continue;

    try {
      const statsBefore = await fs.promises.stat(fullPath);

      const image = sharp(fullPath).rotate();
      const metadata = await image.metadata();

      let pipeline = image;

      // Évite des images beaucoup trop grandes
      if (metadata.width && metadata.width > 1920) {
        pipeline = pipeline.resize({
          width: 1920,
          withoutEnlargement: true,
        });
      }

      const tempFile = `${fullPath}.tmp`;

      if (
        fullPath.includes("hero") ||
        fullPath.includes("bg") ||
        fullPath.includes("footer")
      ) {
        await pipeline
          .avif({
            quality: 50,
            effort: 8,
          })
          .toFile(tempFile);
      } else {
        await pipeline
          .webp({
            quality: 82,
          })
          .toFile(tempFile);
      }

      await fs.promises.rename(tempFile, fullPath);

      const statsAfter = await fs.promises.stat(fullPath);

      console.log(
        `${path.relative(ROOT, fullPath)}
${(statsBefore.size / 1024).toFixed(0)} KB -> ${(statsAfter.size / 1024).toFixed(0)} KB`
      );
    } catch (err) {
      console.error(`Erreur sur ${fullPath}`);
      console.error(err.message);
    }
  }
}

(async () => {
  console.log("Optimisation des images...\n");
  await walk(ROOT);
  console.log("\nTerminé.");
})();
