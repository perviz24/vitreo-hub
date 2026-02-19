"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Activity,
  HeartPulse,
  Sparkles,
  Syringe,
  Stethoscope,
  ListOrdered,
  AlertCircle,
  TrendingUp,
  Link2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  getTechniqueById,
  getRelatedInnovations,
  techniqueCategoryLabels,
  categoryLabels,
} from "@/lib/data";

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

export default function TechniqueDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const technique = getTechniqueById(id);

  if (!technique) {
    notFound();
  }

  const Icon = getCategoryIcon(technique.category);
  const relatedInnovations = getRelatedInnovations(technique);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back nav */}
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
        <Link href="/techniques">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Techniques
        </Link>
      </Button>

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {technique.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className={getComplexityColor(technique.complexity)}
              >
                {technique.complexity}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {techniqueCategoryLabels[technique.category]}
              </span>
              {technique.successRate && (
                <>
                  <span className="text-muted-foreground">&middot;</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {technique.successRate}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Description */}
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Overview</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {technique.description}
          </p>
        </div>

        {/* Indications */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertCircle className="h-4 w-4 text-primary" />
              Indications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {technique.indications.map((ind) => (
                <li
                  key={ind}
                  className="flex items-start gap-2 text-sm"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {ind}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Surgical Steps */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <ListOrdered className="h-4 w-4 text-primary" />
              Surgical Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {technique.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed pt-0.5">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Related Innovations */}
        {relatedInnovations.length > 0 && (
          <div>
            <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <Link2 className="h-4 w-4" />
              Related Innovations
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Technologies that enhance or enable this technique
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedInnovations.map((innovation) => (
                <Link
                  key={innovation.id}
                  href={`/innovations/${innovation.id}`}
                >
                  <Card className="group h-full transition-colors hover:border-primary/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm leading-snug group-hover:text-primary transition-colors">
                        {innovation.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {categoryLabels[innovation.category]}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {innovation.year}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
