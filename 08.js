// Definir la clase CZooAnimal en JavaScript
class CZooAnimal {
    constructor(idAnimal, name, cageNumber, idTypeAnimal, weight) {
      this.idAnimal = idAnimal;
      this.name = name;
      this.cageNumber = cageNumber;
      this.idTypeAnimal = idTypeAnimal; // 1: felinos, 2: aves, 3: reptiles, etc.
      this.weight = weight;
    }
  }
  
  // Crear los datos iniciales de animales
  const zooAnimals = [
    new CZooAnimal(1, "Tigre", 3, 1, 150),
    new CZooAnimal(2, "Loro", 5, 2, 2),
    new CZooAnimal(3, "León", 4, 1, 180),
    new CZooAnimal(4, "Serpiente", 5, 3, 1.5),
    new CZooAnimal(5, "Jaguar", 2, 1, 120)
  ];
  
  // b. Cantidad de animales en la Jaula 5 con peso menor a 3 kg
  const cage5Under3Kg = zooAnimals.filter(animal => animal.cageNumber === 5 && animal.weight < 3);
  document.write(`<p>Cantidad de animales en la jaula 5 con peso menor a 3 kg: ${cage5Under3Kg.length}</p>`);
  
  // c. Cantidad de felinos en jaulas 2 a 5
  const felinosCage2To5 = zooAnimals.filter(animal => animal.idTypeAnimal === 1 && animal.cageNumber >= 2 && animal.cageNumber <= 5);
  document.write(`<p>Cantidad de felinos en jaulas 2 a 5: ${felinosCage2To5.length}</p>`);
  
  // d. Nombre del animal en la Jaula 4 con peso menor a 120
  const cage4Under120 = zooAnimals.find(animal => animal.cageNumber === 4 && animal.weight < 120);
  if (cage4Under120) {
    document.write(`<p>Animal en la jaula 4 con peso menor a 120: ${cage4Under120.name}</p>`);
  } else {
    document.write(`<p>No hay animales en la jaula 4 con peso menor a 120.</p>`);
  }
  
  // e y f. Mostrar los datos de zooAnimals en una tabla
  function generateTable(animals) {
    let table = `<table border="1">`;
    table += `<tr><th>ID</th><th>Nombre</th><th>Jaula</th><th>Tipo</th><th>Peso (kg)</th></tr>`;
    animals.forEach(animal => {
      table += `<tr>`;
      table += `<td>${animal.idAnimal}</td>`;
      table += `<td>${animal.name}</td>`;
      table += `<td>${animal.cageNumber}</td>`;
      table += `<td>${animal.idTypeAnimal}</td>`;
      table += `<td>${animal.weight}</td>`;
      table += `</tr>`;
    });
    table += `</table>`;
    return table;
  }
  
  document.write("<h3>Animales del zoológico:</h3>");
  document.write(generateTable(zooAnimals));
  