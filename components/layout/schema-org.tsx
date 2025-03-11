import { siteConfig } from '@/lib/config';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';

export default function SchemaOrg() {
  const organizationSchema = generateOrganizationSchema(siteConfig);
  const websiteSchema = generateWebsiteSchema(siteConfig);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}