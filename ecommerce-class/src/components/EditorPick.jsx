import PropTypes from 'prop-types'
const EditorPick = () => {
  const handleDelete = (id) => {
    console.log({ id })

  }
  return (
    <section className="editor-pick-section">
      <header className="editor-header">
        <h3 className="section-heading">EDITOR’S PICK</h3>
        <p className="section-subtext">Problems trying to resolve
          the conflict between </p>
      </header>
      <div className="images-grid">
        {items.map((item, i) => (
          <ImageComponent key={i} data={item} />
        ))}
      </div>
      <ImageComponentTwo />
    </section>
  )
}

export default EditorPick

const ImageComponent = ({ data }) => {
  console.log(data)
  return (
    <div className={`item ${data.classname}`}>
      <span>
        {data.text} {data.kids}
      </span>
    </div>)
}

ImageComponent.propTypes = {
  data: PropTypes.object.isRequired,
}
const ImageComponentTwo = ({ text = "I am a default text" }) => {
  // console.log({ props })
  return (
    <div className={`item ${2 + 6}`}>
      <span>
        {text}
      </span>
    </div>)
}

ImageComponentTwo.propTypes = {
  text: PropTypes.string.isRequired
}

const items = [
  {
    classname: 'item1',
    text: 'men',
  },
  {
    classname: 'item2',
    text: 'women',
  },
  {
    classname: 'item3',
    kids: 'accessories',
  },
  {
    classname: 'item4',
    kids: 'kids',
  }
]
