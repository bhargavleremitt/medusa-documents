import clsx from "clsx"
import React, { useMemo, useState } from "react"
import { useTable, usePagination, useExpanded } from "react-table"
import { Table } from "@medusajs/ui"
import OrderTable from "../orders/order-table"

const DEFAULT_PAGE_SIZE = 15

// Static fields and seeded data for Amazon, Walmart, ETSY
const COLUMNS = [
  {
    Header: () => null,
    id: 'expander',
    Cell: ({ row }) => (
      <span {...row.getToggleRowExpandedProps()} className="cursor-pointer">
        {row.isExpanded ? '▼' : '▶'}
      </span>
    ),
  },
  { Header: "IRM", accessor: "irm" },
  { Header: "Beneficiary Name", accessor: "beneficiaryName" },
  { Header: "Beneficiary Account", accessor: "beneficiaryAccount" },
  { Header: "Beneficiary Bank", accessor: "beneficiaryBank" },
  { Header: "Beneficiary Address", accessor: "beneficiaryAddress" },
  { Header: "Amount (INR)", accessor: "amountINR" },
  { Header: "Amount (Foreign Currency)", accessor: "amountForeign" },
  { Header: "Currency Code", accessor: "currencyCode" },
  { Header: "Transaction Ref#", accessor: "transactionRef" },
  { Header: "Remitter Name", accessor: "remitterName" },
  { Header: "Remitter Address", accessor: "remitterAddress" },
]

const DATA = [
  {
    irm: "AMZ-001",
    beneficiaryName: "Acme D2C",
    beneficiaryAccount: "123456789012",
    beneficiaryBank: "Yes Bank",
    beneficiaryAddress: "Mumbai",
    amountINR: 842836.31,
    amountForeign: 10000,
    currencyCode: "USD",
    transactionRef: "AMZ-TXN-1001",
    remitterName: "Amazon Payments",
    remitterAddress: "410 Terry Ave N, Seattle, WA 98109",
  },
  {
    irm: "WMT-002",
    beneficiaryName: "Acme D2C",
    beneficiaryAccount: "123456789012",
    beneficiaryBank: "Yes Bank",
    beneficiaryAddress: "Mumbai",
    amountINR: 589985.42,
    amountForeign: 7000,
    currencyCode: "USD",
    transactionRef: "WMT-TXN-2002",
    remitterName: "Walmart Inc",
    remitterAddress: "702 SW 8th St, Bentonville, AR 72716",
  },
  {
    irm: "ETS-003",
    beneficiaryName: "Acme D2C",
    beneficiaryAccount: "123456789012",
    beneficiaryBank: "Yes Bank",
    beneficiaryAddress: "Mumbai",
    amountINR: 337134.53,
    amountForeign: 4000,
    currencyCode: "USD",
    transactionRef: "ETS-TXN-3003",
    remitterName: "Etsy Inc",
    remitterAddress: "55 Washington St, Brooklyn, NY 11201",
  },
]

const FiraTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => DATA, [])

  const [contextFilters, setContextFilters] =
    useState<Record<string, { filter: string[] }>>()

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageCount,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: DEFAULT_PAGE_SIZE },
    },
    usePagination
  )

  return (
    <>
      <Table {...getTableProps()} className={clsx({ ["relative"]: false })}>
        <Table.Header>
          {headerGroups.map((headerGroup) => (
            <Table.Row {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Table.HeaderCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          ))}
        </Table.Header>

        <Table.Body {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <>
              <Table.Row {...row.getRowProps()} className="group">
                {row.cells.map((cell) => (
                  <Table.Cell {...cell.getCellProps()} className="inter-small-regular h-[40px]">
                    {cell.render("Cell")}
                  </Table.Cell>
                ))}
              </Table.Row>
              {row.isExpanded && (
                    <Table.Row>
                      <OrderTable setContextFilters={setContextFilters}/>
                    </Table.Row>
                  )}
              </>
            )
          })}
        </Table.Body>
      </Table>

      <Table.Pagination
        count={data.length}
        pageSize={DEFAULT_PAGE_SIZE}
        pageIndex={pageIndex}
        pageCount={pageCount}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        previousPage={() => previousPage()}
        nextPage={() => nextPage()}
      />
    </>
  )
}

export default React.memo(FiraTable)
