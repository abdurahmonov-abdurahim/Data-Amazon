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
      categoriesImage: ''
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
      categoriesImage: ''
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
      categoriesImage: ''
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
      categoriesImage: ''
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
      categoriesImage: ''
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
      categoriesImage: ''
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
      categoriesImage: ''
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
      categoriesImage: ''
    },
    {
      id: "100009",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: ''
    },
    {
      id: "100010",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Computers',
      categoriesImage: ''
    }
  ],
  phones: [
    {
      id: "100011",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: ''
    },
    {
      id: "100012",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: ''
    },
    {
      id: "100013",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: ''
    },
    {
      id: "100014",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: ''
    },
    {
      id: "100015",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: ''
    },
    {
      id: "100016",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: ''
    },
    {
      id: "100017",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: ''
    },
    {
      id: "100018",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: ''
    },
    {
      id: "100019",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: ''
    },
    {
      id: "100020",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Phones',
      categoriesImage: ''
    }
  ],
  babies: [
    {
      id: "1000021",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: ''
    },
    {
      id: "1000022",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: ''
    },
    {
      id: "100023",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: ''
    },
    {
      id: "100024",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: ''
    },
    {
      id: "100025",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: ''
    },
    {
      id: "100026",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: ''
    },
    {
      id: "100027",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: ''
    },
    {
      id: "100028",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: ''
    },
    {
      id: "100029",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: ''
    },
    {
      id: "100030",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Baby',
      categoriesImage: ''
    }
  ],
  bauty: [
    {
      id: "100031",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: ''
    },
    {
      id: "100032",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: ''
    },
    {
      id: "100033",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: ''
    },
    {
      id: "100034",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: ''
    },
    {
      id: "100035",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: ''
    },
    {
      id: "100036",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: ''
    },
    {
      id: "100037",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: ''
    },
    {
      id: "100038",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: ''
    },
    {
      id: "100039",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: ''
    },
    {
      id: "100040",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Beauty & Personal care',
      categoriesImage: ''
    }
  ],
  womensFashion: [
    {
      id: "100041",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: ''
    },
    {
      id: "100042",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: ''
    },
    {
      id: "100043",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: ''
    },
    {
      id: "100044",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: ''
    },
    {
      id: "100045",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: ''
    },
    {
      id: "100046",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: ''
    },
    {
      id: "100047",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: ''
    },
    {
      id: "100048",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: ''
    },
    {
      id: "100049",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: ''
    },
    {
      id: "100050",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Women's Fashion",
      categoriesImage: ''
    }
  ],
  mensFashion: [
    {
      id: "100051",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: ''
    },
    {
      id: "100052",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: ''
    },
    {
      id: "100053",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: ''
    },
    {
      id: "100054",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: ''
    },
    {
      id: "100055",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: ''
    },
    {
      id: "100056",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: ''
    },
    {
      id: "100057",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: ''
    },
    {
      id: "100058",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: ''
    },
    {
      id: "100059",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: ''
    },
    {
      id: "100060",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: "Men's Fashion",
      categoriesImage: ''
    }
  ],
  healthcareHousehold: [
    {
      id: "100061",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: ''
    },
    {
      id: "100061",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: ''
    },
    {
      id: "100061",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: ''
    },
    {
      id: "100061",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: ''
    },
    {
      id: "100061",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: ''
    },
    {
      id: "100061",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: ''
    },
    {
      id: "100061",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: ''
    },
    {
      id: "100061",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: ''
    },
    {
      id: "100061",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: ''
    },
    {
      id: "100061",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Health & Household',
      categoriesImage: ''
    }
  ],
  homeKitchen: [
    {
      id: "100071",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: ''
    },
    {
      id: "100072",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: ''
    },
    {
      id: "100073",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: ''
    },
    {
      id: "100074",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: ''
    },
    {
      id: "100075",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: ''
    },
    {
      id: "100076",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: ''
    },
    {
      id: "100077",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: ''
    },
    {
      id: "100078",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: ''
    },
    {
      id: "100079",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: ''
    },
    {
      id: "100080",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Home & Kitchen',
      categoriesImage: ''
    }
  ],
  pets: [
    {
      id: "100081",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: ''
    },
    {
      id: "100082",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: ''
    },
    {
      id: "100083",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: ''
    },
    {
      id: "100084",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: ''
    },
    {
      id: "100085",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: ''
    },
    {
      id: "100086",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: ''
    },
    {
      id: "100087",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: ''
    },
    {
      id: "100088",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: ''
    },
    {
      id: "100089",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: ''
    },
    {
      id: "100090",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Pet Supplies',
      categoriesImage: ''
    }
  ],
  moviesTelevision: [
    {
      id: "100091",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: ''
    },
    {
      id: "100092",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: ''
    },
    {
      id: "100093",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: ''
    },
    {
      id: "100094",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: ''
    },
    {
      id: "100095",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: ''
    },
    {
      id: "100096",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: ''
    },
    {
      id: "100097",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: ''
    },
    {
      id: "100098",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: ''
    },
    {
      id: "100099",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: ''
    },
    {
      id: "1000100",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Movies & Television',
      categoriesImage: ''
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
      categoriesImage: ''
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
      categoriesImage: ''
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
      categoriesImage: ''
    },
    {
      id: "1000104",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: ''
    },
    {
      id: "1000105",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: ''
    },
    {
      id: "1000106",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: ''
    },
    {
      id: "1000107",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: ''
    },
    {
      id: "1000108",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: ''
    },
    {
      id: "1000109",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: ''
    },
    {
      id: "100110",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Luggage',
      categoriesImage: ''
    }
  ],
  books: [
    {
      id: "1000111",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: ''
    },
    {
      id: "1000112",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: ''
    },
    {
      id: "1000113",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: ''
    },
    {
      id: "1000114",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: ''
    },
    {
      id: "1000115",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: ''
    },
    {
      id: "1000116",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: ''
    },
    {
      id: "1000117",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: ''
    },
    {
      id: "1000118",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: ''
    },
    {
      id: "1000119",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: ''
    },
    {
      id: "1000120",
      name: "MacBook Air with M1 chip",
      picture: 'https://i.ibb.co/FXDVhYF/download.jpg',
      shortInfo:
        '8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage¹',
      price: '$999',
      stars: 'https://i.ibb.co/93yc1f1/rating.png',
      categories: 'Books',
      categoriesImage: ''
    }
  ]
}
