import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Product } from "~/models/Product";
import { Button } from "@mui/material";
import API_PATHS from "~/constants/apiPaths";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { formatAsPrice } from "~/utils/utils";

type ProductModalProps = {
  product: Product;
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
  outline: 0,
};

export default function BasicModal({ product }: ProductModalProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>More...</Button>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Box sx={style}>
          <CardMedia
            sx={{ pt: "56.25%" }}
            image={`${API_PATHS.images}${product.image}`}
            title={product.title}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h5">
              {product.title}
            </Typography>
            <Typography p={"20px 0"} variant="subtitle2" component="h6">
              {product.description}
            </Typography>
            <Typography>{formatAsPrice(product.price)}</Typography>
            <Typography pt={"20px"}>Total left: {product.count}</Typography>
          </CardContent>
        </Box>
      </Modal>
    </div>
  );
}
