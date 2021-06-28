import { useState } from 'react';
import PropTypes from 'prop-types';

const LocationForm = (props) => {
    const [locationName, setFormFields] = useState("")

    const handleChange = (event) => {
        setFormFields(event.target.value)

    }

    const handleSubmission = (event) => {
        console.log(event)
        event.preventDefault();
        props.onSubmission(locationName)
    }




    return (
        <form onSubmit={handleSubmission}>
            <div>
                <label htmlFor="locationName">Location Name:</label>
                <input
                    name="locationName" onChange={handleChange} value={locationName}
                />
            </div>
            <input
                type="submit"
                value="Add Location" />

        </form>
    );
};

LocationForm.propTypes = {
    onSubmission: PropTypes.func.isRequired
};

export default LocationForm;