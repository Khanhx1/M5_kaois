
import intro from '../statics/assets/img/home/intro.jpg'
import tag_1 from '../statics/assets/img/home/tag-1.jpg'
import tag_2 from '../statics/assets/img/home/tag-2.jpg'
import tag_3 from '../statics/assets/img/home/tag-3.jpg'
export function Home1() {

    return (

        <>


            <section className="about-section text-center" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="text-white mb-4">KHU NGHỈ DƯỠNG FURAMA ĐÀ NẴNG, TỰ HÀO LÀ KHU NGHỈ DƯỠNG ẨM
                                THỰC TẠI VIỆT NAM</h2>
                            <p className="text-white-50">
                                Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà Nẵng là cửa ngõ đến với 3
                                di sản văn hoá thế giới: Hội An (20 phút), Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng
                                hạng sang cùng với 70 căn biệt thự từ hai đến bốn phòng ngủ có hồ bơi riêng đều được
                                trang trí trang nhã, theo phong cách thiết kế truyền thống của Việt Nam và kiến trúc
                                thuộc địa của Pháp, biến Furama thành khu nghỉ dưỡng danh giá nhất tại Việt Nam – vinh
                                dự được đón tiếp nhiều người nổi tiếng, giới hoàng gia, chính khách, ngôi sao điện ảnh
                                và các nhà lãnh đạo kinh doanh quốc tế.
                            </p>
                        </div>
                    </div>
                    <img className="img-fluid"
                         src={intro}
                         alt="anh resort"/>
                </div>
            </section>

            <section className="projects-section bg-light" id="projects">
                <div className="container px-4 px-lg-5">

                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0"
                                                                src={tag_1}
                                                                alt="room"/></div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Phòng Garden Superior</h4>
                                <p className="text-black-50 mb-0">Với diện tích 40.1m2
                                    cộng với 11m2 ban công hoặc sân thượng hướng nhìn ra vườn. Phòng dành cho 2 người
                                    ,Phòng có 2 giường đơn ,Có thể kê thêm tối đa: 1 giường phụ.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid"
                                                       src={tag_2}
                                                       alt="pool"/></div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white">Tổ chức</h4>
                                        <p className="mb-0 text-white-50">Có hồ bơi lớn ngoài trời trong khuôn viên
                                            resort và hồ bơi riêng của mỗi căn biệt thự. Có bãi biển riêng cho các hoạt
                                            động giải trí trên biển và tổ cức hội họp.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gx-0 justify-content-center">
                        <div className="col-lg-6"><img className="img-fluid"
                                                       src={tag_3}
                                                       alt="..."/></div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">Địa lý</h4>
                                        <p className="mb-0 text-white-50">Nằm tại vị trí đắc địa gần trung tâm Đà Nẵng
                                            và là nơi kết nối quốc tế thuận tiện đến Singapore, Bangkok, Xiêm Riệp,
                                            Kuala Lumpur, Đài Loan, Tokyo, Osaka, Busan, Seoul, Tokyo, Osaka và Hồng
                                            Kông – Ma Cao, Trung Quốc bao gồm: Bắc Kinh, Thượng Hải, Hàng Châu, Quảng
                                            Châu, Thành Đô bằng các chuyến bay trực tiếp, khu nghỉ dưỡng Furama Đà Nẵng
                                            là điểm đến lý tưởng cho các đại lý du lịch, doanh nghiệp, công ty tổ chức
                                            sự kiện. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="signup-section" id="signup">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-10 col-lg-8 mx-auto text-center">
                            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                            <h2 className="text-white mb-5">Nhận thông báo mới nhất về dịch vụ</h2>

                            <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">

                                <div className="row input-group-newsletter">
                                    <div className="col"><input className="form-control" id="emailAddress" type="email"
                                                                placeholder="Nhập email..."
                                                                aria-label="Enter email address..."
                                                                data-sb-validations="required,email"/></div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary" id="submitButton"
                                                type="button">Đăng ký
                                        </button>
                                    </div>
                                </div>
                                <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email
                                    is required.
                                </div>
                                <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is
                                    not valid.
                                </div>

                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3 mt-2 text-white">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br/>
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>

                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3 mt-2">Error sending message!</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section bg-black">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Địa chỉ</h4>
                                    <hr className="my-4 mx-auto"/>
                                    <div className="small text-black-50">71 Ngũ Hành Sơn, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4 mx-auto"/>
                                    <div className="small text-black-50"><a href="#!">khanh@gg.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Số điện thoại</h4>
                                    <hr className="my-4 mx-auto"/>
                                    <div className="small text-black-50">+(84) 912365478</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social d-flex justify-content-center">
                        <a className="mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="mx-2" href="#!"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </section>

        </>
    )
}