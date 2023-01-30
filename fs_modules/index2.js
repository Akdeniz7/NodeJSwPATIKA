const fs = require('fs');

//DOSYA OKUMAK
fs.readFile('password.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log('Dosya okundu');
})

//DOSYA YAZMAK 
fs.writeFile('example.txt', 'Hello Node.js', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('Dosya olusturuldu');
});

//VERI EKLEMEK
fs.appendFile('example.txt', '\nHello Node.js 2', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('Yeni veri eklendi');
});

//DOSYA SILMEK
fs.unlink('example.txt', (err) => {
    if(err) console.log(err);
    console.log('Dosya silindi');
})

//KLASORLER OLUSTURMAK
fs.mkdir('uploads/img', {recursive: true}, (err) => {
    if(err) console.log(err);
    console.log('Klasorler olusturuldu');
})

//KLASORLERI SILMEK
fs.rmdir('uploads', {recursive: true}, (err) => {
    if(err) console.log(err);
    console.log('Klasorler silindi');
})

