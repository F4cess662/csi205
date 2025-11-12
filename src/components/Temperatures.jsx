import { useState, useEffect } from "react"
import Value from "./Value"

    const Temperatures = () => {
    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState(77);
    const [kelvin, setKelvin] = useState(298.15);

     useEffect(() => {
    setFahrenheit(celsius * 9 / 5 + 32);
    setKelvin(celsius + 273.15);
  }, [celsius]);
    
   useEffect(() => {
    const newC = (fahrenheit - 32) * 5 / 9;
    setCelsius(newC);
    setKelvin(newC + 273.15);
  }, [fahrenheit]);

    useEffect(() => {
    const newC = kelvin - 273.15;
    setCelsius(newC);
    setFahrenheit(newC * 9 / 5 + 32);
  }, [kelvin]);

    

    return(
        <div className="border border-black border-2 mx-auto rounded-3 p-2 mt-3 "
        style={{width: 'fit-content'}}>
        <h1 className="text-center text-primary">TEMPERRATURES</h1>
        <div className="d-flex  justify-content-around align-items-center" >
            <div className="badge bg-primary fs-4">{celsius.toFixed(2)} °C</div>
            <div className="badge bg-primary fs-4">{fahrenheit.toFixed(2)} °F</div>
            <div className="badge bg-primary fs-4">{kelvin.toFixed(2)} °K</div>
        </div>
        <div className="d-flex gap-2" >
        <Value name={'CELSIUS'} value={celsius} setValue={setCelsius} type={'real'} />
        <Value name={'FAHRENHEIT'} value={fahrenheit} setValue={setFahrenheit} type={'real'}/>
        <Value name={'KELVIN'} value={kelvin} setValue={setKelvin} type={'real'} />
        </div>
</div>
    )
}



export default Temperatures;