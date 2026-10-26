import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <SectionContainer id="testimonials" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="what people say"
        title="Not just my mom thinks I write good code."
      />
      <TestimonialCarousel testimonials={testimonials} />
    </SectionContainer>
  );
}
