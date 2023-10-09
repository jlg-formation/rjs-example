import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LoadingRow = () => {
  return (
    <tr>
      <td colSpan={3}>
        <div className="loading">
          <FontAwesomeIcon icon="circle-notch" spin={true} />
          <span>Chargement...</span>
        </div>
      </td>
    </tr>
  )
}
