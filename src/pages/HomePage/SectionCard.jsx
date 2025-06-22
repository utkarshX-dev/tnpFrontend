export default function SectionCard({
  Title,
  date,
  organizedby,
  imageofCard,
  participationCnt,
  Category,
  skillsgained,
}) {
  return (
    <div
      className="card mb-3 mx-auto mt-5"
      style={{
        width: "60%",
        background: "#e6f0ff",
        border: "none",
      }}
    >
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          <img
            src={imageofCard}
            className="img-fluid rounded-start"
            alt={Title}
            style={{ objectFit: "cover", height: "100%", minHeight: "160px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-start" style={{ marginLeft: "1.5rem" }}>
            <h5 className="card-title fw-bold">{Title}</h5>
            <div className="mb-2 text-secondary" style={{ fontSize: "0.98rem" }}>
              <span className="fw-semibold">{date}</span>
            </div>
            <p className="mb-1">
              <span className="fw-semibold">Organized by:</span> {organizedby}
            </p>
            <p className="mb-1">
              <span className="fw-semibold">Participation:</span> {participationCnt}
            </p>
            <p className="mb-1">
              <span className="fw-semibold">Category:</span> {Category}
            </p>
            <div className="mb-1">
              <span className="fw-semibold">Skills Gained:</span>
              <ul className="mb-0 ps-4">
                {Array.isArray(skillsgained) ? (
                  skillsgained.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))
                ) : (
                  <li>{skillsgained}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}