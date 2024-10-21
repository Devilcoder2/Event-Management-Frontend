import { ChangeEvent, useState } from 'react';

// FORM TO CREATE NEW EVENTS
const CreateEventForm = () => {
    const [eventName, setEventName] = useState<string>('');
    const [eventDescription, setEventDescription] = useState<string>('');
    const [maxRegistrations, setMaxRegistrations] = useState<number>(0);
    const [currentRegistrations, setCurrentRegistrations] = useState<number>(0);
    const [eventDateTime, setEventDateTime] = useState<string>('');
    const [eventLocation, setEventLocation] = useState<string>('');

    const eventNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEventName(e.target.value.trim());
    };

    const eventDescriptionChangeHanlder = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        setEventDescription(e.target.value.trim());
    };

    const eventLocationChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEventLocation(e.target.value.trim());
    };

    const eventDateTimeChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEventDateTime(e.target.value.trim());
    };

    const maxRegistrationsChangeHandler = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        setMaxRegistrations(Number(e.target.value));
    };

    return (
        <div className='bg-blue-300/30 flex flex-col justify-center items-center h-[100vh] '>
            <div className='font-bold text-3xl p-10'>
                <h1>Create a new event</h1>
            </div>

            <div >
                <form className='flex flex-col  justify-center items-start gap-6'>
                    <div className='flex gap-5'>
                        <label htmlFor='eventName'>Name</label>
                        <input
                            type='text'
                            name='eventName'
                            id='eventName'
                            value={eventName}
                            onChange={eventNameChangeHandler}
                            className='rounded-lg'
                        />
                    </div>

                    <div className='flex gap-5'>
                        <label htmlFor='eventDes'>Description</label>
                        <input
                            type='text'
                            name='eventDes'
                            id='eventDes'
                            value={eventDescription}
                            onChange={eventDescriptionChangeHanlder}
                            className='rounded-lg'
                        />
                    </div>

                    <div className='flex gap-5'>
                        <label htmlFor='eventLoc'>Location</label>
                        <input
                            type='text'
                            name='eventLoc'
                            id='eventLoc'
                            value={eventLocation}
                            onChange={eventLocationChangeHandler}
                            className='rounded-lg'
                        />
                    </div>

                    <div className='flex gap-5'>
                        <label htmlFor='eventDateTime'>Date</label>
                        <input
                            type='datetime-local'
                            name='eventDateTime'
                            id='eventDateTime'
                            value={eventDateTime}
                            onChange={eventDateTimeChangeHandler}
                            className='rounded-lg'
                        />
                    </div>

                    <div className='flex gap-5'>
                        <label htmlFor='eventMaxRegistrations'>
                            Maximum Registrations
                        </label>
                        <input
                            type='number'
                            name='eventMaxRegistrations'
                            id='eventMaxRegistrations'
                            value={maxRegistrations}
                            onChange={maxRegistrationsChangeHandler}
                            className='rounded-lg'
                        />
                    </div>
                    <div className='flex gap-8'>
                        <button className='bg-blue-300 rounded-md p-2'>Submit</button>
                        <button className='bg-blue-300 rounded-md p-2'>Cancel</button>  
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEventForm;
