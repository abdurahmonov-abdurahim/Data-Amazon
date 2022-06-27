let products = {
  computers: [
    {
      id: "100001",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: 'https://i.ibb.co/vdSbx2r/laptop.png'
    },
    {
      id: "100002",
      name: "MacBook Pro 13”",
      picture: 'https://i.ibb.co/8xB9g5w/Mac-Book-Pro-13-2022.png',
      shortInfo:
        '8-Core CPU 10-Core GPU 24GB Unified Memory 1TB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: 'https://i.ibb.co/vdSbx2r/laptop.png'
    },
    {
      id: "100003",
      name: "iMac 24",
      picture: 'https://i.ibb.co/C7zzdbx/imac-24-why-mac-bocz4nf55sc2-og.png',
      shortInfo:
        '8-Core CPU 8-Core GPU 16GB Unified Memory 2TB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: 'https://i.ibb.co/vdSbx2r/laptop.png'
    },
    {
      id: "100004",
      name: "HP Spectre x360 Convertible Laptop - 14t-ea100",
      picture: 'https://i.ibb.co/qjyzjz2/hp-spectre-x360-14-keyboard.png',
      shortInfo:
        'Intel® Core™ i7-1195G7 (up to 5.0 GHz, 12 MB L3 cache, 4 cores, 8 threads)',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: 'https://i.ibb.co/vdSbx2r/laptop.png'
    },
    {
      id: "100005",
      name: "Legion 5 Gen 6 AMD (15``) - Stingray",
      picture: 'https://i.ibb.co/KWHzxyR/lenovo-legion-5i-gen-6-15inch-stingray-01.png',
      shortInfo:
        'AMD Ryzen™ 7 5800H Processor (3.20 GHz, up to 4.40 GHz Max Boost, 8 Cores, 16 Threads, 16 MB Cache)',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: 'https://i.ibb.co/vdSbx2r/laptop.png'
    },
    {
      id: "100006",
      name: "Zenbook Pro 14 Duo OLED (UX8402, 12th Gen Intel)",
      picture: 'https://i.ibb.co/VqZbWvY/mchin-200731-5205-0004.jpg',
      shortInfo:
        "World's first 14.5” 2.8K 120 Hz OLED laptop with 2nd display",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: 'https://i.ibb.co/vdSbx2r/laptop.png'
    },
    {
      id: "100007",
      name: "PREDATOR TRITON 500",
      picture: 'https://i.ibb.co/2j5q1Tr/Predator-Triton-500-kspmain-5-s.jpg',
      shortInfo:
        'Infused with a 10th Gen Intel® Core™ i7 Processor1 and GeForce® RTX 2080 SUPER™ Max-Q 1',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: 'https://i.ibb.co/vdSbx2r/laptop.png'
    },
    {
      id: "100008",
      name: "Dell Vostro 3420 Laptop",
      picture: 'https://dell.to/3xYfNW0',
      shortInfo:
        '11th Generation Intel® Core™ i7-1165G7 (12 MB cache, 4 cores, 8 threads, up to 4.70 GHz Turbo)',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: 'https://i.ibb.co/vdSbx2r/laptop.png'
    },
    {
      id: "100009",
      name: "Galaxy Book2 Pro 360",
      picture: 'https://bit.ly/3NmtZ0I',
      shortInfo:
        'Windows 11 Home | Intel® Core™ i7 | 15.6" | 8GB + 512GB | Graphite',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: 'https://i.ibb.co/vdSbx2r/laptop.png'
    },
    {
      id: "100010",
      name: "Lenovo Flex 5 Laptop",
      picture: 'https://i.ibb.co/6s0Hy6D/71z-Zi-QGzc5-L-AC-SX679.jpg',
      shortInfo:
        'Lenovo Flex 5 Laptop, 14.0" FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 256GB Storage, AMD Radeon Graphics, Windows 11 Home',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: 'https://i.ibb.co/vdSbx2r/laptop.png'
    }
  ],
  phones: [
    {
      id: "100011",
      name: "Iphone 13Pro",
      picture: 'https://bit.ly/3QStqyD',
      shortInfo:
        'Protsessor Apple A15 Bionic, 5-core GPU, Storage 512 GB Dual Graphite',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: 'https://i.ibb.co/tLwnYZr/smartphone.png'
    },
    {
      id: "100012",
      name: "Iphone 13Pro Max",
      picture: 'https://bit.ly/3HQY4Ey',
      shortInfo:
        'Protsessor Apple A15 Bionic, 5-core GPU, Storage 1 TB Dual Silver',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: 'https://i.ibb.co/tLwnYZr/smartphone.png'
    },
    {
      id: "100013",
      name: "Iphone 12Pro",
      picture: 'https://i.ibb.co/v43wvdL/12Pro.jpg',
      shortInfo:
        'Protsessor Apple A14 Bionic, Storage 512GB, Graphite',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: 'https://i.ibb.co/tLwnYZr/smartphone.png'
    },
    {
      id: "100014",
      name: "Iphone 12Pro Max",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        'Protsessor Apple A14 Bionic, Storage 128GB, Graphite',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: 'https://i.ibb.co/tLwnYZr/smartphone.png'
    },
    {
      id: "100015",
      name: "Iphone 11Pro Max",
      picture: 'https://i.ibb.co/kGGZxfB/iphone-11-pro-max-space-gray.jpg',
      shortInfo:
        'Screen 6.5inch Protsessor  A13 Bionic chip, Storage 512GB, SPACE GRAY',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: 'https://i.ibb.co/tLwnYZr/smartphone.png'
    },
    {
      id: "100016",
      name: "Samsung Galaxy Z Fold3 5G",
      picture: 'https://i.ibb.co/hXn8Jyn/galaxy.jpg',
      shortInfo:
        'Phantom Green, 12/512 GB, Qualcomm SM8350 Snapdragon 888 5G',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: 'https://i.ibb.co/tLwnYZr/smartphone.png'
    },
    {
      id: "100017",
      name: "Samsung Galaxy S22 Ultra 5G",
      picture: 'https://i.ibb.co/kSHs6Rg/s22ultra.png',
      shortInfo:
        '1 (Nano Sim) 256GB 12 GB Green',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: 'https://i.ibb.co/tLwnYZr/smartphone.png'
    },
    {
      id: "100018",
      name: "Xiaomi Mi 12",
      picture: 'https://i.ibb.co/8B0CGc8/redmi.jpg',
      shortInfo:
        'RAM 8/ Storage 256GB, Grey',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: 'https://i.ibb.co/tLwnYZr/smartphone.png'
    },
    {
      id: "100019",
      name: "Huawei Nova 9",
      picture: 'https://i.ibb.co/gZwWYkH/huawei.jpg',
      shortInfo:
        'RAM 8 GB / Storage 128GB Stary',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: 'https://i.ibb.co/tLwnYZr/smartphone.png'
    },
    {
      id: "100020",
      name: "Vivo X60 Pro 5G",
      picture: 'https://i.ibb.co/M5BytMT/vivo.jpg',
      shortInfo:
        'RAM 12 GB / Storage 256GB, Shimmer Blue',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: 'https://i.ibb.co/tLwnYZr/smartphone.png'
    }
  ],
  babies: [
    {
      id: "1000021",
      name: "Interactive shooting toys for kids",
      picture: 'https://i.ibb.co/hCyqbnh/toy.png',
      shortInfo:
        'Children Outdoor Fun & Toy Sports Circle Ferrule Stacked Layers Game Parent-Child Interactive Ferrule Throwing Game Kids ZXH',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: 'https://i.ibb.co/pLnF34n/babies.png'
    },
    {
      id: "1000022",
      name: "Interactive shooting toys for kids",
      picture: 'https://i.ibb.co/hCyqbnh/toy.png',
      shortInfo:
        'Children Outdoor Fun & Toy Sports Circle Ferrule Stacked Layers Game Parent-Child Interactive Ferrule Throwing Game Kids ZXH',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: 'https://i.ibb.co/pLnF34n/babies.png'
    },
    {
      id: "100023",
      name: "Interactive shooting toys for kids",
      picture: 'https://i.ibb.co/hCyqbnh/toy.png',
      shortInfo:
        'Children Outdoor Fun & Toy Sports Circle Ferrule Stacked Layers Game Parent-Child Interactive Ferrule Throwing Game Kids ZXH',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: 'https://i.ibb.co/pLnF34n/babies.png'
    },
    {
      id: "100024",
      name: "Interactive shooting toys for kids",
      picture: 'https://i.ibb.co/hCyqbnh/toy.png',
      shortInfo:
        'Children Outdoor Fun & Toy Sports Circle Ferrule Stacked Layers Game Parent-Child Interactive Ferrule Throwing Game Kids ZXH',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: 'https://i.ibb.co/pLnF34n/babies.png'
    },
    {
      id: "100025",
      name: "Interactive shooting toys for kids",
      picture: 'https://i.ibb.co/hCyqbnh/toy.png',
      shortInfo:
        'Children Outdoor Fun & Toy Sports Circle Ferrule Stacked Layers Game Parent-Child Interactive Ferrule Throwing Game Kids ZXH',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: 'https://i.ibb.co/pLnF34n/babies.png'
    },
    {
      id: "100026",
      name: "Interactive shooting toys for kids",
      picture: 'https://i.ibb.co/hCyqbnh/toy.png',
      shortInfo:
        'Children Outdoor Fun & Toy Sports Circle Ferrule Stacked Layers Game Parent-Child Interactive Ferrule Throwing Game Kids ZXH',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: 'https://i.ibb.co/pLnF34n/babies.png'
    },
    {
      id: "100027",
      name: "Interactive shooting toys for kids",
      picture: 'https://i.ibb.co/hCyqbnh/toy.png',
      shortInfo:
        'Children Outdoor Fun & Toy Sports Circle Ferrule Stacked Layers Game Parent-Child Interactive Ferrule Throwing Game Kids ZXH',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: 'https://i.ibb.co/pLnF34n/babies.png'
    },
    {
      id: "100028",
      name: "Interactive shooting toys for kids",
      picture: 'https://i.ibb.co/hCyqbnh/toy.png',
      shortInfo:
        'Children Outdoor Fun & Toy Sports Circle Ferrule Stacked Layers Game Parent-Child Interactive Ferrule Throwing Game Kids ZXH',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: 'https://i.ibb.co/pLnF34n/babies.png'
    },
    {
      id: "100029",
      name: "Interactive shooting toys for kids",
      picture: 'https://i.ibb.co/hCyqbnh/toy.png',
      shortInfo:
        'Children Outdoor Fun & Toy Sports Circle Ferrule Stacked Layers Game Parent-Child Interactive Ferrule Throwing Game Kids ZXH',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: 'https://i.ibb.co/pLnF34n/babies.png'
    },
    {
      id: "100030",
      name: "Interactive shooting toys for kids",
      picture: 'https://i.ibb.co/hCyqbnh/toy.png',
      shortInfo:
        'Children Outdoor Fun & Toy Sports Circle Ferrule Stacked Layers Game Parent-Child Interactive Ferrule Throwing Game Kids ZXH',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: 'https://i.ibb.co/pLnF34n/babies.png'
    }
  ],
  beauty: [
    {
      id: "100031",
      name: "Bioderma",
      picture: 'https://i.ibb.co/9tk1NHt/beauty.jpg',
      shortInfo:
        'Sensibio - H2O Micellar Water - Makeup Remover Cleanser - Face Cleanser for Sensitive Skin',
      price: '$16.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: 'https://i.ibb.co/gSMfXCn/beauty.png'
    },
    {
      id: "100032",
      name: "Bioderma",
      picture: 'https://i.ibb.co/9tk1NHt/beauty.jpg',
      shortInfo:
        'Sensibio - H2O Micellar Water - Makeup Remover Cleanser - Face Cleanser for Sensitive Skin',
      price: '$16.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: 'https://i.ibb.co/gSMfXCn/beauty.png'
    },
    {
      id: "100033",
      name: "Bioderma",
      picture: 'https://i.ibb.co/9tk1NHt/beauty.jpg',
      shortInfo:
        'Sensibio - H2O Micellar Water - Makeup Remover Cleanser - Face Cleanser for Sensitive Skin',
      price: '$16.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: 'https://i.ibb.co/gSMfXCn/beauty.png'
    },
    {
      id: "100034",
      name: "Bioderma",
      picture: 'https://i.ibb.co/9tk1NHt/beauty.jpg',
      shortInfo:
        'Sensibio - H2O Micellar Water - Makeup Remover Cleanser - Face Cleanser for Sensitive Skin',
      price: '$16.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: 'https://i.ibb.co/gSMfXCn/beauty.png'
    },
    {
      id: "100035",
      name: "Bioderma",
      picture: 'https://i.ibb.co/9tk1NHt/beauty.jpg',
      shortInfo:
        'Sensibio - H2O Micellar Water - Makeup Remover Cleanser - Face Cleanser for Sensitive Skin',
      price: '$16.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: 'https://i.ibb.co/gSMfXCn/beauty.png'
    },
    {
      id: "100036",
      name: "Bioderma",
      picture: 'https://i.ibb.co/9tk1NHt/beauty.jpg',
      shortInfo:
        'Sensibio - H2O Micellar Water - Makeup Remover Cleanser - Face Cleanser for Sensitive Skin',
      price: '$16.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: 'https://i.ibb.co/gSMfXCn/beauty.png'
    },
    {
      id: "100037",
      name: "Bioderma",
      picture: 'https://i.ibb.co/9tk1NHt/beauty.jpg',
      shortInfo:
        'Sensibio - H2O Micellar Water - Makeup Remover Cleanser - Face Cleanser for Sensitive Skin',
      price: '$16.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: 'https://i.ibb.co/gSMfXCn/beauty.png'
    },
    {
      id: "100038",
      name: "Bioderma",
      picture: 'https://i.ibb.co/9tk1NHt/beauty.jpg',
      shortInfo:
        'Sensibio - H2O Micellar Water - Makeup Remover Cleanser - Face Cleanser for Sensitive Skin',
      price: '$16.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: 'https://i.ibb.co/gSMfXCn/beauty.png'
    },
    {
      id: "100039",
      name: "Bioderma",
      picture: 'https://i.ibb.co/9tk1NHt/beauty.jpg',
      shortInfo:
        'Sensibio - H2O Micellar Water - Makeup Remover Cleanser - Face Cleanser for Sensitive Skin',
      price: '$16.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: 'https://i.ibb.co/gSMfXCn/beauty.png'
    },
    {
      id: "100040",
      name: "Bioderma",
      picture: 'https://i.ibb.co/9tk1NHt/beauty.jpg',
      shortInfo:
        'Sensibio - H2O Micellar Water - Makeup Remover Cleanser - Face Cleanser for Sensitive Skin',
      price: '$16.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: 'https://i.ibb.co/gSMfXCn/beauty.png'
    }
  ],
  womensFashion: [
    {
      id: "100041",
      name: "Betsey Johnson Rose Dangle Earring",
      picture: 'https://i.ibb.co/BTQWN6t/jewelry.jpg',
      shortInfo:
        'Dangle earrings featuring long ear wire with iridescent stones and pink rose drop embellished with delicate mixed stone accents. Earrings are set in gold-tone metal with a shepherds hook closure.',
      price: '$23',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: 'https://i.ibb.co/pXJQV8H/womensfashion.png'
    },
    {
      id: "100042",
      name: "Betsey Johnson Rose Dangle Earring",
      picture: 'https://i.ibb.co/BTQWN6t/jewelry.jpg',
      shortInfo:
        'Dangle earrings featuring long ear wire with iridescent stones and pink rose drop embellished with delicate mixed stone accents. Earrings are set in gold-tone metal with a shepherds hook closure.',
      price: '$23',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: 'https://i.ibb.co/pXJQV8H/womensfashion.png'
    },
    {
      id: "100043",
      name: "Betsey Johnson Rose Dangle Earring",
      picture: 'https://i.ibb.co/BTQWN6t/jewelry.jpg',
      shortInfo:
        'Dangle earrings featuring long ear wire with iridescent stones and pink rose drop embellished with delicate mixed stone accents. Earrings are set in gold-tone metal with a shepherds hook closure.',
      price: '$23',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: 'https://i.ibb.co/pXJQV8H/womensfashion.png'
    },
    {
      id: "100044",
      name: "Betsey Johnson Rose Dangle Earring",
      picture: 'https://i.ibb.co/BTQWN6t/jewelry.jpg',
      shortInfo:
        'Dangle earrings featuring long ear wire with iridescent stones and pink rose drop embellished with delicate mixed stone accents. Earrings are set in gold-tone metal with a shepherds hook closure.',
      price: '$23',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: 'https://i.ibb.co/pXJQV8H/womensfashion.png'
    },
    {
      id: "100045",
      name: "Betsey Johnson Rose Dangle Earring",
      picture: 'https://i.ibb.co/BTQWN6t/jewelry.jpg',
      shortInfo:
        'Dangle earrings featuring long ear wire with iridescent stones and pink rose drop embellished with delicate mixed stone accents. Earrings are set in gold-tone metal with a shepherds hook closure.',
      price: '$23',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: 'https://i.ibb.co/pXJQV8H/womensfashion.png'
    },
    {
      id: "100046",
      name: "Betsey Johnson Rose Dangle Earring",
      picture: 'https://i.ibb.co/BTQWN6t/jewelry.jpg',
      shortInfo:
        'Dangle earrings featuring long ear wire with iridescent stones and pink rose drop embellished with delicate mixed stone accents. Earrings are set in gold-tone metal with a shepherds hook closure.',
      price: '$23',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: 'https://i.ibb.co/pXJQV8H/womensfashion.png'
    },
    {
      id: "100047",
      name: "Betsey Johnson Rose Dangle Earring",
      picture: 'https://i.ibb.co/BTQWN6t/jewelry.jpg',
      shortInfo:
        'Dangle earrings featuring long ear wire with iridescent stones and pink rose drop embellished with delicate mixed stone accents. Earrings are set in gold-tone metal with a shepherds hook closure.',
      price: '$23',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: 'https://i.ibb.co/pXJQV8H/womensfashion.png'
    },
    {
      id: "100048",
      name: "Betsey Johnson Rose Dangle Earring",
      picture: 'https://i.ibb.co/BTQWN6t/jewelry.jpg',
      shortInfo:
        'Dangle earrings featuring long ear wire with iridescent stones and pink rose drop embellished with delicate mixed stone accents. Earrings are set in gold-tone metal with a shepherds hook closure.',
      price: '$23',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: 'https://i.ibb.co/pXJQV8H/womensfashion.png'
    },
    {
      id: "100049",
      name: "Betsey Johnson Rose Dangle Earring",
      picture: 'https://i.ibb.co/BTQWN6t/jewelry.jpg',
      shortInfo:
        'Dangle earrings featuring long ear wire with iridescent stones and pink rose drop embellished with delicate mixed stone accents. Earrings are set in gold-tone metal with a shepherds hook closure.',
      price: '$23',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: 'https://i.ibb.co/pXJQV8H/womensfashion.png'
    },
    {
      id: "100050",
      name: "Betsey Johnson Rose Dangle Earring",
      picture: 'https://i.ibb.co/BTQWN6t/jewelry.jpg',
      shortInfo:
        'Dangle earrings featuring long ear wire with iridescent stones and pink rose drop embellished with delicate mixed stone accents. Earrings are set in gold-tone metal with a shepherds hook closure.',
      price: '$23',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: 'https://i.ibb.co/pXJQV8H/womensfashion.png'
    }
  ],
  mensFashion: [
    {
      id: "100051",
      name: "Cole Haan Mens Grandpro Rally Canvas Court Sneaker",
      picture: 'https://i.ibb.co/z2rYtcH/boots.jpg',
      shortInfo:
        'Modern Craft: Clean court sneaker styling in canvas uppers. Lightweight Construction: Lightweight injection molded EVA cupsole with textured outsole for added traction',
      price: '$45.80',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: 'https://i.ibb.co/gZ73kjV/mensfashion.png'
    },
    {
      id: "100052",
      name: "Cole Haan Mens Grandpro Rally Canvas Court Sneaker",
      picture: 'https://i.ibb.co/z2rYtcH/boots.jpg',
      shortInfo:
        'Modern Craft: Clean court sneaker styling in canvas uppers. Lightweight Construction: Lightweight injection molded EVA cupsole with textured outsole for added traction',
      price: '$45.80',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: 'https://i.ibb.co/gZ73kjV/mensfashion.png'
    },
    {
      id: "100053",
      name: "Cole Haan Mens Grandpro Rally Canvas Court Sneaker",
      picture: 'https://i.ibb.co/z2rYtcH/boots.jpg',
      shortInfo:
        'Modern Craft: Clean court sneaker styling in canvas uppers. Lightweight Construction: Lightweight injection molded EVA cupsole with textured outsole for added traction',
      price: '$45.80',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: 'https://i.ibb.co/gZ73kjV/mensfashion.png'
    },
    {
      id: "100054",
      name: "Cole Haan Mens Grandpro Rally Canvas Court Sneaker",
      picture: 'https://i.ibb.co/z2rYtcH/boots.jpg',
      shortInfo:
        'Modern Craft: Clean court sneaker styling in canvas uppers. Lightweight Construction: Lightweight injection molded EVA cupsole with textured outsole for added traction',
      price: '$45.80',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: 'https://i.ibb.co/gZ73kjV/mensfashion.png'
    },
    {
      id: "100055",
      name: "Cole Haan Mens Grandpro Rally Canvas Court Sneaker",
      picture: 'https://i.ibb.co/z2rYtcH/boots.jpg',
      shortInfo:
        'Modern Craft: Clean court sneaker styling in canvas uppers. Lightweight Construction: Lightweight injection molded EVA cupsole with textured outsole for added traction',
      price: '$45.80',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: 'https://i.ibb.co/gZ73kjV/mensfashion.png'
    },
    {
      id: "100056",
      name: "Cole Haan Mens Grandpro Rally Canvas Court Sneaker",
      picture: 'https://i.ibb.co/z2rYtcH/boots.jpg',
      shortInfo:
        'Modern Craft: Clean court sneaker styling in canvas uppers. Lightweight Construction: Lightweight injection molded EVA cupsole with textured outsole for added traction',
      price: '$45.80',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: 'https://i.ibb.co/gZ73kjV/mensfashion.png'
    },
    {
      id: "100057",
      name: "Cole Haan Mens Grandpro Rally Canvas Court Sneaker",
      picture: 'https://i.ibb.co/z2rYtcH/boots.jpg',
      shortInfo:
        'Modern Craft: Clean court sneaker styling in canvas uppers. Lightweight Construction: Lightweight injection molded EVA cupsole with textured outsole for added traction',
      price: '$45.80',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: 'https://i.ibb.co/gZ73kjV/mensfashion.png'
    },
    {
      id: "100058",
      name: "Cole Haan Mens Grandpro Rally Canvas Court Sneaker",
      picture: 'https://i.ibb.co/z2rYtcH/boots.jpg',
      shortInfo:
        'Modern Craft: Clean court sneaker styling in canvas uppers. Lightweight Construction: Lightweight injection molded EVA cupsole with textured outsole for added traction',
      price: '$45.80',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: 'https://i.ibb.co/gZ73kjV/mensfashion.png'
    },
    {
      id: "100059",
      name: "Cole Haan Mens Grandpro Rally Canvas Court Sneaker",
      picture: 'https://i.ibb.co/z2rYtcH/boots.jpg',
      shortInfo:
        'Modern Craft: Clean court sneaker styling in canvas uppers. Lightweight Construction: Lightweight injection molded EVA cupsole with textured outsole for added traction',
      price: '$45.80',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: 'https://i.ibb.co/gZ73kjV/mensfashion.png'
    },
    {
      id: "100060",
      name: "Cole Haan Mens Grandpro Rally Canvas Court Sneaker",
      picture: 'https://i.ibb.co/z2rYtcH/boots.jpg',
      shortInfo:
        'Modern Craft: Clean court sneaker styling in canvas uppers. Lightweight Construction: Lightweight injection molded EVA cupsole with textured outsole for added traction',
      price: '$45.80',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: 'https://i.ibb.co/gZ73kjV/mensfashion.png'
    }
  ],
  healthcareHousehold: [
    {
      id: "100061",
      name: "HoMedics White Noise Sound Machine",
      picture: 'https://i.ibb.co/yQMBWB4/healthcare-things.jpg',
      shortInfo:
        'Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds, Battery or Adapter Charging Options, Auto-Off Timer Sound Spa',
      price: '$20.34',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: 'https://i.ibb.co/bv90KrP/healthcare.png'
    },
    {
      id: "100061",
      name: "HoMedics White Noise Sound Machine",
      picture: 'https://i.ibb.co/yQMBWB4/healthcare-things.jpg',
      shortInfo:
        'Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds, Battery or Adapter Charging Options, Auto-Off Timer Sound Spa',
      price: '$20.34',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: 'https://i.ibb.co/bv90KrP/healthcare.png'
    },
    {
      id: "100061",
      name: "HoMedics White Noise Sound Machine",
      picture: 'https://i.ibb.co/yQMBWB4/healthcare-things.jpg',
      shortInfo:
        'Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds, Battery or Adapter Charging Options, Auto-Off Timer Sound Spa',
      price: '$20.34',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: 'https://i.ibb.co/bv90KrP/healthcare.png'
    },
    {
      id: "100061",
      name: "HoMedics White Noise Sound Machine",
      picture: 'https://i.ibb.co/yQMBWB4/healthcare-things.jpg',
      shortInfo:
        'Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds, Battery or Adapter Charging Options, Auto-Off Timer Sound Spa',
      price: '$20.34',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: 'https://i.ibb.co/bv90KrP/healthcare.png'
    },
    {
      id: "100061",
      name: "HoMedics White Noise Sound Machine",
      picture: 'https://i.ibb.co/yQMBWB4/healthcare-things.jpg',
      shortInfo:
        'Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds, Battery or Adapter Charging Options, Auto-Off Timer Sound Spa',
      price: '$20.34',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: 'https://i.ibb.co/bv90KrP/healthcare.png'
    },
    {
      id: "100061",
      name: "HoMedics White Noise Sound Machine",
      picture: 'https://i.ibb.co/yQMBWB4/healthcare-things.jpg',
      shortInfo:
        'Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds, Battery or Adapter Charging Options, Auto-Off Timer Sound Spa',
      price: '$20.34',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: 'https://i.ibb.co/bv90KrP/healthcare.png'
    },
    {
      id: "100061",
      name: "HoMedics White Noise Sound Machine",
      picture: 'https://i.ibb.co/yQMBWB4/healthcare-things.jpg',
      shortInfo:
        'Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds, Battery or Adapter Charging Options, Auto-Off Timer Sound Spa',
      price: '$20.34',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: 'https://i.ibb.co/bv90KrP/healthcare.png'
    },
    {
      id: "100061",
      name: "HoMedics White Noise Sound Machine",
      picture: 'https://i.ibb.co/yQMBWB4/healthcare-things.jpg',
      shortInfo:
        'Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds, Battery or Adapter Charging Options, Auto-Off Timer Sound Spa',
      price: '$20.34',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: 'https://i.ibb.co/bv90KrP/healthcare.png'
    },
    {
      id: "100061",
      name: "HoMedics White Noise Sound Machine",
      picture: 'https://i.ibb.co/yQMBWB4/healthcare-things.jpg',
      shortInfo:
        'Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds, Battery or Adapter Charging Options, Auto-Off Timer Sound Spa',
      price: '$20.34',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: 'https://i.ibb.co/bv90KrP/healthcare.png'
    },
    {
      id: "100061",
      name: "HoMedics White Noise Sound Machine",
      picture: 'https://i.ibb.co/yQMBWB4/healthcare-things.jpg',
      shortInfo:
        'Portable Sleep Therapy for Home, Office, Baby & Travel | 6 Relaxing & Soothing Nature Sounds, Battery or Adapter Charging Options, Auto-Off Timer Sound Spa',
      price: '$20.34',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: 'https://i.ibb.co/bv90KrP/healthcare.png'
    }
  ],
  homeKitchen: [
    {
      id: "100071",
      name: "Magic Bullet Blender",
      picture: 'https://i.ibb.co/Z6JbgGC/kitchen.jpg',
      shortInfo:
        'Small, Silver, 11 Piece Set. Products with electrical plugs are designed for use in the US',
      price: '$45',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: 'https://i.ibb.co/6yHqKYn/home-kitchen.png'
    },
    {
      id: "100072",
      name: "Magic Bullet Blender",
      picture: 'https://i.ibb.co/Z6JbgGC/kitchen.jpg',
      shortInfo:
        'Small, Silver, 11 Piece Set. Products with electrical plugs are designed for use in the US',
      price: '$45',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: 'https://i.ibb.co/6yHqKYn/home-kitchen.png'
    },
    {
      id: "100073",
      name: "Magic Bullet Blender",
      picture: 'https://i.ibb.co/Z6JbgGC/kitchen.jpg',
      shortInfo:
        'Small, Silver, 11 Piece Set. Products with electrical plugs are designed for use in the US',
      price: '$45',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: 'https://i.ibb.co/6yHqKYn/home-kitchen.png'
    },
    {
      id: "100074",
      name: "Magic Bullet Blender",
      picture: 'https://i.ibb.co/Z6JbgGC/kitchen.jpg',
      shortInfo:
        'Small, Silver, 11 Piece Set. Products with electrical plugs are designed for use in the US',
      price: '$45',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: 'https://i.ibb.co/6yHqKYn/home-kitchen.png'
    },
    {
      id: "100075",
      name: "Magic Bullet Blender",
      picture: 'https://i.ibb.co/Z6JbgGC/kitchen.jpg',
      shortInfo:
        'Small, Silver, 11 Piece Set. Products with electrical plugs are designed for use in the US',
      price: '$45',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: 'https://i.ibb.co/6yHqKYn/home-kitchen.png'
    },
    {
      id: "100076",
      name: "Magic Bullet Blender",
      picture: 'https://i.ibb.co/Z6JbgGC/kitchen.jpg',
      shortInfo:
        'Small, Silver, 11 Piece Set. Products with electrical plugs are designed for use in the US',
      price: '$45',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: 'https://i.ibb.co/6yHqKYn/home-kitchen.png'
    },
    {
      id: "100077",
      name: "Magic Bullet Blender",
      picture: 'https://i.ibb.co/Z6JbgGC/kitchen.jpg',
      shortInfo:
        'Small, Silver, 11 Piece Set. Products with electrical plugs are designed for use in the US',
      price: '$45',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: 'https://i.ibb.co/6yHqKYn/home-kitchen.png'
    },
    {
      id: "100078",
      name: "Magic Bullet Blender",
      picture: 'https://i.ibb.co/Z6JbgGC/kitchen.jpg',
      shortInfo:
        'Small, Silver, 11 Piece Set. Products with electrical plugs are designed for use in the US',
      price: '$45',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: 'https://i.ibb.co/6yHqKYn/home-kitchen.png'
    },
    {
      id: "100079",
      name: "Magic Bullet Blender",
      picture: 'https://i.ibb.co/Z6JbgGC/kitchen.jpg',
      shortInfo:
        'Small, Silver, 11 Piece Set. Products with electrical plugs are designed for use in the US',
      price: '$45',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: 'https://i.ibb.co/6yHqKYn/home-kitchen.png'
    },
    {
      id: "100080",
      name: "Magic Bullet Blender",
      picture: 'https://i.ibb.co/Z6JbgGC/kitchen.jpg',
      shortInfo:
        'Small, Silver, 11 Piece Set. Products with electrical plugs are designed for use in the US',
      price: '$45',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: 'https://i.ibb.co/6yHqKYn/home-kitchen.png'
    }
  ],
  pets: [
    {
      id: "100081",
      name: "Meow Mix",
      picture: 'https://i.ibb.co/F5Qt3BJ/cats-foods.jpg',
      shortInfo:
        'Original Choice Dry Cat Food, 22 Pounds. High quality protein helps support strong, healthy muscles',
      price: '$23.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: 'https://i.ibb.co/hmMJrSL/pets.png'
    },
    {
      id: "100082",
      name: "Meow Mix",
      picture: 'https://i.ibb.co/F5Qt3BJ/cats-foods.jpg',
      shortInfo:
        'Original Choice Dry Cat Food, 22 Pounds. High quality protein helps support strong, healthy muscles',
      price: '$23.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: 'https://i.ibb.co/hmMJrSL/pets.png'
    },
    {
      id: "100083",
      name: "Meow Mix",
      picture: 'https://i.ibb.co/F5Qt3BJ/cats-foods.jpg',
      shortInfo:
        'Original Choice Dry Cat Food, 22 Pounds. High quality protein helps support strong, healthy muscles',
      price: '$23.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: 'https://i.ibb.co/hmMJrSL/pets.png'
    },
    {
      id: "100084",
      name: "Meow Mix",
      picture: 'https://i.ibb.co/F5Qt3BJ/cats-foods.jpg',
      shortInfo:
        'Original Choice Dry Cat Food, 22 Pounds. High quality protein helps support strong, healthy muscles',
      price: '$23.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: 'https://i.ibb.co/hmMJrSL/pets.png'
    },
    {
      id: "100085",
      name: "Meow Mix",
      picture: 'https://i.ibb.co/F5Qt3BJ/cats-foods.jpg',
      shortInfo:
        'Original Choice Dry Cat Food, 22 Pounds. High quality protein helps support strong, healthy muscles',
      price: '$23.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: 'https://i.ibb.co/hmMJrSL/pets.png'
    },
    {
      id: "100086",
      name: "Meow Mix",
      picture: 'https://i.ibb.co/F5Qt3BJ/cats-foods.jpg',
      shortInfo:
        'Original Choice Dry Cat Food, 22 Pounds. High quality protein helps support strong, healthy muscles',
      price: '$23.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: 'https://i.ibb.co/hmMJrSL/pets.png'
    },
    {
      id: "100087",
      name: "Meow Mix",
      picture: 'https://i.ibb.co/F5Qt3BJ/cats-foods.jpg',
      shortInfo:
        'Original Choice Dry Cat Food, 22 Pounds. High quality protein helps support strong, healthy muscles',
      price: '$23.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: 'https://i.ibb.co/hmMJrSL/pets.png'
    },
    {
      id: "100088",
      name: "Meow Mix",
      picture: 'https://i.ibb.co/F5Qt3BJ/cats-foods.jpg',
      shortInfo:
        'Original Choice Dry Cat Food, 22 Pounds. High quality protein helps support strong, healthy muscles',
      price: '$23.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: 'https://i.ibb.co/hmMJrSL/pets.png'
    },
    {
      id: "100089",
      name: "Meow Mix",
      picture: 'https://i.ibb.co/F5Qt3BJ/cats-foods.jpg',
      shortInfo:
        'Original Choice Dry Cat Food, 22 Pounds. High quality protein helps support strong, healthy muscles',
      price: '$23.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: 'https://i.ibb.co/hmMJrSL/pets.png'
    },
    {
      id: "100090",
      name: "Meow Mix",
      picture: 'https://i.ibb.co/F5Qt3BJ/cats-foods.jpg',
      shortInfo:
        'Original Choice Dry Cat Food, 22 Pounds. High quality protein helps support strong, healthy muscles',
      price: '$23.99',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: 'https://i.ibb.co/hmMJrSL/pets.png'
    }
  ],
  moviesTelevision: [
    {
      id: "100091",
      name: "Sonic the Hedgehog",
      picture: 'https://i.ibb.co/8zKM11b/sonic-movie.jpg',
      shortInfo:
        "SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. Sonic and his new best friend Tom team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination",
      price: '$3.44',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: 'https://i.ibb.co/cyrhz7r/movies.png'
    },
    {
      id: "100092",
      name: "Sonic the Hedgehog",
      picture: 'https://i.ibb.co/8zKM11b/sonic-movie.jpg',
      shortInfo:
        "SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. Sonic and his new best friend Tom team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination",
      price: '$3.44',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: 'https://i.ibb.co/cyrhz7r/movies.png'
    },
    {
      id: "100093",
      name: "Sonic the Hedgehog",
      picture: 'https://i.ibb.co/8zKM11b/sonic-movie.jpg',
      shortInfo:
        "SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. Sonic and his new best friend Tom team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination",
      price: '$3.44',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: 'https://i.ibb.co/cyrhz7r/movies.png'
    },
    {
      id: "100094",
      name: "Sonic the Hedgehog",
      picture: 'https://i.ibb.co/8zKM11b/sonic-movie.jpg',
      shortInfo:
        "SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. Sonic and his new best friend Tom team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination",
      price: '$3.44',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: 'https://i.ibb.co/cyrhz7r/movies.png'
    },
    {
      id: "100095",
      name: "Sonic the Hedgehog",
      picture: 'https://i.ibb.co/8zKM11b/sonic-movie.jpg',
      shortInfo:
        "SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. Sonic and his new best friend Tom team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination",
      price: '$3.44',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: 'https://i.ibb.co/cyrhz7r/movies.png'
    },
    {
      id: "100096",
      name: "Sonic the Hedgehog",
      picture: 'https://i.ibb.co/8zKM11b/sonic-movie.jpg',
      shortInfo:
        "SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. Sonic and his new best friend Tom team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination",
      price: '$3.44',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: 'https://i.ibb.co/cyrhz7r/movies.png'
    },
    {
      id: "100097",
      name: "Sonic the Hedgehog",
      picture: 'https://i.ibb.co/8zKM11b/sonic-movie.jpg',
      shortInfo:
        "SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. Sonic and his new best friend Tom team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination",
      price: '$3.44',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: 'https://i.ibb.co/cyrhz7r/movies.png'
    },
    {
      id: "100098",
      name: "Sonic the Hedgehog",
      picture: 'https://i.ibb.co/8zKM11b/sonic-movie.jpg',
      shortInfo:
        "SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. Sonic and his new best friend Tom team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination",
      price: '$3.44',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: 'https://i.ibb.co/cyrhz7r/movies.png'
    },
    {
      id: "100099",
      name: "Sonic the Hedgehog",
      picture: 'https://i.ibb.co/8zKM11b/sonic-movie.jpg',
      shortInfo:
        "SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. Sonic and his new best friend Tom team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination",
      price: '$3.44',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: 'https://i.ibb.co/cyrhz7r/movies.png'
    },
    {
      id: "1000100",
      name: "Sonic the Hedgehog",
      picture: 'https://i.ibb.co/8zKM11b/sonic-movie.jpg',
      shortInfo:
        "SONIC THE HEDGEHOG tells the story of the world's speediest hedgehog as he embraces his new home on Earth. Sonic and his new best friend Tom team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination",
      price: '$3.44',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: 'https://i.ibb.co/cyrhz7r/movies.png'
    }
  ],
  luggage: [
    {
      id: "1000101",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: 'https://i.ibb.co/NmGvnG8/luggage.png'
    },
    {
      id: "1000102",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: 'https://i.ibb.co/NmGvnG8/luggage.png'
    },
    {
      id: "1000103",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: 'https://i.ibb.co/NmGvnG8/luggage.png'
    },
    {
      id: "1000104",
      name: "Lenovo Laptop Backpack B210",
      picture: 'https://i.ibb.co/j4hd4gw/backpacks.jpg',
      shortInfo:
        '15.6-Inch Laptop/Tablet, Durable, Water-Repellent, Lightweight, Clean Design, Sleek for Travel, Business Casual or College, GX40Q17225, Black Casual Backpack- Black',
      price: '$51',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: 'https://i.ibb.co/NmGvnG8/luggage.png'
    },
    {
      id: "1000105",
      name: "Lenovo Laptop Backpack B210",
      picture: 'https://i.ibb.co/j4hd4gw/backpacks.jpg',
      shortInfo:
        '15.6-Inch Laptop/Tablet, Durable, Water-Repellent, Lightweight, Clean Design, Sleek for Travel, Business Casual or College, GX40Q17225, Black Casual Backpack- Black',
      price: '$51',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: 'https://i.ibb.co/NmGvnG8/luggage.png'
    },
    {
      id: "1000106",
      name: "Lenovo Laptop Backpack B210",
      picture: 'https://i.ibb.co/j4hd4gw/backpacks.jpg',
      shortInfo:
        '15.6-Inch Laptop/Tablet, Durable, Water-Repellent, Lightweight, Clean Design, Sleek for Travel, Business Casual or College, GX40Q17225, Black Casual Backpack- Black',
      price: '$51',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: 'https://i.ibb.co/NmGvnG8/luggage.png'
    },
    {
      id: "1000107",
      name: "Lenovo Laptop Backpack B210",
      picture: 'https://i.ibb.co/j4hd4gw/backpacks.jpg',
      shortInfo:
        '15.6-Inch Laptop/Tablet, Durable, Water-Repellent, Lightweight, Clean Design, Sleek for Travel, Business Casual or College, GX40Q17225, Black Casual Backpack- Black',
      price: '$51',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: 'https://i.ibb.co/NmGvnG8/luggage.png'
    },
    {
      id: "1000108",
      name: "Lenovo Laptop Backpack B210",
      picture: 'https://i.ibb.co/j4hd4gw/backpacks.jpg',
      shortInfo:
        '15.6-Inch Laptop/Tablet, Durable, Water-Repellent, Lightweight, Clean Design, Sleek for Travel, Business Casual or College, GX40Q17225, Black Casual Backpack- Black',
      price: '$51',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: 'https://i.ibb.co/NmGvnG8/luggage.png'
    },
    {
      id: "1000109",
      name: "Lenovo Laptop Backpack B210",
      picture: 'https://i.ibb.co/j4hd4gw/backpacks.jpg',
      shortInfo:
        '15.6-Inch Laptop/Tablet, Durable, Water-Repellent, Lightweight, Clean Design, Sleek for Travel, Business Casual or College, GX40Q17225, Black Casual Backpack- Black',
      price: '$51',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: 'https://i.ibb.co/NmGvnG8/luggage.png'
    },
    {
      id: "100110",
      name: "Lenovo Laptop Backpack B210",
      picture: 'https://i.ibb.co/j4hd4gw/backpacks.jpg',
      shortInfo:
        '15.6-Inch Laptop/Tablet, Durable, Water-Repellent, Lightweight, Clean Design, Sleek for Travel, Business Casual or College, GX40Q17225, Black Casual Backpack- Black',
      price: '$51',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: 'https://i.ibb.co/NmGvnG8/luggage.png'
    }
  ],
  books: [
    {
      id: "1000111",
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      picture: 'https://i.ibb.co/sH6YfCR/photo-2022-06-27-11-29-45.jpg',
      shortInfo:
        "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: 'https://i.ibb.co/qs9JZTX/open-book.png'
    },
    {
      id: "1000112",
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      picture: 'https://i.ibb.co/sH6YfCR/photo-2022-06-27-11-29-45.jpg',
      shortInfo:
        "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: 'https://i.ibb.co/qs9JZTX/open-book.png'
    },
    {
      id: "1000113",
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      picture: 'https://i.ibb.co/sH6YfCR/photo-2022-06-27-11-29-45.jpg',
      shortInfo:
        "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: 'https://i.ibb.co/qs9JZTX/open-book.png'
    },
    {
      id: "1000114",
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      picture: 'https://i.ibb.co/sH6YfCR/photo-2022-06-27-11-29-45.jpg',
      shortInfo:
        "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: 'https://i.ibb.co/qs9JZTX/open-book.png'
    },
    {
      id: "1000115",
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      picture: 'https://i.ibb.co/sH6YfCR/photo-2022-06-27-11-29-45.jpg',
      shortInfo:
        "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: 'https://i.ibb.co/qs9JZTX/open-book.png'
    },
    {
      id: "1000116",
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      picture: 'https://i.ibb.co/sH6YfCR/photo-2022-06-27-11-29-45.jpg',
      shortInfo:
        "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: 'https://i.ibb.co/qs9JZTX/open-book.png'
    },
    {
      id: "1000117",
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      picture: 'https://i.ibb.co/sH6YfCR/photo-2022-06-27-11-29-45.jpg',
      shortInfo:
        "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: 'https://i.ibb.co/qs9JZTX/open-book.png'
    },
    {
      id: "1000118",
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      picture: 'https://i.ibb.co/sH6YfCR/photo-2022-06-27-11-29-45.jpg',
      shortInfo:
        "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: 'https://i.ibb.co/qs9JZTX/open-book.png'
    },
    {
      id: "1000119",
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      picture: 'https://i.ibb.co/sH6YfCR/photo-2022-06-27-11-29-45.jpg',
      shortInfo:
        "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: 'https://i.ibb.co/qs9JZTX/open-book.png'
    },
    {
      id: "1000120",
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      picture: 'https://i.ibb.co/sH6YfCR/photo-2022-06-27-11-29-45.jpg',
      shortInfo:
        "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results",
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: 'https://i.ibb.co/qs9JZTX/open-book.png'
    }
  ]
}
