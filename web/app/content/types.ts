import { z } from "zod";

/**
 * Content schema for the whole site. Every reusable page template
 * (FestivalPage, MasterclassPage, CompetitionPage, NewsPostPage,
 * StaticPage) is driven by one of these shapes -- see MIGRATION.md at the
 * repo root for which legacy HTML file each data file replaces.
 */

export const locales = ["en", "el"] as const;
export type Locale = (typeof locales)[number];

const localizedString = z.object({ en: z.string(), el: z.string() });
export type LocalizedString = z.infer<typeof localizedString>;

// A value that is usually identical in both languages (a person's name, a
// date, a link) but that the legacy site sometimes spells differently per
// language -- e.g. "Graeme Langager" vs "Γκρέιμ Λάνγκεϊτζερ". Use a plain
// string when both pages print the same thing, an {en, el} pair otherwise.
const maybeLocalized = z.union([z.string(), localizedString]);
export type MaybeLocalized = z.infer<typeof maybeLocalized>;

// Long-form copy as an ordered list of blocks: a plain string is a
// paragraph, {list} a bulleted list, {heading} a heading (level 1-6 as on
// the legacy page), {img} a photo (optionally linked), {anchor} a target
// for in-page "#id" links, {stats} a statistics table. Inside any string, [text](url) is a link and
// **text** is bold -- see RichText.tsx. Keeping everything as ordered
// blocks preserves the legacy page order exactly.
const align = z.enum(["center", "right"]).optional();
const richBlock = z.union([
  z.string(),
  // Text the legacy page printed outside a <p> under a text-center/-right
  // container (e.g. medal results); legacy <p>s are always justified.
  z.object({ p: z.string(), align: z.enum(["center", "right"]) }),
  z.object({ list: z.array(z.string()), align }),
  z.object({ heading: z.string(), level: z.number().int().min(1).max(6).optional(), align }),
  // layout: "side" = portrait beside text (legacy narrow column), "gallery" =
  // thumbnail (consecutive ones render as a grid); default fills the column.
  z.object({ img: z.string(), href: z.string().optional(), layout: z.enum(["side", "gallery"]).optional() }),
  z.object({ anchor: z.string() }),
  // Marks where the legacy page's narrow main column (beside the sidebar) ends;
  // blocks after it span the full page width.
  z.object({ wide: z.literal(true) }),
  // {narrow: N} ... {narrow: 0}: blocks the legacy page set in a centred
  // Bootstrap col-lg-N column (N of 12).
  z.object({ narrow: z.number().int().min(0).max(11) }),
  // "Countries / Visits / Percentages" statistics table (previous festivals page).
  z.object({
    stats: z.object({
      head: z.array(z.string()),
      rows: z.array(
        z.object({
          serial: z.string(),
          flag: z.string().optional(),
          country: z.string(),
          visits: z.string(),
          percent: z.number(),
        }),
      ),
    }),
  }),
]);
export type RichBlock = z.infer<typeof richBlock>;
const localizedRichText = z.object({
  en: z.array(richBlock),
  el: z.array(richBlock),
});
export type LocalizedRichText = z.infer<typeof localizedRichText>;

export const committeeMemberSchema = z.object({
  name: z.string(),
  role: localizedString,
});
export type CommitteeMember = z.infer<typeof committeeMemberSchema>;

export const juryMemberSchema = z.object({
  name: z.string(),
  photo: z.string().optional(),
  // Most jurors get a full bio; iccc jurors sometimes only get a profile
  // link (e.g. Facebook) instead -- both are legitimate per the legacy
  // pages, so bio is optional rather than required.
  bio: localizedRichText.optional(),
  profileLink: z.string().url().optional(),
});
export type JuryMember = z.infer<typeof juryMemberSchema>;

export const sponsorSchema = z.object({
  name: z.string(),
  logo: z.string(),
  link: z.string().url().optional(),
});

export const sponsorTierSchema = z.object({
  tier: localizedString,
  sponsors: z.array(sponsorSchema),
});
export type SponsorTier = z.infer<typeof sponsorTierSchema>;

export const documentLinkSchema = z.object({
  label: localizedString,
  href: z.string(),
  type: z.enum(["docx", "pdf"]),
});
export type DocumentLink = z.infer<typeof documentLinkSchema>;

export const galleryImageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
});
export type GalleryImage = z.infer<typeof galleryImageSchema>;

export const participatingChoirSchema = z.object({
  name: z.string(),
  location: z.string().optional(),
  conductor: z.string().optional(),
  country: z.string().optional(),
  flagEmoji: z.string().optional(),
  photo: z.string().optional(),
  // Rich text rather than a single string: some years' choir bios run
  // several paragraphs (bio of the conductor, awards, etc.), not just a
  // one-line blurb.
  description: localizedRichText,
  highlights: z.array(localizedString).optional(),
});
export type ParticipatingChoir = z.infer<typeof participatingChoirSchema>;

// A named block of policy copy -- "Introduction", "Application Procedure",
// "Conditions of Participation", "Registration Fee", etc. Both festivals
// and competitions reuse this instead of a hardcoded field per section,
// since which sections exist varies by year/edition.
export const contentSectionSchema = z.object({
  id: z.string(),
  // Omitted when the legacy page prints the text without a heading.
  title: localizedString.optional(),
  body: localizedRichText,
  // Photos shown with the section; per-language when the legacy twins differ.
  images: z.union([z.array(z.string()), z.object({ en: z.array(z.string()), el: z.array(z.string()) })]).optional(),
});
export type ContentSection = z.infer<typeof contentSectionSchema>;

export const scheduleEventSchema = z.object({
  time: z.string(),
  description: localizedString,
});

export const scheduleDaySchema = z.object({
  day: localizedString,
  events: z.array(scheduleEventSchema),
});
export type ScheduleDay = z.infer<typeof scheduleDaySchema>;

export const awardSchema = z.object({
  title: localizedString,
  prize: localizedString.optional(),
  piece: z.string().optional(),
  composer: z.string().optional(),
  country: z.string().optional(),
  notAwarded: z.boolean().optional(),
});
export type Award = z.infer<typeof awardSchema>;

// A sidebar/footer block of links to other pages, as hand-picked on each
// legacy page ("Other News", "Recent Festivals", ...). Copied per page
// rather than generated, so each page keeps exactly the links it had.
export const relatedLinksSchema = z.object({
  heading: localizedString.optional(),
  // Set when only that language's legacy page had the block.
  lang: z.enum(["en", "el"]).optional(),
  items: z.array(
    z.object({
      // Small label above the title, e.g. "Other News".
      kicker: maybeLocalized.optional(),
      title: maybeLocalized,
      date: maybeLocalized.optional(),
      // Site route without the locale prefix, e.g. "/news/saint-peter".
      // Per-language when the two legacy pages linked to different pages.
      href: maybeLocalized,
      image: maybeLocalized.optional(),
    }),
  ),
});
export type RelatedLinks = z.infer<typeof relatedLinksSchema>;

// --- Top-level content types --------------------------------------------

export const festivalSchema = z.object({
  slug: z.string(),
  year: z.number(),
  editionNumber: z.number(),
  competitionEditionNumber: z.number().optional(),
  title: localizedString,
  // Browser-tab title, only where the legacy page set a specific one.
  pageTitle: localizedString.optional(),
  dates: localizedString,
  poster: z.string(),
  intro: localizedRichText,
  pullQuote: localizedString.optional(),
  isCurrentEdition: z.boolean().optional(),
  committee: z.array(committeeMemberSchema).default([]),
  jury: z.array(juryMemberSchema).default([]),
  participatingChoirs: z.array(participatingChoirSchema).default([]),
  sponsors: z.array(sponsorTierSchema).default([]),
  documents: z.array(documentLinkSchema).default([]),
  sections: z.array(contentSectionSchema).default([]),
  schedule: z.array(scheduleDaySchema).default([]),
  gallery: z.array(galleryImageSchema).default([]),
  // Verbatim legacy page body (main column) and sidebar. When `content` is
  // set the template renders these instead of the structured fields above.
  content: localizedRichText.optional(),
  aside: localizedRichText.optional(),
  related: z.array(relatedLinksSchema).optional(),
});
export type Festival = z.infer<typeof festivalSchema>;

export const masterclassSchema = z.object({
  slug: z.string(),
  year: z.number(),
  editionNumber: z.number(),
  title: localizedString,
  // Browser-tab title, only where the legacy page set a specific one.
  pageTitle: localizedString.optional(),
  dates: localizedString,
  poster: z.string(),
  isCurrentEdition: z.boolean().optional(),
  intro: localizedRichText.default({ en: [], el: [] }),
  pullQuotes: z.array(localizedString).default([]),
  // Application logistics (deadlines, contact, fee notes, etc.) -- same
  // freeform-section pattern as Festival/Competition.
  sections: z.array(contentSectionSchema).default([]),
  committee: z.array(committeeMemberSchema).default([]),
  mentors: z.array(juryMemberSchema).default([]),
  topics: z.array(localizedString).default([]),
  demonstrativeChoirs: z
    .array(
      z.object({
        name: z.string(),
        photo: z.string().optional(),
        bio: localizedRichText,
      }),
    )
    .default([]),
  schedule: z.array(scheduleDaySchema).default([]),
  repertoire: z
    .array(z.object({ composer: z.string(), piece: z.string() }))
    .default([]),
  fees: z
    .array(z.object({ label: localizedString, amount: z.string() }))
    .default([]),
  // Verbatim legacy page body (main column) and sidebar. When `content` is
  // set the template renders these instead of the structured fields above.
  content: localizedRichText.optional(),
  aside: localizedRichText.optional(),
  related: z.array(relatedLinksSchema).optional(),
});
export type Masterclass = z.infer<typeof masterclassSchema>;

export const competitionSchema = z.object({
  slug: z.string(),
  kind: z.enum(["composition", "conducting"]),
  year: z.number(),
  editionNumber: z.number(),
  title: localizedString,
  dates: localizedString.optional(),
  poster: z.string().optional(),
  intro: localizedRichText,
  committee: z.array(committeeMemberSchema).default([]),
  jury: z.array(juryMemberSchema).default([]),
  // composition-competition only
  awards: z.array(awardSchema).default([]),
  recommendedWorks: z
    .array(z.object({ piece: z.string(), composer: z.string() }))
    .default([]),
  // conducting-competition only
  demonstrativeChoirs: z
    .array(
      z.object({
        name: z.string(),
        photo: z.string().optional(),
        bio: localizedRichText,
      }),
    )
    .default([]),
  sections: z.array(contentSectionSchema).default([]),
  gallery: z.array(galleryImageSchema).default([]),
  // Verbatim legacy page body (main column) and sidebar. When `content` is
  // set the template renders these instead of the structured fields above.
  content: localizedRichText.optional(),
  aside: localizedRichText.optional(),
  related: z.array(relatedLinksSchema).optional(),
});
export type Competition = z.infer<typeof competitionSchema>;

export const newsPostSchema = z.object({
  slug: z.string(),
  title: localizedString,
  date: z.string(), // ISO date, for ordering only -- legacy news pages print no date
  hero: z.string(),
  body: localizedRichText,
  itinerary: z
    .array(z.object({ date: z.string(), description: localizedString }))
    .optional(),
  acknowledgments: z
    .array(z.object({ name: z.string(), title: localizedString }))
    .optional(),
  participantCount: localizedString.optional(),
  gallery: z.array(galleryImageSchema).default([]),
  related: z.array(relatedLinksSchema).optional(),
});
export type NewsPost = z.infer<typeof newsPostSchema>;

export const staticPageSchema = z.object({
  slug: z.string(),
  title: localizedString,
  subtitle: localizedString.optional(),
  // The legacy page prints no heading of its own (title is for the menu/tab only).
  hideTitle: z.boolean().optional(),
  hero: z.string().optional(),
  sections: z.array(contentSectionSchema).default([]),
  milestones: z
    .array(z.object({ year: z.string(), description: localizedString }))
    .optional(),
});
export type StaticPageContent = z.infer<typeof staticPageSchema>;

export const newsCarouselItemSchema = z.object({
  title: localizedString,
  // Optional sub-line printed under the title (only the Erasmus card has one).
  subtitle: localizedString.optional(),
  date: maybeLocalized,
  href: z.string(),
  thumbnail: z.string(),
  // true for items added after the migration (not on the legacy home page); the content check
  // skips them
  added: z.boolean().optional(),
});

export const collaboratorSchema = z.object({
  name: maybeLocalized,
  logo: z.string(),
  link: z.string().url(),
});

export const homePageSchema = z.object({
  // The sentence over the cover image, with the legacy line breaks (newlines)
  // and highlighted words (**...**, the legacy .mainLabel spans).
  welcome: localizedString,
  // The upcoming edition's headline card, e.g. "45th International Choral
  // Festival of Preveza" / "July 8–11, 2027".
  upcomingEdition: z.object({ title: localizedString, dates: localizedString }).optional(),
  documents: z.array(documentLinkSchema.extend({ date: localizedString.optional() })).default([]),
  newsItems: z.array(newsCarouselItemSchema).default([]),
  collaborations: z.array(collaboratorSchema).default([]),
});
export type HomePageContent = z.infer<typeof homePageSchema>;

// --- Navigation -----------------------------------------------------------

export type NavItem = {
  label: LocalizedString;
  href?: string;
  children?: NavItem[];
};

// Input shapes (fields with defaults may be omitted) for authoring data files.
export type FestivalInput = z.input<typeof festivalSchema>;
export type MasterclassInput = z.input<typeof masterclassSchema>;
export type CompetitionInput = z.input<typeof competitionSchema>;
