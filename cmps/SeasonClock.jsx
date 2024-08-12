const { useState, useEffect, useRef } = React

export function SeasonClock({ darkMode = false }) {
  const [isDark, setIsDark] = useState(darkMode)
  const [seasonName, setSeasonName] = useState('Winter')
  const [day, setDay] = useState('Sunday')
  const [time, setTime] = useState(null)
  const intervalId = useRef(null)

    useEffect(() => {
      intervalId.current = setInterval(() => setTime(getCurrentTime()), 1000);
      return () => clearInterval(intervalId.current);
    }, []);

  useEffect(() => {
    displaySeason()
    displayDay()
  }, [])

  function getCurrentTime() {
    const now = new Date()
    return now.toLocaleTimeString('en-US', {hour12: false})
}

function onStop(ev) {
  ev.stopPropagation()
  clearInterval(intervalId.current);
  intervalId.current = null;
  }
  
function displayDay() {
    const date = new Date()
    const day = date.getDay()
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    setDay(dayNames[day])
}

function displaySeason() {
  const date = new Date()
  const month = date.getMonth() 
  

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let seasonName

    if (month >= 3 && month <= 5) seasonName = 'Spring'
    else if (month >= 6 && month <= 8) seasonName = 'Summer'
    else if (month >= 9 && month <= 11) seasonName = 'Fall'
    else setseasonName('Winter');
  
  setSeasonName({
    seasonName,
    month: monthNames[month],
  })
}
  
function toggleDarkMode() {
  setIsDark((isDark) => !isDark);
}
  
function sectionStyle() {
  var classList = ['season-clock'];
  if (isDark) classList.push('dark');

  return classList.join(' ');
}

function getSeasonImage(season) {
    return `assets/images/${season}.png`;
}
  


  return (
    <section className="seasons-container">
      <h2>Season Clock</h2>
      <div className={sectionStyle()} onClick={toggleDarkMode}>
        <h3>{seasonName.month} ({seasonName.seasonName})</h3>
        <img src={getSeasonImage(seasonName.seasonName)} alt={seasonName.seasonName} />
        <p>{day}</p>
        <span>{time}</span>
        <button onClick={onStop}>Stop</button>
      </div>
    </section>
  );
}