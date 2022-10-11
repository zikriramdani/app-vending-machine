## Getting Started

First, run website:

```bash
npm install
# lanjut
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tentang Website

Website ini dibuat menggunakan Framework Next JS dengan tambahan package-package lain, seperti :

```bash
 1. bootstrap 5,
 4. Menampilkan DATA JSON dari file JSON,
 5. Redux,
 6. Hooks
```

Redux

```bash
Redux adalah sebuah aplikasi state management.
State management adalah cara untuk memfasilitasi komunikasi dan berbagai data lintas komponen.

Redux memiliki 3 komponen utama yaitu Action, Reducer, dan Store :

1. Action
   Action merupakan Suatu event,
   di mana ia adalah satu-satunya cara Anda dapat mengirim data dari aplikasi Anda ke Redux Store.
2. Reducer
   Reducer merupakan Fungsi murni yang mengambil status aplikasi saat ini.
   Reducer juga berfungsi untuk melakukan tindakan,dan mengembalikan status baru (new state).
3. Store
   Store berfungsi untuk menyimpan status aplikasi.

Keuntungan Menggunakan Redux
Seperti yang sudah dijelaskan sebelumnya, Redux berkolaborasi dengan React,
dengan menggunakan Redux React, Anda tidak akan membutuhkan waktu lama untuk meningkatkan state.

Hal ini memudahkan Anda untuk untuk melacak action atau tindakan mana yang menyebabkan perubahan.
Komponen-komponen yang ada pada Redux,
tidak perlu menyediakan status atau metode apa pun bagi komponen turunannya
untuk berbagi data di antara mereka sendiri.

Semuanya ditangani oleh Redux.
Hal ini pun sangat menyederhanakan aplikasi dan membuatnya lebih mudah untuk dipelihara.

```

Hooks

```bash
Hooks merupakan penambahan baru pada React 16.8.
Hooks memungkinkan Anda menggunakan state dan fitur React lainnya tanpa membuat sebuah kelas.
```
