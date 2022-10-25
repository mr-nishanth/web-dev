import { Link } from "react-router-dom"
import { getInvoices } from "./data"

const Invoice = () => {
    let invoices = getInvoices()
    return (
        <main className="text-center">
            <div className="flex flex-col gap-3">
                {
                    invoices.map((invoice) => {
                        return (
                            <Link
                                className="bg-gray-200"
                                to={`/invoices/${invoice.number}`}
                                key={invoice.number}
                            >
                                {invoice.name}
                            </Link>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Invoice