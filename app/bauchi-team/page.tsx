'use client';

import Link from 'next/link';

export default function BauchiTeam() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Main Site
          </Link>
        </div>

        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Private Team Access
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          A&amp;A Computers Bauchi
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Team Portal Access
        </p>

        
          href="https://aanda-computers-bauchi.onrender.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-bold text-lg hover:from-teal-700 hover:to-blue-700 transition-all shadow-lg"
        >
          Access Team Portal
        </a>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Need help?</p>
          <a 
            href="mailto:ayoolumimelehon@gmail.com"
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            ayoolumimelehon@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}