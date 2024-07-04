// lấy dữ liệu chi tiết
function getDetailShoe(id = 8) {
  let promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: "GET",
  })
  promise
    .then((res) => {
      // console.log(res.data.content);
      renderDetailGiay(res.data.content)
    })
    .catch((err) => {
      console.log(err)
    })
}

getDetailShoe()

function renderDetailGiay(giay, idTheCha = "baiTap3") {
  console.log(giay)
  let { image, name, description, size, price, relatedProducts } = giay
  let content = `
     <div class="col-5">
          <img src=${image} alt="">
        </div>
        <div class="col-7">
          <h3>${name}</h3>
          <p>${description}</p>
          <!-- số size giày  -->
          <div>
            ${renderSizeGiay(size)}
          </div>
          <!-- giá tiền  -->
          <p>${price}</p>
          <button class="btn btn-dark">Mua ngay</button>
        </div>
    `
  document.getElementById(idTheCha).innerHTML = content
  renderDuLieuGiay(relatedProducts, "baiTap4")
}

function renderSizeGiay(arrSize) {
  content = ""
  for (let size of arrSize) {
    content += `<button class="btn btn-dark me-3">${size}</button>`
  }
  // thực hiện trả về chuỗi html chứa các nút button được tạo ra từ mảng size
  return content
}

function renderDuLieuGiay(arrGiay, idTheCha = "baiTap2") {
  let content = ""
  for (let giay of arrGiay) {
    let { image, name, price, shortDescription, id } = giay
    content += `
       <div class="col-4">
          <!-- hiển thị hình  -->
          <img src=${image} class="w-100" alt="">
          <!-- tên sản phẩm  -->
          <h4>${name}</h4>
          <!-- mô tả ngắn  -->
          <p>${shortDescription}</p>
          <!-- số tiền  -->
          <p>${price}</p>
          <!-- nút chức năng mua ngay  -->
          <button onclick="duaNguoiDiToi(${id})" class="btn btn-dark">Mua ngay</button>
        </div>
      `
  }
  document.getElementById(idTheCha).innerHTML = content
}
