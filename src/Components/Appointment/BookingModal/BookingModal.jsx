import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const BookingModal = ({
  show,
  handleClose,
  treatment,
  selectedDate,
  setTreatment,
}) => {
  const { name, slots } = treatment;

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
    console.log(booking);
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
              <Form.Control name="name" type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="phone"
                type="number"
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control name="email" type="email" placeholder="Email" />
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
