import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Image } from "react-bootstrap";
import FormContainer from "../../../components/FormContainer";

import Loader from "../../../components/Loader";
import Message from "../../../components/Message";

import { actions } from "../../../constants/productConstants";
import { callApi } from "../../../api";

const initialState = {
  name: "",
  description: "",
  price: "",
  sucId: null,
  marcId: null,
  catId: null,
};
export default function RegisterProduct({ history }) {
  const [product, setProduct] = useState(initialState);
  const [image, setImage] = useState();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };
  const productRegister = useSelector((state) => state.productRegister);
  const { loading, success, error } = productRegister;
  const submitHandler = (e) => {
    e.preventDefault();
    const productData = new FormData();
    productData.append("name", product?.name);
    productData.append("price", product?.price);
    productData.append("desc", product?.description);
    productData.append("sucId", product?.sucId);
    productData.append("marcId", product?.marcId);
    productData.append("catId", product?.catId);
    productData.append("img", image);

    dispatch(
      callApi(
        "/api/products/createproduct/",
        "POST",
        productData,
        {
          SUCESS: actions.PRODUCT_CREATE_SUCCESS,
          REQUEST: actions.PRODUCT_CREATE_REQUEST,
          FAIL: actions.PRODUCT_CREATE_FAIL,
        },
        true,
        userInfo.token
      )
    );
  };
  useEffect(() => {
    if (success) {
      dispatch({
        type: actions.PRODUCT_CREATE_RESET,
      });
      history.push("/");
    }
  }, [success]);
  return (
    <div style={{ marginTop: "10vh" }}>
      <>
        <FormContainer>
          <h1 style={{ width: "100%" }}>Crear producto</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingresa el nombre"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="desc">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                placeholder="Ingresa los detalles"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Ingresa el precio"
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            {/* <Form.Group controlId="categorie">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                as="select"
                custom
                onChange={(e) => setCategorieId(e.target.value)}
              >
                {successCategories && (
                  <>
                    <option selected={categorieId == "undefined"}>
                      Selecciona una categoría
                    </option>
                    {categories?.map((categorie) => (
                      <option
                        value={categorie._id}
                        selected={categorieId === categorie._id ? true : false}
                      >
                        {categorie.name}
                      </option>
                    ))}
                  </>
                )}
              </Form.Control>
            </Form.Group> */}
            <Form.Group controlId="image">
              <Form.Label>Imagen</Form.Label>
              {/* <div className="d-flex align-items-center w-100 justify-content-center">
                {product?.img && (
                  <Image
                    className="d-block my-4 shadow"
                    style={{ maxWidth: "330px", maxHeight: "250px" }}
                    xs={6}
                    md={4}
                    src={`https://res.cloudinary.com/majo-floral-desing/${product.img}`}
                  />
                )}
              </div> */}
              <Form.Control
                type="text"
                placeholder="Ingresa la imagen"
                value={image}
                readOnly={true}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Elegir un archivo"
                custom
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setImage(e.target.files[0]);
                }}
              ></Form.File>
              {/* {isUploading && <Loader />} */}
            </Form.Group>
            {error && <Message variant="danger">{error}</Message>}
            {loading ? (
              <Loader />
            ) : (
              <Button variant="primary" type="submit">
                Subir
              </Button>
            )}
          </Form>
        </FormContainer>
      </>
    </div>
  );
}
