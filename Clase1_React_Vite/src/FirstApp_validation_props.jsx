import PropTypes from 'prop-types';

const FirstApp_validation_props = ({title, sum}) => {
    return (
        <>
            <h1> {title} </h1>
            <span> {sum} </span>
        </>
    )
}

FirstApp_validation_props.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

FirstApp_validation_props.defaultProps = {
    title: 'First App validation props',
    sum: 300
}

export default FirstApp_validation_props