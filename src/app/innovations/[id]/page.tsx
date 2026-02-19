"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Eye,
  Microscope,
  Bot,
  Pill,
  BrainCircuit,
  Monitor,
  CheckCircle2,
  Building2,
  Calendar,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  getInnovationById,
  categoryLabels,
  techniques,
  type Innovation,
} from "@/lib/data";

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
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">Impact</span>
      <div className="flex gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${
              i < impact ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-semibold">{impact}/10</span>
    </div>
  );
}

export default function InnovationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const innovation = getInnovationById(id);

  if (!innovation) {
    notFound();
  }

  const Icon = getCategoryIcon(innovation.category);
  const relatedTechniques = techniques.filter((t) =>
    t.relatedInnovationIds.includes(innovation.id)
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back nav */}
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
        <Link href="/innovations">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Innovations
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
              {innovation.title}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className={getStatusColor(innovation.status)}
              >
                {innovation.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {categoryLabels[innovation.category]}
              </span>
              <span className="text-muted-foreground">&middot;</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {innovation.year}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Impact rating */}
      <ImpactBar impact={innovation.impact} />

      {/* Description */}
      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Overview</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {innovation.description}
          </p>
        </div>

        {/* Key Benefits */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Zap className="h-4 w-4 text-primary" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {innovation.keyBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Manufacturers */}
        {innovation.manufacturers && innovation.manufacturers.length > 0 && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Building2 className="h-4 w-4 text-primary" />
                Manufacturers & Developers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {innovation.manufacturers.map((m) => (
                  <Badge key={m} variant="secondary">
                    {m}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Related Techniques */}
        {relatedTechniques.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Related Surgical Techniques
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Techniques that use or benefit from this innovation
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedTechniques.map((technique) => (
                <Link
                  key={technique.id}
                  href={`/techniques/${technique.id}`}
                >
                  <Card className="group h-full transition-colors hover:border-primary/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm leading-snug group-hover:text-primary transition-colors">
                        {technique.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {technique.complexity}
                        </Badge>
                        {technique.successRate && (
                          <span className="text-xs text-muted-foreground">
                            {technique.successRate}
                          </span>
                        )}
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
