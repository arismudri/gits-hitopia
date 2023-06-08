# Gits Hitopia Test

A node js app with 3 endpoints (Weighted Strings, Highest Palindrom, Balanced Bracket).

## Instalation

To install this project, run the following command in terminal:

```
npm install
```

## How to use

To run this project, run the following command in terminal:

```
npm run dev
```

By default the port used is 3000. 
To access the endpoint you can import the api collection in the folder attachment,
file api_collection_Gits Hitopia.json

Weighted Strings : (GET) http://localhost:3000/weighted-strings?string=abbcccd&queries=1,3,9,8

Highest Palindrom : (GET) http://localhost:3000/highest-palindrom?string=134211&key=1

Balanced Bracket : (GET) http://localhost:3000/balanced-bracket?bracket_string={ ( ( [ ] ) [ ] ) [ ] }
 
## Penjelasan soal No.3

Funsgsi yang saya buat secara sederhana akan mencari kombinasi string "()" atau "{}" atau "[]" didalam variable inputan.
Jika ditemukan maka kobinasi string didalam variable inputan akan di replace/dihapus.
Secara rekursif proses ini berulang dengan harapan akan mengeluarkan nilai balikan berupa string kosong "" yang akan menghasilkan result "Yes".
Jika nilai balikan bukan "" maka variable inputan dinyatakan tidak seimbang dan result "No".