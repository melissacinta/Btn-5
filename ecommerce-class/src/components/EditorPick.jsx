const EditorPick = () => {
  return (
    <section className="editor-pick-section">
      <header className="editor-header">
        <h3 className="section-heading">EDITOR’S PICK</h3>
        <p className="section-subtext">Problems trying to resolve
          the conflict between </p>
      </header>
      <div className="images-grid">
        {items.map(item => (
          <div key={item.text} className={`item ${item.classname}`}>
            <span>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EditorPick

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
    text: 'accessories',
  },
  {
    classname: 'item4',
    text: 'kids',
  }
]
