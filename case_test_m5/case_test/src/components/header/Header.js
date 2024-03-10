import '../statics/css/styles.css'
import '../statics/js/scripts'

export function Header() {




    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="/">Furama resort</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/service">Dịch vụ</a></li>
                            <li className="nav-item"><a className="nav-link" href="/customer">Khách hàng</a></li>
                            <li className="nav-item"><a className="nav-link" href="/employee">Nhân viên</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contract">Hợp đồng</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="masthead">

            </header>


        </>

    )
}