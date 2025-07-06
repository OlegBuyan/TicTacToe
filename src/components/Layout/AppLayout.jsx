import { FieldLayout } from "./FieldLayout";
import { BtnLayout } from "./btnLayout";
export const AppLayout = (props) => {
  return (
    <>
      <div className="grid place-items-center h-screen text-5xl">
        {props.result}
        <FieldLayout
          field={props.field}
          drawSymbol={props.drawSymbol}
          isGameEnded={props.isGameEnded}
          currentPlayer={props.currentPlayer}
        />
        <BtnLayout
          field={props.field}
          isGameEnded={props.isGameEnded}
          getToStart={props.getToStart}
        />
      </div>
    </>
  );
};
