import React, { useContext, useState } from "react";
import { CartContext } from "../../context";
import { useCurrency } from "../../hooks/useCurrency";
import { addToCart } from "../../services/cart";
import { setStorageValue } from "../../services/storage";

export const Item = ({ productDetail }) => {
  const {
    battery,
    brand,
    cpu,
    dimentions,
    displayType,
    id,
    imgUrl,
    model,
    options,
    os,
    primaryCamera,
    ram,
    weight,
  } = productDetail;

  const initialValue = {
    colors: options.colors[0].code,
    storage: options.storages[0].code,
  };

  const [selectedColor, setSelectedColor] = useState(initialValue.colors);
  const [selectedStorage, setSelectedStorage] = useState(initialValue.storage);
  const precio = useCurrency(productDetail.price);
  const { setCartProducts } = useContext(CartContext);

  const handleSelectStorage = (evt) => {
    setSelectedStorage(evt.target.value);
  };
  const handleSelectColor = (evt) => {
    setSelectedColor(evt.target.value);
  };

  const handleAddToCart = () => {
    addToCart({ id, colorCode: selectedColor, storageCode: selectedStorage })
      .then((data) => {
        setCartProducts(data.count);
        setStorageValue("cartProducts", data.count, 180);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h3>
        Movil - {brand}, {model}, {cpu}
      </h3>
      <div className="detail__sections">
        <section className="detail__left">
          <img src={imgUrl} alt="movil" />
        </section>
        <section className="detail__right">
          <div className="detail__desc">
            <p className="detail__price">Precio: {precio}</p>
            <p>Marca: {brand}</p>
            <p>Modelo: {model}</p>
            <p>CPU: {cpu}</p>
            <p>RAM: {ram}</p>
            <p>OS: {os}</p>
            <p>Display: {displayType}</p>
            <p>Bateria: {battery}</p>
            <p>Cámara: {primaryCamera}</p>
            <p>Dimensiones: {dimentions}</p>
            <p>Peso: {`${weight ? weight : "N/A"}`}</p>
          </div>

          <div className="detail__actions">
            <p>
              Almacentamiento:{" "}
              <select name="almacenamiento" onChange={handleSelectStorage}>
                {options.storages?.map((memory) => {
                  return (
                    <option key={memory.code} value={memory.code}>
                      {memory.name}
                    </option>
                  );
                })}
              </select>
            </p>
            <p>
              colores:{" "}
              <select name="colores" onChange={handleSelectColor}>
                {options.colors?.map((color) => {
                  return (
                    <option key={color.code} value={color.code}>
                      {color.name}
                    </option>
                  );
                })}
              </select>
            </p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </section>
      </div>
    </>
  );
};
