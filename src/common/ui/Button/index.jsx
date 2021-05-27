import { Link } from "react-router-dom"

const RegularButton = ({ url, buttonClasses, children, ...rest }) => {
    return (
        <Link to={url} {...rest} className={buttonClasses}>{children}</Link>
    )
}

export default RegularButton