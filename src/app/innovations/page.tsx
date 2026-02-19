"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Eye,
  Microscope,
  Bot,
  Pill,
  BrainCircuit,
  Monitor,
  Search,
  ArrowLeft,
  SlidersHorizontal,
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
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  innovations,
  categoryLabels,
  type Category,
  type Innovation,
} from "@/lib/data";

const categories: { value: "all" | Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "instruments", label: "Instruments" },
  { value: "imaging", label: "Imaging" },
  { value: "visualization", label: "Visualization" },
  { value: "robotics", label: "Robotics" },
  { value: "pharmaceuticals", label: "Pharma" },
  { value: "ai", label: "AI" },
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

function ImpactBar({ impact }: { impact: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">Impact</span>
      <div className="flex gap-0.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i < impact ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function InnovationCard({ innovation }: { innovation: Innovation }) {
  const Icon = getCategoryIcon(innovation.category);
  return (
    <Link href={`/innovations/${innovation.id}`}>
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
            {categoryLabels[innovation.category]} &middot; {innovation.year}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {innovation.summary}
          </p>
          <ImpactBar impact={innovation.impact} />
        </CardContent>
      </Card>
    </Link>
  );
}

export default function InnovationsPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | Category>(
    "all"
  );
  const [search, setSearch] = useState("");

  const filtered = innovations.filter((innovation) => {
    const matchesCategory =
      activeCategory === "all" || innovation.category === activeCategory;
    const matchesSearch =
      search === "" ||
      innovation.title.toLowerCase().includes(search.toLowerCase()) ||
      innovation.summary.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <Button asChild variant="ghost" size="icon" className="shrink-0">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Innovations Directory
          </h1>
          <p className="mt-1 text-muted-foreground">
            {innovations.length} innovations across{" "}
            {Object.keys(categoryLabels).length} categories
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          value={activeCategory}
          onValueChange={(v) => setActiveCategory(v as "all" | Category)}
        >
          <TabsList className="flex-wrap h-auto gap-1">
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value} className="text-xs">
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search innovations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <SlidersHorizontal className="h-10 w-10 text-muted-foreground/50" />
          <p className="text-lg font-medium">No innovations found</p>
          <p className="text-sm text-muted-foreground">
            Try adjusting your filters or search terms
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setActiveCategory("all");
              setSearch("");
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((innovation) => (
            <InnovationCard key={innovation.id} innovation={innovation} />
          ))}
        </div>
      )}
    </div>
  );
}
