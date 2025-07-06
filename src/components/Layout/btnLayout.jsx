export const BtnLayout = ({ getToStart, field, isGameEnded }) => {
  return (
    <button
      onClick={getToStart}
      className={
        field.includes("X")
          ? `bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition`
          : `invisible`
      }
    >
      {isGameEnded ? `Начать с начала` : `Очистить поле`}
    </button>
  );
};
