import { useState } from "react";
import './Body.css'

export default function Body({step, setStep}){
    const[currency, setCurrency] = useState("usd");
    const[value, setValue] = useState(0);
    const[result, setResult] = useState();

    async function handleCalculation(){
        if(!value){
            return;
        }

        try{
            const response = await fetch(`http://localhost:8080/convert?amount=${value}&currency=${currency}`);
            const data = await response.json();
            setResult(data);
        } catch (error){
            console.error("Verbindung zum Backend fehlgeschlagen", error)
            setResult(-1);
        }
        setStep(3);
    }


    if(step == 1){
        return(
            <div className="step">
                    <h2>Wählen Sie ihre Zielwährung ein:</h2>
                    <div className="input">
                        <select name="currency" 
                        id="currency" 
                        onChange={(e) => setCurrency(e.target.value)}>
                            <option value="usd">US-Dollar</option>
                            <option value="jpy">Japanischer Yen</option>
                            <option value="gbp">Britisches Pfund</option>
                            <option value="aud">Australischer Dollar</option>
                            <option value="cad">Kanadischer Dollar</option>
                            <option value="chf">Schweizer Franken</option>
                            <option value="cny">Chinesischer Yuan</option>
                            <option value="hkd">Hongkong Dollar</option>
                            <option value="sgd">Singapur Dollar</option>
                            <option value="nzd">Neuseeländischer Dollar</option>
                        </select>
                        <button className="input" onClick={() => setStep(2)}>Weiter</button>
                </div>
            </div>
        );
    } 


    if(step == 2){
        return(
            <div className="step">
                <h2>Geben Sie den Betrag in Euro ein:</h2>
                <div className="input">
                    <input 
                    className="input"
                    type="text"
                    onChange={(e) => {if(!isNaN(e.target.value)){setValue(e.target.value)}}}
                    value={value}/>
                    <button className="input" onClick={() => handleCalculation()}>Umrechnen</button>
                </div>
            </div>
        );
    }


    if(step == 3) {
        if(result == -1){
            return <h2 className="error">Das Backend ist aktuell nicht erreichbar. Bitte später versuchen.</h2>
        } else{
            return(
                <div className="step">
                    <h2>{value} Euro sind {result} {currency.toUpperCase()}</h2>
                    <button onClick={() => setStep(1)}>Neue Umrechnung</button>
                </div>
            );
        }
    }
}