

export default function Shortcuts({setCity}) {

    const metros = ["Mumbai", "Delhi", "Kolkata", "Chennai"];

    return (
        <div className="shortcut-container">
            { metros.map(function(metro) {
                return (
                    <div onClick={(e) => { e.stopPropagation(); setCity(metro); }} className="shortcut-ind"> { metro } </div>
                );
            })}
        </div>
    );
}