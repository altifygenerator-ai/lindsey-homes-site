export type ReferralMember = {
  code: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  placeholder?: boolean;
};

export const referralMembers: ReferralMember[] = [
  {
    code: "whitney",
    name: "Whitney",
    role: "Sales",
  },
  {
    code: "zac",
    name: "Zac Lindsey",
    role: "Lindsey Homes",
  },
  {
    code: "jon",
    name: "Jon",
    role: "Lindsey Homes",
  },
  {
    code: "team-4",
    name: "Team Member",
    role: "Add name / title",
    placeholder: true,
  },
];

export function getReferralMember(code: string | null | undefined) {
  if (!code) return null;
  const normalized = code.trim().toLowerCase();
  return referralMembers.find((member) => member.code === normalized) ?? null;
}

export function getReferralUrl(code: string) {
  return `https://www.lindseyhomesdfw.com/r/${encodeURIComponent(code)}`;
}
