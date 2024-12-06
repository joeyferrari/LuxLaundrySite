import { privacyContent } from './privacy-content'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="prose prose-pink max-w-none">
        <p className="mb-8">{privacyContent.introduction}</p>
        
        <p className="text-sm text-gray-600 mb-8">
          Last Updated: {privacyContent.lastUpdated}
        </p>

        {privacyContent.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="whitespace-pre-wrap">{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 