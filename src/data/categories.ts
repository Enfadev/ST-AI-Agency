import { z } from 'astro/zod';

export const categorySlugs = ['manufaktur', 'bahan-baku', 'mesin', 'logistik', 'kemasan', 'kimia'] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export const categorySchema = z.object({
  slug: z.enum(categorySlugs),
  name: z.string().min(2),
  description: z.string().min(20),
});

export type Category = z.infer<typeof categorySchema>;

export const categories: Category[] = categorySchema.array().parse([
  {
    slug: 'manufaktur',
    name: 'Manufaktur',
    description: 'Contract manufacturers, textile mills and industrial producers with export-ready capacity.',
  },
  {
    slug: 'bahan-baku',
    name: 'Bahan Baku',
    description: 'Steel, polymers, agricultural inputs and other raw materials sourced at industrial volume.',
  },
  {
    slug: 'mesin',
    name: 'Mesin & Peralatan',
    description: 'Machinery, automation components, CNC parts and maintenance suppliers for plant operations.',
  },
  {
    slug: 'logistik',
    name: 'Logistik & Distribusi',
    description: 'Freight forwarding, warehousing, customs clearance and cold-chain distribution partners.',
  },
  {
    slug: 'kemasan',
    name: 'Kemasan',
    description: 'Food-grade flexible packaging, rigid containers and protective packaging manufacturers.',
  },
  {
    slug: 'kimia',
    name: 'Kimia Industri',
    description: 'Resins, solvents, additives and specialty chemicals supplied to production lines.',
  },
]);

const categoryBySlug = new Map(categories.map((category) => [category.slug, category] as const));

export function getCategory(slug: CategorySlug): Category {
  const category = categoryBySlug.get(slug);

  if (!category) {
    throw new Error(`Unknown category: ${slug}`);
  }

  return category;
}
