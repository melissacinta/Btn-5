import { BsChevronRight } from "react-icons/bs";
import PropTypes from 'prop-types'

const BreadCrumb = ({ title, link, currentPage }) => {
  return (
    <div className="breadcrumb">
      {title && <h2>{title}</h2>}
      <div className="breadcrumb-links">
        <span><a href={link}>Home</a></span>
        {currentPage && <>
          <BsChevronRight className="breadcrumb-icon" />
          <span>{currentPage}</span>
        </>}
      </div>
    </div>
  );
}

export default BreadCrumb;

BreadCrumb.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  currentPage: PropTypes.string
}
