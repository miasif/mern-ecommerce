import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../redux/slices/productSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error || !Array.isArray(products)) {
    return <Message variant="danger">Error: Unable to fetch data.</Message>;
  }

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomePage;
