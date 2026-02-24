import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "50px 0",
        display: "flex",
        justifyContent: "center",
        borderRadius:"20px 20px 0px 0px",
        background: "#ffffff ",
      }}
    >
      <h2
        style={{
          fontSize: "35px",
          fontWeight: "700",
          color: "#2563eb",
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
            backgroundColor: "#ec5800",
            borderRadius: "2px",
          }}
        />
      </h2>
    </div>
  );
};

export default SectionHeading;

