import { useState } from "react";

// FORM TO CREATE NEW EVENTS
const CreateEventForm = () => {

    const [eventName, setEventName] = useState<string>("");
    const [eventDescription, setEventDescription] = useState<string>("");
    const [maxRegistrations, setMaxRegistrations] = useState<Number>()
 
    return (
        <>
            <div>
                <h1>Create a new event</h1>
            </div>

            <div>
                <form>
                    <input type="text" name="eventName" />

                </form>
            </div>
        </>
    );
};

export default CreateEventForm;
