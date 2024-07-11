import React from 'react';
const faqs = [
  {
    question: 'What is microfinance?',
    answer: 'Microfinance refers to the provision of financial services to low-income individuals or communities who typically lack access to traditional banking services. It includes microloans, savings accounts, insurance, and other financial products tailored to meet the needs of underserved populations.',
  },
  {
    question: 'How does microfinance help communities?',
    answer: 'Microfinance plays a crucial role in empowering communities by providing them with access to financial resources. It enables individuals to start or expand small businesses, improve their livelihoods, and contribute to economic growth. Additionally, microfinance promotes financial inclusion by integrating marginalized groups into the formal financial system.',
  },
  {
    question: 'What types of microfinance services does AD Finance offer?',
    answer: 'AD Finance offers a range of microfinance services including microloans, group lending, savings accounts, insurance products, and financial literacy training. These services are designed to meet the unique needs of microentrepreneurs and individuals from low-income communities, fostering economic empowerment and sustainable development.',
  },
  {
    question: 'How can I apply for a microloan with AD Finance?',
    answer: 'To apply for a microloan with AD Finance, you can visit our nearest branch or apply online through our official website. Our application process is straightforward, and our team of financial experts will guide you through the necessary steps to assess your eligibility and determine the loan amount that best suits your business or personal financial goals.',
  },
  {
    question: 'What are the eligibility criteria for microloans at AD Finance?',
    answer: 'The eligibility criteria for microloans at AD Finance vary based on the type of loan and specific requirements. Generally, applicants must demonstrate a viable business plan or income-generating activity, have a good credit history (if applicable), and be willing to participate in financial education programs offered by AD Finance.',
  },
  {
    question: 'How does AD Finance ensure responsible lending practices in microfinance?',
    answer: 'AD Finance adheres to strict responsible lending practices in microfinance to ensure transparency, fairness, and sustainability. We conduct thorough credit assessments, promote client protection principles, offer appropriate financial products, and provide financial education to empower borrowers. Our goal is to promote positive socioeconomic impact while mitigating financial risks for both borrowers and our institution.',
  },
  {
    question: 'What are the interest rates for microloans at AD Finance?',
    answer: 'The interest rates for microloans at AD Finance are competitive and vary depending on factors such as the loan amount, repayment period, and borrower’s creditworthiness. We strive to offer affordable financial solutions that enable microentrepreneurs to access capital and achieve their business objectives effectively.',
  },
  {
    question: 'Does AD Finance offer support beyond financial services?',
    answer: 'Yes, AD Finance is committed to providing holistic support beyond financial services. We offer business development assistance, mentoring programs, and access to networking opportunities to help microentrepreneurs succeed. Additionally, we collaborate with local communities and stakeholders to foster economic growth and social impact.',
  },
  {
    question: 'How does microfinance contribute to sustainable development?',
    answer: 'Microfinance contributes to sustainable development by promoting economic empowerment, poverty reduction, and financial inclusion. It enables individuals to build assets, create jobs, improve living standards, and contribute to local economies. By supporting microentrepreneurs and underserved communities, microfinance plays a pivotal role in achieving long-term socioeconomic progress and stability.',
  },
  {
    question: 'What are the benefits of partnering with AD Finance for microfinance initiatives?',
    answer: 'Partnering with AD Finance for microfinance initiatives offers several benefits, including access to tailored financial solutions, expertise in microfinance operations, collaborative opportunities for social impact, and support from a reputable financial institution committed to responsible business practices. Together, we can empower communities, drive sustainable development, and create lasting positive change.',
  },
];

const FAQ = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default FAQ;

