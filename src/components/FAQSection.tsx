import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the plant disease detection work?",
    answer: "Simply upload a clear photo of your plant's affected leaf. Our AI analyzes the image to identify disease patterns, symptoms, and provides an instant diagnosis with treatment recommendations."
  },
  {
    question: "What types of plants and diseases can you detect?",
    answer: "We currently support 7 major crops including Tomato, Corn, Potato, Cotton, Sugarcane, Rice, and Wheat. We can detect over 30 different diseases across these crops with high accuracy."
  },
  {
    question: "How accurate is the disease detection?",
    answer: "Our AI model achieves over 99% accuracy in controlled tests. However, accuracy may vary based on image quality, lighting conditions, and disease progression. Always consult an agricultural expert for severe cases."
  },
  {
    question: "Is the service free to use?",
    answer: "Basic disease detection is free for all users. Premium features like detailed treatment plans, disease history tracking, and expert consultations are available with a subscription."
  },
  {
    question: "What image quality is required?",
    answer: "For best results, upload clear, well-lit photos of the affected leaf. Ensure the diseased area is visible and the image is in focus. We support JPG, PNG, and WEBP formats."
  },
  {
    question: "Can I get treatment recommendations?",
    answer: "Yes! After detection, you'll receive specific treatment recommendations including organic and chemical options, preventive measures, and best practices for managing the identified disease."
  },
  {
    question: "How do I know which crops to plant this season?",
    answer: "Check our Seasonal Crops section on the homepage for region-specific recommendations. We provide guidance on the best crops for Summer, Monsoon, Winter, and Spring seasons."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We don't store your uploaded images permanently. All data is processed securely and deleted after analysis. Your privacy is our priority."
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-nature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our plant disease detection service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
