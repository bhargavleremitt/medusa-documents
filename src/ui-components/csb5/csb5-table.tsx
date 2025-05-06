import clsx from "clsx"
import React, { useMemo } from "react"
import { useTable, usePagination } from "react-table"
import { Table } from "@medusajs/ui"

const DEFAULT_PAGE_SIZE = 15

const COLUMNS = [
  { Header: "CSB Number", accessor: "csbNumber" },
  { Header: "Filling Date", accessor: "fillingDate" },
  { Header: "Courier Reg. Number", accessor: "courierRegNumber" },
  { Header: "Courier Name", accessor: "courierName" },
  { Header: "Address 1", accessor: "address1" },
  { Header: "Address 2", accessor: "address2" },
  { Header: "City", accessor: "city" },
  { Header: "Postal Code", accessor: "postalCode" },
  { Header: "State", accessor: "state" },
  { Header: "Custom Station", accessor: "customStation" },
  { Header: "Airlines", accessor: "airlines" },
  { Header: "Flight Number", accessor: "flightNumber" },
  { Header: "Port of Loading", accessor: "portOfLoading" },
  { Header: "Date of Departure", accessor: "departureDate" },
  { Header: "HAWB Number", accessor: "hawbNumber" },
  { Header: "Number of Packages", accessor: "numPackages" },
  { Header: "Declared Weight (Kg)", accessor: "declaredWeight" },
  { Header: "Destination Airport", accessor: "destinationAirport" },
  { Header: "IEC", accessor: "iec" },
  { Header: "IEC Branch Code", accessor: "iecBranchCode" },
  { Header: "Invoice Term", accessor: "invoiceTerm" },
  { Header: "MHBS No", accessor: "mhbsNo" },
  { Header: "e-Commerce Export", accessor: "exportViaEcom" },
  { Header: "MEIS Scheme", accessor: "meisScheme" },
  { Header: "Re-import Facility", accessor: "reimportFacility" },
  { Header: "Ecom Operator", accessor: "ecomOperator" },
  { Header: "Order No", accessor: "orderNo" },
  { Header: "Transaction ID", accessor: "transactionId" },
  { Header: "Order Date", accessor: "orderDate" },
  { Header: "AD Code", accessor: "adCode" },
  { Header: "Account No", accessor: "accountNo" },
  { Header: "Govt/Non-Govt", accessor: "govtOrNonGovt" },
  { Header: "NFEI", accessor: "nfei" },
  { Header: "Status", accessor: "status" },
  { Header: "LEO Date", accessor: "leoDate" },
  { Header: "FOB Value (INR)", accessor: "fobValueINR" },
  { Header: "FOB Value (Foreign)", accessor: "fobValueForeign" },
  { Header: "Exchange Rate", accessor: "fobExchangeRate" },
  { Header: "FOB Currency", accessor: "fobCurrency" },
  { Header: "EGM Number", accessor: "egmNumber" },
  { Header: "EGM Date", accessor: "egmDate" },
  { Header: "Consignor Name", accessor: "consignorName" },
  { Header: "Consignor Address", accessor: "consignorAddress" },
  { Header: "Consignee Name", accessor: "consigneeName" },
  { Header: "Consignee Address", accessor: "consigneeAddress" },
  { Header: "KYC Doc", accessor: "kycDocument" },
  { Header: "KYC ID", accessor: "kycId" },
  { Header: "State Code", accessor: "stateCode" },
  { Header: "GSTIN Uploaded", accessor: "gstinUploaded" },
  { Header: "Invoice No", accessor: "invoiceNumber" },
  { Header: "Invoice Date", accessor: "invoiceDate" },
  { Header: "Invoice Value (INR)", accessor: "invoiceValueINR" },
  { Header: "CTSH", accessor: "ctsh" },
  { Header: "SKU No", accessor: "sku" },
  { Header: "Type of Jewellery", accessor: "typeOfJewellery" },
  { Header: "Goods Desc.", accessor: "goodsDescription" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "UOM", accessor: "uom" },
  { Header: "Unit Price", accessor: "unitPrice" },
  { Header: "Total Item Value", accessor: "totalItemValue" },
  { Header: "Unit Price Curr.", accessor: "unitPriceCurrency" },
  { Header: "Exchange Rate", accessor: "exchangeRate" },
  { Header: "Total Value INR", accessor: "totalItemValueINR" },
  { Header: "Total Taxable Value", accessor: "totalTaxableValue" },
  { Header: "Taxable Curr.", accessor: "taxableValueCurrency" },
  { Header: "IGST Paid", accessor: "totalIGSTPaid" },
  { Header: "Bond/UT", accessor: "bondOrUt" },
  { Header: "Cess Paid", accessor: "totalCessPaid" },
]

const DATA = [
    {
      "csbNumber": "FTC_MUM_2025-03_001",
      "fillingDate": "05/03/2025",
      "courierRegNumber": "AAXYZ1234QACMUM",
      "courierName": "FastTrack Couriers Pvt Ltd",
      "address1": "123 Trade Center, Kurla, Mumbai, 400070",
      "address2": "",
      "city": "MUMBAI",
      "postalCode": "400070",
      "state": "MAHARASHTRA",
      "customStation": "MUM",
      "airlines": "British Airways",
      "flightNumber": "BA 129",
      "portOfLoading": "MUM",
      "departureDate": "06/03/2025",
      "hawbNumber": "FTCHAWB001",
      "numPackages": 4,
      "declaredWeight": 15.5,
      "destinationAirport": "LHR",
      "iec": "XVGFV1234K",
      "iecBranchCode": "",
      "invoiceTerm": "FOB",
      "mhbsNo": "H520010001",
      "exportViaEcom": "N",
      "meisScheme": "NO",
      "reimportFacility": "",
      "ecomOperator": "",
      "orderNo": "ORD-FT-1001",
      "transactionId": "TX-FT-2001",
      "orderDate": "01/03/2025",
      "adCode": "6392500",
      "accountNo": "674805600900",
      "govtOrNonGovt": "NON-GOVERNMENT",
      "nfei": "YES",
      "status": "EXPCLOSED",
      "leoDate": "06/03/2025",
      "fobValueINR": 120000,
      "fobValueForeign": 1600.00,
      "fobExchangeRate": 75.0,
      "fobCurrency": "USD",
      "egmNumber": 3959000,
      "egmDate": "06/03/2025",
      "consignorName": "FastTrack Exports",
      "consignorAddress": "123 Trade Center, Kurla, Mumbai, 400070",
      "consigneeName": "London Emporium",
      "consigneeAddress": "221B Baker St, London, UK",
      "kycDocument": "PAN Card",
      "kycId": "ABCDE1234F",
      "stateCode": "27",
      "gstinUploaded": "YES",
      "invoiceNumber": "INV-FT-001",
      "invoiceDate": "01/03/2025",
      "invoiceValueINR": 120000,
      "ctsh": "63041000",
      "sku": "SKU-FT-01",
      "typeOfJewellery": "",
      "goodsDescription": "Textiles and Fabrics",
      "quantity": 10,
      "uom": "PCS",
      "unitPrice": 12000,
      "totalItemValue": 120000,
      "unitPriceCurrency": "INR",
      "exchangeRate": 1,
      "totalItemValueINR": 120000,
      "totalTaxableValue": 120000,
      "taxableValueCurrency": "INR",
      "totalIGSTPaid": 0,
      "bondOrUt": "NO",
      "totalCessPaid": 0
    },
    {
      "csbNumber": "QSL_DEL_2025-04_015",
      "fillingDate": "15/04/2025",
      "courierRegNumber": "AAQSL7890QACDEL",
      "courierName": "QuickShip Logistics",
      "address1": "456 Industrial Area, New Delhi, 110037",
      "address2": "",
      "city": "NEW DELHI",
      "postalCode": "110037",
      "state": "DELHI",
      "customStation": "DEL",
      "airlines": "Emirates",
      "flightNumber": "EK 551",
      "portOfLoading": "DEL",
      "departureDate": "16/04/2025",
      "hawbNumber": "QSLHWB002",
      "numPackages": 2,
      "declaredWeight": 7.0,
      "destinationAirport": "JFK",
      "iec": "BRSFV5678K",
      "iecBranchCode": "",
      "invoiceTerm": "CIF",
      "mhbsNo": "H520020015",
      "exportViaEcom": "N",
      "meisScheme": "NO",
      "reimportFacility": "",
      "ecomOperator": "",
      "orderNo": "ORD-QS-2002",
      "transactionId": "TX-QS-6002",
      "orderDate": "10/04/2025",
      "adCode": "6392515",
      "accountNo": "674805600901",
      "govtOrNonGovt": "GOVERNMENT",
      "nfei": "NO",
      "status": "EXPCLOSED",
      "leoDate": "16/04/2025",
      "fobValueINR": 95000,
      "fobValueForeign": 1266.67,
      "fobExchangeRate": 75.0,
      "fobCurrency": "USD",
      "egmNumber": 3959001,
      "egmDate": "16/04/2025",
      "consignorName": "QuickShip Exports",
      "consignorAddress": "456 Industrial Area, New Delhi, 110037",
      "consigneeName": "East Side Store",
      "consigneeAddress": "100 Washington Ave, Jersey City, NJ, USA",
      "kycDocument": "GSTIN",
      "kycId": "12ABCDE3456Z",
      "stateCode": "07",
      "gstinUploaded": "YES",
      "invoiceNumber": "INV-QS-002",
      "invoiceDate": "10/04/2025",
      "invoiceValueINR": 95000,
      "ctsh": "63049100",
      "sku": "QS1002",
      "typeOfJewellery": "",
      "goodsDescription": "Handmade Ceramics",
      "quantity": 5,
      "uom": "PCS",
      "unitPrice": 19000,
      "totalItemValue": 95000,
      "unitPriceCurrency": "INR",
      "exchangeRate": 1,
      "totalItemValueINR": 95000,
      "totalTaxableValue": 95000,
      "taxableValueCurrency": "INR",
      "totalIGSTPaid": 0,
      "bondOrUt": "NO",
      "totalCessPaid": 0
    },
    {
      "csbNumber": "EGR_BLK_2025-05_005",
      "fillingDate": "02/05/2025",
      "courierRegNumber": "AAXYZ1112QACBLR",
      "courierName": "EagleFreight India",
      "address1": "789 Export Park, Bangalore, 560300",
      "address2": "",
      "city": "BENGALURU",
      "postalCode": "560300",
      "state": "KARNATAKA",
      "customStation": "BLR",
      "airlines": "Air India",
      "flightNumber": "AI 177",
      "portOfLoading": "BLR",
      "departureDate": "03/05/2025",
      "hawbNumber": "EGRHAWB003",
      "numPackages": 3,
      "declaredWeight": 12.0,
      "destinationAirport": "LHR",
      "iec": "CDEFF9012K",
      "iecBranchCode": "",
      "invoiceTerm": "FOB",
      "mhbsNo": "H520030005",
      "exportViaEcom": "Y",
      "meisScheme": "YES",
      "reimportFacility": "",
      "ecomOperator": "",
      "orderNo": "ORD-EF-3003",
      "transactionId": "TX-EF-3003",
      "orderDate": "20/04/2025",
      "adCode": "6392505",
      "accountNo": "674805600902",
      "govtOrNonGovt": "NON-GOVERNMENT",
      "nfei": "NO",
      "status": "EXPCLOSED",
      "leoDate": "03/05/2025",
      "fobValueINR": 200000,
      "fobValueForeign": 2666.67,
      "fobExchangeRate": 75.0,
      "fobCurrency": "USD",
      "egmNumber": 3959002,
      "egmDate": "03/05/2025",
      "consignorName": "EagleFreight Exports",
      "consignorAddress": "789 Export Park, Bangalore, 560300",
      "consigneeName": "UK Imports Ltd",
      "consigneeAddress": "50 Docklands, London, UK",
      "kycDocument": "PAN Card",
      "kycId": "EFGHI3456J",
      "stateCode": "29",
      "gstinUploaded": "YES",
      "invoiceNumber": "INV-EF-003",
      "invoiceDate": "20/04/2025",
      "invoiceValueINR": 200000,
      "ctsh": "63049200",
      "sku": "EF3003",
      "typeOfJewellery": "",
      "goodsDescription": "Automotive Parts",
      "quantity": 20,
      "uom": "PCS",
      "unitPrice": 10000,
      "totalItemValue": 200000,
      "unitPriceCurrency": "INR",
      "exchangeRate": 1,
      "totalItemValueINR": 200000,
      "totalTaxableValue": 200000,
      "taxableValueCurrency": "INR",
      "totalIGSTPaid": 0,
      "bondOrUt": "YES",
      "totalCessPaid": 0
    }
  ]
  

const Csb5Table = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => DATA, [])

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
      {/* Outer wrapper to allow scrolling */}
      <div className="w-full overflow-auto">
        <Table {...getTableProps()} className={clsx({ ["relative"]: false })}>
          <Table.Header>
            {headerGroups.map((headerGroup) => (
              <Table.Row {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Table.HeaderCell
                    {...column.getHeaderProps()}
                    className="whitespace-nowrap"
                  >
                    {column.render("Header")}
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            ))}
          </Table.Header>

          {/* Make body scrollable if you want vertical scroll too */}
          <Table.Body
            {...getTableBodyProps()}
            className="overflow-y-auto"
          >
            {page.map((row) => {
              prepareRow(row)
              return (
                <Table.Row {...row.getRowProps()} className="group">
                  {row.cells.map((cell) => (
                    <Table.Cell
                      {...cell.getCellProps()}
                      className="inter-small-regular h-[40px] whitespace-nowrap"
                    >
                      {cell.render("Cell")}
                    </Table.Cell>
                  ))}
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>

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

export default React.memo(Csb5Table)
