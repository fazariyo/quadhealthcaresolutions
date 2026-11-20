// QUAD Healthcare Solutions logo mark (shield + Q + plus badge).
// Master copy lives in /public/logo.svg — keep the two in sync.
export default function LogoSvg({ idSuffix = 'main' }) {
  const g = `q-shield-${idSuffix}`;
  const s = `q-shade-${idSuffix}`;
  const m = `q-gap-${idSuffix}`;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="-3 -3 106 106" role="img" aria-label="QUAD Healthcare Solutions logo">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14D2A2" />
          <stop offset="0.55" stopColor="#0BAE87" />
          <stop offset="1" stopColor="#07906F" />
        </linearGradient>
        <linearGradient id={s} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.10" />
          <stop offset="1" stopColor="#000" stopOpacity="0.22" />
        </linearGradient>
        <mask id={m}>
          <rect x="-3" y="-3" width="106" height="106" fill="#fff" />
          <circle cx="82" cy="47" r="17" fill="#000" />
        </mask>
      </defs>
      <g mask={`url(#${m})`}>
        <path fill={`url(#${g})`} d="M44 3 L82 19.5 V50 C82 73 66 90.5 44 97 C22 90.5 6 73 6 50 V19.5 Z" />
        <path fill={`url(#${s})`} d="M44 3 L82 19.5 V50 C82 73 66 90.5 44 97 Z" />
        <path fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="0.8" d="M6.4 20 L44 3.6 L81.6 20" />
      </g>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M44 21.5 C57.6 21.5 66.5 31.6 66.5 44.5 C66.5 57.4 57.6 67.5 44 67.5 C30.4 67.5 21.5 57.4 21.5 44.5 C21.5 31.6 30.4 21.5 44 21.5 Z M44 24.2 C37.6 24.2 34.2 32.4 34.2 44.5 C34.2 56.6 37.6 64.8 44 64.8 C50.4 64.8 53.8 56.6 53.8 44.5 C53.8 32.4 50.4 24.2 44 24.2 Z"
      />
      <path fill="#fff" d="M39.5 65.5 C41 73.5 46 78.5 53.5 78.5 C57.5 78.5 61.5 77.2 65.5 75.8 L65 73.4 C62 74.3 59.5 74.7 57.2 74.7 C51.5 74.7 48.6 71 47.6 65.6 Z" />
      <circle cx="82" cy="47" r="13.2" fill="#071628" stroke="#12C9A0" strokeOpacity="0.85" strokeWidth="1.4" />
      <path fill="#fff" d="M79.2 38.5 H84.8 V44.2 H90.5 V49.8 H84.8 V55.5 H79.2 V49.8 H73.5 V44.2 H79.2 Z" />
    </svg>
  );
}
