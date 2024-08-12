const { useState, useEffect } = React

export function MouseMonitor() {
  const [xPos, setXPos] = useState(0)
  const [yPos, setYPos] = useState(0)
  const [isOn , setIsOn] = useState(true)

  useEffect(() => {
    function handleMouseMove(ev) {
      if (!isOn) return
      setXPos(ev.clientX)
      setYPos(ev.clientY)
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
    document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isOn])
  
  function handlePause() {
    setIsOn(prevState => !prevState)
  }

  return (
      <dialog className='dialog'>
        <div className='dialog-info'>
          <p>X position:{xPos}</p>
        <p>Y position:{yPos}</p>
        <button onClick={handlePause}>{isOn ? 'Pause' : 'Resume'}</button>
        </div>
      </dialog>
  );
}