const products = [
  {
    id: 501,
    details: {
      name: "Nasi Tempong",
      category: "Food",
      description: "Paket nasi dengan lauk ayam bakar sambal terasi",
      tags: ["pedas", "tradisional", "utama"]
    },
    pricing: {
      base_price: 20000,
      tax: 2000,
      service_charge: 1000
    },
    stock: 50,
    metadata: {
      created_at: "2024-01-15",
      chef_special: true,
      rating: 4.8
    }
  },
  {
    id: 502,
    details: {
      name: "Es Dawet",
      category: "Beverage",
      description: "Minuman tradisional dengan santan dan gula merah",
      tags: ["manis", "segar", "tradisional"]
    },
    pricing: {
      base_price: 8000,
      tax: 800
    },
    stock: 100,
    metadata: {
      created_at: "2024-01-20",
      chef_special: false,
      rating: 4.5
    }
  },
  {
    id: 503,
    details: {
      name: "Sate Kalak",
      category: "Food",
      description: "Sate khas Using Banyuwangi dengan bumbu kacang",
      tags: ["pedas", "khas", "unggulan"]
    },
    pricing: {
      base_price: 25000,
      tax: 2500,
      service_charge: 1500
    },
    stock: 30,
    metadata: {
      created_at: "2024-02-01",
      chef_special: true,
      rating: 4.9
    }
  },
  {
    id: 504,
    details: {
      name: "Rujak Soto",
      category: "Food",
      description: "Kombinasi unik rujak buah dengan kuah soto",
      tags: ["asam", "pedas", "unik"]
    },
    pricing: {
      base_price: 22000,
      tax: 2200
    },
    stock: 0,
    metadata: {
      created_at: "2024-01-10",
      chef_special: false,
      rating: 4.7
    }
  },
  {
    id: 505,
    details: {
      name: "Wedang Ronde",
      category: "Beverage",
      description: "Minuman hangat dengan bola-bola ketan",
      tags: ["hangat", "manis", "penutup"]
    },
    pricing: {
      base_price: 12000,
      tax: 1200
    },
    stock: 40,
    metadata: {
      created_at: "2024-02-05",
      chef_special: false,
      rating: 4.6
    }
  },
  {
    id: 506,
    details: {
      name: "Kue Lapis",
      category: "Snack",
      description: "Kue tradisional berlapis warna-warni",
      tags: ["manis", "kue", "cemilan"]
    },
    pricing: {
      base_price: 15000,
      tax: 1500
    },
    stock: 25,
    metadata: {
      created_at: "2024-01-25",
      chef_special: true,
      rating: 4.8
    }
  }
];

module.exports = products;