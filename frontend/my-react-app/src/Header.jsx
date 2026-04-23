import './Header.css'

export default function Header({step}){
    return (
        <header>
            <h1 className={step == 1 ? "active" : "inactive"}>Schritt 1</h1>
            <h1 className={step == 2 ? "active" : "inactive"}>Schritt 2</h1>
            <h1 className={step == 3 ? "active" : "inactive"}>Schritt 3</h1>
        </header>
    );
}