import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "es"
  );

  return (
    <div className="cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
            <Link  key={"locale-" + locale}  href={{ pathname, query }} as={asPath} locale={locale}>
              <p>
                {locale === "es" ? "ES" : locale === "en" ? "EN" : "ES"}
              </p>
            </Link>
        );
      })}
    </div>
  );
}