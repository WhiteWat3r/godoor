export const ArrowLeft = ({ height = "25px", width = "25px" }) => {
  return (
    <svg
      className="rotate-180 cursor-pointer fill-[#67381a] transition-all duration-300 hover:fill-[#ba5c22]"
      style={{ height, width }}
      viewBox="0 0 5 9"
    >
      <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
    </svg>
  );
};
