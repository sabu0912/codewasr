const frutas = ["naranja", "Mandarina", "platano", "mango", "pera"];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// console.log(frutas);
// **********************************************

// forEach me recorre un array para poder modificarlo
const arr = [];
const recorrer1 = frutas.forEach((elemento, i) => {
  console.log(frutas);
});

// me devuelve un array nuevo
const recorrer2 = frutas.map((elemnto, i) => {
  if (elemnto === "platano") {
    return elemnto;
  }
});
console.log(recorrer2);

// puedo filtrar un array y devolver un mismo array con el filtro a pasar
const recorrer3 = frutas.filter((elemento, i) => {
  return elemento[0].toLowerCase() === "m";
});
console.log(recorrer3);
// *************************************************

// me devuelve el elemento especifico
const users = [
  { name: "Juan", edad: 23 },
  { name: "Jose", edad: 43 },
  { name: "Saul", edad: 16 },
];

const recorrer4 = users.find((elemento, i) => {
  return elemento.edad === 23;
});
console.log(recorrer4);
// ***************************************************

function findNeedle(haystack) {
  return haystack.indexOf("needle");
}
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
// ****************************************************

const cannonsReady = (gunners) => {
  console.log(gunners);
  const valores = Object.values(gunners);
  console.log(valores);
  const valoresDevueltos = valores.filter((valor) => {
    if (valor !== "aye") {
      return valor;
    }
  });

  console.log(valoresDevueltos);
  return valoresDevueltos.length > 0 ? "Shiver me timbers!" : "Fire!";
};

const a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
const b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

console.log(cannonsReady(b));
// *********************************************************

function shortcut(string) {
  console.log(string);
  return string
    .split("a")
    .join("")
    .split("e")
    .join("")
    .split("i")
    .join("")
    .split("o")
    .join("")
    .split("u")
    .join("");
  console.log(called);
  return called;
}

console.log(shortcut("codewars"));
// ****************************************

function finalGrade(exam, projects) {
  console.log(exam, projects);
  if (exam > 90 || projects > 10) {
    return 100;
  }
  if (exam > 75 && projects >= 5) {
    return 90;
  }
  if (exam > 50 && projects >= 2) {
    return 75;
  }
  return 0;
}

console.log(finalGrade(20, 2));
// **************************************************

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }
  console.log(input);
  const positivos = input.filter((el) => {
    if (el > 0) {
      return el;
    }
  });
  console.log(positivos.length);
  const negativos = input.filter((neg) => {
    if (neg < 0) {
      return neg;
    }
  });
  console.log(negativos);
  if (negativos.length > 0) {
    const sumaNegativos = negativos.reduce((total, elemento) => {
      return total + elemento;
    });
    console.log(sumaNegativos);

    return [positivos.length, sumaNegativos];
  }
  return [positivos.length, 0];
}

console.log(countPositivesSumNegatives([0, 2, 10, 8, 6, 0, -20, -18, -32]));
// *************************************************************************

function abbrevName(name) {
  console.log(name);
  const iniciales = name.split(" ");
  console.log(iniciales);
  const inicial = iniciales.map((el) => {
    return el[0];
  });
  console.log(inicial);
  return inicial.join(".").toUpperCase();
}

console.log(abbrevName("sam harris"));
// ****************************************************

// function remove(string) {
//   console.log(string);
//   const eliminar = string.split(" ");
//   console.log(eliminar);
//   const eliminarCaracter = eliminar.map((e) => {
//     if (e.startsWith("!") && e.endsWith("!")) {
//       const palabra = e.replace(/!/g, "");
//       const separacion = e.split(palabra);
//       return separacion[0] + palabra;
//     } else if (e.startsWith("!")) {
//       return e;
//     } else {
//       const c = e.replace(/!/g, "");
//       return c;
//     }
//   });
//   console.log(eliminarCaracter);
//   return eliminarCaracter.join(" ");
// }

// console.log(remove("Hi! !Hi !!!Hi!"));
// ****************************************************

function remove(string) {
  const a = string.split(" ");
  const up = a[a.length - 1];
  if (up.startsWith("!") && up.endsWith("!")) {
    const palabra = up.replace(/!/g, "");
    const separacion = up.split(palabra);
    a[a.length - 1] = separacion[0] + palabra;
    return a.join(" ");
  } else if (up.startsWith("!")) {
    a[a.length - 1] = up;
    return a.join(" ");
  } else {
    a[a.length - 1] = up.replace(/!/g, "");
    return a.join(" ");
  }
}

console.log(remove("Hi! !Hi !!!Hi!"));
// ***************************************************

// lo mismo al de arriba que sirve para cortar string
function remove2(s) {
  while (s && s.slice(-1) == "!") {
    s = s.slice(0, -1);
  }
  return s;
}

console.log(remove2("Hi!! !Hi!!!"));
//  **********************************************

function removeChar(str) {
  const convertirArray = str.split("");
  convertirArray.shift();
  convertirArray.pop();
  return convertirArray.join("");
}

console.log(removeChar("eloquent"));
// **************************************************

function points(games) {
  let resultado = 0;
  games.forEach((e) => {
    const separar = e.split(":");
    const x = Number(separar[0]);
    const y = Number(separar[1]);
    if (x > y) {
      resultado += 3;
    } else if (x === y) {
      resultado++;
    }
  });
  return resultado;
}

console.log(
  points(["1:0", "2:0", "3:3", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
// ******************************************************

const areaOrPerimeter = function (l, w) {
  console.log(l, w);
  return l === w ? l * w : 2 * l + 2 * w;
  // if(l === w) {
  //   return l * w
  // } else {
  //   return (2 * l) + (2 * w)
  // }
};

console.log(areaOrPerimeter(4, 4));
// *****************************************

function eachCons(array, n) {
  const nuevoArray = [];
  array.forEach((e, i) => {
    const elemento = array.slice(i, i + n);
    nuevoArray.push(elemento);
  });
  return nuevoArray.filter((e) => e.length === n);
}

console.log(eachCons([3, 5, 8, 13], 2));
