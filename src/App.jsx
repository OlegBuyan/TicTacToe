import { useInformarion } from "./components";
import { AppLayout } from "./components";

function App() {
  const { field, currentPlayer, isGameEnded, result, drawSymbol, getToStart } =
    useInformarion();
  return (
    <AppLayout
      result={result}
      field={field}
      drawSymbol={drawSymbol}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
      getToStart={getToStart}
    />
  );
}

export default App;
