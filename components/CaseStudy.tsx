"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CaseStudy } from "@/data/case-studies";

interface CaseStudyComponentProps {
  study: CaseStudy;
  previousLink?: {
    href: string;
    label: string;
  };
}

export default function CaseStudyComponent({
  study,
  previousLink,
}: CaseStudyComponentProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="border-b border-neutral-200 sticky top-16 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href={previousLink?.href || "/projects"}
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {previousLink?.label || "Back to Projects"}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full uppercase tracking-wider">
              {study.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
            {study.title}
          </h1>

          {/* Meta Information */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-neutral-200">
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">
                Role
              </p>
              <p className="text-lg text-neutral-900 font-medium">{study.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">
                Team Size
              </p>
              <p className="text-lg text-neutral-900 font-medium">
                {study.teamSize}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">
                Duration
              </p>
              <p className="text-lg text-neutral-900 font-medium">
                {study.duration}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-2">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {study.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-2 py-1 bg-neutral-100 text-neutral-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {study.technologies.length > 2 && (
                  <span className="text-sm px-2 py-1 bg-neutral-100 text-neutral-600">
                    +{study.technologies.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      {study.images?.hero && (
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <p className="text-neutral-400 mb-2">Project Visual</p>
                <p className="text-xs text-neutral-500">{study.images.hero}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Overview</h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {study.overview}
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            The Problem
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {study.problem}
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Process & Approach
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            {study.process}
          </p>

          {/* Process Details */}
          <div className="space-y-4">
            {study.processDetails.map((detail, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-neutral-900 text-white text-sm font-medium">
                    {idx + 1}
                  </div>
                </div>
                <div className="pt-1">
                  <p className="text-neutral-600 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Decisions */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Key Decisions & Tradeoffs
          </h2>

          <div className="space-y-8">
            {study.keyDecisions.map((item, idx) => (
              <div key={idx} className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {item.decision}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  <span className="font-medium text-neutral-900">
                    Tradeoff:
                  </span>{" "}
                  {item.tradeoff}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Outcomes & Results
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-12">
            {study.outcome}
          </p>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {study.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-neutral-200 rounded-xl p-6"
              >
                <p className="text-sm uppercase tracking-wider text-neutral-500 font-medium mb-2">
                  {metric.label}
                </p>
                <p className="text-2xl font-bold text-neutral-900">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Reflection & Learnings
          </h2>
          <div className="bg-neutral-50 border-l-4 border-neutral-900 p-8 rounded-lg">
            <p className="text-lg text-neutral-600 leading-relaxed">
              {study.reflection}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-neutral-900 mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border-2 border-neutral-200 text-neutral-700 rounded-full font-medium hover:border-neutral-900 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            Interested in working together?
          </h2>
          <Link
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors font-medium"
          >
            Get in Touch
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
