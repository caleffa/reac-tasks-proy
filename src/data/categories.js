export const categories = [
  fetch("http://localhost:3500/api/v1/categories"
  )
    .then((response) => response.json())
    .then((data) => console.log(data)),
];
