import React, { useEffect } from "react";
import "../App.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getCheckoutData } from "../actions/actionCreator";
import { useNavigate } from "react-router-dom";
const Check0utForm = () => {
  let schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    billing: yup.string().required("Billing address is Required"),
    delivery: yup.string().required("Delivery address is Required"),
    telephoneNo: yup.string().required("telephone No  is Required"),
    date: yup.string().required("Date is Required"),
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCheckoutData());
  }, []);
  const { checkout } = useSelector((state) => state.ProductReducer);
  console.log("checkout", checkout);
  const navigate = useNavigate();
  return (
    <div className="form_container">
      <div className="cartInfoTable">
        <table>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
          {checkout?.carts &&
            checkout.carts.map((el) => (
              <tr key={el.product.id}>
                <td>{el.product.name}</td>
                <td>{el.product.price.split("$")[1] * 120.88}</td>
                <td>{el.quantity}</td>
              </tr>
            ))}
          <div>
            totalPrice: Rs {checkout?.totalPrice ? checkout.totalPrice : "0"}
          </div>
        </table>
      </div>
      <div>
        <div className="form_container_m">
          <div className="form">
            <h2>Checkout Form</h2>
            <Formik
              initialValues={{
                name: "",
                billing: "",
                delivery: "",
                telephoneNo: "",
                date: "",
              }}
              validationSchema={schema}
              onSubmit={(values) => {
                // same shape as initial values
                alert("Your order has been placed");
                localStorage.removeItem("checkout");
                navigate("/");
              }}
            >
              {() => (
                <Form>
                  <label>Name:</label>
                  <Field name="name" className="Field" />

                  <ErrorMessage name="name" />

                  <label>Billing Address:</label>

                  <Field name="billing" type="text" className="Field" />
                  <ErrorMessage name="billing" />
                  <label>Delivery Address:</label>

                  <Field name="delivery" className="Field" />
                  <ErrorMessage name="delivery" />
                  <label>telephone No:</label>

                  <Field name="telephoneNo" className="Field" />
                  <ErrorMessage name="telephoneNo" />
                  <label>Date:</label>

                  <Field name="date" className="Field" />
                  <ErrorMessage name="date" />
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check0utForm;
