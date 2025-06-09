import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Divider } from '@/components/divider'
import { Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { Text } from '@/components/text'
import { Textarea } from '@/components/textarea'
import type { Metadata } from 'next'
import { Address } from './address'

export const metadata: Metadata = {
  title: 'הגדרות',
  description: 'נהל את הגדרות הארגון שלך.',
}

export default function Settings() {
  return (
    <div className="container">
      <form method="post" className="mx-auto max-w-4xl py-20">
        <Heading>
          <span data-slot="italic">הגדרות</span> חשבון
        </Heading>
        <Divider className="my-10" />

        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <Text className="font-medium">שם הארגון</Text>
            <Text className="text-zinc-500">זה יוצג בפרופיל הציבורי שלך.</Text>
          </div>
          <div>
            <Input aria-label="שם הארגון" name="name" placeholder="הזן את שם הארגון" />
          </div>
        </section>

        <Divider className="my-10" soft />

        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <Text className="font-medium">אודות הארגון</Text>
            <Text className="text-zinc-500">זה יוצג בפרופיל הציבורי שלך. מקסימום 240 תווים.</Text>
          </div>
          <div>
            <Textarea aria-label="אודות הארגון" name="bio" />
          </div>
        </section>

        <Divider className="my-10" soft />

        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <Text className="font-medium">דואל הארגון</Text>
            <Text className="text-zinc-500">כך לקוחות יכולים ליצור איתך קשר לתמיכה.</Text>
          </div>
          <div className="space-y-4">
            <Input type="email" aria-label="דואל הארגון" name="email" defaultValue="info@example.com" />
            <CheckboxField>
              <Checkbox name="email_is_public" defaultChecked />
              <Label>הצג דוא"ל בפרופיל הציבורי</Label>
            </CheckboxField>
          </div>
        </section>

        <Divider className="my-10" soft />

        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <Text className="font-medium">כתובת</Text>
            <Text className="text-zinc-500">כאן רשום הארגון שלך.</Text>
          </div>
          <Address />
        </section>

        <Divider className="my-10" soft />

        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <Text className="font-medium">מטבע</Text>
            <Text className="text-zinc-500">המטבע שהארגון שלך יגבה.</Text>
          </div>
          <div>
            <Select aria-label="מטבע" name="currency" defaultValue="cad">
              <option value="cad">CAD - דולר קנדי</option>
              <option value="usd">USD - דולר אמריקאי</option>
            </Select>
          </div>
        </section>

        <Divider className="my-10" soft />

        <div className="flex justify-end gap-2.5">
          <Button type="reset" outline>
            איפוס
          </Button>
          <Button type="submit">שמור שינויים</Button>
        </div>
      </form>

      <Divider />
    </div>
  )
}
