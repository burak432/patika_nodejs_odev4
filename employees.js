import {
  appendFile,
  appendFileSync,
  readFile,
  readFileSync,
  unlink,
  unlinkSync,
  writeFile,
  writeFileSync,
} from "fs";

setTimeout(() => {
  return writeFile(
    "employees.json",
    ` {"name": "Employee 1 Name", "salary": 2000} `,
    "utf-8",
    (err, data) => {
      if (err) console.log(`bir hata oluştu. ${err}`);
      console.log("dosya oluşturuldu");
    }
  );
}, 2000);

setTimeout(() => {
  return readFile("employees.json", "utf-8", (err, data) => {
    if (err) console.log(`bir hata oluştu. ${err}`);
    const veriler = data;
    console.log(`dosyadan okunan veri : \n ${veriler}`);
  });
}, 2000);

setTimeout(() => {
  return appendFile("employees.json", `\n "dosya güncellendi"`, (err) => {
    if (err) console.log(`bir hata oluştu. ${err}`);
    console.log("yeni veriler eklendi");
  });
}, 2000);

setTimeout(() => {
  return readFile("employees.json", "utf-8", (err, data) => {
    if (err) console.log(`bir hata oluştu. ${err}`);
    const veriler = data;
    console.log(`dosyadan okunan veri : \n ${veriler}`);
  });
}, 2000);

setTimeout(() => {
  return unlink("employees.json", (err) => {
    if (err) console.log(err);
    console.log(`dosya silindi`);
  });
}, 2000);
