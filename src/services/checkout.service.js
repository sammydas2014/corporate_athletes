import { imageMap } from '@/assets/images/imageMap'

export const paymentMethods = [
  {
    id: 'card',
    label: 'Credit or Debit Card',
    subtitle: null,
    icons: ['PayPal', 'VISA', 'amazon', 'Apple Pay', 'G Pay', 'MC'],
  },
  {
    id: 'bank-transfer',
    label: 'Bank Transfer',
    subtitle: null,
    icons: [],
  },
  {
    id: 'invoice',
    label: 'Invoice (Pay by Invoice)',
    subtitle: 'Available for annual plans only',
    icons: [],
  },
]

export const bankDetails = {
  bankName: 'Barclays Bank PLC',
  accountName: 'Corporate Athletes Ltd',
  sortCode: '20-00-00',
  accountNumber: '83838383',
  iban: 'GB29 BARC 2000 0083 8383 83',
  swift: 'BARCGB22',
  reference: 'Use your order number as the payment reference.',
}

export const invoiceDetails = {
  paymentTerms: 'Net 30 days',
  currency: 'GBP (£)',
  minOrder: 'Annual plans only',
  contact: 'billing@corporateathletes.com',
  note: 'An invoice will be sent to your registered email address within 1 business day. Payment is due within 30 days of the invoice date.',
}

export const summaryData = {
  title: 'Order Summary',
  editButton: {
    label: 'Edit Cart',
    link: '/cart',
  },
  membershipPlan: {
    title: 'Membership Plan',
    icon: imageMap.GoldenIdea,
    name: 'Executive Membership',
    price: {
      monthly: '£499',
      period: '/month',
      billing: 'Billed annually',
    },
    total: '£5,988.00',
  },
  addons: {
    title: 'Add-ons',
    items: [
      { name: 'Additional Team Members (1)', price: '£1,800.00' },
      { name: 'Advisory Hours (5 hrs)', price: '£1,250.00' },
    ],
  },
  pricing: {
    subtotal: '£9,038.00',
    vat: { label: 'VAT (20%)', amount: '£1,807.60' },
    total: { label: 'Total', amount: '£10,845.60' },
    dueToday: { label: 'Total due today', amount: '£10,845.60' },
  },
  savingCard: {
    icon: imageMap.shieldBlackIcon,
    title: "You're saving",
    amount: '£1,224.00',
    description: 'with annual billing',
  },
  included: {
    title: "What's Included",
    items: [
      { text: 'All membership benefits' },
      { text: 'Access to member community' },
      { text: 'Event invitations & priority access' },
      { text: 'Research & insights library' },
      { text: 'Cancel anytime' },
    ],
  },
  helpCard: {
    icon: imageMap.shieldBlackIcon,
    title: 'Need Help?',
    description: 'Our team is here to help you.',
    email: 'hello@corporatelites.com',
    phone: '+44 20 1234 5678',
  },
  checkoutButton: {
    label: 'PAY SECURELY',
    amount: '£10,845.60',
  },
  terms: {
    text: 'By completing your purchase, you agree to our Terms of Use and Privacy Policy.',
    termsLink: '/terms',
    privacyLink: '/privacy',
  },
}
