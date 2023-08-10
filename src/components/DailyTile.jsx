

export default function DailyTile({day, icon, temp}) {
    
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ];

    console.log(day);
    console.log(iconUrl);
    return (
        <div className="daily-tile-container">
            <div>{dayName[day]}</div>
            <img src={iconUrl}/>
            <div>{temp}</div>
        </div>
    )
}