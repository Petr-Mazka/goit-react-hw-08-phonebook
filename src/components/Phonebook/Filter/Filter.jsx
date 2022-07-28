import PropTypes from "prop-types";

const Filter = ({ onChange, value, name }) => {
    return (
        <>
        <h2>Find contacts by name</h2>
            <input type="text" name={name} value={value} onChange={onChange} />
        </>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default Filter;