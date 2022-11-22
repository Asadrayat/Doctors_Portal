
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import AppiontmentOption from './AppiontmentOption';
import BookingModal from './BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatement, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    console.log(date);
    const { data : appointmentOptions = [], refetch , isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })
    if(isLoading){
        return <Loading></Loading>
    }

    /*   useEffect(() => {
          fetch('http://localhost:5000/appointmentOption')
              .then(data => setAppointmentOptions(data))
      }, []) */
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppiontmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppiontmentOption>)
                }
            </div>
            {
                treatement &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatement={treatement}
                    setTreatment={setTreatment}
                    refetch = {refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;