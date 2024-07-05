import './index.css'

const ListItem = props => {
  const {details, deleteItem, getDetails} = props
  const {id, name, country, code, terminals} = details

  const onClickDelete = () => {
    deleteItem(id)
  }

  const onClickDetails = () => {
    getDetails(details)
  }

  return (
    <li key={id} className="airport-list">
      <div>
        <input type="checkbox" id="checkbox" />
        <label
          htmlFor="checkbox"
          className="name-label"
          onClick={onClickDetails}
        >
          {name}
        </label>
      </div>
      <div className="card-items">
        <p className="items">{country}</p>
        <p className="items">{code}</p>
        <p className="items">{terminals}</p>
        <button className="delete-button" type="button" onClick={onClickDelete}>
          <img
            src="https://res-console.cloudinary.com/duaagdzlh/thumbnails/v1/image/upload/v1720174650/RGVsZXRlX3IyZHpxdg==/drilldown"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default ListItem
