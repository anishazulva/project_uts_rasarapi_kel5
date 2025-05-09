import { useParams } from 'react-router-dom';

const recipeDetails = {
  1: {
    title: 'Ayam Bakar Kecap',
    image: '/images/ayam_bakar_kecap.jpg',
    bahan: [
      '1 ekor ayam, potong menjadi 4-6 bagian',
      '5 siung bawang putih',
      '6 siung bawang merah',
      '3 butir kemiri, sangrai',
      '1 ruas jahe',
      '1 ruas lengkuas',
      '2 lembar daun salam',
      '1 batang serai, geprek',
      '3 sdm kecap manis',
      '1 sdt garam',
      '1/2 sdt merica bubuk',
      '1 sdm air asam jawa',
      '300 ml air',
      '2 sdm minyak goreng'
    ],
    langkah: [
      'Haluskan bawang putih, bawang merah, kemiri, jahe, dan merica.',
      'Tumis bumbu halus bersama daun salam, lengkuas, dan serai hingga harum.',
      'Masukkan potongan ayam, aduk rata hingga ayam berubah warna.',
      'Tambahkan kecap manis, air asam jawa, garam, dan air. Masak hingga ayam matang dan bumbu meresap.',
      'Angkat ayam, lalu bakar di atas bara api atau grill pan sambil sesekali dioles sisa bumbu.',
      'Bakar hingga permukaan ayam agak kering dan kecokelatan.',
      'Sajikan ayam bakar kecap dengan sambal dan lalapan.'
    ]
  },
  2: {
    title: 'Semur Daging',
    image: '/images/semur_daging.jpeg',
    bahan: [
      '500 gram daging sapi (potong sesuai selera)',
      '5 siung bawang merah',
      '3 siung bawang putih',
      '2 butir kemiri',
      '1 sdm ketumbar',
      '1/2 sdt merica bubuk',
      '1/4 sdt pala bubuk',
      '2 sdm kecap manis',
      '2 lembar daun salam',
      '1 batang serai, geprek',
      '1 cm kayu manis',
      'Garam dan gula secukupnya',
      'Air secukupnya',
      'Minyak goreng untuk menumis'
    ],
    langkah: [
      'Haluskan bawang merah, bawang putih, kemiri, ketumbar, merica, dan pala.',
      'Tumis bumbu halus bersama daun salam, serai, dan kayu manis sampai harum.',
      'Masukkan potongan daging sapi, aduk rata hingga daging berubah warna.',
      'Tambahkan air hingga menutupi daging, masak hingga daging empuk.',
      'Tambahkan kecap manis, garam, dan gula secukupnya.',
      'Masak hingga kuah menyusut dan bumbu meresap.',
      'Sajikan hangat dengan nasi putih.'
    ]
  },  
  3: {
    title: 'Ikan Goreng Kuning',
    image: '/images/ikan_goreng_kuning.jpeg',
    bahan: [
      '2 ekor ikan nila atau ikan kembung, bersihkan',
      '2 siung bawang putih',
      '3 siung bawang merah',
      '2 cm kunyit',
      '1 cm jahe',
      '1 sdt ketumbar',
      '1 sdt garam',
      'Air jeruk nipis secukupnya',
      'Minyak untuk menggoreng'
    ],
    langkah: [
      'Lumuri ikan dengan air jeruk nipis dan sedikit garam, diamkan 10 menit lalu bilas.',
      'Haluskan bawang putih, bawang merah, kunyit, jahe, ketumbar, dan garam.',
      'Baluri ikan dengan bumbu halus secara merata, diamkan selama 15–30 menit agar meresap.',
      'Panaskan minyak, goreng ikan hingga matang dan berwarna kuning keemasan.',
      'Angkat dan tiriskan, sajikan dengan sambal dan nasi hangat.'
    ]
  },  
  4: {
    title: 'Sayur Asem',
    image: '/images/sayur_asem.jpeg',
    bahan: [
      '100 gram kacang panjang, potong-potong',
      '1 buah jagung manis, potong-potong',
      '1 buah labu siam, kupas dan potong dadu',
      '1 genggam daun melinjo',
      '1 sdm asam jawa, larutkan dengan sedikit air',
      '3 siung bawang merah',
      '2 siung bawang putih',
      '2 buah cabai merah',
      '1 lembar daun salam',
      '2 cm lengkuas, memarkan',
      'Garam dan gula secukupnya',
      'Air secukupnya'
    ],
    langkah: [
      'Rebus air dalam panci bersama daun salam dan lengkuas.',
      'Masukkan bawang merah, bawang putih, dan cabai yang telah diiris.',
      'Tambahkan jagung, rebus hingga setengah matang.',
      'Masukkan kacang panjang, labu siam, daun melinjo, dan air asam jawa.',
      'Bumbui dengan garam dan gula, masak hingga semua sayuran matang.',
      'Cicipi rasa, angkat, dan sajikan hangat.'
    ]
  },  
  5: {
    title: 'Nasi Goreng Kampung',
    image: '/images/nasi_goreng_kampung.jpeg',
    bahan: [
      '2 piring nasi putih',
      '2 siung bawang putih, cincang',
      '3 siung bawang merah, iris tipis',
      '1 butir telur',
      '5 buah cabai rawit, iris (sesuai selera)',
      '2 sdm kecap manis',
      '1 sdm kecap asin (opsional)',
      '1/2 sdt terasi goreng (opsional)',
      'Garam dan merica secukupnya',
      'Minyak untuk menumis',
      'Irisan mentimun dan kerupuk untuk pelengkap'
    ],
    langkah: [
      'Panaskan minyak, tumis bawang merah, bawang putih, dan cabai hingga harum.',
      'Masukkan telur, orak-arik hingga matang.',
      'Tambahkan nasi putih, aduk rata.',
      'Masukkan kecap manis, kecap asin, dan terasi jika digunakan.',
      'Bumbui dengan garam dan merica, aduk hingga rata dan nasi panas.',
      'Angkat dan sajikan dengan mentimun dan kerupuk.'
    ]
  },  
  6: {
    title: 'Tahu Isi Sayur',
    image: '/images/tahu_isi_sayur.jpeg',
    bahan: [
      '10 buah tahu kulit, belah dua',
      '100 g wortel, serut halus',
      '100 g kol, iris tipis',
      '50 g tauge',
      '2 siung bawang putih, cincang',
      '1 batang daun bawang, iris halus',
      '2 sdm tepung terigu',
      '1 sdt garam',
      '1/2 sdt merica',
      'Minyak untuk menggoreng',
      'Air secukupnya'
    ],
    langkah: [
      'Tumis bawang putih hingga harum, lalu masukkan wortel, kol, dan tauge, masak hingga layu.',
      'Tambahkan daun bawang, garam, dan merica, aduk rata. Angkat dan biarkan dingin.',
      'Ambil tahu, beri isian sayur, rapatkan kembali dan rapikan dengan tusuk gigi.',
      'Gulingkan tahu isi dalam tepung terigu dan sedikit air.',
      'Goreng dalam minyak panas hingga tahu berwarna keemasan dan matang.'
    ]
  },  
  7: {
    title: 'Ayam Goreng Lengkuas',
    image: '/images/ayam_goreng_lengkuas.jpeg',
    bahan: [
      '1 ekor ayam, potong menjadi beberapa bagian',
      '5 siung bawang merah',
      '5 siung bawang putih',
      '2 cm lengkuas, memarkan',
      '2 batang serai, memarkan',
      '3 lembar daun jeruk',
      '1 sdt ketumbar',
      '1/2 sdt merica',
      'Garam secukupnya',
      'Air secukupnya',
      'Minyak untuk menggoreng'
    ],
    langkah: [
      'Haluskan bawang merah, bawang putih, ketumbar, dan merica.',
      'Tumis bumbu halus dengan lengkuas, serai, dan daun jeruk hingga harum.',
      'Masukkan ayam, aduk rata, tambahkan air dan garam.',
      'Masak ayam hingga empuk dan bumbu meresap, angkat ayam.',
      'Goreng ayam dalam minyak panas hingga berwarna keemasan dan crispy.'
    ]
  },  
  8: {
    title: 'Rendang Daging Sapi',
    image: '/images/rendang_daging_sapi.jpeg',
    bahan: [
      '500 g daging sapi, potong dadu',
      '5 siung bawang merah',
      '3 siung bawang putih',
      '2 batang serai, memarkan',
      '2 cm lengkuas, memarkan',
      '5 lembar daun salam',
      '1 sdt ketumbar',
      '1 sdt jintan',
      '1 buah cabai merah besar',
      '500 ml santan dari 1 butir kelapa',
      'Garam secukupnya',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Haluskan bawang merah, bawang putih, cabai, ketumbar, dan jintan.',
      'Tumis bumbu halus dengan serai, lengkuas, dan daun salam hingga harum.',
      'Masukkan daging sapi, aduk rata hingga berubah warna.',
      'Tuang santan, masak dengan api kecil sambil sesekali diaduk hingga daging empuk dan kuah mengental.',
      'Beri garam secukupnya, lanjutkan memasak hingga rendang berwarna cokelat gelap dan bumbu meresap.'
    ]
  },  
  9: {
    title: 'Pepes Ikan',
    image: '/images/pepes_ikan.jpeg',
    bahan: [
      '500 g ikan (seperti ikan nila atau ikan mas), bersihkan',
      '5 siung bawang merah, iris halus',
      '2 siung bawang putih, iris halus',
      '5 cabai rawit, iris halus',
      '3 sdm kecap manis',
      'Daun pisang untuk membungkus',
      '1 batang serai, memarkan',
      'Daun salam secukupnya',
      'Garam dan merica secukupnya'
    ],
    langkah: [
      'Haluskan bawang merah, bawang putih, dan cabai rawit.',
      'Campurkan bumbu halus dengan kecap manis, serai, daun salam, garam, dan merica.',
      'Lumuri ikan dengan bumbu tersebut, diamkan selama 15 menit.',
      'Siapkan daun pisang, letakkan ikan yang sudah dibumbui di atasnya, lalu bungkus rapat.',
      'Panggang pepes ikan di atas bara api atau kukus selama 30 menit hingga matang dan harum.'
    ]
  },  
  10: {
    title: 'Tumis Kangkung',
    image: '/images/tumis_kangkung.jpeg',
    bahan: [
      '1 ikat kangkung, cuci bersih',
      '5 siung bawang merah, iris halus',
      '3 siung bawang putih, iris halus',
      '2 sdm kecap manis',
      '1 sdt merica',
      '1 sdt garam',
      '1 buah cabai merah (optional)',
      '2 sdm minyak untuk menumis'
    ],
    langkah: [
      'Tumis bawang merah, bawang putih, dan cabai hingga harum dengan minyak.',
      'Masukkan kangkung, aduk rata.',
      'Tambahkan kecap, merica, garam, dan sedikit air, masak hingga kangkung layu dan bumbu meresap.'
    ]
  },  
  11: {
    title: 'Nasi Goreng Spesial',
    image: '/images/nasi_goreng_spesial.jpg',
    bahan: [
      '2 piring nasi putih (lebih baik nasi yang sudah dingin)',
      '2 siung bawang merah, iris halus',
      '2 siung bawang putih, iris halus',
      '1 butir telur',
      '2 sdm kecap manis',
      '1 sdt garam',
      '1 sdt merica',
      '100 g daging ayam/sapi (opsional), potong kecil',
      '1 batang daun bawang, iris halus',
      '2 sdm minyak goreng'
    ],
    langkah: [
      'Tumis bawang merah dan bawang putih dengan minyak hingga harum.',
      'Masukkan daging ayam/sapi (jika menggunakan), tumis hingga matang.',
      'Tambahkan telur, orak-arik hingga matang.',
      'Masukkan nasi, bumbui dengan kecap manis, garam, dan merica.',
      'Aduk rata dan masak hingga semua bahan tercampur rata dan nasi agak kering.',
      'Tambahkan daun bawang dan aduk sebentar sebelum disajikan.'
    ]
  },  
  12: {
    title: 'Risol Mayo',
    image: '/images/risol_mayo.jpeg',
    bahan: [
      '10 lembar kulit lumpia',
      '200 g daging ayam/daging sapi, cincang halus',
      '1 buah wortel, parut',
      '2 siung bawang putih, cincang halus',
      '2 sdm mayones',
      '2 sdm minyak untuk menumis',
      'Garam dan merica secukupnya',
      '1 butir telur, untuk pelapis',
      'Minyak untuk menggoreng'
    ],
    langkah: [
      'Tumis bawang putih hingga harum dengan sedikit minyak.',
      'Masukkan daging cincang, aduk rata, dan tambahkan garam serta merica.',
      'Tambahkan wortel parut, aduk rata hingga daging matang.',
      'Angkat dan biarkan dingin, kemudian campurkan mayones ke dalam adonan.',
      'Ambil selembar kulit lumpia, beri isian daging dan wortel, gulung dan rapatkan.',
      'Celupkan risol ke dalam telur kocok, lalu goreng dalam minyak panas hingga keemasan.'
    ]
  },  
  13: {
    title: 'Ayam Rica Rica',
    image: '/images/ayam_ricarica.jpeg',
    bahan: [
      '1 ekor ayam, potong-potong',
      '5 cabai merah besar',
      '10 cabai rawit',
      '4 siung bawang merah',
      '3 siung bawang putih',
      '2 sdm gula merah, serut',
      '1 sdt ketumbar',
      '2 lembar daun salam',
      '1 batang serai, memarkan',
      'Minyak untuk menumis',
      'Garam dan merica secukupnya'
    ],
    langkah: [
      'Tumis bawang merah, bawang putih, cabai merah, cabai rawit, ketumbar, dan serai hingga harum.',
      'Masukkan ayam, aduk rata dan masak hingga ayam berubah warna.',
      'Tambahkan daun salam, gula merah, garam, dan merica. Tambahkan sedikit air, masak hingga ayam empuk dan bumbu meresap.',
      'Sajikan ayam rica-rica dengan nasi putih hangat.'
    ]
  },  
  14: {
    title: 'Daging Lada Hitam',
    image: '/images/daging_lada_hitam.jpeg',
    bahan: [
      '500 g daging sapi (potong kotak-kotak)',
      '3 siung bawang putih, cincang halus',
      '1 batang daun bawang, iris',
      '2 lembar daun salam',
      '2 sdm lada hitam bubuk',
      '2 sdm kecap manis',
      '1 sdt gula merah',
      'Minyak untuk menumis',
      'Garam dan merica secukupnya',
      'Air secukupnya'
    ],
    langkah: [
      'Tumis bawang putih hingga harum dengan sedikit minyak.',
      'Masukkan daging sapi, masak hingga berubah warna.',
      'Tambahkan lada hitam, kecap manis, daun salam, dan sedikit air. Aduk rata.',
      'Tambahkan gula merah, garam, dan merica, masak hingga daging empuk dan bumbu meresap.',
      'Sajikan daging lada hitam dengan nasi putih hangat.'
    ]
  },  
  15: {
    title: 'Ikan Asam Manis',
    image: '/images/ikan_asam_manis.jpeg',
    bahan: [
      '2 ekor ikan nila (bisa diganti dengan ikan lain sesuai selera)',
      '2 siung bawang putih, haluskan',
      '1 sdt kunyit bubuk',
      '2 sdm kecap manis',
      '1 sdm air asam jawa',
      'Garam dan merica secukupnya',
      'Minyak untuk menggoreng',
      'Air secukupnya'
    ],
    langkah: [
      'Lumuri ikan dengan bawang putih, kunyit bubuk, garam, merica, dan diamkan selama 15 menit.',
      'Goreng ikan dalam minyak panas hingga berwarna keemasan dan matang merata.',
      'Tiriskan ikan, lalu sajikan dengan sambal dan sedikit air asam jawa yang dicampur kecap manis sebagai saus.'
    ]
  },  
  16: {
    title: 'Capcay Kuah',
    image: '/images/capcay_kuah.jpg',
    bahan: [
      '200 g wortel, potong tipis',
      '100 g kol, iris kasar',
      '100 g sawi hijau, potong',
      '100 g kembang kol',
      '2 siung bawang putih, cincang halus',
      '1 batang daun bawang, iris',
      '1 sdm saus tiram',
      '1 sdt kecap manis',
      '500 ml air kaldu',
      'Garam dan merica secukupnya',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Tumis bawang putih hingga harum.',
      'Masukkan wortel, kembang kol, dan kol, aduk rata.',
      'Tambahkan air kaldu, saus tiram, kecap manis, garam, dan merica.',
      'Masak hingga sayuran empuk dan kuah mendidih.',
      'Terakhir, tambahkan sawi hijau dan daun bawang, masak sebentar dan sajikan.'
    ]
  },  
  17: {
    title: 'Mie Goreng Rumahan',
    image: '/images/mie_goreng_rumahan.jpeg',
    bahan: [
      '200 g mie telur',
      '2 siung bawang putih, cincang',
      '1 butir telur, kocok lepas',
      '100 g kol, iris',
      '2 sdm kecap manis',
      '1 sdm kecap asin',
      '1 sdt saus tiram',
      'Garam dan merica secukupnya',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Rebus mie telur, tiriskan dan sisihkan.',
      'Tumis bawang putih hingga harum, masukkan telur dan orak-arik.',
      'Masukkan kol dan aduk rata, tambahkan mie, kecap manis, kecap asin, saus tiram, garam, dan merica.',
      'Aduk rata hingga mie matang dan bumbu meresap, sajikan.'
    ]
  },  
  18: {
    title: 'Bola Bola Mie',
    image: '/images/bola_bola_mie.jpeg',
    bahan: [
      '200 g mie telur, rebus',
      '500 g cumi, potong cincin',
      '2 siung bawang putih, cincang',
      '1 sdm saus tiram',
      '1 sdt kecap manis',
      '1 sdt merica',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Tumis bawang putih hingga harum.',
      'Masukkan cumi, aduk hingga berubah warna.',
      'Tambahkan saus tiram, kecap manis, merica, dan mie yang sudah direbus, aduk rata.'
    ]
  },  
  19: {
    title: 'Opor Ayam',
    image: '/images/opor_ayam.jpg',
    bahan: [
      '1 ekor ayam, potong-potong',
      '1 liter santan kelapa',
      '3 siung bawang putih, cincang halus',
      '5 siung bawang merah, cincang halus',
      '2 batang serai, memarkan',
      '2 lembar daun salam',
      '1 sdt ketumbar bubuk',
      '1 sdt kunyit bubuk',
      'Garam secukupnya',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Tumis bawang putih, bawang merah, serai, dan daun salam hingga harum.',
      'Masukkan ayam, aduk rata hingga ayam berubah warna.',
      'Tambahkan santan, ketumbar, kunyit, garam, dan masak dengan api kecil hingga ayam empuk dan bumbu meresap.'
    ]
  },  
  20: {
    title: 'Empal Gepuk',
    image: '/images/empal_gepuk.jpeg',
    bahan: [
      '500 g daging sapi, potong-potong',
      '2 siung bawang merah, iris tipis',
      '2 siung bawang putih, iris tipis',
      '2 batang serai, memarkan',
      '3 lembar daun salam',
      '2 cm lengkuas, memarkan',
      '1 sdt ketumbar',
      '1 sdt garam',
      '1 sdm gula merah',
      'Air secukupnya',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Tumis bawang merah, bawang putih, serai, dan daun salam hingga harum.',
      'Masukkan daging sapi, aduk rata, masak hingga berubah warna.',
      'Tambahkan air, lengkuas, ketumbar, garam, dan gula merah, masak dengan api kecil hingga daging empuk dan bumbu meresap.'
    ]
  },  
  21: {
    title: 'Cumi Saos Tiram',
    image: '/images/cumi_saos_tiram.jpeg',
    bahan: [
      '200 g cumi, bersihkan dan potong cincin',
      '3 siung bawang putih, cincang halus',
      '1 sdm saus tiram',
      '1 sdt kecap manis',
      '1 sdt merica',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Tumis bawang putih hingga harum.',
      'Masukkan cumi, aduk hingga berubah warna.',
      'Tambahkan saus tiram, kecap manis, merica, dan sedikit air, aduk rata dan masak hingga cumi matang.'
    ]
  },  
  22: {
    title: 'Sayur Bayam Bening',
    image: '/images/sayur_bayam_bening.jpg',
    bahan: [
      '200 g bayam segar, cuci bersih',
      '1 batang wortel, iris tipis',
      '3 siung bawang putih, cincang halus',
      '1 sdm minyak untuk menumis',
      'Garam dan merica secukupnya',
      'Air secukupnya'
    ],
    langkah: [
      'Tumis bawang putih hingga harum menggunakan minyak.',
      'Masukkan wortel dan bayam, aduk rata.',
      'Tambahkan air, garam, dan merica, masak hingga sayuran matang dan air sedikit mengental.'
    ]
  },  
  23: {
    title: 'Bihun Goreng',
    image: '/images/bihun_goreng.jpeg',
    bahan: [
      '200 g bihun kering, rendam air panas hingga lembut',
      '2 siung bawang putih, cincang halus',
      '1 batang daun bawang, iris tipis',
      '1 sdm kecap manis',
      '1 sdt garam',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Tumis bawang putih dengan sedikit minyak hingga harum.',
      'Masukkan bihun yang sudah direndam, aduk rata.',
      'Tambahkan kecap manis, garam, dan daun bawang, masak hingga bihun tercampur rata dan matang.'
    ]
  },  
  24: {
    title: 'Bakwan Sayur',
    image: '/images/bakwan_sayur.jpg',
    bahan: [
      '200 g tepung terigu',
      '100 g buncis, iris tipis',
      '1 buah wortel, parut kasar',
      '2 siung bawang putih, cincang halus',
      '1 butir telur',
      '1 sdt kecap manis',
      'Garam dan merica secukupnya',
      'Minyak untuk menggoreng'
    ],
    langkah: [
      'Campurkan tepung terigu, telur, bawang putih, kecap manis, garam, dan merica dalam satu wadah.',
      'Masukkan buncis dan wortel, aduk rata hingga adonan kental.',
      'Panaskan minyak di wajan, bentuk adonan menjadi bulat pipih, lalu goreng hingga kecoklatan dan matang sempurna.'
    ]
  },  
  25: {
    title: 'Ayam Kecap Pedas Manis',
    image: '/images/ayam_kecap_pedas_manis.jpeg',
    bahan: [
      '1 ekor ayam, potong sesuai selera',
      '3 siung bawang merah, iris tipis',
      '2 siung bawang putih, cincang halus',
      '5 cabai merah, iris serong',
      '2 sdm kecap manis',
      '1 sdt kecap asin',
      '1 sdt gula merah serut',
      'Garam dan merica secukupnya',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Tumis bawang merah, bawang putih, dan cabai hingga harum.',
      'Masukkan potongan ayam, aduk rata hingga ayam berubah warna.',
      'Tambahkan kecap manis, kecap asin, gula merah, garam, dan merica, aduk rata dan masak hingga ayam matang dan bumbu meresap.'
    ]
  },  
  26: {
    title: 'Sop Iga Sapi',
    image: '/images/sop_iga_sapi.jpeg',
    bahan: [
      '500 g iga sapi, potong-potong',
      '2 siung bawang putih, cincang halus',
      '1 buah bawang bombay, iris tipis',
      '2 batang seledri, ikat',
      '2 wortel, potong serong',
      '1 sdt merica bubuk',
      'Garam secukupnya',
      'Air secukupnya',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Rebus iga sapi dalam air mendidih hingga empuk, kemudian tiriskan.',
      'Tumis bawang putih dan bawang bombay hingga harum.',
      'Masukkan iga sapi yang sudah direbus, wortel, seledri, dan air, masak hingga sayuran empuk.',
      'Tambahkan merica, garam, dan koreksi rasa, masak hingga semua bahan matang dan kuah terasa lezat.'
    ]
  },  
  27: {
    title: 'Udang Balado',
    image: '/images/udang_balado.jpeg',
    bahan: [
      '500 g udang, kupas dan bersihkan',
      '5 cabai merah besar, haluskan',
      '3 cabai rawit merah, haluskan',
      '3 siung bawang merah, cincang halus',
      '2 siung bawang putih, cincang halus',
      '1 sdm gula merah serut',
      '1 sdt garam',
      'Minyak untuk menumis',
      'Air secukupnya'
    ],
    langkah: [
      'Tumis bawang merah, bawang putih, dan cabai halus hingga harum.',
      'Masukkan udang, aduk hingga berubah warna.',
      'Tambahkan gula merah, garam, dan sedikit air, masak hingga bumbu meresap dan kuah sedikit mengental.',
      'Sajikan udang balado dengan nasi hangat.'
    ]
  }, 
  28: {
    title: 'Tumis Buncis Wortel',
    image: '/images/tumis_buncis_wortel.jpeg',
    bahan: [
      '200 g buncis, potong-potong',
      '2 buah wortel, serut atau iris tipis',
      '2 siung bawang putih, cincang halus',
      '1 buah cabai merah, iris tipis',
      '1 sdm kecap manis',
      '1 sdt garam',
      'Minyak untuk menumis'
    ],
    langkah: [
      'Tumis bawang putih dan cabai merah hingga harum.',
      'Masukkan buncis dan wortel, aduk rata.',
      'Tambahkan kecap manis dan garam, masak hingga sayuran matang dan bumbu meresap.'
    ]
  },  
  29: {
    title: 'Nasi Uduk',
    image: '/images/nasi_uduk.jpeg' ,
    bahan: [
      '2 cup beras',
      '1 batang serai, memarkan',
      '3 lembar daun salam',
      '200 ml santan',
      'Garam secukupnya'
    ],
    langkah: [
      'Cuci beras hingga bersih, kemudian masukkan ke dalam rice cooker.',
      'Tambahkan serai, daun salam, santan, dan garam ke dalam rice cooker.',
      'Masak hingga nasi matang dan harum.'
    ]
  },  
  30: {
    title: 'Cireng Bumbu Rujak',
    image: '/images/cireng_bumbu_rujak.jpeg',
    bahan: [
      '200 g tepung kanji',
      '100 ml air panas',
      '2 siung bawang putih, haluskan',
      '1 sdt garam',
      '1 sdt kecap manis',
      '1 sdm bumbu rujak',
      'Minyak untuk menggoreng'
    ],
    langkah: [
      'Campurkan tepung kanji, air panas, bawang putih halus, garam, dan kecap manis, aduk hingga rata.',
      'Diamkan adonan selama 15 menit.',
      'Ambil sejumput adonan dan bulatkan, lalu pipihkan, bentuk cireng.',
      'Panaskan minyak, goreng cireng hingga kecokelatan dan garing.',
      'Angkat dan sajikan dengan bumbu rujak.'
    ]
  },  
  31: {
    title: 'Pisang Goreng Coklat',
    image: '/images/pisang_goreng_coklat.jpg',
    bahan: [
      '4 buah pisang raja',
      '100 g coklat batang, serut halus',
      '100 g tepung terigu',
      '1 butir telur',
      'Minyak untuk menggoreng',
      'Gula halus (optional)'
    ],
    langkah: [
      'Kupas pisang dan potong menjadi dua bagian.',
      'Celupkan pisang ke dalam adonan tepung terigu yang sudah dicampur telur.',
      'Goreng pisang hingga kecokelatan dan crispy.',
      'Taburi pisang goreng dengan coklat serut dan gula halus, sajikan.'
    ]
  },  
  32: {
    title: 'Kue Cubit',
    image: '/images/kue_cubit.jpeg',
    bahan: [
      '150 g tepung terigu',
      '1 butir telur',
      '50 g mentega, lelehkan',
      '75 g gula pasir',
      '100 ml susu cair',
      '1/2 sdt baking powder',
      '1/2 sdt vanili',
      'Meses atau coklat serut untuk topping'
    ],
    langkah: [
      'Campurkan tepung terigu, gula pasir, baking powder, dan vanili dalam satu wadah.',
      'Kocok telur dan tambahkan susu cair serta mentega leleh, aduk hingga rata.',
      'Masukkan campuran tepung ke dalam adonan cair, aduk hingga rata.',
      'Panaskan cetakan kue cubit, olesi dengan sedikit mentega, lalu tuang adonan.',
      'Masak dengan api kecil hingga permukaan atasnya setengah matang, beri meses atau coklat serut di atasnya, kemudian lipat dan sajikan.'
    ]
  },  
  33: {
    title: 'Kolak Pisang',
    image: '/images/kolak_pisang.jpeg',
    bahan: [
      '4 buah pisang raja, potong-potong',
      '200 ml santan kelapa',
      '100 g gula merah, serut halus',
      '1 lembar daun pandan',
      '1/2 sdt garam',
      'Air secukupnya'
    ],
    langkah: [
      'Rebus air bersama daun pandan dan gula merah hingga larut dan mendidih.',
      'Masukkan pisang, masak hingga pisang mulai empuk.',
      'Tambahkan santan dan garam, masak dengan api kecil hingga santan mendidih dan bumbu meresap.',
      'Angkat dan sajikan kolak pisang dalam mangkuk hangat.'
    ]
  },  
  34: {
    title: 'Donat Kentang',
    image: '/images/donat_kentang.jpeg',
    bahan: [
      '500 g kentang, rebus dan haluskan',
      '250 g tepung terigu',
      '1 butir telur',
      '50 g mentega',
      '100 ml air hangat',
      '1 sdt ragi instan',
      '50 g gula pasir',
      '1/2 sdt garam',
      'Minyak untuk menggoreng',
      'Gula halus untuk taburan'
    ],
    langkah: [
      'Campurkan tepung terigu, ragi instan, gula pasir, dan garam dalam mangkuk.',
      'Tambahkan kentang halus, telur, mentega, dan air hangat. Aduk hingga adonan kalis.',
      'Diamkan adonan selama 1 jam hingga mengembang.',
      'Bentuk adonan menjadi bulatan, lubangi tengahnya untuk membentuk donat.',
      'Panaskan minyak, goreng donat hingga kecokelatan.',
      'Tiriskan dan taburi dengan gula halus sebelum disajikan.'
    ]
  },  
  35: {
    title: 'Dadar Gulung',
    image: '/images/dadar_gulung.jpeg',
    bahan: [
      '100 g tepung terigu',
      '2 butir telur',
      '100 ml air',
      '1 sdt air daun pandan suji (untuk warna hijau)',
      '100 g kelapa parut kasar',
      'Gula pasir secukupnya',
      'Minyak untuk menggoreng'
    ],
    langkah: [
      'Campurkan tepung terigu, telur, air, dan air daun pandan suji hingga adonan licin.',
      'Panaskan wajan datar anti lengket, oleskan sedikit minyak.',
      'Tuang adonan tipis-tipis, masak hingga matang, angkat dan sisihkan.',
      'Isi dadar dengan kelapa parut yang sudah diberi sedikit gula, lalu gulung.',
      'Goreng dadar gulung sebentar hingga kecokelatan.'
    ]
  }
}

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeDetails[id];

  if (!recipe) {
    return <div className="text-center text-red-500 text-lg mt-10">Resep tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-h-96 object-cover rounded-2xl shadow-md mb-8"
      />
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Bahan-bahan:</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {recipe.bahan.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Langkah-langkah:</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          {recipe.langkah.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;