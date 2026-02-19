import { Eye } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <Eye className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium">Vitreo Hub</span>
          </div>
          <p className="text-xs text-muted-foreground text-center max-w-md">
            Educational resource only. Not medical advice. Always consult a
            qualified ophthalmologist for clinical decisions.
          </p>
        </div>
        <Separator className="my-4" />
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Vitreo Hub. For educational purposes
          only.
        </p>
      </div>
    </footer>
  );
}
