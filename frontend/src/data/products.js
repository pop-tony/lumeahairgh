export const products = [
  {
    id: 'bone-straight-24',
    name: 'Silky Bone Straight 24 inch',
    price: 'GHS 1850',
    image: '/images/wig-front.webp',
    lifestyleImage: '/images/hair-curls.jpg',
    accent: 'gold',
    description: 'A sleek, polished finish with soft movement for everyday elegance and special occasions.',
  },
  {
    id: 'body-wave-22',
    name: 'Body Wave Glam 22 inch',
    price: 'GHS 1650',
    image: '/images/hair-editorial.jpg',
    lifestyleImage: '/images/braids-portrait.jpg',
    accent: 'gold',
    description: 'Soft, flowing waves bring effortless volume and a graceful finish to your look.',
  },
  {
    id: 'curly-luxe-20',
    name: 'Curly Luxe 20 inch',
    price: 'GHS 1420',
    image: '/images/hair-curls.jpg',
    lifestyleImage: '/images/sleek-ponytail.jpg',
    accent: 'gold',
    description: 'Defined curls with plenty of bounce, designed to make a statement from day to night.',
  },
  {
    id: 'frontal-wig-20',
    name: 'Frontal Wig 20 inch',
    price: 'GHS 1100',
    image: '/images/image_20261103_122647.webp',
    lifestyleImage: '/images/hair-curls.jpg',
    accent: 'gold',
    description: 'A versatile style with a natural looking hairline and a comfortable, secure fit.',
  },
  {
    id: 'box-braids',
    name: 'Box Braids',
    price: 'GHS 700',
    image: '/images/braids-portrait.jpg',
    lifestyleImage: '/images/braids-portrait.jpg',
    accent: 'gold',
    description: 'Neat, lightweight braids finished with care for a confident protective style.',
  },
  {
    id: 'bridal-glam',
    name: 'Bridal Glam',
    price: 'GHS 1500',
    image: '/images/hair-editorial.jpg',
    lifestyleImage: '/images/sleek-ponytail.jpg',
    accent: 'gold',
    description: 'A bespoke occasion look, thoughtfully styled to complement your special day.',
  },
]

export function getProduct(id) {
  return products.find((product) => product.id === id)
}
