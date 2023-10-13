let productcardDiv = document.querySelector(".product-list");

fetch("https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093")
  .then((response) => response.json())
  .then((data) => {
    let aa = data.data;
    aa.forEach((ele) => {
      productcardDiv.innerHTML += `<div class="row product-card">
            <div class="col col-4">
                <div class="badge">${ele.product_badge}</div>
                <div>
                    <img id="img1" src="${ele.product_image}"
                        alt="Product Image">
                </div>
            </div>
            <div class="col col-8">
                <div class="product-details">
                    <h3>${ele.product_title}</h3>
                    <ul>
                        <li>${ele.product_variants[0].v1}</li>
                        <li>${ele.product_variants[1].v2}</li>
                        <li>${ele.product_variants[2].v3}</li>
                    </ul>
                </div>
            </div>`;
    });
  })
  .catch((error) => {
    console.error(error);
  });
