import { appendFile } from "fs";
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = (message) => {
  return new Promise((resolve) => {
    readline.question(message, (answer) => {
      resolve(answer);
    });
  });
};

class Person {
  constructor(name = "", number = "", email = "") {
    this.name = name;
    this.number = number;
    this.email = email;
  }

  async saveToCSV() {
    const content = `${this.name},${this.number},${this.email}\n`;
    return new Promise((resolve, reject) => {
      appendFile("./contacts.csv", content, (err) => {
        if (err) reject(err);
        else {
          console.log(`${this.name} Saved!`);
          resolve();
        }
      });
    });
  }
}

async function getUserInput() {
  const person = new Person();
  person.name = await readLineAsync("Contact Name: ");
  person.number = await readLineAsync("Contact Number: ");
  person.email = await readLineAsync("Contact Email: ");
  return person;
}

async function processInput() {
  while (true) {
    const person = await getUserInput();
    await person.saveToCSV();
    const response = await readLineAsync("Continue? [y to continue]: ");
    if (response !== "y") {
      readline.close();
      break;
    }
  }
}

async function addQueu() {
  const person = new Person();
  person.name = "Coco Ponceda";
  person.number = "123-456-7890";
  person.email = "poncoco@uca.gov";
  person.saveToCSV();
}

processInput();
addQueu();
