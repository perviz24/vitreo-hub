"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  Microscope,
  Bot,
  Pill,
  BrainCircuit,
  Monitor,
  Award,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  timelineEvents,
  categoryLabels,
  type Category,
  type TimelineEvent,
} from "@/lib/data";

type FilterValue = "all" | "landmark" | "major" | "notable";

const significanceFilters: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "landmark", label: "Landmark" },
  { value: "major", label: "Major" },
  { value: "notable", label: "Notable" },
];

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
    case "visualization":
      return Monitor;
    case "milestone":
      return Award;
    default:
      return Microscope;
  }
}

function getSignificanceColor(significance: string) {
  switch (significance) {
    case "landmark":
      return "bg-primary/10 text-primary border-primary/20";
    case "major":
      return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
    case "notable":
      return "bg-muted text-muted-foreground border-border";
    default:
      return "";
  }
}

function getCategoryLabel(category: string) {
  if (category === "milestone") return "Milestone";
  return categoryLabels[category as Category] ?? category;
}

// Group events by decade
function groupByDecade(events: TimelineEvent[]) {
  const groups: Record<string, TimelineEvent[]> = {};
  for (const event of events) {
    const decade = `${Math.floor(event.year / 10) * 10}s`;
    if (!groups[decade]) groups[decade] = [];
    groups[decade].push(event);
  }
  return groups;
}

export default function TimelinePage() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const sorted = [...timelineEvents].sort((a, b) => b.year - a.year);
  const filtered =
    filter === "all"
      ? sorted
      : sorted.filter((e) => e.significance === filter);

  const decades = groupByDecade(filtered);
  const decadeKeys = Object.keys(decades).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

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
            Innovation Timeline
          </h1>
          <p className="mt-1 text-muted-foreground">
            {timelineEvents.length} milestones from 1970 to today
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="mt-6 flex items-center gap-3">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Tabs
          value={filter}
          onValueChange={(v) => setFilter(v as FilterValue)}
        >
          <TabsList>
            {significanceFilters.map((f) => (
              <TabsTrigger key={f.value} value={f.value} className="text-xs">
                {f.label}
                {f.value !== "all" && (
                  <span className="ml-1 text-muted-foreground">
                    (
                    {
                      timelineEvents.filter(
                        (e) => e.significance === f.value
                      ).length
                    }
                    )
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Timeline */}
      <div className="mt-8 space-y-10">
        {decadeKeys.map((decade) => (
          <div key={decade}>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {decade}
            </h2>
            <div className="relative space-y-0">
              {/* Vertical line */}
              <div className="absolute left-[23px] top-2 bottom-2 w-px bg-border" />

              {decades[decade].map((event, i) => {
                const Icon = getCategoryIcon(event.category);
                return (
                  <div
                    key={`${event.year}-${i}`}
                    className="relative flex gap-4 pb-6 last:pb-0"
                  >
                    {/* Node */}
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 ${
                        event.significance === "landmark"
                          ? "border-primary bg-primary/10"
                          : "border-border bg-background"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          event.significance === "landmark"
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 pt-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-sm font-semibold text-primary">
                          {event.year}
                        </span>
                        <Badge
                          variant="outline"
                          className={`text-[10px] ${getSignificanceColor(event.significance)}`}
                        >
                          {event.significance}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-[10px]"
                        >
                          {getCategoryLabel(event.category)}
                        </Badge>
                      </div>
                      <h3 className="mt-1 font-medium leading-snug">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <Award className="h-10 w-10 text-muted-foreground/50" />
          <p className="text-lg font-medium">No milestones match this filter</p>
          <Button variant="outline" onClick={() => setFilter("all")}>
            Show all milestones
          </Button>
        </div>
      )}
    </div>
  );
}
