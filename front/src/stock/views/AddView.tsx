import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddView = () => (
  <main>
    <h1>Ajouter un article</h1>
    <form>
      <label>
        <span>Nom</span>
        <input type="text" />
      </label>
      <label>
        <span>Prix</span>
        <input type="text" />
      </label>
      <label>
        <span>Quantité</span>
        <input type="text" />
      </label>
      <button className="primary">
        <FontAwesomeIcon icon={faPlus} />
        <span>Ajouter</span>
      </button>
    </form>
  </main>
)

export default AddView
