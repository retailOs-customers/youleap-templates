import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import Link from 'next/link'

const mockDocument = {
  id: '1',
  customer: '91349025 תאי מרקט (2008) בע"מ',
  documentNumber: '91:25041305',
  type: 'חשבונית',
  date: '21/05/2025',
  products: [
    {
      id: '3850403',
      name: 'ליסטרין ירוק פרש ברטס 500מל',
      barcode: '5010123703547',
      quantity: 1,
      unitPrice: 680.39,
      discount: 50.8,
      total: 334.75,
    },
    {
      id: '3850401',
      name: 'ליסטרין כחול קול מינט 500מל',
      barcode: '6001135009450',
      quantity: 1,
      unitPrice: 3401.89,
      discount: 50.8,
      total: 1673.73,
    },
  ],
  summary: {
    total: 4082.4,
    totalDiscount: 2073.92,
    afterDiscount: 2008.48,
    vat: 361.52,
    toPay: 2370.0,
    rows: 2,
    items: 2,
  },
}

export default function DocumentDetailsPage() {
  const doc = mockDocument
  return (
    <div className="container mx-auto max-w-6xl py-10">
      <div className="mb-6 flex items-center justify-between">
        <Heading level={1}>
          {doc.type} / {doc.customer} / ({doc.documentNumber})
        </Heading>
        <nav className="flex gap-2 text-sm text-zinc-500">
          <Link href="/">בית</Link>
          <span>/</span>
          <Link href="/documents">מסמכי לקוח</Link>
          <span>/</span>
          <span>{doc.type}</span>
        </nav>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <div className="overflow-x-auto rounded-lg bg-white shadow">
            <table className="min-w-full text-right">
              <thead className="bg-zinc-100 text-sm text-zinc-700">
                <tr>
                  <th className="px-4 py-3">מוצר</th>
                  <th className="px-4 py-3">ברקוד</th>
                  <th className="px-4 py-3">כמות יח'</th>
                  <th className="px-4 py-3">מחיר יח'</th>
                  <th className="px-4 py-3">הנחה</th>
                  <th className="px-4 py-3">סה"כ</th>
                </tr>
              </thead>
              <tbody>
                {doc.products.map((p) => (
                  <tr key={p.id} className="border-b last:border-b-0">
                    <td className="px-4 py-2">{p.name}</td>
                    <td className="px-4 py-2">{p.barcode}</td>
                    <td className="px-4 py-2">{p.quantity}</td>
                    <td className="px-4 py-2">{p.unitPrice.toLocaleString()}</td>
                    <td className="px-4 py-2">{p.discount}%</td>
                    <td className="px-4 py-2">{p.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <aside className="w-full flex-shrink-0 md:w-72">
          <div className="mb-4 rounded-lg bg-white p-6 shadow">
            <Heading level={3} className="mb-4 text-lg">
              סיכום
            </Heading>
            <div className="mb-2 flex justify-between text-sm">
              <span>כמות שורות</span>
              <span>{doc.summary.rows}</span>
            </div>
            <div className="mb-2 flex justify-between text-sm">
              <span>כמות יח'</span>
              <span>{doc.summary.items}</span>
            </div>
            <div className="mb-2 flex justify-between text-sm">
              <span>סה"כ</span>
              <span>{doc.summary.total.toLocaleString()} ₪</span>
            </div>
            <div className="mb-2 flex justify-between text-sm">
              <span>הנחה כללית</span>
              <span>{doc.summary.totalDiscount.toLocaleString()}</span>
            </div>
            <div className="mb-2 flex justify-between text-sm">
              <span>אחרי הנחה</span>
              <span>{doc.summary.afterDiscount.toLocaleString()} ₪</span>
            </div>
            <div className="mb-2 flex justify-between text-sm">
              <span>מע"מ</span>
              <span>{doc.summary.vat.toLocaleString()} ₪</span>
            </div>
            <div className="mt-2 flex justify-between border-t pt-2 text-base font-bold">
              <span>לתשלום</span>
              <span>{doc.summary.toPay.toLocaleString()} ₪</span>
            </div>
            <Button className="mt-6 w-full">הורד מסמך</Button>
          </div>
        </aside>
      </div>
    </div>
  )
}
