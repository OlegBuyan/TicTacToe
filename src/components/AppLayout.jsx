export const AppLayout = (props) => {
  return (
    <>
      <div className="grid place-items-center h-screen text-5xl">
        {props.result}
        <div className="grid grid-cols-3 gap-4 ">
          {props.field.map((el, i) => (
            <div
              key={i}
              onClick={() => props.drawSymbol(i)}
              className="w-20 aspect-square bg-blue-500 cursor-pointer text-white  grid place-items-center text-5xl"
            >
              {props.isGameEnded ? props.currentPlayer : el}
            </div>
          ))}
        </div>

        <button
          onClick={props.getToStart}
          className={
            props.field.includes("X")
              ? `bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition`
              : `invisible`
          }
        >
          {props.isGameEnded ? `Начать с начала` : `Очистить поле`}
        </button>
      </div>
    </>
  );
};
