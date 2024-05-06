
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Hello() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
  );
}


export default Hello
