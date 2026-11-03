import { Download } from "lucide-react";
import { defaultLocale, getDictionary, type Locale, withLocalePath } from "@/src/shared/i18n";
import { Button, Icon } from "@/src/shared/ui";

export function ResumeDownload({ locale = defaultLocale }: { locale?: Locale } = {}) {
  const dictionary = getDictionary(locale);

  return (
    <Button href={withLocalePath("/resume", locale)} variant="secondary">
      <Icon icon={Download} /> {dictionary.common.viewResume}
    </Button>
  );
}
