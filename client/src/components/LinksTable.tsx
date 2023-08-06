import { TableCell, Paper, Table, TableBody, TableContainer, TableRow, TableHead, Tooltip } from '@mui/material';
import { useEffect } from 'react'
import { useLazyGetAllLinksQuery } from '../store/api/linkApi';
import { ILink } from '../types';
import MenuCartMore from './MenuCartMore';

const LinksTable = () => {
  const [fetcthLink, { data: links, error: linkError }] = useLazyGetAllLinksQuery()

  useEffect(() => {
    fetcthLink()
  }, [fetcthLink])

  const linkTable = links?.map(
    (link: ILink, index: number): JSX.Element => {
      const { id, link_short, link_long } = link;
      const truncatedLinkLong = link_long.length > 30 ? `${link_long.substring(0, 27)}...` : link_long;

      return (
        <TableRow key={id} sx={{ cursor: "inherit !important" }}>
          <TableCell>
            <b>{index + 1}</b>
          </TableCell>
          <TableCell>
            <Tooltip title={link_long} placement="top">
              <span>{truncatedLinkLong}</span>
            </Tooltip>
          </TableCell>
          <TableCell>{process.env.REACT_APP_API_URL}redirect/{link_short}</TableCell>
          <TableCell>
            <MenuCartMore id={id} link_short={link_short} />
          </TableCell>
        </TableRow>
      );
    }
  );

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>s/n</TableCell>
              <TableCell>Link Long</TableCell>
              <TableCell>Link Short</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {linkTable}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default LinksTable;
