import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import { useAvailableProducts } from "~/queries/products";
import API_PATHS from "~/constants/apiPaths";
import BasicModal from "~/components/Modal/Modal";

export default function Products() {
  const { data = [], isLoading } = useAvailableProducts();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  function checkImage(src: string) {
    if (!src) return "src/mocks/camera.jpg";
    return `${API_PATHS.images}${src}`;
  }

  return (
    <Grid container spacing={4}>
      {data.map((product) => (
        <Grid item key={product.productId} xs={12} sm={6} md={4}>
          <Card
            key={product.productId}
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              sx={{ pt: "56.25%" }}
              image={checkImage(product.image)}
              title={product.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h5">
                {product.title}
              </Typography>
              <Typography pb={"10px"}>
                {formatAsPrice(product.price)}
              </Typography>
              <BasicModal product={product} />
            </CardContent>
            <CardActions>
              <AddProductToCart product={product} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
