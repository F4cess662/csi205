import { useState } from "react";
import RadixCounter from "../components/RadixCounter";
import Value from "../components/Value";
import Adder from "../components/Adder";
import Temperatures from "../components/temperatures";
import Timer from "../components/Timer";

const components = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <div className="d-flex justify-content-center gap-3">
          <div className="row-cols-1 ">
            <Value name={"COUNTER"} value={counter} setValue={setCounter} />
            <Timer />
          </div>
              <div><Adder name={""} /> </div>
            </div>

            <div>
              <Temperatures />
          </div>
       

        <h5 className="text-center fw-bold mt-3">
          67149922 นายสุทธิพงศ์ สัมฤทธิ์
        </h5>
      </div>
    </>
  );
};

export default components;
