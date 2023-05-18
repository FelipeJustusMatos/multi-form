import React from "react";
import { Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
export const FormItem = ({ item }) => {
  switch (item.type) {
    case "text":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control type="text" id={item.label} />
        </>
      );
      break;
    case "password":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control type="password" id="inputPassword5" />
        </>
      );
      break;
    case "select":
      return (
        <div className="mt-2">
          <Form.Select arial-label={item.label}>
            <option>{item.label}</option>
            {item.options.map((opt, index) => {
              return <option value={opt}>{opt}</option>;
            })}
          </Form.Select>
        </div>
      );
  }
};
