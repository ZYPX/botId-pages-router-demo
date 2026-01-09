import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
  const [apiResult, setApiResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const testApiEndpoint = async () => {
    setLoading(true)
    setApiResult(null)
    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'test from client' }),
      })
      const data = await res.json()
      setApiResult(JSON.stringify(data, null, 2))
    } catch (err) {
      setApiResult(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Head>
        <title>Vercel BotID Demo - Next.js 15.5.9</title>
        <meta name="description" content="Demo application showcasing Vercel BotID protection with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Vercel BotID Demo</h1>
                <p className="text-gray-600">Next.js 15.5.9 with Pages Router</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vercel BotID Protection Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This demo showcases how to integrate Vercel BotID protection into a Next.js application 
              using the Pages Router. The API is protected against automated submissions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <title>Bot Protection Icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Invisible Protection</h3>
              <p className="text-gray-600">
                Vercel BotID provides invisible bot detection without CAPTCHAs or user challenges
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <title>API Security Icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Server-Side Validation</h3>
              <p className="text-gray-600">
                Real-time bot detection with server-side verification and user hash generation
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <title>Modern UI Icon</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                Easy integration with Next.js using the official Vercel BotID package
              </p>
            </div>
          </div>

          {/* Demo Section */}
          <div className="card max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Try the Demo
              </h3>
              <p className="text-gray-600">
                Experience Vercel BotID protection in action by testing the API endpoint
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Invisible bot detection with no user friction</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Server-side verification using checkBotId()</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">User hash generation for unique IDs</span>
              </div>
            </div>

            {/* API Test Section */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-3">Test API Endpoint</h4>
              <button
                onClick={testApiEndpoint}
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50"
              >
                {loading ? 'Testing...' : 'POST /api/hello'}
              </button>
              {apiResult && (
                <pre className="mt-4 p-4 bg-gray-900 text-green-400 rounded-lg text-sm overflow-auto max-h-48">
                  {apiResult}
                </pre>
              )}
            </div>
          </div>

          {/* Technical Details */}
          <div className="mt-12 card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Implementation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend Protection</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• BotIdClient component in _app.tsx</li>
                  <li>• Protected routes configuration</li>
                  <li>• Invisible protection layer</li>
                  <li>• No user interaction required</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend Security</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• checkBotId() server-side verification</li>
                  <li>• API endpoint protection</li>
                  <li>• User hash generation</li>
                  <li>• Real-time bot detection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vercel BotID Info */}
          <div className="mt-8 card bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About Vercel BotID</h3>
            <p className="text-gray-700 mb-4">
              Vercel BotID is an invisible CAPTCHA that protects against sophisticated bots without showing 
              visible challenges or requiring manual intervention. It provides real-time protection against 
              automated attacks, data scraping, API abuse, and spam.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Basic Mode</h4>
                <p className="text-gray-600">Free for all plans - ensures valid browser sessions</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Deep Analysis</h4>
                <p className="text-gray-600">Pro/Enterprise - Kasada-powered advanced detection</p>
              </div>
            </div>
            <div className="mt-4">
              <a 
                href="https://vercel.com/docs/botid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-500 font-medium"
              >
                Learn more about Vercel BotID →
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600">
              <p>Vercel BotID Demo - Next.js 15.5.9 with Pages Router</p>
              <p className="text-sm mt-2">Built with TypeScript, Tailwind CSS, and Vercel BotID protection</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
