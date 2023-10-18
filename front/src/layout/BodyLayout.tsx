import { useEffect, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

function BodyLayout() {
  const location = useLocation()
  const outlet = useOutlet()

  const [displayOutlet, setDisplayOutlet] = useState(outlet)

  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransistionStage('fadeOut')
    } else {
      setDisplayOutlet(outlet)
    }
  }, [location, displayLocation])

  return (
    <div
      className={`main ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn')
          setDisplayLocation(location)
        }
      }}
    >
      {displayOutlet}
    </div>
  )
}

export default BodyLayout
