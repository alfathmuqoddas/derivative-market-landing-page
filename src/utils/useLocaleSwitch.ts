import { signal } from "@preact/signals-react";

const LOCALES = ["en", "id"] as const;
type Locale = (typeof LOCALES)[number];

// Create a global signal
export const currentLocale = signal<Locale>("en");

export function useLocaleSwitch() {
  // Call this once inside your component to sync initial state from URL
  const initLocale = () => {
    if (typeof window === "undefined") return;
    const firstSegment = window.location.pathname.split("/")[1] as Locale;
    if (LOCALES.includes(firstSegment)) {
      currentLocale.value = firstSegment;
    }
  };

  const getLocaleUrl = (targetLocale: Locale): string => {
    if (typeof window === "undefined") return `/${targetLocale}`;

    const { pathname, search, hash } = window.location;
    const segments = pathname.split("/").filter(Boolean);

    if (LOCALES.includes(segments[0] as Locale)) {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }

    return `/${segments.join("/")}${search}${hash}`;
  };

  return {
    currentLocale,
    getLocaleUrl,
    initLocale,
  };
}
