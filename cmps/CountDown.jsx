const { useState, useEffect } = React;

export function CountDown({ startFrom = 10, onDone}) {
  const [countDown, setCountDown] = useState(startFrom);

  useEffect(() => {
    if (countDown <= 0) {
      onDone()
      return
    }

    const timerId = setInterval(() => { 
      setCountDown((prevCount) => prevCount - 1) 
    }, 1000)

    return () => clearInterval(timerId)
  }, [countDown, onDone])

  function counterStyle() {
    var classList = ['count-down']
    if (countDown <= 6 ) classList.push('low')
    
    return classList.join(' ')
  }


  return (
    <section className='count-down-container'>
      <div className="count-down">
        <h1>Count Down</h1>
        <p>
          Starting from:<span className={counterStyle()}>{countDown}</span>
        </p>
      </div>
    </section>
  );
}
