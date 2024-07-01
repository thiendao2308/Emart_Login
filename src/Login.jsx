import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../fontawesome";

import { faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import Zalo from "./assets/zalo.png";
import Fb from "./assets/fb.png";
import Apple from "./assets/apple.png";
import TheThanhVien from "./assets/thethanhvien.png";

function Login() {
  return (
    <body>
      <div className="container">
        <div className="login">
          <div className="dang_nhap">
            <h3 className="h3_dangnhap">ĐĂNG NHẬP</h3>

            <input
              type="text"
              placeholder="Tên đăng nhập / Số điện thoại"
            ></input>
            <br></br>

            <input type="password" placeholder="Mật khẩu"></input>
            <br></br>
            <div className="quenmatkhau">
              <FontAwesomeIcon className="icon_lockquen" icon={faLock} />
              <a href="#" className="quen_mat_khau">
                QUÊN MẬT KHẨU
              </a>
            </div>

            <br></br>
            <button className="dangnhap">ĐĂNG NHẬP</button>
            <p className="p_dangnhap">
              Liên hệ tổng đài Hỗ trợ khách hàng khi quên Tài khoản/Mật khẩu
            </p>
            <p className="p_dangnhap">Hotline: (028) 3622 4567</p>
            <div className="icon_dangnhap">
              <img className="zalo_dangnhap" src={Zalo} alt="zalo "></img>
              <img className="fb_dangnhap" src={Fb} alt="fb "></img>
              <img className="apple_dangnhap" src={Apple} alt="apple "></img>
            </div>
          </div>
          <div className="line">
            <hr></hr>
          </div>
          <div className="dang_ky">
            <h3 className="h3_dangky">ĐĂNG KÝ</h3>
            <div className="option_dangky">
              <div className="the_thanh_vien">
                <p className="thethanhvien">ĐÃ CÓ THẺ THÀNH VIÊN EMART</p>
                <img
                  className="icon_thethanhvien"
                  src={TheThanhVien}
                  alt="thẻ thành viên"
                ></img>
                <p className="mota_thethanhvien">
                  Nếu Quý khách đã có thẻ thành viên<br></br>(thẻ cứng, mã vạch
                  8479) được cấp<br></br>tại Siêu thị Emart, vui lòng đăng ký
                  <br></br>thành viên bằng mã thẻ này.
                </p>
              </div>
              <div className="chua_thethanhvien">
                <p className="chuathethanhvien">CHƯA CÓ THẺ THÀNH VIÊN EMART</p>
                <div className="icon_dangky">
                  <FontAwesomeIcon className="phone" icon={faPhone} />
                  <img className="zalo_dangky" src={Zalo} alt="zalo"></img>
                  <img className="fb_dangky" src={Fb} alt="fb"></img>
                  <img className="apple_dangky" src={Apple} alt="apple"></img>
                </div>
                <p className="mota_chuathethanhvien">
                  Quý khách sẽ được cung cấp mã số<br></br>thẻ mới khi đăng ký
                  với các hình thức<br></br>trên. Mã số thẻ này sẽ không đổi
                  thành<br></br>thẻ cứng. Khi đến siêu thị Emart vẫn<br></br>có
                  thể tích điểm và sử dụng điểm thành<br></br>viên khi mở Ứng
                  dụng Emartmall và<br></br>đưa mã số thẻ cho Nhân viên thu
                  ngân.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
