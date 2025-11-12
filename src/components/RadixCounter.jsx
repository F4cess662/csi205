import { useState } from "react";

const RadixCounter = () => {
  // getter, setter
  const [Value, setValue] = useState(0);

  const plusClicked = () => {
    if (Value >= 4095){
      setValue(0)
    }else{
      setValue((prev) => prev + 1 )
    }
    //setValue(Value + 1) set direct to value
  };

  const resetClicked = () => {
    setValue(0);
  };

  const minusClicked = () => {
    if (Value <= 0) {
      setValue(4095);
    } else {
      setValue((prev) => prev - 1);
    }
  };

  return (
    // container
    <div
      className="border border-2 border-black rounded-3 p-3 m-auto"
      style={{ width: "400px" }}
    >
      {/* title */}
      <div className="text-center fw-bold fs-4"> Radix Counter</div>

      {/* Body */}
      <div className="d-flex justify-content-between mt-3">
        <div className="text-center">
          <div className="fw-bold">[HEX]</div>
          <div className="font-monospace">{Value.toString(16).toUpperCase().padStart(3, '0')}</div>
        </div>

        <div className="text-center">
          <div className="fw-bold">[DEX]</div>
          <div className="font-monospace text-primary fw-bold">
            {Value.toString(10).padStart(4, "0")}
          </div>
        </div>

        <div className="text-center">
          <div className="fw-bold">[OCT]</div>
          <div className="font-monospace">{Value.toString(8).padStart(4, '0')}</div>
        </div>

        <div className="text-center">
          <div className="fw-bold">[BIN]</div>
          <div className="font-monospace">{Value.toString(2).padStart(12, '0')}</div>
        </div>
      </div>

      {/* Button */}
      <div className="d-flex justify-content-around mt-3">
        <button className="btn btn-danger px-4" onClick={minusClicked}>
          &minus;
        </button>
        <button className="btn btn-secondary px-4" onClick={resetClicked}>
          RESET
        </button>
        <button className="btn btn-success px-4" onClick={plusClicked}>
          +
        </button>
      </div>
    </div>
  );
};

export default RadixCounter;
