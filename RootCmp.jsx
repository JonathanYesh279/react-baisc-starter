const { useState } = React

import { AnimalList } from './cmps/AnimalList.jsx'
import { SeasonClock } from './cmps/SeasonClock.jsx'
import { CountDown } from './cmps/CountDown.jsx'
import { WatcherApp } from './cmps/WatcherApp.jsx'
import { MouseMonitor } from './cmps/MouseMonitor.jsx'

export function RootCmp() {
  const [route, setRoute] = useState('seasons-clock');
  
  const animalInfos = [
    { type: 'Malayan Tiger', count: 787 , search: 'https://www.google.com/search?q=Malayan+Tiger' },
    { type: 'Mountain Gorilla', count: 212, search: 'https://www.google.com/search?q=Mountain+Gorilla' },
    { type: 'Fin Whale', count: 28 , search: 'https://www.google.com/search?q=Fin+Whale' },
  ];

  const watcherModel = [{
    id: 'w101',
    fullname: 'Yonathan N',
    movies: ['Rambo', 'Rocky']
  },
    {
      id: 'w102',
      fullname: 'Yuval P',
      movies: ['Terminator', 'Predator']
    },
    {
      id: 'w103',
      fullname: 'Dor A',
      movies: ['Star Wars', 'Indiana Jones']
    },
    {
      id: 'w104',
      fullname: 'Meir S',
      movies: ['The Godfather', 'Scarface']
    },
    
  ];

  function onDone() { 
    console.log('Done!')
  }

    return (
      <section className='app'>
        <header>
          <h1>My App</h1>
          <nav>
            <button onClick={() => setRoute('animal-list')}>Animal List</button>
            <button onClick={() => setRoute('seasons-clock')}>Seasons Clock</button>
            <button onClick={() => setRoute('count-down')}>Count Down</button>
            <button onClick={() => setRoute('watcher')}>Watcher</button>
            <button onClick={() => setRoute('mouse-monitor')}>Mouse Monitor</button>
          </nav>
        </header>

        <main>
          {route === 'animal-list' && <AnimalList animalInfos={animalInfos} />}
          {route === 'seasons-clock' && <SeasonClock darkMode={false} />}
          {route === 'count-down' && <CountDown startFrom={8} onDone={onDone} />}
          {route === 'watcher' && <WatcherApp watcherModel={watcherModel}/>}
          {route === 'mouse-monitor' && <MouseMonitor/>}
        </main>
      </section>
    );
}