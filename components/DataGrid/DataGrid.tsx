import Pagination from '../Pagination/Pagination';
import { useTable } from 'react-table';
import { Button } from 'evergreen-ui';
import { create_UUID } from '../../utils/Utils';
export default function DataGrid({
  columns,
  data,
  size,
  total,
  page,
  previousPage,
  nextPage,
  onEdit = null,
  onDelete = null
}) {
  if (!columns || !data) {
    return null;
  }
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table
              className="min-w-full divide-y divide-gray-200"
              {...getTableProps()}
            >
              <thead className="bg-gray-50">
                {headerGroups.map((headerGroup, headerGroupIndex) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    key={headerGroupIndex}
                  >
                    {headerGroup.headers.map((column, index) => (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        {...column.getHeaderProps()}
                        key={create_UUID()}
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                    {onEdit || onDelete ? (
                      <th
                        key={create_UUID()}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    ) : null}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      {row.cells.map((cell, index) => {
                        return (
                          <>
                            <td
                              {...cell.getCellProps()}
                              key={create_UUID()}
                              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"
                            >
                              {cell.render('Cell')}
                            </td>
                          </>
                        );
                      })}
                      {onEdit || onDelete ? (
                        <td key={create_UUID()}>
                          {onEdit ? (
                            <Button
                              marginRight={16}
                              appearance="primary"
                              intent="success"
                              onClick={() => onEdit(row.original)}
                            >
                              Edit
                            </Button>
                          ) : null}
                          {onDelete ? (
                            <Button
                              marginRight={16}
                              appearance="primary"
                              intent="danger"
                              onClick={() => onDelete(row.original)}
                            >
                              Delete
                            </Button>
                          ) : null}
                        </td>
                      ) : null}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              size={size}
              total={total}
              page={page}
              nextPage={nextPage}
              previousPage={previousPage}
              dataLength={data.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
