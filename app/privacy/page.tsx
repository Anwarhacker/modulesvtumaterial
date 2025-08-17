export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">Last updated: January 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                When you use VTU Material, we collect information through Google Authentication including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Your name and email address from your Google account</li>
                <li>Profile picture (if available)</li>
                <li>Usage data and preferences within our platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the collected information to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide access to study materials and resources</li>
                <li>Personalize your experience on our platform</li>
                <li>Communicate important updates about our services</li>
                <li>Improve our platform based on usage patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information. All authentication is
                handled securely through Firebase and Google's authentication systems.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at support@vtumaterial.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
