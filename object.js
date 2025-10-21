let auto = {
  marka: "Toyota",
  modelis: "Corolla",
  gads: 2012
};

console.log("Auto marka:", auto.marka);
console.log("Auto modelis:", auto.modelis);
console.log("Auto gads:", auto.gads);

let tekošaisGads = new Date().getFullYear();
let autoVecums = tekošaisGads - auto.gads;

if (autoVecums > 10) {
  console.log("Auto ir vecāks par 10 gadiem.");
} else {
  console.log("Auto nav vecāks par 10 gadiem.");
}
