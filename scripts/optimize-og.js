import sharp from 'sharp';

sharp('public/images/og-image.png')
  .resize(1200, 630, {
    fit: 'cover',
    position: 'center'
  })
  .toFile('public/images/og-image-optimized.png')
  .then(info => {
    console.log('Image optimized successfully:', info);
  })
  .catch(err => {
    console.error('Error optimizing image:', err);
  }); 