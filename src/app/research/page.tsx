import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Search,
  Brain,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const researchLinks = [
  {
    title: "PubMed — Vitreoretinal Surgery",
    description:
      "Search the world's largest biomedical literature database for vitreoretinal surgery studies.",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=vitreoretinal+surgery",
    badge: "Literature",
  },
  {
    title: "ClinicalTrials.gov — Retinal",
    description:
      "Browse ongoing and completed clinical trials in retinal surgery and therapeutics.",
    url: "https://clinicaltrials.gov/search?cond=retinal&intr=surgery",
    badge: "Trials",
  },
  {
    title: "ASRS — Research Papers",
    description:
      "American Society of Retina Specialists research publications and meeting proceedings.",
    url: "https://www.asrs.org",
    badge: "Society",
  },
  {
    title: "Retina Journal",
    description:
      "The official journal of the American Society of Retina Specialists with peer-reviewed research.",
    url: "https://journals.lww.com/retinajournal",
    badge: "Journal",
  },
  {
    title: "AAO — Retina Resources",
    description:
      "American Academy of Ophthalmology clinical education and research resources for retinal diseases.",
    url: "https://www.aao.org/eye-health/diseases/retinal-diseases",
    badge: "Education",
  },
  {
    title: "Euretina — European Research",
    description:
      "European Society of Retina Specialists research abstracts and meeting presentations.",
    url: "https://euretina.org",
    badge: "Society",
  },
];

const upcomingFeatures = [
  {
    icon: Search,
    title: "PubMed Integration",
    description:
      "Search and browse vitreoretinal research papers directly from this platform.",
  },
  {
    icon: Brain,
    title: "AI Research Discovery",
    description:
      "AI-powered summaries and trend analysis across recent publications.",
  },
  {
    icon: Sparkles,
    title: "Case Gallery",
    description:
      "Curated surgical case studies with pre/post imaging and technique breakdowns.",
  },
];

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <Button asChild variant="ghost" size="icon" className="shrink-0">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Research Hub
          </h1>
          <p className="mt-1 text-muted-foreground">
            Curated resources for vitreoretinal surgery research
          </p>
        </div>
      </div>

      {/* Research Links */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold tracking-tight">
          Key Resources
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Trusted databases and organizations for retinal research
        </p>
        <Separator className="my-4" />
        <div className="grid gap-3 sm:grid-cols-2">
          {researchLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="group h-full transition-colors hover:border-primary/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-[10px]">
                      {link.badge}
                    </Badge>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-sm leading-snug group-hover:text-primary transition-colors">
                    {link.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs">
                    {link.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight">Coming Soon</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Features in development for the Research Hub
        </p>
        <Separator className="my-4" />
        <div className="grid gap-4 sm:grid-cols-3">
          {upcomingFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="border-dashed"
            >
              <CardHeader className="items-center text-center pb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <feature.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-sm">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 rounded-lg border border-dashed p-4 text-center">
        <BookOpen className="mx-auto h-6 w-6 text-muted-foreground/50" />
        <p className="mt-2 text-xs text-muted-foreground">
          This platform is for educational purposes only. Always consult
          peer-reviewed literature and qualified professionals for clinical
          decisions.
        </p>
      </div>
    </div>
  );
}
