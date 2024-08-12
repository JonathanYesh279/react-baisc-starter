const { useState } = React

const profileColors = ['red', 'blue', 'green'] 

export function WatcherApp({ watcherModel }) {
  const [watchers, setWatchers] = useState(watcherModel)
  const [selectedWatcher, setSelectedWatcher] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal(watcher) {
    setSelectedWatcher(watcher)
    setIsModalOpen(true)
  }
  
  function closeModal() {
    setIsModalOpen(false)
    setSelectedWatcher(null)
  }

  function removeWatcher(watcherId) { 
    setWatchers(watchers.filter(watcher => watcher.id !== watcherId))
  }

  function addWatcher() { 
    setWatchers([...watchers, {
      id: 'w105',
      fullname: 'Benny G',
      movies: ['Up!', 'Titanic']
    }])
  }

  return (
    <div className='watcher-container'>
      <h1>Watcher App</h1>
      <button onClick={() => addWatcher()}>Add Watcher</button>
      <div className='watcher-cards-container'>
        {watchers.map((watcher, index) => {
          // give each watcherImage a different image color
          const imageColor = profileColors[index % profileColors.length];
          return (
            <div key={watcher.id} className='watcher-card'>
              <img src={`/assets/images/netflix-profile-${imageColor}.jpg`} />
              <h4>{watcher.fullname}</h4>
              <div>
                <div className="separator"></div>
                <button onClick={() => openModal(watcher)}>Select</button>
                <button onClick={() => removeWatcher(watcher.id)}>X</button>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && selectedWatcher && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedWatcher.fullname}</h2>
            <ul>
              {selectedWatcher.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
              ))}
            </ul>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
        )}
    </div>
  );
}