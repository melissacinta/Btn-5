import PropTypes from 'prop-types'
import { editorsPick } from '../utils/mockData'
const EditorPick = () => {
  return (
    <section className="editor-pick-section">
      <header className="editor-header">
        <h3 className="section-heading">EDITOR’S PICK</h3>
        <p className="section-subtext">Problems trying to resolve
          the conflict between </p>
      </header>
      <div className="images-grid">
        {editorsPick.map((item, i) => (
          <ImageComponent key={i} data={item} />
        ))}
      </div>
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
