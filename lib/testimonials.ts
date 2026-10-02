export type Testimonial = {
  quote: string;
  name: string;
  role: string; // e.g. "Owner, MIJMAAN"
};

// Add REAL client testimonials here — the section auto-appears once this array
// has entries, and stays hidden while it's empty. Do not add invented quotes.
export const testimonials: Testimonial[] = [
  // {
  //   quote: "Abhishek rebuilt our site and it started showing up on Google within a week.",
  //   name: "Client name",
  //   role: "Owner, MIJMAAN",
  // },
];
