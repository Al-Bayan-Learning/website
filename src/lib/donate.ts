/**
 * Donation bank details. The account title and bank come from site.json; the
 * account number and IBAN are injected at build time by `vite.define` in
 * astro.config.mjs (from .env or Cloudflare build variables), because the repo
 * is public and must never contain bank account numbers.
 */
import site from '../data/site.json';

declare const __DONATE_ACCOUNT_NUMBER__: string;
declare const __DONATE_IBAN__: string;

export const bankDetails = {
  accountTitle: site.donate.accountTitle,
  bank: site.donate.bank,
  accountNumber: typeof __DONATE_ACCOUNT_NUMBER__ !== 'undefined' ? __DONATE_ACCOUNT_NUMBER__ : '',
  iban: typeof __DONATE_IBAN__ !== 'undefined' ? __DONATE_IBAN__ : '',
};
