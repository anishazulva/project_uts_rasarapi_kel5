import { useParams } from 'react-router-dom';

const recipeDetails = {
  1: {
    title: 'Ayam Bakar',
    image: 'https://source.unsplash.com/400x300/?grilled-chicken',
    bahan: ['1 ekor ayam, potong 4 bagian', '5 siung bawang putih', '3 butir kemiri', '2 sdm kecap manis', '1 sdt garam', '1 sdm minyak goreng'],
    langkah: [
      'Haluskan bawang putih dan kemiri, tumis hingga harum.',
      'Tambahkan kecap dan garam, aduk rata.',
      'Lumuri ayam dengan bumbu, diamkan 30 menit.',
      'Bakar ayam hingga matang sambil sesekali dioles bumbu.'
    ]
  },
  2: {
    title: 'Sayur Asem',
    image: 'https://source.unsplash.com/400x300/?vegetables',
    bahan: ['100 g kacang panjang', '1 buah labu siam', '1 buah jagung manis', '3 lembar daun salam', '2 cm lengkuas', '2 sdm asam jawa'],
    langkah: [
      'Rebus air, masukkan daun salam dan lengkuas.',
      'Tambahkan sayuran dan rebus hingga lunak.',
      'Masukkan asam jawa dan garam, koreksi rasa.'
    ]
  },
  3: {
    title: 'Nasi Goreng',
    image: 'https://source.unsplash.com/400x300/?fried-rice',
    bahan: ['2 piring nasi putih', '2 siung bawang putih', '1 butir telur', 'Kecap manis secukupnya', 'Garam dan merica'],
    langkah: [
      'Tumis bawang putih hingga harum.',
      'Masukkan telur, orak-arik.',
      'Tambahkan nasi, bumbui dengan kecap, garam, merica.',
      'Aduk rata hingga nasi matang dan harum.'
    ]
  },
  4: {
    title: 'Mie Goreng',
    image: 'https://source.unsplash.com/400x300/?fried-noodles',
    bahan: ['1 bungkus mie telur', '2 siung bawang putih', '1 butir telur', 'Kecap manis secukupnya', 'Sayuran (kol, wortel)'],
    langkah: [
      'Rebus mie hingga matang, tiriskan.',
      'Tumis bawang putih hingga harum.',
      'Masukkan telur, orak-arik, tambahkan sayuran.',
      'Masukkan mie, beri kecap dan bumbu, aduk rata.'
    ]
  },
  5: {
    title: 'Sate',
    image: 'https://source.unsplash.com/400x300/?satay',
    bahan: ['250 g daging ayam/sapi', '10 tusuk sate', '2 siung bawang putih', '2 sdm kecap manis', '1 sdt ketumbar bubuk'],
    langkah: [
      'Potong daging, campur dengan bumbu dan kecap.',
      'Diamkan minimal 30 menit.',
      'Tusuk daging ke tusukan sate.',
      'Bakar sate sambil dioles sisa bumbu hingga matang.'
    ]
  },
  6: {
    title: 'Ayam Goreng Lengkuas',
    image: 'https://source.unsplash.com/400x300/?fried-chicken',
    bahan: ['1 ekor ayam', '5 siung bawang putih', '3 cm lengkuas parut', '1 sdt ketumbar bubuk', 'Garam secukupnya'],
    langkah: [
      'Haluskan bumbu, lumuri ayam.',
      'Diamkan selama 30 menit.',
      'Goreng ayam hingga matang dan berwarna keemasan.'
    ]
  },
  7: {
    title: 'Ayam Rica-Rica',
    image: 'https://source.unsplash.com/400x300/?spicy-chicken',
    bahan: ['1 ekor ayam', '5 cabai merah besar', '10 cabai rawit', '5 siung bawang merah', '2 siung bawang putih'],
    langkah: [
      'Haluskan semua bumbu.',
      'Tumis hingga harum, masukkan ayam.',
      'Tambahkan air, masak hingga ayam empuk dan bumbu meresap.'
    ]
  },
  8: {
    title: 'Opor Ayam',
    image: 'https://source.unsplash.com/400x300/?chicken-curry',
    bahan: ['1 ekor ayam', '5 siung bawang merah', '3 siung bawang putih', '1 sdt ketumbar', 'Santan dari 1 butir kelapa'],
    langkah: [
      'Haluskan bumbu, tumis hingga harum.',
      'Masukkan ayam, aduk rata.',
      'Tambahkan santan, masak hingga ayam empuk dan kuah mengental.'
    ]
  },
  9: {
    title: 'Ayam Kecap Pedas Manis',
    image: 'https://source.unsplash.com/400x300/?sweet-spicy-chicken',
    bahan: ['500 g ayam', '5 siung bawang merah', '2 siung bawang putih', '5 cabai rawit', '3 sdm kecap manis'],
    langkah: [
      'Tumis bawang dan cabai hingga harum.',
      'Masukkan ayam, aduk hingga berubah warna.',
      'Tambahkan kecap, air sedikit, masak hingga ayam matang dan bumbu meresap.'
    ]
  },
  10: {
    title: 'Semur Daging',
    image: 'https://source.unsplash.com/400x300/?beef-stew',
    bahan: ['500 g daging sapi', '5 siung bawang merah', '3 siung bawang putih', '2 sdm kecap manis', '1 sdt merica', '1 sdt garam'],
    langkah: [
      'Tumis bawang merah dan putih hingga harum.',
      'Masukkan daging, aduk hingga berubah warna.',
      'Tambahkan kecap, merica, garam, dan air, masak hingga daging empuk.'
    ]
  },
  11: {
    title: 'Rendang Daging Sapi',
    image: 'https://source.unsplash.com/400x300/?beef-rendang',
    bahan: ['1 kg daging sapi', '3 lembar daun salam', '2 batang serai', '1 sdt jintan', 'Santan kelapa dari 1 butir kelapa'],
    langkah: [
      'Tumis bumbu halus, daun salam, dan serai hingga harum.',
      'Masukkan daging, tambahkan air dan santan.',
      'Masak dengan api kecil hingga daging empuk dan bumbu meresap.'
    ]
  },
  12: {
    title: 'Daging Lada Hitam',
    image: 'https://source.unsplash.com/400x300/?black-pepper-beef',
    bahan: ['500 g daging sapi', '2 sdm lada hitam', '2 siung bawang putih', '1 sdt kecap manis', '1 sdt garam'],
    langkah: [
      'Tumis bawang putih hingga harum.',
      'Masukkan daging dan lada hitam, aduk rata.',
      'Tambahkan kecap manis, garam, dan sedikit air, masak hingga daging matang.'
    ]
  },
  13: {
    title: 'Empal Gepuk',
    image: 'https://source.unsplash.com/400x300/?beef-empal',
    bahan: ['500 g daging sapi', '3 siung bawang putih', '2 sdm gula merah', '1 sdt ketumbar', '2 lembar daun salam'],
    langkah: [
      'Rebus daging dengan daun salam hingga empuk.',
      'Tumbuk daging dengan ulekan, goreng hingga kecokelatan.',
      'Masak bumbu dengan gula merah hingga mengental, tambahkan daging, aduk rata.'
    ]
  },
  14: {
    title: 'Sop Iga Sapi',
    image: 'https://source.unsplash.com/400x300/?beef-ribs-soup',
    bahan: ['500 g iga sapi', '3 siung bawang putih', '1 batang daun bawang', '2 lembar daun salam', 'Santan secukupnya'],
    langkah: [
      'Rebus iga sapi dengan daun salam hingga empuk.',
      'Tumis bawang putih dan masukkan ke dalam rebusan iga.',
      'Tambahkan daun bawang dan santan, masak hingga kuah meresap.'
    ]
  },
  15: {
    title: 'Ikan Goreng Kuning',
    image: 'https://source.unsplash.com/400x300/?fried-fish',
    bahan: ['2 ekor ikan nila', '2 siung bawang putih', '1 sdt kunyit bubuk', 'Garam dan merica'],
    langkah: [
      'Lumuri ikan dengan bumbu halus dan diamkan sebentar.',
      'Goreng ikan dalam minyak panas hingga keemasan.',
      'Tiriskan dan sajikan dengan sambal.'
    ]
  },
  16: {
    title: 'Pepes Ikan',
    image: 'https://source.unsplash.com/400x300/?pepper-fish',
    bahan: ['2 ekor ikan nila', '5 siung bawang merah', '1 batang serai', '2 lembar daun pisang', 'Garam dan merica'],
    langkah: [
      'Haluskan bumbu dan lumuri ikan dengan bumbu.',
      'Bungkus ikan dengan daun pisang dan kukus selama 30 menit.',
      'Panggang pepes ikan di atas bara api atau grill.'
    ]
  },
  17: {
    title: 'Ikan Asam Manis',
    image: 'https://source.unsplash.com/400x300/?sweet-sour-fish',
    bahan: ['1 ekor ikan gurame', '2 siung bawang putih', '2 cabai merah', '1 sdt gula pasir', '2 sdm saus tomat'],
    langkah: [
      'Tumis bawang putih dan cabai hingga harum.',
      'Masukkan ikan yang telah digoreng, tambahkan saus tomat, gula, dan air.',
      'Masak hingga kuah mengental dan ikan tercampur rata.'
    ]
  },
  18: {
    title: 'Cumi Saos Tiram',
    image: 'https://source.unsplash.com/400x300/?squid-oyster-sauce',
    bahan: ['500 g cumi', '2 siung bawang putih', '1 sdm saus tiram', '1 sdt kecap manis', '1 sdt merica'],
    langkah: [
      'Tumis bawang putih hingga harum.',
      'Masukkan cumi, aduk hingga berubah warna.',
      'Tambahkan saus tiram, kecap manis, dan merica, aduk rata.'
    ]
  },
  19: {
    title: 'Udang Balado',
    image: 'https://source.unsplash.com/400x300/?shrimp-balado',
    bahan: ['300 g udang', '5 cabai merah besar', '5 cabai rawit', '2 siung bawang merah', 'Garam secukupnya'],
    langkah: [
      'Haluskan bawang merah dan cabai.',
      'Tumis bumbu halus hingga harum.',
      'Masukkan udang, masak hingga berubah warna dan bumbu meresap.'
    ]
  },
  20: {
    title: 'Sayur Asem',
    image: 'https://source.unsplash.com/400x300/?vegetable-soup',
    bahan: ['100 g kacang panjang', '1 buah labu siam', '1 buah jagung manis', '3 lembar daun salam', '2 cm lengkuas', '2 sdm asam jawa'],
    langkah: [
      'Rebus air, masukkan daun salam dan lengkuas.',
      'Tambahkan sayuran dan rebus hingga lunak.',
      'Masukkan asam jawa dan garam, koreksi rasa.'
    ]
  },
  21: {
    title: 'Tumis Kangkung',
    image: 'https://source.unsplash.com/400x300/?water-spinach',
    bahan: ['200 g kangkung', '3 siung bawang putih', '1 sdt terasi', '1 sdt kecap manis', 'Garam secukupnya'],
    langkah: [
      'Tumis bawang putih dan terasi hingga harum.',
      'Masukkan kangkung, aduk rata.',
      'Tambahkan kecap manis dan garam, masak hingga kangkung layu.'
    ]
  },
  22: {
    title: 'Capcay Kuah',
    image: 'https://source.unsplash.com/400x300/?capcay',
    bahan: ['100 g kol', '100 g wortel', '100 g kembang kol', '3 siung bawang putih', '1 sdm saus tiram'],
    langkah: [
      'Tumis bawang putih hingga harum.',
      'Masukkan sayuran dan saus tiram, aduk rata.',
      'Tambahkan air dan masak hingga sayuran matang.'
    ]
  },
  23: {
    title: 'Sayur Bayam Bening',
    image: 'https://source.unsplash.com/400x300/?spinach-soup',
    bahan: ['200 g bayam', '1 buah tomat', '2 siung bawang putih', '1 sdt garam', 'Air secukupnya'],
    langkah: [
      'Rebus air dengan bawang putih hingga mendidih.',
      'Masukkan tomat dan bayam, masak sebentar.',
      'Tambahkan garam dan koreksi rasa.'
    ]
  },
  24: {
    title: 'Tumis Buncis Wortel',
    image: 'https://source.unsplash.com/400x300/?stir-fried-beans',
    bahan: ['200 g buncis', '1 buah wortel', '2 siung bawang putih', '1 sdt kecap manis', 'Garam secukupnya'],
    langkah: [
      'Tumis bawang putih hingga harum.',
      'Masukkan wortel dan buncis, aduk rata.',
      'Tambahkan kecap manis dan garam, masak hingga sayuran matang.'
    ]
  },
  25: {
    title: 'Nasi Goreng Kampung',
    image: 'https://source.unsplash.com/400x300/?kampung-fried-rice',
    bahan: ['2 piring nasi putih', '2 siung bawang merah', '1 butir telur', '1 sdm kecap manis', 'Garam secukupnya'],
    langkah: [
      'Tumis bawang merah hingga harum.',
      'Masukkan telur, aduk rata hingga matang.',
      'Tambahkan nasi, kecap manis, dan garam, aduk rata hingga tercampur.'
    ]
  },
  26: {
    title: 'Nasi Goreng Spesial',
    image: 'https://source.unsplash.com/400x300/?special-fried-rice',
    bahan: ['2 piring nasi putih', '2 siung bawang putih', '1 butir telur', '2 sdm saus sambal', '1 sdm kecap manis'],
    langkah: [
      'Tumis bawang putih hingga harum.',
      'Masukkan telur, aduk hingga matang.',
      'Tambahkan nasi, saus sambal, kecap manis, aduk rata dan masak hingga merata.'
    ]
  },
  27: {
    title: 'Mie Goreng Rumahan',
    image: 'https://source.unsplash.com/400x300/?home-made-noodles',
    bahan: ['200 g mie telur', '2 siung bawang merah', '1 buah wortel', '2 sdm kecap manis', 'Garam secukupnya'],
    langkah: [
      'Rebus mie hingga matang, tiriskan.',
      'Tumis bawang merah dan wortel hingga matang.',
      'Tambahkan mie, kecap manis, dan garam, aduk rata dan masak hingga tercampur.'
    ]
  },
  28: {
    title: 'Bihun Goreng',
    image: 'https://source.unsplash.com/400x300/?fried-bihun',
    bahan: ['200 g bihun', '2 siung bawang putih', '1 buah cabai merah', '1 sdm kecap manis', '1 sdt garam'],
    langkah: [
      'Rebus bihun hingga lunak, tiriskan.',
      'Tumis bawang putih dan cabai hingga harum.',
      'Masukkan bihun, kecap manis, dan garam, aduk rata hingga merata.'
    ]
  },
  29: {
    title: 'Nasi Uduk',
    image: 'https://source.unsplash.com/400x300/?nasi-uduk',
    bahan: ['2 cup beras', '1 batang serai', '3 lembar daun salam', '200 ml santan', 'Garam secukupnya'],
    langkah: [
      'Cuci beras dan masukkan ke dalam rice cooker bersama serai, daun salam, santan, dan garam.',
      'Masak hingga nasi matang dan harum.'
    ]
  },
  30: {
    title: 'Tahu Isi Sayur',
    image: 'https://source.unsplash.com/400x300/?stuffed-tofu',
    bahan: ['6 potong tahu sutra', '100 g wortel', '100 g buncis', '2 siung bawang putih', '1 sdt kecap manis'],
    langkah: [
      'Tumis bawang putih hingga harum.',
      'Isi tahu dengan campuran wortel dan buncis, lalu kukus hingga matang.',
      'Goreng tahu hingga berwarna keemasan.'
    ]
  },
  31: {
    title: 'Risol Mayo',
    image: 'https://source.unsplash.com/400x300/?risol-mayo',
    bahan: ['5 lembar kulit risol', '100 g daging ayam cincang', '50 g wortel parut', '100 g mayones', 'Minyak untuk menggoreng'],
    langkah: [
      'Tumis daging ayam dan wortel hingga matang.',
      'Ambil selembar kulit risol, beri isian, lalu gulung rapat.',
      'Celupkan risol ke dalam telur kocok, goreng hingga kecokelatan.',
      'Sajikan dengan mayones.'
    ]
  },
  32: {
    title: 'Bola-Bola Mie',
    image: 'https://source.unsplash.com/400x300/?noodle-balls',
    bahan: ['100 g mie telur', '1 butir telur', '50 g daging ayam cincang', '1 sdt kecap manis', 'Minyak untuk menggoreng'],
    langkah: [
      'Rebus mie hingga matang, tiriskan.',
      'Campurkan mie, daging ayam, telur, dan kecap, bentuk bola-bola kecil.',
      'Goreng bola-bola mie hingga keemasan dan matang.'
    ]
  },
  33: {
    title: 'Bakwan Sayur',
    image: 'https://source.unsplash.com/400x300/?vegetable-fritter',
    bahan: ['100 g tepung terigu', '50 g wortel parut', '50 g kol iris halus', '1 siung bawang putih', 'Air secukupnya'],
    langkah: [
      'Campurkan tepung terigu, wortel, kol, dan bawang putih.',
      'Tambahkan air sedikit-sedikit hingga adonan bisa dipulung.',
      'Goreng adonan dalam minyak panas hingga bakwan berwarna kecokelatan.'
    ]
  },
  34: {
    title: 'Cireng Bumbu Rujak',
    image: 'https://source.unsplash.com/400x300/?cireng',
    bahan: ['100 g tepung kanji', '50 g ayam cincang', '2 siung bawang putih', '1 sdt garam', 'Minyak untuk menggoreng'],
    langkah: [
      'Campurkan tepung kanji, ayam cincang, bawang putih, dan garam.',
      'Bentuk adonan bulat-bulat kecil, goreng hingga kecokelatan.',
      'Sajikan dengan bumbu rujak.'
    ]
  },
  35: {
    title: 'Pisang Goreng Coklat',
    image: 'https://source.unsplash.com/400x300/?chocolate-fried-bananas',
    bahan: ['4 buah pisang raja', '100 g coklat batang', 'Minyak untuk menggoreng', 'Tepung terigu secukupnya'],
    langkah: [
      'Potong pisang menjadi dua bagian.',
      'Lelehkan coklat, celupkan pisang ke dalam coklat, lalu balut dengan tepung terigu.',
      'Goreng pisang dalam minyak panas hingga coklat meleleh dan pisang berwarna keemasan.'
    ]
  }
};

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeDetails[id];

  if (!recipe) {
    return <div className="p-4 text-center text-red-600">Resep tidak ditemukan.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-2xl mb-4">Bahan-bahan</h2>
      <ul className="list-disc pl-6 mb-6">
        {recipe.bahan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl mb-4">Langkah-langkah</h2>
      <ol className="list-decimal pl-6">
        {recipe.langkah.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;