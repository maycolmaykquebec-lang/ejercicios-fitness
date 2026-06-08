const ExerciseImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100px",
        height: "80px",
        objectFit: "cover",
        borderRadius: "8px",
        flexShrink: 0,
      }}
    />
  );
};

export default ExerciseImage;
