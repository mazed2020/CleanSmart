import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "80px 0",
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(to right, #f8fafc, #ffffff)",
      }}
    >
      <h2
        style={{
          fontSize: "44px",
          fontWeight: "700",
          color: "#0f172a",
          position: "relative",
        }}
      >
        {title}
        <span
          style={{
            position: "absolute",
            bottom: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "4px",
            backgroundColor: "#22c55e",
            borderRadius: "2px",
          }}
        />
      </h2>
    </div>
  );
};

export default SectionHeading;

