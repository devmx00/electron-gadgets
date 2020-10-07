// Product data field
// =====================
// id
// img
// title
// about
// price
// category
// stock
// dateAdded
// =====================

export default () => [
  {
    id: '1',
    img: '/img/airpods.jpeg',
    title: 'Apple Airpods',
    about: [
      'Active noise cancellation for immersive sound',
      'Transparency mode for hearing and connecting with the world around you',
      'Three sizes of soft, tapered silicone tips for a customizable fit',
      'Sweat and water resistant',
      'Adaptive EQ automatically tunes music to the shape of your ear',
      'Easy setup for all your Apple devices',
      'Quick access to Siri by saying “Hey Siri”',
      'The Wireless Charging Case delivers more than 24 hours of battery life',
    ],
    price: '239.00',
    category: 'accessories',
    stock: 25,
    dateAdded: '07-10-2020',
  },
  {
    id: '2',
    img: '/img/nvidia-rtx-3090.png',
    title: 'NVIDIA RTX 3090',
    about: [
      'Cooling System: Fan',
      'Boast Clock Speed: 1.70 GHz',
      'GPU Memory Size: 24 GB',
    ],
    price: '2,365.00',
    category: 'graphic cards',
    stock: 0,
    dateAdded: '07-10-2020',
  },
  {
    id: '3',
    img: '/img/ps-5.png',
    title: 'PlayStation 5 DISC Edition',
    about: [
      'Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.',
      'Stunning Games - Marvel at incredible graphics and experience new PS5 features.',
      'Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.',
    ],
    price: '729.00',
    category: 'consoles',
    stock: 0,
    dateAdded: '07-10-2020',
  },
  {
    id: '4',
    img: '/img/xps-13',
    title: 'Dell XPS 13',
    about: [
      'Precision cut from a block of aluminum in two pieces so there is no variability in construction.',
      'Corning Gorilla Glass 6 is tough, damage resistant, durable, elegant and allows for no flex in its display.',
      'Dual fans separated to spread heat over a larger area, to dual heat pipes to hidden exhaust venting through the hinge.',
      'The power button lets you log on with just a touch.',
      'A 2.25mm high quality HD webcam gives you the best camera experience.',
    ],
    price: '2,099.00',
    category: 'laptops',
    stock: 5,
    dateAdded: '07-10-2020',
  },
  {
    id: '5',
    img: '/img/razer-13',
    title: 'Razer Blade Stealth 13',
    about: [
      'Blaze through games and content creation: NVIDIA GeForce GTX 1650 Ti Max-Q 4GB VRAM graphics, Quad-Core 10th Gen Intel Core i7-1065G7 Processor, and 16GB dual-channel memory.',
      'Designed for mobility: Ultra thin, light and incredibly durable with a CNC unibody aluminum frame and long battery life.',
      '4K thin Bezel touch display: Visually stunning 4K touch display with 100% sRGB color space for content creation, entertainment and productivity.',
      'Razer Chroma Keyboard and Precision Touchpad: Keyboard featuring single-zone RGB lighting with 16.8 million color options, and a precision glass touchpad.',
      'Complete connectivity: Includes Thunderbolt 3, USB-C, USB-A, Wireless AX, Windows Hello infrared camera, and dual-array mics.',
    ],
    price: '3,299.00',
    category: 'laptops',
    stock: 3,
    dateAdded: '07-10-2020',
  },
];
