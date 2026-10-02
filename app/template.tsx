"use client";
// Per-route mount wrapper — gives a subtle fade/rise on every navigation.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
