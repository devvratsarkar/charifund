import Reveal from '../ui/Reveal'
import { ORG } from '../../data/site'

const MARKS = [
  { label: 'NITI Aayog', value: ORG.nitiAayog },
  { label: 'Registration', value: `Reg. No. ${ORG.regNo}` },
  { label: 'PAN', value: ORG.pan },
  { label: 'Tax benefit', value: '80G eligible' },
]

export default function TrustMarks() {
  return (
    <section className="border-y border-white/10 bg-[#0d221e]">
      <div className="custom_container grid grid-cols-2 sm:grid-cols-4">
        {MARKS.map((mark, index) => (
          <Reveal
            key={mark.label}
            delay={index * 80}
            className="cf-trust-item px-4 py-6 sm:px-6 sm:py-7"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
              {mark.label}
            </p>
            <p className="mt-2 font-display text-sm font-extrabold text-white sm:text-[15px]">
              {mark.value}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
