import path from 'path'
import fs from 'fs'
import sharp from 'sharp'

const publicDir = path.join(process.cwd(), 'public')
const src = path.join(publicDir, 'logo-source.png')

if (!fs.existsSync(src)) {
  console.error('Source image not found:', src)
  console.error('Please put your source PNG at public/logo-source.png')
  process.exit(1)
}

async function gen() {
  try {
    await sharp(src)
      .resize(180, 180, { fit: 'cover', position: 'centre' })
      .png()
      .toFile(path.join(publicDir, 'logo-180.png'))

    await sharp(src)
      .resize(48, 48, { fit: 'cover', position: 'centre' })
      .png()
      .toFile(path.join(publicDir, 'logo.png'))

    await sharp(src)
      .resize(32, 32, { fit: 'cover', position: 'centre' })
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'))

    await sharp(src)
      .resize(16, 16, { fit: 'cover', position: 'centre' })
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'))

    console.log('Icons generated in', publicDir)
  } catch (err) {
    console.error('Error generating icons:', err)
    process.exit(1)
  }
}

gen()
