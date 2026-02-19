import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Microscope,
  Bot,
  Pill,
  BrainCircuit,
  Clock,
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
import {
  innovations,
  techniques,
  timelineEvents,
  categoryLabels,
  type Innovation,
} from "@/lib/data";

const stats = [
  {
    label: "Innovations Tracked",
    value: innovations.length.toString(),
    icon: Eye,
  },
  {
    label: "Surgical Techniques",
    value: techniques.length.toString(),
    icon: Microscope,
  },
  {
    label: "Timeline Milestones",
    value: timelineEvents.length.toString(),
    icon: Clock,
  },
  {
    label: "Years of Progress",
    value: `${new Date().getFullYear() - 1970}+`,
    icon: BrainCircuit,
  },
];

const featuredIds = ["preceyes", "ioct", "ai-diagnostics", "gene-therapy"];
const featured = featuredIds
  .map((id) => innovations.find((i) => i.id === id))
  .filter(Boolean) as Innovation[];

const recentTimeline = timelineEvents
  .filter((e) => e.year >= 2017)
  .sort((a, b) => b.year - a.year)
  .slice(0, 5);

function getCategoryIcon(category: string) {
  switch (category) {
    case "robotics":
      return Bot;
    case "imaging":
      return Eye;
    case "pharmaceuticals":
      return Pill;
    case "ai":
      return BrainCircuit;
    default:
      return Microscope;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "established":
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    case "emerging":
      return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
    case "experimental":
      return "bg-amber-500/10 text-amber-500 border-amber-500/20";
    default:
      return "";
  }
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 text-primary"
            >
              Vitreoretinal Surgery Innovation Platform
            </Badge>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              The Future of{" "}
              <span className="text-primary">Retinal Surgery</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Explore cutting-edge innovations, surgical techniques, and
              breakthroughs transforming vitreoretinal surgery — from robotic
              precision to AI-powered diagnostics.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/innovations">
                  Explore Innovations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/techniques">Browse Techniques</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 bg-background px-4 py-8"
            >
              <stat.icon className="h-6 w-6 text-primary" />
              <span className="text-3xl font-semibold tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Innovations */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured Innovations
            </h2>
            <p className="mt-1 text-muted-foreground">
              Breakthrough technologies reshaping vitreoretinal surgery
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link href="/innovations">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <Separator className="my-6" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((innovation) => {
            const Icon = getCategoryIcon(innovation.category);
            return (
              <Link
                key={innovation.id}
                href={`/innovations/${innovation.id}`}
              >
                <Card className="group h-full transition-colors hover:border-primary/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge
                        variant="outline"
                        className={getStatusColor(innovation.status)}
                      >
                        {innovation.status}
                      </Badge>
                    </div>
                    <CardTitle className="mt-3 text-base leading-snug group-hover:text-primary transition-colors">
                      {innovation.title}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {categoryLabels[innovation.category]} &middot;{" "}
                      {innovation.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {innovation.summary}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 flex justify-center sm:hidden">
          <Button asChild variant="outline">
            <Link href="/innovations">
              View all innovations <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Recent Timeline */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Recent Milestones
              </h2>
              <p className="mt-1 text-muted-foreground">
                Key developments from the past decade
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link href="/timeline">
                Full timeline <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Separator className="my-6" />
          <div className="space-y-4">
            {recentTimeline.map((event, i) => (
              <div
                key={`${event.year}-${i}`}
                className="flex gap-4 rounded-lg border bg-card p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-semibold text-primary">
                  {event.year}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium leading-snug">
                      {event.title}
                    </h3>
                    {event.significance === "landmark" && (
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-primary text-[10px]"
                      >
                        Landmark
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center sm:hidden">
            <Button asChild variant="outline">
              <Link href="/timeline">
                View full timeline <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
