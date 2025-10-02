import Image from 'next/image';

import { Container } from './Container';

const faqs = [
  [
    {
      question: 'How does the AI writing work?',
      answer:
        'Our AI uses advanced language models to generate high-quality content based on your topic and requirements. Simply provide a topic, select a template, and our AI will create engaging content that matches your style and audience.',
    },
    {
      question: 'Can I edit the AI-generated content?',
      answer:
        'Absolutely! All AI-generated content is fully editable. You can make changes, add your own insights, and customize the content to perfectly match your voice and brand.',
    },
    {
      question: 'What platforms can I publish to?',
      answer:
        'BlogAI integrates with all major platforms including WordPress, Medium, Ghost, Webflow, and more. You can also export your content in various formats like Markdown, HTML, or plain text.',
    },
  ],
  [
    {
      question: 'Is the content SEO-optimized?',
      answer:
        'Yes! Every piece of content includes built-in SEO optimization with keyword suggestions, meta descriptions, readability scores, and more. Our AI understands SEO best practices and applies them automatically.',
    },
    {
      question: 'Can I collaborate with my team?',
      answer:
        'Professional and Enterprise plans include full collaboration features. You can invite team members, assign roles, leave comments, track changes, and work together seamlessly on any piece of content.',
    },
    {
      question: 'What if I need help?',
      answer:
        'We offer email support for all plans, priority support for Professional users, and 24/7 dedicated support for Enterprise customers. We also have extensive documentation and video tutorials.',
    },
  ],
  [
    {
      question: 'Is there a free trial?',
      answer:
        'Yes! All plans come with a 14-day free trial. No credit card required. You can test all features and see if BlogAI is right for you before committing.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Absolutely. You can cancel your subscription at any time with no penalties or cancellation fees. Your access will continue until the end of your billing period.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with BlogAI for any reason, contact us within 30 days of your purchase for a full refund.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src="/images/background-faqs.jpg"
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can't find what you're looking for, email our support team
            and we'll get back to you within 24 hours.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
