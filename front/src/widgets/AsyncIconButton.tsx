import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { memo, useState } from 'react'

const AsyncIconButton = memo(function AsyncIconButton({
  title,
  asyncCallback,
  icon,
}: {
  title: string
  asyncCallback: () => Promise<void>
  icon: IconDefinition
}) {
  console.log('render asyncIconButton with title', title)

  const [isDoing, setIsDoing] = useState(false)

  const handleClick = async () => {
    try {
      setIsDoing(true)
      await asyncCallback()
    } catch (err) {
      console.log('err: ', err)
    } finally {
      setIsDoing(false)
    }
  }

  return (
    <button title={title} onClick={handleClick} disabled={isDoing}>
      <FontAwesomeIcon icon={isDoing ? faCircleNotch : icon} spin={isDoing} />
    </button>
  )
})

export default AsyncIconButton
