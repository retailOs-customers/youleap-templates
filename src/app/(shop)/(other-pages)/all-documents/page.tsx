'use client'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { useState } from 'react'

const mockAllDocuments = [
  {
    date: '02/12/2024',
    command: '75:57822',
    account: '11100000',
    reference: '91:24091785',
    details: 'תאי מרקט (2008) בע"מ 71:241182132 באחוז מזומן',
    debit: 2558.0,
    credit: '',
    balance: 20623.0,
  },
  {
    date: '02/12/2024',
    command: '75:57964',
    account: '11100000',
    reference: '91:24092023',
    details: 'תאי מרקט (2008) בע"מ 71:241183742 באחוז מזומן',
    debit: 1761.0,
    credit: '',
    balance: 22384.0,
  },
  {
    date: '02/12/2024',
    command: '75:58000',
    account: '11100000',
    reference: '91:24092089',
    details: 'תאי מרקט (2008) בע"מ 71:241182142 באחוז מזומן',
    debit: 157.0,
    credit: '',
    balance: 22541.0,
  },
  {
    date: '02/12/2024',
    command: '80:07892',
    account: '32300000',
    reference: '1|24|18937',
    details: 'תאי מרקט (2008) בע"מ',
    debit: '',
    credit: 18065.0,
    balance: 4476.0,
  },
  {
    date: '11/12/2024',
    command: '75:59380',
    account: '11100000',
    reference: '91:24122302',
    details: 'תאי מרקט (2008) בע"מ 71:24122302 באחוז מזומן 12.2024',
    debit: 6862.0,
    credit: '',
    balance: 11338.0,
  },
  {
    date: '11/12/2024',
    command: '75:59830',
    account: '11100000',
    reference: '91:24094943',
    details: 'תאי מרקט (2008) בע"מ 91:24094943',
    debit: '',
    credit: -137.0,
    balance: 11201.0,
  },
  {
    date: '11/12/2024',
    command: '75:60055',
    account: '11100000',
    reference: '91:24122301',
    details: 'תאי מרקט (2008) בע"מ 71:24122301 באחוז מזומן 12.2024',
    debit: 7366.0,
    credit: '',
    balance: 18567.0,
  },
  {
    date: '17/12/2024',
    command: '75:60015',
    account: '11100000',
    reference: '91:24095303',
    details: 'תאי מרקט (2008) בע"מ 91:24095303',
    debit: '',
    credit: -147.0,
    balance: 18420.0,
  },
  {
    date: '17/12/2024',
    command: '75:60020',
    account: '11100000',
    reference: '91:87240996',
    details: 'תאי מרקט (2008) בע"מ 91:87240996',
    debit: '',
    credit: -147.0,
    balance: 18420.0,
  },
  {
    date: '18/12/2024',
    command: '75:60830',
    account: '11100000',
    reference: '91:24096654',
    details: 'תאי מרקט (2008) בע"מ 71:24124052 באחוז מזומן 12.2024',
    debit: 8950.0,
    credit: '',
    balance: 27370.0,
  },
  {
    date: '24/12/2024',
    command: '75:62010',
    account: '11100000',
    reference: '91:24096767',
    details: 'תאי מרקט (2008) בע"מ 71:24126976 באחוז מזומן 12.2024',
    debit: 1541.0,
    credit: '',
    balance: 28911.0,
  },
]

export default function AllDocumentsPage() {
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex items-center justify-between">
        <Heading level={1}>מרכז מסמכי לקוח</Heading>
        <nav className="flex gap-2 text-sm text-zinc-500">
          <span>בית</span>
          <span>/</span>
          <span>מרכז מסמכי לקוח</span>
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
              <th className="px-4 py-3">יתרה</th>
              <th className="px-4 py-3">זכות</th>
              <th className="px-4 py-3">חובה</th>
              <th className="px-4 py-3">פרטים</th>
              <th className="px-4 py-3">אסמכתא</th>
              <th className="px-4 py-3">חן נגדי</th>
              <th className="px-4 py-3">פקודה</th>
              <th className="px-4 py-3">ת.ערך</th>
            </tr>
          </thead>
          <tbody>
            {mockAllDocuments.map((row, idx) => (
              <tr
                key={idx}
                className={'transition' + (idx !== mockAllDocuments.length - 1 ? ' border-b border-zinc-200' : '')}
              >
                <td className="px-4 py-2">{row.balance ? row.balance.toLocaleString() : ''}</td>
                <td className="px-4 py-2">{row.credit ? row.credit.toLocaleString() : ''}</td>
                <td className="px-4 py-2">{row.debit ? row.debit.toLocaleString() : ''}</td>
                <td className="px-4 py-2">{row.details}</td>
                <td className="px-4 py-2">{row.reference}</td>
                <td className="px-4 py-2">{row.account}</td>
                <td className="px-4 py-2">{row.command}</td>
                <td className="px-4 py-2">{row.date}</td>
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
