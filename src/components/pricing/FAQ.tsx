
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the monthly/yearly billing work?",
      answer: "With monthly billing, you'll be charged every month on the date you signed up. With yearly billing, you'll be charged once for 12 months of service at a 30% discount compared to monthly billing. Both plans include the same features for their respective tiers."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for Business plans, we can accommodate invoicing and wire transfers. All payments are securely processed through Stripe."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the change takes effect immediately. If you downgrade, the change will take effect at the end of your current billing cycle."
    },
    {
      question: "How does the 30-day money-back guarantee work?",
      answer: "If you're not satisfied with RecallAI for any reason, you can request a full refund within 30 days of your initial purchase. Simply contact our support team, and we'll process your refund with no questions asked."
    },
    {
      question: "How do I claim the student discount?",
      answer: "Simply sign up with your .edu email address, and the 20% student discount will be automatically applied to your subscription. We may occasionally verify student status to prevent abuse."
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "You'll have 30 days after cancellation to export your data in Markdown format. After 30 days, your data will be permanently deleted from our servers in accordance with our data retention policy."
    },
    {
      question: "Is there a limit to how much I can store on the Lifetime plan?",
      answer: "The Lifetime plan includes 20GB of storage. If you need more, you can purchase additional storage capacity as needed without changing your plan."
    },
    {
      question: "How secure is my data with RecallAI?",
      answer: "We take security very seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Business plans include additional security features like SSO integration and role-based access controls."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
