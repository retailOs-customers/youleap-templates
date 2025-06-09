'use client'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import Link from 'next/link'
import { useState } from 'react'

const mockDocuments = [
  {
    id: '1',
    status: 'הופק',
    amount: 2370.0,
    paymentDate: '20/07/2025',
    documentNumber: '91:25041305',
    type: 'חשבונית',
    customer: '91349025 תאי מרקט (2008) בע"מ',
    date: '21/05/2025',
    extra: 'מסמך ראשי, כולל פרטי תשלום',
  },
  {
    id: '2',
    status: 'הופק',
    amount: -10.0,
    paymentDate: '19/07/2025',
    documentNumber: '92:87250418',
    type: 'תעודת הזמנה',
    customer: '91349025 תאי מרקט (2008) בע"מ',
    date: '20/05/2025',
    extra: 'הוזמן דרך אתר, כולל הנחת קיץ',
  },
  {
    id: '3',
    status: 'ממתין',
    amount: 1500.5,
    paymentDate: '15/07/2025',
    documentNumber: '93:12345678',
    type: 'חשבונית',
    customer: '56789012 רשת שופרסל',
    date: '18/05/2025',
    extra: 'טרם שולם, ממתין לאישור',
  },
  {
    id: '4',
    status: 'הופק',
    amount: 3200.0,
    paymentDate: '10/07/2025',
    documentNumber: '94:87654321',
    type: 'תעודת הזמנה',
    customer: '12345678 מגה מרקט',
    date: '15/05/2025',
    extra: 'כולל משלוח מהיר',
  },
  {
    id: '5',
    status: 'בוטל',
    amount: 0.0,
    paymentDate: '-',
    documentNumber: '95:11223344',
    type: 'חשבונית',
    customer: '99887766 חנות הדגמה',
    date: '10/05/2025',
    extra: 'בוטל על ידי הלקוח',
  },
]

export default function DocumentsPage() {
  // Filters state (for demo, not functional)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [type, setType] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex items-center justify-between">
        <Heading level={1}>מסמכי לקוח</Heading>
        <nav className="flex gap-2 text-sm text-zinc-500">
          <span>בית</span>
          <span>/</span>
          <span>מסמכי לקוח</span>
        </nav>
      </div>
      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <div className="flex flex-wrap items-end gap-4">
          <input
            type="text"
            placeholder="...חיפוש"
            className="w-48 rounded border px-3 py-2 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="rounded border px-3 py-2 text-sm" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">הכל</option>
            <option value="חשבונית">חשבונית</option>
            <option value="תעודת הזמנה">תעודת הזמנה</option>
          </select>
          <label className="flex flex-col text-xs text-zinc-500">
            מתאריך
            <input
              type="date"
              className="mt-1 rounded border px-2 py-1 text-sm"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </label>
          <label className="flex flex-col text-xs text-zinc-500">
            לתאריך
            <input
              type="date"
              className="mt-1 rounded border px-2 py-1 text-sm"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </label>
          <Button className="px-6">חפש</Button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="min-w-full text-right">
          <thead className="border-b border-zinc-200 bg-zinc-100 text-sm text-zinc-700">
            <tr>
              <th className="px-4 py-3">סטטוס</th>
              <th className="px-4 py-3">סה"כ</th>
              <th className="px-4 py-3">ת.תשלום</th>
              <th className="px-4 py-3">מספר מסמך</th>
              <th className="px-4 py-3">סוג</th>
              <th className="px-4 py-3">לקוח</th>
              <th className="px-4 py-3">ת.ערך</th>
            </tr>
          </thead>
          <tbody>
            {mockDocuments.map((doc, idx) => (
              <tr
                key={doc.id}
                className={
                  'cursor-pointer transition hover:bg-zinc-50' +
                  (idx !== mockDocuments.length - 1 ? ' border-b border-zinc-200' : '')
                }
                onClick={() => window.location.assign(`/documents/${doc.id}`)}
              >
                <td className="px-4 py-2">
                  <span
                    className={
                      'inline-block rounded px-2 py-1 text-xs font-bold ' +
                      (doc.status === 'הופק'
                        ? 'bg-green-100 text-green-700'
                        : doc.status === 'ממתין'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700')
                    }
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="px-4 py-2">{doc.amount.toLocaleString()}</td>
                <td className="px-4 py-2">{doc.paymentDate}</td>
                <td className="px-4 py-2">{doc.documentNumber}</td>
                <td className="px-4 py-2 text-teal-600 underline">
                  <Link href={`/documents/${doc.id}`}>{doc.type}</Link>
                </td>
                <td className="px-4 py-2">{doc.customer}</td>
                <td className="px-4 py-2">{doc.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between p-4 text-sm text-zinc-500">
          <span>מציג 1-5 מתוך 5</span>
          <div className="flex gap-2">
            <Button outline>{'<<'}</Button>
            <Button outline>{'<'}</Button>
            <Button className="text-zinc-700">1</Button>
            <Button outline>{'>'}</Button>
            <Button outline>{'>>'}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
