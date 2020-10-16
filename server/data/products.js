const products = [
  {
    img: '/img/airpods.jpeg',
    title: 'Apple Airpods Pro',
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
    description:
      'Sound that cuts out the noise. AirPods Pro are the only in-ear headphones with. Active noise cancellation for immersive sound. Transparency mode for hearing and connecting with the world around you.',
    price: '379.00',
    stock: 25,
    category: 4,
  },
  {
    img: '/img/nvidia-rtx-3090.png',
    title: 'NVIDIA GEFORCE RTX 3090',
    about: [
      'Cooling System: Fan',
      'Boast Clock Speed: 1.70 GHz',
      'GPU Memory Size: 24 GB',
    ],
    description:
      'The GeForce RTX™ 3090 is a big ferocious GPU (BFGPU) with TITAN class performance. It’s powered by Ampere—NVIDIA’s 2nd gen RTX architecture—doubling down on ray tracing and AI performance with enhanced Ray Tracing (RT) Cores, Tensor Cores, and new streaming multiprocessors. Plus, it features a staggering 24 GB of G6X memory, all to deliver the ultimate gaming experience.',
    price: '2,205.00',
    stock: 0,
    category: 3,
  },
  {
    img: '/img/ps-5.png',
    title: 'PlayStation 5 Disc Edition',
    about: [
      'Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.',
      'Stunning Games - Marvel at incredible graphics and experience new PS5 features.',
      'Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.',
    ],
    description:
      'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio*, and an all-new generation of incredible PlayStation® games.',
    price: '729.00',
    stock: 0,
    category: 1,
  },
  {
    img: '/img/xps-13.png',
    title: 'Dell XPS 13',
    about: [
      'Precision cut from a block of aluminum in two pieces so there is no variability in construction.',
      'Corning Gorilla Glass 6 is tough, damage resistant, durable, elegant and allows for no flex in its display.',
      'Dual fans separated to spread heat over a larger area, to dual heat pipes to hidden exhaust venting through the hinge.',
      'The power button lets you log on with just a touch.',
      'A 2.25mm high quality HD webcam gives you the best camera experience.',
    ],
    description:
      'Display like no other: Take full advantage of HDR content’s superior dynamic range with Dolby Vision™, which can deliver colors never before seen on SDR PC displays. Dolby Vision™ content can deliver highlights that are up to 40 times brighter, and blacks that are up to 10 times darker. Plus, the stunning VESA certified DisplayHDR 400 display on the optional 4K+ panel enables over 16 million colors that have more depth and dimension than ever before',
    price: '2,499.00',
    stock: 5,
    category: 2,
  },
  {
    img: '/img/razer-13.png',
    title: 'Razer Blade Stealth 13',
    about: [
      'Intel Core i7-1165G7',
      'Windows 10 Home',
      '13.3" 60Hz OLED Full HD Touch',
      'GeForce GTX 1650 Ti',
      '16GB RAM, 512GB SSD',
    ],
    description:
      'Experience unrivaled performance with the latest and greatest 11th Gen Intel® Core™ i7 Processors for gamers and creators alike. With a base clock speed of 2.8GHz and 4.7GHz Turbo Boost, the Razer Blade Stealth 13 is powerful enough to cut through the most demanding tasks, while boasting vital features like Thunderbolt™ 4 technology and Wi-Fi 6.',
    price: '3,299.00',
    stock: 3,
    category: 2,
  },
  {
    img: '/img/gb-1650-4gb.png',
    title: 'GIGABYTE GEFORCE GTX 1650 4 GB GDDR5',
    about: [
      'Cooling System: Active',
      'Boast Clock Speed: 1.71 GHz',
      'GPU Memory Size: 4 GB',
    ],
    description:
      'Powered by GeForce GTX 1650 Nvidia Turing architecture and GeFore Experience. Integrated with 4GB GDDR5 128-bit memory interface. WINDFORCE 2X Cooling System with alternate spinning fans.',
    price: '159.00',
    stock: 5,
    category: 3,
  },
  {
    img: '/img/zotac-1650-tf.png',
    title: 'ZOTAC GAMING GEFORCE GTX 1650 SUPER 4GB TWIN FAN',
    about: [
      'Cooling System: Active',
      'Boast Clock Speed: 1.72 GHz',
      'GPU Memory Size: 4 GB',
    ],
    description:
      'The essential companion to your GeForce graphics card. Capture and share videos, screenshots, and livestreams. Keep your drivers up to date and optimize your games.',
    price: '169.00',
    stock: 5,
    category: 3,
  },
  {
    img: '/img/evga-1650-super.png',
    title: 'EVGA GEFORCE GTX 1650 SUPER SC ULTRA',
    about: [
      'Cooling System: Active',
      'Boast Clock Speed: 1.75 GHz',
      'GPU Memory Size: 4 GB',
    ],
    description:
      "The EVGA GeForce GTX 1650 SUPER gaming card was designed to bring the best cooling and the best overclocking to new performance levels and price points. Now the new GeForce GTX SUPER Series has ultra-fast GDDR6 memory, bringing you performance that's up to 50% faster than the original GTX 16 Series and up to 2X faster than previous-generation 10 Series GPUs. It's time to gear and get SUPER.",
    price: '189.00',
    stock: 5,
    category: 3,
  },
  {
    img: '/img/evga-1660-6gb.png',
    title: 'EVGA GEFORCE GTX 1660 6GB',
    about: [
      'Cooling System: Active',
      'Boast Clock Speed: 1.83 GHz',
      'GPU Memory Size: 6 GB',
    ],
    description:
      "The EVGA GeForce GTX 1660 SUPER gaming card was designed to bring the best cooling and the best overclocking to new performance levels and price points. Now the new GeForce GTX SUPER Series has ultra-fast GDDR6 memory, bringing you performance that's up to 50% faster than the original GTX 16 Series and up to 2X faster than previous-generation 10 Series GPUs. It's time to gear and get SUPER.",
    price: '229.00',
    stock: 5,
    category: 3,
  },
  {
    img: '/img/bose-quietcomfort-35-ii.jpg',
    title: 'QuietComfort 35 Wireless Headphones II',
    about: [
      'Three levels of world-class noise cancellation for better listening experience in any environment',
      'Alexa-enabled for voice access to music, information, and more',
      'Noise-rejecting dual-microphone system for clear sound and voice pick-up',
      'Balanced Audio performance at any volume',
      'Hassle-free Bluetooth pairing, personalized settings, access to future updates, and more through the Bose connect app',
    ],
    description:
      'QuietComfort 35 wireless headphones II are engineered with renowned noise cancellation. With the Google Assistant and Amazon Alexa built-in, you have instant access to millions of songs, playlists and more—hands free.',
    price: '399.00',
    stock: 15,
    category: 4,
  },
  {
    img: '/img/sony-xm3b.png',
    title: 'Sony WH1000XM3B Wireless Noise Cancelling',
    about: [
      'HD Noise Cancelling Processor QN1 lets you listen without distractions',
      'High quality wireless audio with BLUETOOTH and LDAC technology',
      'Smart listening experience by Adaptive Sound Control',
    ],
    description:
      'Only Music, Nothing Else. WH-1000XM3 headphones take you even deeper into silence with further improvements to our industry-leading noise cancellation and smart listening that adjusts to your situation.',
    price: '549.00',
    stock: 15,
    category: 4,
  },

  {
    img: '/img/xbox-series-x.png',
    title: 'Xbox Series X',
    about: [
      '12 Teraflops of Power',
      'True 4K Gaming & 8K Ready',
      'Up to 120 FPS',
      '1TB Custom SSD',
    ],
    description:
      'The most powerful Xbox ever. Introducing Xbox Series X, our fastest, most powerful consol ever, designed for a console generation that has you, the player, at its centre.',
    price: '699.00',
    stock: 0,
    category: 1,
  },
  {
    img: '/img/xbox-series-s.png',
    title: 'Xbox Series S',
    about: [
      'Watch 4K Blue-ray movies & steam 4K video on Amazon Prime, Disney+, and more',
      'High Dynamic Range & Wide Color Gamut provide brilliant graphic details in light, shadow & reflections',
      'Endless entertainment apps. Enjoy your favourite apps like YouTube, Spotify, and many more',
      'Experience premium Dolby Atmos and DTS:X audio',
    ],
    description:
      'The only console designed to play the best games of the past, present, and future. Play over 2,200 games including more than 200 exclusives and over 600 classics from Xbox 360 and Original Xbox.',
    price: '459.00',
    stock: 0,
    category: 1,
  },
];

module.exports = products;
