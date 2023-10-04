import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
  return (
    <>
      <button className={`btn ${color ? color : 'success'}`}>{text}</button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  iconLeft: PropTypes.string,
  outlined: PropTypes.bool,
}

export default Button
