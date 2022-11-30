import { useState, useEffect } from "react";
import "./ProductList.scss";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { getProducts } from "../../services/product/product.service";
import { getStorageValue, setStorageValue } from "../../services/storage";
import { ListItem, Search } from "../../components";

const defaultProducts = getStorageValue("productList");
export function ProductList() {
  const [products, setProducts] = useState(defaultProducts || []);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(!defaultProducts);

  const filterAtt = ["model", "brand"];

  const filterProducts = products.filter((item) =>
    filterAtt.some((att) =>
      item[att].toLowerCase().includes(search.toLowerCase()),
    ),
  );

  useEffect(() => {
    if (!defaultProducts) {
      getProducts().then((data) => {
        setProducts(data);
        setStorageValue("productList", data, 3600);
        setIsLoading(false);
      });
    }
  }, []);

  if (isLoading) {
    return (
      <Box className="loading">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="list__container">
      <Search search={search} setSearch={setSearch} />
      {filterProducts.length === 0 ? (
        <p>No se encontraron resultados para la búsqueda</p>
      ) : (
        <ul>
          {filterProducts.map((product) => (
            <ListItem product={product} key={product.id} />
          ))}
        </ul>
      )}
      <button
        type="button"
        className="list__up"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <ArrowUpwardOutlinedIcon style={{ background: "none" }} />
      </button>
    </div>
  );
}
