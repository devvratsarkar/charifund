import { ORG, BANK } from '../../data/site'
import { EIGHTY_G_PDF, RAZORPAY_URL } from '../../routes/routes'
import Reveal from '../ui/Reveal'

export default function BankDetails({ showTax = false }) {
  const rows = [
    ['Bank name', BANK.name],
    ['Beneficiary name', BANK.beneficiary],
    ['Account no', BANK.account],
    ['IFSC code', BANK.ifsc],
    ['Account type', BANK.type],
    ['Branch', BANK.branch],
  ]

  return (
    <Reveal className="bg-white p-6 shadow-[0_16px_40px_rgba(18,47,42,0.08)] sm:p-8">
      <img src={BANK.logo} alt={BANK.name} className="h-16 w-auto object-contain" />
      <span className="mt-5 block h-px w-full bg-primary/8" />
      <dl className="mt-5 space-y-3">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:items-baseline">
            <dt className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-black">{label}</dt>
            <dd className="font-display text-base font-extrabold text-primary">{value}</dd>
          </div>
        ))}
      </dl>
      <a
        href={RAZORPAY_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex bg-secondary px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary"
      >
        Donate Now
      </a>
      {showTax ? (
        <p className="mt-5 text-sm leading-relaxed text-black">
          {ORG.taxNote}{' '}
          <a href={EIGHTY_G_PDF} target="_blank" rel="noreferrer" className="font-bold text-primary underline">
            Claim your 80G
          </a>
        </p>
      ) : null}
    </Reveal>
  )
}
