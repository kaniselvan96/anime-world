import { Pagination, type PaginationProps } from "@mui/material";

type AWPaginationPropsType = PaginationProps & {
  page: number;
  count: number;
  total: number;
  onChangePage: (page: number) => void;
};

const AWPagination = ({
  page,
  count,
  total,
  onChangePage,
  ...props
}: AWPaginationPropsType) => {
  const totalPageCount = Math.ceil(total / count);
  return (
    <Pagination
      page={page}
      count={totalPageCount}
      onChange={(_e, page) => onChangePage(page)}
      {...props}
    />
  );
};

export default AWPagination;
