import { Download } from "lucide-react";
import { Button, Icon } from "@/src/shared/ui";
export function ResumeDownload() {
  return (
    <Button href="/resume" variant="secondary">
      <Icon icon={Download} /> View resume
    </Button>
  );
}
