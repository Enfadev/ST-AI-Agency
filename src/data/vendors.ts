import { z } from 'astro/zod';
import { categorySlugs, type CategorySlug } from './categories';

export const vendorSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(2),
  category: z.enum(categorySlugs),
  city: z.string().min(2),
  province: z.string().min(2),
  country: z.literal('Indonesia'),
  description: z.string().min(40),
  website: z.url(),
  email: z.email(),
  phone: z.string().min(8),
  verified: z.boolean(),
  established: z.number().int().min(1900).max(new Date().getFullYear()),
});

export type Vendor = z.infer<typeof vendorSchema>;

export const vendors: Vendor[] = vendorSchema.array().parse([
  {
    slug: 'sinar-kemasan-nusantara',
    name: 'PT Sinar Kemasan Nusantara',
    category: 'kemasan',
    city: 'Surabaya',
    province: 'Jawa Timur',
    country: 'Indonesia',
    description:
      'Flexible packaging manufacturer producing food-grade pouches, roll film and barrier laminates for FMCG and export buyers.',
    website: 'https://sinarkemasan.example.com',
    email: 'sales@sinarkemasan.example.com',
    phone: '+62 31 555 0101',
    verified: true,
    established: 1998,
  },
  {
    slug: 'baja-karya-utama',
    name: 'PT Baja Karya Utama',
    category: 'bahan-baku',
    city: 'Cikarang',
    province: 'Jawa Barat',
    country: 'Indonesia',
    description:
      'Distributor of hot-rolled steel coils, plates and structural sections with mill certificates and cut-to-size service.',
    website: 'https://bajakarya.example.com',
    email: 'sales@bajakarya.example.com',
    phone: '+62 21 555 0202',
    verified: true,
    established: 2005,
  },
  {
    slug: 'mesindo-presisi',
    name: 'PT Mesindo Presisi',
    category: 'mesin',
    city: 'Tangerang',
    province: 'Banten',
    country: 'Indonesia',
    description:
      'CNC machining and custom automation parts supplier serving food processing, packaging and automotive plants.',
    website: 'https://mesindopresisi.example.com',
    email: 'hello@mesindopresisi.example.com',
    phone: '+62 21 555 0303',
    verified: true,
    established: 2011,
  },
  {
    slug: 'samudra-logistik-prima',
    name: 'PT Samudra Logistik Prima',
    category: 'logistik',
    city: 'Jakarta Utara',
    province: 'DKI Jakarta',
    country: 'Indonesia',
    description:
      'Freight forwarder offering FCL and LCL sea freight, bonded warehousing and customs clearance across major Indonesian ports.',
    website: 'https://samudralogistik.example.com',
    email: 'ops@samudralogistik.example.com',
    phone: '+62 21 555 0404',
    verified: true,
    established: 2009,
  },
  {
    slug: 'polimer-cipta-kimia',
    name: 'PT Polimer Cipta Kimia',
    category: 'kimia',
    city: 'Gresik',
    province: 'Jawa Timur',
    country: 'Indonesia',
    description:
      'Industrial chemical supplier of resins, solvents and additives in drum, IBC and bulk tanker quantities.',
    website: 'https://polimercipta.example.com',
    email: 'sales@polimercipta.example.com',
    phone: '+62 31 555 0505',
    verified: true,
    established: 2014,
  },
  {
    slug: 'karya-plastik-mandiri',
    name: 'PT Karya Plastik Mandiri',
    category: 'kemasan',
    city: 'Bekasi',
    province: 'Jawa Barat',
    country: 'Indonesia',
    description:
      'Manufacturer of HDPE and LDPE industrial packaging, including jerry cans, drums and custom blow-moulded containers.',
    website: 'https://karyaplastik.example.com',
    email: 'sales@karyaplastik.example.com',
    phone: '+62 21 555 0606',
    verified: true,
    established: 2001,
  },
  {
    slug: 'surya-tekstil-jaya',
    name: 'PT Surya Tekstil Jaya',
    category: 'manufaktur',
    city: 'Bandung',
    province: 'Jawa Barat',
    country: 'Indonesia',
    description:
      'Integrated textile mill producing woven fabrics, industrial uniforms and technical textiles for local and export markets.',
    website: 'https://suryatekstil.example.com',
    email: 'export@suryatekstil.example.com',
    phone: '+62 22 555 0707',
    verified: true,
    established: 1995,
  },
  {
    slug: 'agri-bahan-nusantara',
    name: 'PT Agri Bahan Nusantara',
    category: 'bahan-baku',
    city: 'Makassar',
    province: 'Sulawesi Selatan',
    country: 'Indonesia',
    description:
      'Supplier of agricultural raw materials, including cocoa, coconut derivatives and cassava starch, with traceable sourcing.',
    website: 'https://agribahan.example.com',
    email: 'trade@agribahan.example.com',
    phone: '+62 411 555 0808',
    verified: true,
    established: 2017,
  },
  {
    slug: 'mitra-rantai-dingin',
    name: 'PT Mitra Rantai Dingin',
    category: 'logistik',
    city: 'Medan',
    province: 'Sumatera Utara',
    country: 'Indonesia',
    description:
      'Cold-chain logistics provider with temperature-controlled warehousing and last-mile distribution for food and pharma.',
    website: 'https://mitrarantai.example.com',
    email: 'sales@mitrarantai.example.com',
    phone: '+62 61 555 0909',
    verified: true,
    established: 2012,
  },
]);

export function vendorsByCategory(category: CategorySlug): Vendor[] {
  return vendors.filter((vendor) => vendor.category === category);
}
