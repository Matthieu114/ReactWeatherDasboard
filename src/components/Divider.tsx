interface DividerProps {
  height: number;
  width: number;
}

function Divider({ height, width }: DividerProps) {
  return <span className={`h-[${height}px] w-[${width}px] bg-gray-600`} />;
}

export default Divider;
