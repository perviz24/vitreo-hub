"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Activity,
  Stethoscope,
  HeartPulse,
  Syringe,
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
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  techniques,
  techniqueCategoryLabels,
  type TechniqueCategory,
  type Technique,
} from "@/lib/data";

const categories: { value: "all" | TechniqueCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "vitrectomy", label: "Vitrectomy" },
  { value: "retinal-detachment", label: "Retinal Detachment" },
  { value: "macular", label: "Macular" },
  { value: "diabetic", label: "Diabetic" },
  { value: "other", label: "Other" },
];

function getCategoryIcon(category: string) {
  switch (category) {
    case "vitrectomy":
      return Activity;
    case "retinal-detachment":
      return HeartPulse;
    case "macular":
      return Sparkles;
    case "diabetic":
      return Syringe;
    default:
      return Stethoscope;
  }
}

function getComplexityColor(complexity: string) {
  switch (complexity) {
    case "basic":
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    case "intermediate":
      return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20";
    case "advanced":
      return "bg-amber-500/10 text-amber-500 border-amber-500/20";
    default:
      return "";
  }
}

function TechniqueCard({ technique }: { technique: Technique }) {
  const Icon = getCategoryIcon(technique.category);
  return (
    <Link href={`/techniques/${technique.id}`}>
      <Card className="group h-full transition-colors hover:border-primary/50">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <Badge
              variant="outline"
              className={getComplexityColor(technique.complexity)}
            >
              {technique.complexity}
            </Badge>
          </div>
          <CardTitle className="mt-3 text-base leading-snug group-hover:text-primary transition-colors">
            {technique.name}
          </CardTitle>
          <CardDescription className="text-xs">
            {techniqueCategoryLabels[technique.category]}
            {technique.successRate && ` · ${technique.successRate}`}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {technique.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {technique.indications.slice(0, 3).map((ind) => (
              <Badge
                key={ind}
                variant="secondary"
                className="text-[10px] font-normal"
              >
                {ind}
              </Badge>
            ))}
            {technique.indications.length > 3 && (
              <Badge
                variant="secondary"
                className="text-[10px] font-normal"
              >
                +{technique.indications.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function TechniquesPage() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | TechniqueCategory
  >("all");
  const [search, setSearch] = useState("");

  const filtered = techniques.filter((technique) => {
    const matchesCategory =
      activeCategory === "all" || technique.category === activeCategory;
    const matchesSearch =
      search === "" ||
      technique.name.toLowerCase().includes(search.toLowerCase()) ||
      technique.description.toLowerCase().includes(search.toLowerCase());
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
            Surgical Techniques
          </h1>
          <p className="mt-1 text-muted-foreground">
            {techniques.length} techniques across{" "}
            {Object.keys(techniqueCategoryLabels).length} categories
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs
          value={activeCategory}
          onValueChange={(v) =>
            setActiveCategory(v as "all" | TechniqueCategory)
          }
        >
          <TabsList className="flex-wrap h-auto gap-1">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="text-xs"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search techniques..."
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
          <p className="text-lg font-medium">No techniques found</p>
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
          {filtered.map((technique) => (
            <TechniqueCard key={technique.id} technique={technique} />
          ))}
        </div>
      )}
    </div>
  );
}
