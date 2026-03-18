import { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyComponent from "@/components/CaseStudy";
import { caseStudies } from "@/data/case-studies";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const study = caseStudies[slug];

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.overview,
  };
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((id) => ({
    slug: id,
  }));
}

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const slug = (await params).slug;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return <CaseStudyComponent study={study} />;
}
