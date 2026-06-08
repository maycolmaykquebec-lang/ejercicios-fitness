import ExerciseCard from "./ExerciseCard";

const exercises = [
  {
    id: 1,
    title: "Puxada frontal",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200",
  },
  {
    id: 2,
    title: "Remada curvada",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200",
  },
  {
    id: 3,
    title: "Remada unilateral",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=200",
  },
  {
    id: 4,
    title: "Levantamento terra",
    subtitle: "3 séries x 12 repetições",
    imageSrc: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=200",
  },
];

const ExerciseList = () => {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: "24px 16px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <h2 style={{ color: "#ffffff", margin: 0, fontSize: "22px", fontWeight: "bold" }}>
          Exercícios
        </h2>
        <span style={{ color: "#ffffff", fontSize: "22px" }}>4</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {exercises.map((ex) => (
          <ExerciseCard
            key={ex.id}
            title={ex.title}
            subtitle={ex.subtitle}
            imageSrc={ex.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;