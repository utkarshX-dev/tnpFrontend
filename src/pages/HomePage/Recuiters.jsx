export default function Recruiters() {
  return (
    <div className="container my-4">
      <h2 className="section-underline text-center">Our Top Recruiters</h2>
      <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%", marginTop: "4rem" }}>
        <div
          style={{
            display: "inline-block",
            animation: "marquee 25s linear infinite",
            minWidth: "100%",
          }}
        >
          <img src="/recruiters/recruiter1.png" alt="Recruiter 1" style={{ height: 48, margin: "0 32px" }} />
          <img src="/recruiters/recruiter2.png" alt="Recruiter 2" style={{ height: 48, margin: "0 32px" }} />
          <img src="/recruiters/recruiter3.png" alt="Recruiter 3" style={{ height: 54, margin: "0 32px" }} />
          <img src="/recruiters/recruiter4.png" alt="Recruiter 4" style={{ height: 54, margin: "0 32px" }} />
          <img src="/recruiters/recruiter5.png" alt="Recruiter 5" style={{ height: 54, margin: "0 32px" }} />
          <img src="/recruiters/recruiter6.png" alt="Recruiter 6" style={{ height: 54, margin: "0 32px" }} />
          <img src="/recruiters/recruiter7.png" alt="Recruiter 7" style={{ height: 54, margin: "0 32px" }} />
          <img src="/recruiters/recruiter8.svg" alt="Recruiter 8" style={{ height: 54, margin: "0 32px" }} />
          <img src="/recruiters/recruiter9.svg" alt="Recruiter 9" style={{ height: 54, margin: "0 32px" }} />
          <img src="/recruiters/recruiter10.svg" alt="Recruiter 10" style={{ height: 54, margin: "0 32px" }} />
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}