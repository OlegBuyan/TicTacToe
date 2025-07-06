export const FieldLayout = ({
  field,
  drawSymbol,
  isGameEnded,
  currentPlayer,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {field.map((el, i) => (
        <div
          key={i}
          onClick={() => drawSymbol(i)}
          className="w-20 aspect-square bg-blue-500 cursor-pointer text-white  grid place-items-center text-5xl"
        >
          {isGameEnded ? currentPlayer : el}
        </div>
      ))}
    </div>
  );
};
