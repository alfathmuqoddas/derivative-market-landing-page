import { signal, effect } from "@preact/signals";

const LOCALES = ["en", "id"] as const;
type Locale = (typeof LOCALES)[number];

export function useLocaleSwitch() {
  const currentLocale = signal("en");

  effect(() => {
    if (typeof window !== "undefined") {
      const firstSegment = window.location.pathname.split("/")[1] as Locale;
      if (LOCALES.includes(firstSegment)) {
        currentLocale.value = firstSegment;
      }
    }
  });

  const getLocaleUrl = (targetLocale: Locale): string => {
    if (typeof window === "undefined") return `/${targetLocale}`;

    const { pathname, search, hash } = window.location;
    const segments = pathname.split("/").filter(Boolean);

    // Replace the first segment (current locale) with the target locale
    if (LOCALES.includes(segments[0] as Locale)) {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }

    return `/${segments.join("/")}${search}${hash}`;
  };

  const switchLocale = (targetLocale: Locale) => {
    if (typeof window !== "undefined") {
      window.location.href = getLocaleUrl(targetLocale);
    }
  };

  return { currentLocale, getLocaleUrl, switchLocale, locales: LOCALES };
}
