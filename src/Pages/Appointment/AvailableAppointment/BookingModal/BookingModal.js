import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';

const BookingModal = ({ treatement, setTreatment, selectedDate ,refetch }) => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { name: treatementName, slots,price } = treatement;
    const date = format(selectedDate, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const displayName = form.displayName.value;
        console.log(displayName);
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(slot, name, email, phone);

        const booking = {
            appointmentDate: date,
            treatement: treatementName,
            patient: displayName,
            phone,
            price,
            email,
            slot,
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirm')
                    refetch();
                }
                else{
                    toast.error(data.message)
                }

            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatementName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" value={date} disabled className="input w-full input-bordered" />
                        <select name='slot' required className="select w-full">
                            <option disabled selected> select </option>
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input name="displayName" type="text" defaultValue={user?.displayName} placeholder="Your name" className="input w-full input-bordered" />

                        <input name="email" type="email" disabled defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;