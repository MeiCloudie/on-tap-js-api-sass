import renderDuLieuGiay from "./util.js"
import { duongDan as path } from "./util.js"

let duongDan = "hello"

// ôn tập hiển thị nội dung lên giao diện
let arrMonAn = [
  {
    ten: "Mì xào",
    soLuong: 5,
    gia: 10000,
    trangThai: true,
  },
  {
    ten: "Bún bò",
    soLuong: 3,
    gia: 15000,
    trangThai: false,
  },
  {
    ten: "Sushi",
    soLuong: 50,
    gia: 100000,
    trangThai: true,
  },
  {
    ten: "Mì cay",
    soLuong: 12,
    gia: 30000,
    trangThai: false,
  },
]

let content = ""
for (let monAn of arrMonAn) {
  // destructuring
  let { ten, soLuong, gia, trangThai } = monAn
  if (trangThai) {
    content += `
        <div class="col-3">
            <!-- chứa tên món -->
            <h3>${ten}</h3>
            <!-- chứa số lượng món -->
            <p>${soLuong}</p>
            <!-- chứa giá tiền -->
            <p>${gia}</p>
        </div>
    `
  }
}

document.getElementById("baiTap1").innerHTML = content

// lấy dữ liệu từ BE
function layDanhSachGiay() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  })

  promise
    .then((res) => {
      console.log(res.data.content)
      // res.data.content
      renderDuLieuGiay(res.data.content)
    })
    .catch((err) => {
      console.log(err)
    })
}
layDanhSachGiay()

function duaNguoiDiToi(id) {
  window.location.href = `http://127.0.0.1:5500/detail.html?id=${id}`
}

console.log(path)
