import SectionCard from "./SectionCard";
export default function Section() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="section-underline">
        Best Practices
      </h1>
      <div className="row mb-4">
        <SectionCard
          Title="LEADXCELENCE 2023"
          date="12-Oct-23"
          organizedby="Maruti Suzuki India Limited"
          participationCnt="300+"
          Category="Soft Skills & Communication"
          skillsgained={[
            "Leadership Skills",
            "Excellence in management",
            "Industry Exposure"
          ]}
          imageofCard="/p1.png"
        />
      </div>
      <div className="row mb-4">
        <SectionCard
          Title="Mobile Innovation Hub"
          date="13-Oct-23"
          organizedby="Schneider Electric"
          participationCnt="270+"
          Category="Innovation and Technology"
          skillsgained={[
            "Innovation",
            "Technology Trends",
            "Product Development"
          ]}
          imageofCard="/p2.png"
        />
      </div>
      <div className="row mb-4">
        <SectionCard
          Title="Career in Data Science"
          date="28-Feb-24"
          organizedby="American Express"
          participationCnt="260+"
          Category="Technical Training"
          skillsgained={[
            "Data Analysis",
            "Machine Learning",
            "Industry Applications"
          ]}
          imageofCard="/p3.png"
        />
      </div>
    </div>
  );
}