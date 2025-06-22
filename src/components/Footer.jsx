import FooterForm from "./FooterForm";
export default function Footer() {
  return (
    <>
      <div
        className="container-fluid py-5 text-white p-5"
        style={{
          background: `url("/footer_backdrop.png") center center/cover no-repeat`,
        }} id="footer"
      >
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="row">
              <div className="col-6">
                <h3 style={{ fontWeight: 500 }}>
                  Delhi Technological <br />
                  University
                </h3>
                <p style={{ fontWeight: 400 }}>
                  Bawana Rd,
                  <br /> Delhi Technological University,
                  <br /> Shahbad Daulatpur Village,
                  <br /> Rohini, Delhi - 110042
                </p>
              </div>
              <div
                className="col-6"
                style={{ borderLeft: "1px solid #fff", paddingLeft: "2rem" }}
              >
                <h3 style={{ fontWeight: 500 }}>
                  Department of
                  <br />
                  Training & Placement
                </h3>
                <p style={{ fontWeight: 400 }}>
                  Head of Department: Prof. Anil Singh Parihar
                  <br />
                  Email:{" "}
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    placements@dtu.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <FooterForm />
          </div>
        </div>
        <br />
        <br />
        <hr />
        <p className="fs-6 text-center">
          Made with <span style={{ color: "#ff4d4f" }}>❤️</span> by Utkarsh for
          the DTU Training & Placement Cell Team
        </p>
      </div>
    </>
  );
}