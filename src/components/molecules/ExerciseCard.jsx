import ExerciseImage from "../atoms/ExerciseImage";
import ExerciseTitle from "../atoms/ExerciseTitle";
import ExerciseSubtitle from "../atoms/ExerciseSubtitle";
import ChevronIcon from "../atoms/ChevronIcon";
import SectionLabel from "../atoms/SectionLabel";

const ExerciseCard = ({ title, subtitle, imageSrc }) => {
  return (
    <div>
      <SectionLabel text="item" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          backgroundColor: "#1e1e1e",
          borderRadius: "12px",
          padding: "12px",
          marginTop: "4px",
        }}
      >
        <ExerciseImage src={imageSrc} alt={title} />
        <div style={{ flex: 1 }}>
          <ExerciseTitle text={title} />
          <ExerciseSubtitle text={subtitle} />
        </div>
        <ChevronIcon />
      </div>
    </div>
  );
};

export default ExerciseCard;