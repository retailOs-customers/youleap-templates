'use client'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { useState } from 'react'

// Mock data for unfinished orders (drafts)
const mockDrafts = [
  {
    id: '1',
    status: 'טיוטה',
    amount: 1200.0,
    paymentDate: '-',
    draftNumber: 'D-1001',
    type: 'הזמנה',
    customer: '12345678 חנות הדגמה',
    date: '22/05/2025',
    extra: 'טרם הושלם',
  },
  {
    id: '2',
    status: 'טיוטה',
    amount: 850.5,
    paymentDate: '-',
    draftNumber: 'D-1002',
    type: 'הזמנה',
    customer: '87654321 מגה מרקט',
    date: '20/05/2025',
    extra: 'ממתין לאישור',
  },
]

export default function DraftsPage() {
  // Filters state (for demo, not functional)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [type, setType] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex items-center justify-between">
        <Heading level={1}>טיוטות</Heading>
        <nav className="flex gap-2 text-sm text-zinc-500">
          <span>בית</span>
          <span>/</span>
          <span>טיוטות</span>
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
            <option value="הזמנה">הזמנה</option>
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
          <Button className="max-h-13 px-6">חפש</Button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="min-w-full text-right">
          <thead className="border-b border-zinc-200 bg-zinc-100 text-sm text-zinc-700">
            <tr>
              <th className="px-4 py-3">סטטוס</th>
              <th className="px-4 py-3">סה"כ</th>
              <th className="px-4 py-3">ת.תשלום</th>
              <th className="px-4 py-3">מספר טיוטה</th>
              <th className="px-4 py-3">סוג</th>
              <th className="px-4 py-3">לקוח</th>
              <th className="px-4 py-3">ת.ערך</th>
            </tr>
          </thead>
          <tbody>
            {mockDrafts.map((draft, idx) => (
              <tr
                key={draft.id}
                className={
                  'cursor-pointer transition hover:bg-zinc-50' +
                  (idx !== mockDrafts.length - 1 ? ' border-b border-zinc-200' : '')
                }
                onClick={() => window.location.assign(`/drafts/${draft.id}`)}
              >
                <td className="px-4 py-2">
                  <span className="inline-block rounded bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-700">
                    {draft.status}
                  </span>
                </td>
                <td className="px-4 py-2">{draft.amount.toLocaleString()}</td>
                <td className="px-4 py-2">{draft.paymentDate}</td>
                <td className="px-4 py-2">{draft.draftNumber}</td>
                <td className="px-4 py-2">{draft.type}</td>
                <td className="px-4 py-2">{draft.customer}</td>
                <td className="px-4 py-2">{draft.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between p-4 text-sm text-zinc-500">
          <span>
            מציג 1-{mockDrafts.length} מתוך {mockDrafts.length}
          </span>
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
