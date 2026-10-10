import { useEffect } from "preact/hooks";
import { useLocaleSwitch } from "../utils/useLocaleSwitch";

export default function LocaleToggle() {
  const { currentLocale, getLocaleUrl, initLocale } = useLocaleSwitch();

  // Sync state when the island loads on the client
  useEffect(() => {
    initLocale();
  }, []);

  return (
    <div>
      {currentLocale.value === "en" ? (
        <a
          href={getLocaleUrl("id")}
          className="text-gray-700 hover:text-gray-800 font-bold"
        >
          ID
        </a>
      ) : (
        <a
          href={getLocaleUrl("en")}
          className="text-gray-700 hover:text-gray-800 font-bold"
        >
          EN
        </a>
      )}
    </div>
  );
}
