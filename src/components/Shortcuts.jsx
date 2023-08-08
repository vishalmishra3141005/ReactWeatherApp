

export default function Shortcuts() {

    const metros = ["Mumbai", "Delhi", "Kolkata", "Chennai"];

    return (
        <div className="shortcut-container">
            { metros.map(function(metro) {
                return (
                    <div className="shortcut-ind"> { metro } </div>
                )
            })}
        </div>
    );
}