import { blogData } from "data/blogData";
import { programData } from "data/programData";
import { teamData } from "data/teamData";

const DONATION_TIERS = [2500, 5000, 10000, 50000];

const BASE_QUICK_REPLIES = [
  "How can I donate?",
  "Show me your programs",
  "I want to volunteer",
  "How can I contact you?",
];

const SECTION_DETAILS = [
  {
    id: "hero",
    name: "Hero",
    keywords: ["hero", "homepage", "home", "landing"],
    summary:
      "The Hero section introduces the foundation mission with a strong call to action for donation and learning more.",
    highlights: [
      "Main message: Making a Difference Together",
      "Primary CTA opens Donate section",
      "Secondary CTA opens About section",
    ],
    links: [
      { label: "Open Hero", type: "section", target: "hero" },
      { label: "Donate Now", type: "section", target: "donate" },
    ],
  },
  {
    id: "about",
    name: "About",
    keywords: ["about", "mission", "vision", "core values", "values"],
    summary:
      "The About section explains mission, vision, and core values focused on dignity, inclusion, and measurable impact.",
    highlights: [
      "Mission: women empowerment, child protection, legal literacy, and livelihoods",
      "Vision: just and compassionate society with secure families",
      "Core values: compassion, accountability, inclusion, integrity",
    ],
    links: [{ label: "Open About", type: "section", target: "about" }],
  },
  {
    id: "programs",
    name: "Programs",
    keywords: ["program", "programs", "initiatives", "services"],
    summary:
      "The Programs section showcases practical, high-impact initiatives designed around community needs.",
    highlights: [
      `Total program categories: ${programData.length}`,
      "Includes women empowerment, child rights, legal awareness, poverty support, environment, and animal welfare",
      "Each program has a dedicated details page with interventions and outcomes",
    ],
    links: [{ label: "Open Programs", type: "section", target: "programs" }],
  },
  {
    id: "blog",
    name: "Blog",
    keywords: ["blog", "news", "stories", "updates", "article", "post"],
    summary:
      "The Blog section publishes stories, impact updates, and news with filtering by category and search.",
    highlights: [
      `Total posts available: ${blogData.length}`,
      "Categories include News, Stories, Impact, and Events",
      "Users can search posts and sort by newest or oldest",
    ],
    links: [{ label: "Open Blog", type: "section", target: "blog" }],
  },
  {
    id: "impact",
    name: "Impact",
    keywords: ["impact", "stats", "results", "outcomes", "milestones"],
    summary:
      "The Impact section highlights measurable change using animated counters and visual indicators.",
    highlights: [
      "50,000+ beneficiaries",
      "150+ projects completed",
      "25+ countries reached and 1,000+ volunteers engaged",
    ],
    links: [{ label: "Open Impact", type: "section", target: "impact" }],
  },
  {
    id: "team",
    name: "Team",
    keywords: ["team", "staff", "members", "leadership", "director"],
    summary:
      "The Team section presents leadership and field members in a slider with profile pages.",
    highlights: [
      `Team members listed: ${teamData.length}`,
      "Includes Executive Director, Program Director, outreach and operations members",
      "Each member has a dedicated profile route",
    ],
    links: [{ label: "Open Team", type: "section", target: "team" }],
  },
  {
    id: "donate",
    name: "Donate",
    keywords: ["donate", "donation", "contribute", "fund", "support us"],
    summary:
      "The Donate section encourages giving with transparent impact tiers and prominent donation CTA.",
    highlights: [
      "Suggested tiers: Rs 2,500 / 5,000 / 10,000 / 50,000",
      "Each tier explains concrete social impact",
      "Donation flow UI is ready; payment integration can be connected next",
    ],
    links: [{ label: "Open Donate", type: "section", target: "donate" }],
  },
  {
    id: "contact",
    name: "Contact",
    keywords: ["contact", "reach", "phone", "email", "address"],
    summary:
      "The Contact section provides a form plus direct location, phone, and email information.",
    highlights: [
      "Address: Muzaffarpur, Bihar, India",
      "Phone and email are shown for direct outreach",
      "Form validates required fields and email format",
    ],
    links: [
      { label: "Open Contact", type: "section", target: "contact" },
      { label: "Email: rk7864104@gmail.com", type: "email", target: "rk7864104@gmail.com" },
    ],
  },
  {
    id: "footer",
    name: "Footer",
    keywords: ["footer", "newsletter", "quick links", "social"],
    summary:
      "The Footer section includes brand summary, quick navigation, contact details, social links, and newsletter signup.",
    highlights: [
      "Quick links jump to About, Programs, Impact, Team, Donate, and Contact",
      "Social icons are available for Facebook, Twitter, Instagram, and LinkedIn",
      "Newsletter form validates email before submission",
    ],
    links: [{ label: "Open Contact", type: "section", target: "contact" }],
  },
];

const STOP_WORDS = new Set([
  "the",
  "is",
  "a",
  "an",
  "and",
  "or",
  "for",
  "to",
  "of",
  "in",
  "on",
  "with",
  "me",
  "you",
  "your",
  "our",
  "about",
  "tell",
  "show",
  "please",
  "want",
  "how",
  "what",
]);

const CONTACT_CARD = {
  text: "You can reach Yashashvi Foundation through our contact section.",
  links: [
    { label: "Open Contact Section", type: "section", target: "contact" },
    { label: "Email: rk7864104@gmail.com", type: "email", target: "rk7864104@gmail.com" },
  ],
};

const DONATE_CARD = {
  text: `You can donate from the website. Suggested tiers are Rs ${DONATION_TIERS.join(", Rs ")}.`,
  links: [{ label: "Open Donate Section", type: "section", target: "donate" }],
};

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalize(text)
    .split(" ")
    .filter((token) => token && !STOP_WORDS.has(token));
}

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

function buildSectionDetailReply(section) {
  const formattedHighlights = section.highlights
    .map((item) => `- ${item}`)
    .join("\n");

  return {
    text: `${section.name} section details:\n\n${section.summary}\n\nKey points:\n${formattedHighlights}`,
    links: section.links,
    quickReplies: [
      "Show all sections",
      "What is in programs section?",
      "How can I donate?",
    ],
  };
}

function buildAllSectionsReply() {
  const lines = SECTION_DETAILS.map(
    (section) => `- ${section.name}: ${section.summary}`,
  ).join("\n");

  return {
    text: `Here are the details of every main section:\n\n${lines}`,
    links: [
      { label: "Open About", type: "section", target: "about" },
      { label: "Open Programs", type: "section", target: "programs" },
      { label: "Open Contact", type: "section", target: "contact" },
    ],
    quickReplies: [
      "Hero section details",
      "Impact section details",
      "Contact section details",
    ],
  };
}

function findSectionInMessage(message) {
  return SECTION_DETAILS.find((section) =>
    includesAny(message, section.keywords),
  );
}

function scoreByTokenOverlap(queryTokens, content) {
  const contentTokens = new Set(tokenize(content));
  let score = 0;

  queryTokens.forEach((token) => {
    if (contentTokens.has(token)) {
      score += 1;
    }
  });

  return score;
}

function topPrograms(query) {
  const queryTokens = tokenize(query);

  return [...programData]
    .map((program) => {
      const searchable = [
        program.title,
        program.category,
        program.shortDescription,
        program.focus,
        ...(program.tags || []),
      ].join(" ");

      return {
        program,
        score: scoreByTokenOverlap(queryTokens, searchable),
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.program);
}

function topBlogs(query) {
  const queryTokens = tokenize(query);

  return [...blogData]
    .map((post) => {
      const searchable = [
        post.title,
        post.excerpt,
        post.category,
        ...(post.tags || []),
      ].join(" ");

      return {
        post,
        score: scoreByTokenOverlap(queryTokens, searchable),
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.post);
}

function topTeam(query) {
  const queryTokens = tokenize(query);

  return [...teamData]
    .map((member) => {
      const searchable = [
        member.name,
        member.role,
        member.bio,
        member.focus,
        ...(member.expertise || []),
      ].join(" ");

      return {
        member,
        score: scoreByTokenOverlap(queryTokens, searchable),
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.member);
}

function buildProgramReply(matches) {
  if (matches.length === 0) {
    return {
      text: "We run programs across women empowerment, child protection, poverty support, legal rights, wildlife conservation, and animal welfare.",
      links: [{ label: "Open Programs", type: "section", target: "programs" }],
      quickReplies: ["Women empowerment", "Child protection", "Legal awareness"],
    };
  }

  const lines = matches.map(
    (program) => `${program.title}: ${program.shortDescription}`,
  );

  return {
    text: `Here are the most relevant programs:\n\n${lines.join("\n\n")}`,
    links: [
      { label: "Browse All Programs", type: "section", target: "programs" },
      {
        label: `Open ${matches[0].title}`,
        type: "route",
        target: `/programs/${matches[0].id}`,
      },
    ],
    quickReplies: ["Show women programs", "Show child programs", "Show environment programs"],
  };
}

function buildBlogReply(matches) {
  if (matches.length === 0) {
    return {
      text: "We publish stories, news, and impact updates regularly.",
      links: [{ label: "Open Blog", type: "section", target: "blog" }],
      quickReplies: ["Latest impact post", "Stories about children", "Women empowerment blog"],
    };
  }

  const lines = matches.map(
    (post) => `${post.title} (${post.date}): ${post.excerpt}`,
  );

  return {
    text: `These blog posts match your question:\n\n${lines.join("\n\n")}`,
    links: [
      { label: "Browse Blog Section", type: "section", target: "blog" },
      {
        label: `Read ${matches[0].title}`,
        type: "route",
        target: `/blog/${matches[0].id}`,
      },
    ],
    quickReplies: ["Show latest updates", "Impact report", "Volunteer stories"],
  };
}

function buildTeamReply(matches) {
  if (matches.length === 0) {
    return {
      text: "Our team includes leadership and field experts in outreach, program delivery, and finance.",
      links: [{ label: "Meet the Team", type: "section", target: "team" }],
      quickReplies: ["Who is the director?", "Program director", "Outreach team"],
    };
  }

  const lines = matches.map(
    (member) => `${member.name} (${member.role}) - ${member.focus}`,
  );

  return {
    text: `Here are team members relevant to your question:\n\n${lines.join("\n\n")}`,
    links: [
      { label: "Open Team Section", type: "section", target: "team" },
      {
        label: `View ${matches[0].name}`,
        type: "route",
        target: `/team/${matches[0].id}`,
      },
    ],
    quickReplies: ["How to contact leadership", "Show outreach team", "Show all team members"],
  };
}

function fallbackReply() {
  return {
    text: "I can help with donations, programs, volunteering, blog updates, impact highlights, and contact details. What would you like to explore?",
    quickReplies: BASE_QUICK_REPLIES,
    links: [{ label: "Open Contact", type: "section", target: "contact" }],
  };
}

export function getWelcomeMessage() {
  return {
    text: "Hi, I am your HelpingHand assistant. Ask me about programs, donations, volunteering, impact, team, or contact details.",
    quickReplies: BASE_QUICK_REPLIES,
  };
}

export function generateChatbotReply(input) {
  const message = normalize(input);

  if (!message) {
    return {
      text: "Please type a question and I will help right away.",
      quickReplies: BASE_QUICK_REPLIES,
    };
  }

  if (includesAny(message, ["hi", "hello", "hey", "namaste"])) {
    return {
      text: "Hello. I can quickly guide you through programs, donations, volunteering, and support options.",
      quickReplies: BASE_QUICK_REPLIES,
    };
  }

  if (
    includesAny(message, [
      "all section",
      "all sections",
      "every section",
      "whole website",
      "complete website",
      "full website",
      "site sections",
    ])
  ) {
    return buildAllSectionsReply();
  }

  const matchedSection = findSectionInMessage(message);
  if (matchedSection) {
    return buildSectionDetailReply(matchedSection);
  }

  if (includesAny(message, ["donate", "donation", "contribute", "support", "fund"])) {
    return {
      ...DONATE_CARD,
      quickReplies: ["Donation impact", "Open donate section", "Tax deductible?"],
    };
  }

  if (includesAny(message, ["contact", "phone", "email", "address", "reach"])) {
    return {
      ...CONTACT_CARD,
      quickReplies: ["Open contact section", "Email the team", "Where are you located?"],
    };
  }

  if (includesAny(message, ["volunteer", "join", "work with", "participate", "help out"])) {
    return {
      text: "Great to hear that. You can volunteer by sharing your skills in outreach, education, events, and field support. Use the contact form and mention your interests and availability.",
      links: [
        { label: "Contact to Volunteer", type: "section", target: "contact" },
        { label: "See Community Impact", type: "section", target: "impact" },
      ],
      quickReplies: ["Volunteer in education", "Volunteer in outreach", "What skills are needed?"],
    };
  }

  if (includesAny(message, ["program", "women", "child", "legal", "wildlife", "poverty", "cow"])) {
    return buildProgramReply(topPrograms(message));
  }

  if (includesAny(message, ["blog", "story", "news", "update", "article", "post"])) {
    return buildBlogReply(topBlogs(message));
  }

  if (includesAny(message, ["team", "director", "member", "staff", "leader"])) {
    return buildTeamReply(topTeam(message));
  }

  if (includesAny(message, ["impact", "result", "outcome", "milestone", "report"])) {
    return {
      text: "Recent impact highlights include stronger school retention, improved access to healthcare and nutrition, women-led enterprise growth, and community-based conservation outcomes.",
      links: [
        { label: "View Impact Section", type: "section", target: "impact" },
        { label: "Read Monthly Impact Report", type: "route", target: "/blog/monthly-impact-report" },
      ],
      quickReplies: ["Show impact report", "Programs with biggest outcomes", "How can I help more?"],
    };
  }

  return fallbackReply();
}
