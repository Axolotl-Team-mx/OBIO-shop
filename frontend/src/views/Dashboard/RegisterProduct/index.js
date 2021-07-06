import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Image } from "react-bootstrap";
import FormContainer from "../../../components/FormContainer";

import LoaderLogo from "../../../components/LoaderLogo";
import Message from "../../../components/Message";

import { actions } from "../../../constants/brandConstants";
import { callApi } from "../../../api";

const initialState = {
  name: "",
  description: "",
  price: "",
  sucId: null,
  marcId: null,
  catId: null,
  img: null,
};
export default function RegisterProduct({ history }) {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo}=userLogin;
  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = () => {


    const proyectData = new FormData();
    proyectData.append("name", proyect?.name);
    proyectData.append("description", proyect?.description);
    proyectData.append("categorie", proyect?.categorie);
    proyectData.append("img", proyect?.img);
    proyectData.append("img2", proyect?.img2);

    dispatch(
      callApi(
        "/api/proyects/register/",
        "POST",
        proyectData,
        {
          SUCESS: actions.PRODUCT_CREATE_SUCCESS,
          REQUEST: actions.PRODUCT_CREATE_REQUEST,
          FAIL: actions.PRODUCT_CREATE_FAIL,
        },
        true,
        token
      )
    );
  };
}
