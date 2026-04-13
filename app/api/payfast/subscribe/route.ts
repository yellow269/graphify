import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST() {
  const merchantId = process.env.PAYFAST_MERCHANT_ID!
  const merchantKey = process.env.PAYFAST_MERCHANT_KEY!
  const passphrase = process.env.PAYFAST_PASSPHRASE!
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!

  const data = {
    merchant_id: merchantId,
    merchant_key: merchantKey,
    return_url: `${siteUrl}/dashboard`,
    cancel_url: `${siteUrl}/billing`,
    notify_url: `${siteUrl}/api/payfast/notify`,
    name_first: 'Graphify',
    email_address: 'customer@graphify.app',
    m_payment_id: `sub_${Date.now()}`,
    amount: '799.00',
    item_name: 'Graphify Pro Monthly',
    subscription_type: '1',
    billing_date: new Date().toISOString().split('T')[0],
    recurring_amount: '799.00',
    frequency: '3',
    cycles: '0',
  }

  const query = new URLSearchParams(data).toString()
  const signature = crypto
    .createHash('md5')
    .update(`${query}&passphrase=${passphrase}`)
    .digest('hex')

  const paymentUrl = `https://www.payfast.co.za/eng/process?${query}&signature=${signature}`

  return NextResponse.json({ url: paymentUrl })
}