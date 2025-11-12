import { useState } from "react"
import Value from "./Value"

const Adder = ({name}) => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return (
        <div className="border border-2 border-black mx-auto p-2 mt-3 rounded-3" 
        style={{width: 'fit-content'}}>
        <h1 className="text-center text-primary">{name || 'ADD'}</h1>

        <div className="d-flex justify-content-between align-items-center gap-2">
            {/* {A},{A+B},{B} */}
        <div className="badge bg-secondary fs-4">A = {a}</div>
        <div className="badge bg-primary fs-4">A + B = {a + b}</div>
        <div className="badge bg-secondary fs-4">B = {b}</div>
        </div>
    {/* Component A,B */}
    <div className="d-flex gap-2">
        <Value name={'A'} value={a} setValue={setA}/> 
        <Value name={'B'} value={b} setValue={setB}/> 
    </div>
        </div>
    )
}
export default Adder