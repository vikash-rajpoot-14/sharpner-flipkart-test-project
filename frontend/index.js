const price = document.getElementById("price");
const name = document.getElementById("name");
const submit = document.getElementById("submit");
let ul = document.getElementById("item");
const totalPrice = document.getElementById("totalPrice");
showData();

console.log(totalPrice);
submit.addEventListener("click", showHandler);

async function showHandler() {
  const obj = {
    price: price.value,
    name: name.value,
  };
  await axios.post("http://localhost:3000/products", obj);
  price.value = "";
  name.value = "";
  showData();
}

async function showData() {
  const products = await axios.get("http://localhost:3000/products");
  let listData = "";
  let totalAmount = 0;
  if (products.data.data.length < 1) {
    ul.innerHTML = listData;
    totalPrice.innerHTML = totalAmount;
  }
  products.data.data.map((product) => {
    listData += '<li class="list-item">';
    listData += `${product.name} ${product.price}  `;
    listData +=
      "<button class='btn-delete' onclick='deleteData(`" +
      product.id +
      "`)'>delete</button>";
    listData += "</li>";
    totalAmount += product.price;
    ul.innerHTML = listData;
  });
  totalPrice.innerHTML = totalAmount;
}

async function deleteData(id) {
  await axios.delete(`http://localhost:3000/products/${id}`);
  showData();
}
