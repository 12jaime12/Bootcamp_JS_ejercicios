const user = { name: "Peter", surname: "Parker" };

function a(user) {
  const nama = b(user.name);
  //antes = const nama = b(user.nama);
  console.log(nama);
}

function b(name) {
  return "Hello " + name;
}

a(user);
