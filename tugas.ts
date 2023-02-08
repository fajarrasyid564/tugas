for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++) {
    if (y + x == 10 || x == y || x < 1 || x == 5 || x == 10)
      document.write(" * ");
    else document.write(" _ ");
  }
  document.write("<br>");
}

for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++) {
    if (y + x == 5 || y - x == 5 || x + y == 15 || x - y == 5)
      document.write(" * ");
    else document.write(" _ ");
  }
  document.write("<br>");
}

for (let y = 0; y <= 10; y++) {
  for (let x = 0; x <= 10; x++) {
    if (y <= x) document.write(" * ");
    else document.write(" _ ");
  }
  document.write("<br>");
}
