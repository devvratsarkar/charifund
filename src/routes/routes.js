export function getHomePageRoute() {
  return `/`
}

export function getAboutPageRoute() {
  return `/about-us`
}

export function getServicesPageRoute() {
  return `/program`
}

export function getProgramPageRoute(slug = '') {
  return slug ? `/program/${slug}` : `/program`
}

export function getContactPageRoute() {
  return `/contact`
}

export function getCurrentCaseRoute() {
  return `/support/current-case`
}

export function getSuccessCaseRoute() {
  return `/support/success-case`
}

export function getDonatePageRoute() {
  return `/donate`
}

export function getAccountDonationRoute() {
  return `/donate/account`
}

export function getUpiDonationRoute() {
  return `/donate/upi`
}

export function getPanCardRoute() {
  return `/legal/pan-card`
}

export function getNgoDarpanRoute() {
  return `/legal/ngo-darpan`
}

export function getGalleryPageRoute() {
  return `/gallery`
}

export function getPrivacyPolicyRoute() {
  return `/privacy-policy`
}

export function getTermsRoute() {
  return `/terms-and-conditions`
}

export function getRefundPolicyRoute() {
  return `/return-and-refund`
}

export const RAZORPAY_URL = 'https://razorpay.me/@icchashakticharitabletrust'
export const REGISTRATION_PDF = '/12A-Certificate_2.pdf'
export const EIGHTY_G_PDF = '/80-G-Certificate-income-tax.pdf'
