import { format } from "date-fns";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { AuthContext } from "../../../Context/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({
  show,
  handleClose,
  treatment,
  selectedDate,
  setTreatment,
  refetch,
}) => {
  const { name, slots } = treatment;
  const { user } = useContext(AuthContext);

  const date = format(selectedDate, "PP");

  const handelBooking = (event) => {
    event.preventDefault();
    // console.log("handleBooking");
    const form = event.target;
    const slot = form.slot.value;
    const patient = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient,
      slot,
      email,
      phone,
    };

    //send the data to server
    // alert /toast
    console.log(booking);

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });

    setTreatment(null);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="border-0" closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handelBooking}>
            <Form.Group className="mb-3">
              <Form.Control value={date} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select name="slot">
                {slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                defaultValue={user?.displayName}
                readOnly
                name="name"
                type="text"
                placeholder="Full Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="phone"
                type="number"
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                defaultValue={user?.email}
                readOnly
                name="email"
                type="email"
                placeholder="Email"
              />
            </Form.Group>

            <Button className="btn btn-secondary w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookingModal;
