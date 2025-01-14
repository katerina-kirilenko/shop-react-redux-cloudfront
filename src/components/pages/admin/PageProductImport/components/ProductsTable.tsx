import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { formatAsPrice } from "~/utils/utils";
import {
  useAvailableProducts,
  useDeleteAvailableProduct,
  useInvalidateAvailableProducts,
} from "~/queries/products";

export default function ProductsTable() {
  const { data = [] } = useAvailableProducts();
  const { mutate: deleteAvailableProduct } = useDeleteAvailableProduct();
  const invalidateAvailableProducts = useInvalidateAvailableProducts();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.productId}>
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">{product.description}</TableCell>
              <TableCell align="right">
                {formatAsPrice(product.price)}
              </TableCell>
              <TableCell align="right">{product.count}</TableCell>
              <TableCell align="right">
                <Button
                  size="small"
                  color="primary"
                  startIcon={<EditIcon />}
                  component={Link}
                  to={`/admin/product-form/${product.productId}`}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    if (product.productId) {
                      deleteAvailableProduct(product.productId, {
                        onSuccess: invalidateAvailableProducts,
                      });
                    }
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
