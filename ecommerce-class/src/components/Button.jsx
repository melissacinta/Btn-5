import PropTypes from 'prop-types'

const Button = ({ color, text, size }) => {
  return (
    <>
      <button className={`btn ${color ?? 'success'} ${size ?? 'large'}`}>{text}</button>
    </>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  color: PropTypes.string,
}

export default Button
