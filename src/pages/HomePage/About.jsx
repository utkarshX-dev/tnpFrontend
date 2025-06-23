export default function About() {
  return (
    <div className="container mt-5" id="about">
      <div className="row mb-5">
        <div className="col-6 text-center mt-5">
          <img src="/vc.png" alt="vc" className="img-fluid" style={{ maxHeight: "320px", objectFit: "contain" }} />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <h1>
            <sup><i className="fa-solid fa-quote-left"></i></sup>&nbsp;Prof. Prateek Sharma
          </h1>
          <h5 className="fs-5 text-muted">
            Vice Chancellor, Delhi Technological University
          </h5>
          <p className="mt-4 text-muted" style={{ fontSize: "0.95rem" }}>
            Delhi Technological University (DTU), formerly Delhi College of Engineering, has a distinguished legacy of over 84 years in delivering high-quality education, pioneering research, and fostering innovation. As one of the country’s premier institutions, DTU remains committed to producing competent, industry-ready professionals across diverse disciplines including engineering, technology, management, and finance. Our academic programs are designed to provide a strong foundation in core principles, complemented by hands-on projects, research opportunities, and holistic development initiatives that nurture both technical competence and leadership qualities.
            <br /><br />
            The University maintains strong linkages with industry and actively promotes collaborative initiatives that ensure our graduates are well-prepared to meet evolving professional challenges. Our distinguished faculty actively bridge the gap between academia and industry, engaging in collaborative research and practice.
            <br /><br />
            To our valued industry partners, I extend an invitation to collaborate with DTU’s skilled and motivated student cohort. We are confident that our graduates will contribute meaningfully to your organizations, both in technical capability and professional conduct.
            <br /><br />
          </p>
        </div>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col-6 d-flex flex-column justify-content-center">
          <h1>
            <sup><i className="fa-solid fa-quote-left"></i></sup>&nbsp;Prof. Anil Singh Parihar
          </h1>
          <h5 className="fs-5 text-muted">
            HOD, Training & Placement Department,<br />
            Delhi Technological University
          </h5>
          <p className="mt-4 text-muted" style={{ fontSize: "0.95rem" }}>
            It is my pleasure to welcome you to the Training and Placement portal of Delhi Technological University.
            At DTU, we recognize that academic excellence must be complemented by strong industry engagement. The Department of Training and Placement serves as a strategic link between the university and the corporate world, facilitating career opportunities for students while supporting the talent acquisition needs of our recruitment partners.
            <br /><br />
            Our students are among the most talented and dedicated in the country. Through a comprehensive curriculum, hands-on learning, and consistent mentoring, they develop the skills and mindset needed to contribute meaningfully in dynamic professional environments.
            <br /><br />
            I extend my sincere appreciation to all our valued recruiters for their continued trust and association with DTU. We are committed to supporting the talent needs of our recruiters by connecting them with students who are not only academically strong but also adaptable, analytical, and ready to take on real-world challenges. We welcome all our recruiters to engage with our students through internships, full-time placements, live projects, and campus connect initiatives.
            <br /><br />
            <b>Why Choose DTU Students?</b>
            <ul>
              <li>Strong academic foundation and practical exposure</li>
              <li>Excellent communication and leadership skills</li>
              <li>Adaptability to dynamic work environments</li>
              <li>Proven track record in national and international placements</li>
              <li>Active participation in research, innovation, and entrepreneurship</li>
            </ul>
            <br />
            We look forward to building lasting partnerships and creating new opportunities for growth and success together.
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-4 text-center">
          <img src="/hod.png" alt="hod" className="img-fluid" style={{ maxHeight: "320px", objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}