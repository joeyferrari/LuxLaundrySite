'use client';

import { termsContent } from './terms-content';

export default function Terms() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-mono text-4xl mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-12">Last Updated: {termsContent.lastUpdated}</p>

        <div className="prose max-w-none">
          {termsContent.sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="font-mono text-2xl mb-6">{section.title}</h2>
              <div className="mb-6 whitespace-pre-wrap">{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
} 