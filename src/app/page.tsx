export const metadata = { 
  title: 'AI Video Editor — AI-powered video editing', 
  description: 'Streamline your video editing process with our AI-powered video editor'
}

<section className="bg-white/90 border-b border-zinc-100 sticky top-0 z-10">
  <nav className="container mx-auto py-4 flex justify-between items-center">
    <div className="flex items-center">
      <div className="w-8 h-8 bg-zinc-900 rounded-full mr-2" />
      <h2 className="text-zinc-900 font-bold">AI Video Editor</h2>
    </div>
    <ul className="flex items-center space-x-8">
      <li>
        <a href="#" className="text-zinc-600 hover:text-zinc-900">Features</a>
      </li>
      <li>
        <a href="#" className="text-zinc-600 hover:text-zinc-900">Pricing</a>
      </li>
      <li>
        <a href="/dashboard" className="bg-zinc-900 text-white rounded-lg px-4 py-2">Open Dashboard →</a>
      </li>
    </ul>
  </nav>
</section>

<section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
  <span className="bg-zinc-800/50 px-4 py-2 rounded-full text-sm">AI-Powered SaaS</span>
  <h1 className="font-black text-5xl md:text-7xl tracking-tight leading-none mt-4">Streamline Your Video Editing</h1>
  <p className="text-zinc-400 text-xl mt-4">Automate complex editing tasks and focus on content strategy and growth.</p>
  <div className="flex justify-center space-x-8 mt-12">
    <a href="/dashboard" className="bg-white text-zinc-900 font-bold rounded-xl px-8 py-4 shadow-lg hover:shadow-xl">Start Free Today →</a>
    <a href="/dashboard" className="border border-zinc-600 text-zinc-300 rounded-xl px-8 py-4 hover:bg-zinc-800">See It Live →</a>
  </div>
  <div className="rounded-2xl bg-zinc-800/50 border border-zinc-700 p-6 max-w-3xl mx-auto mt-12">
    <div className="bg-zinc-700 p-4 rounded-xl mb-4 animate-pulse" />
    <div className="flex space-x-4 mb-4">
      <div className="bg-indigo-500 p-4 rounded-xl w-1/3" />
      <div className="bg-emerald-500 p-4 rounded-xl w-1/3" />
      <div className="bg-zinc-700 p-4 rounded-xl w-1/3" />
    </div>
    <div className="bg-zinc-700 p-4 rounded-xl mb-4" />
  </div>
</section>

<section className="bg-zinc-800/30 border-y border-zinc-700/50 py-8 flex justify-center space-x-12">
  <div className="flex flex-col items-center">
    <h3 className="font-black text-3xl">10,000+</h3>
    <p className="text-zinc-400 text-sm">Users</p>
  </div>
  <div className="flex flex-col items-center">
    <h3 className="font-black text-3xl">99.9%</h3>
    <p className="text-zinc-400 text-sm">Uptime</p>
  </div>
  <div className="flex flex-col items-center">
    <h3 className="font-black text-3xl">$50M+</h3>
    <p className="text-zinc-400 text-sm">Processed</p>
  </div>
  <div className="flex flex-col items-center">
    <h3 className="font-black text-3xl">4.9★</h3>
    <p className="text-zinc-400 text-sm">Rating</p>
  </div>
</section>

<section className="bg-white py-24 px-6">
  <h2 className="text-zinc-900 font-black text-4xl text-center">Everything You Need to Edit Videos</h2>
  <p className="text-zinc-500 mt-3 text-center max-w-2xl mx-auto">Our AI-powered video editor streamlines your video editing process, saving you time and effort.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
    <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-100 p-3 rounded-xl mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold mb-2">Trim Video</h3>
          <p className="text-zinc-600 text-sm">Easily trim your videos to the desired length.</p>
        </div>
      </div>
    </div>
    <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-emerald-100 p-3 rounded-xl mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold mb-2">Add Text Overlay</h3>
          <p className="text-zinc-600 text-sm">Add text overlays to your videos in just a few clicks.</p>
        </div>
      </div>
    </div>
    <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-zinc-100 p-3 rounded-xl mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold mb-2">Merge Clips</h3>
          <p className="text-zinc-600 text-sm">Merge multiple clips into a single video.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-zinc-50 py-24 px-6">
  <h2 className="text-zinc-900 font-black text-4xl text-center">How AI Video Editor Works</h2>
  <div className="flex flex-col items-center md:flex-row md:space-x-12 md:items-start mt-12">
    <div className="flex flex-col items-center md:items-start">
      <div className="bg-indigo-500 p-4 rounded-full mb-4">
        <h3 className="font-black text-3xl text-white">1</h3>
      </div>
      <h3 className="font-bold mb-2">Upload Your Video</h3>
      <p className="text-zinc-600 text-sm">Upload your video to our platform.</p>
    </div>
    <div className="flex flex-col items-center md:items-start mt-12 md:mt-0">
      <div className="bg-indigo-500 p-4 rounded-full mb-4">
        <h3 className="font-black text-3xl text-white">2</h3>
      </div>
      <h3 className="font-bold mb-2">Select Your Editing Options</h3>
      <p className="text-zinc-600 text-sm">Choose from our range of editing options.</p>
    </div>
    <div className="flex flex-col items-center md:items-start mt-12 md:mt-0">
      <div className="bg-indigo-500 p-4 rounded-full mb-4">
        <h3 className="font-black text-3xl text-white">3</h3>
      </div>
      <h3 className="font-bold mb-2">Download Your Edited Video</h3>
      <p className="text-zinc-600 text-sm">Download your edited video in just a few minutes.</p>
    </div>
  </div>
</section>

<section className="bg-white py-24 px-6">
  <h2 className="text-zinc-900 font-black text-4xl text-center">Pricing</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
    <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
      <h3 className="font-bold mb-2">Free</h3>
      <p className="text-zinc-600 text-sm">Ideal for small projects.</p>
      <ul className="list-none mb-4">
        <li className="mb-2">Limited features</li>
        <li className="mb-2">1 user</li>
      </ul>
      <a href="/dashboard" className="bg-zinc-900 text-white rounded-lg px-4 py-2">Get Started</a>
    </div>
    <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
      <h3 className="font-bold mb-2">Pro</h3>
      <p className="text-zinc-600 text-sm">Our most popular plan.</p>
      <ul className="list-none mb-4">
        <li className="mb-2">All features</li>
        <li className="mb-2">5 users</li>
      </ul>
      <a href="/dashboard" className="bg-zinc-900 text-white rounded-lg px-4 py-2">Get Started</a>
    </div>
    <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
      <h3 className="font-bold mb-2">Enterprise</h3>
      <p className="text-zinc-600 text-sm">For large teams and businesses.</p>
      <ul className="list-none mb-4">
        <li className="mb-2">All features</li>
        <li className="mb-2">Unlimited users</li>
      </ul>
      <a href="#" className="bg-zinc-900 text-white rounded-lg px-4 py-2">Contact Us</a>
    </div>
  </div>
</section>

<section className="bg-zinc-50 py-24 px-6">
  <h2 className="text-zinc-900 font-black text-4xl text-center">What Our Customers Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
    <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
      <p className="text-zinc-600 text-sm mb-4">"AI Video Editor has saved me so much time and effort. The editing tools are easy to use and the results are amazing!"</p>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-zinc-900 rounded-full mr-2" />
        <div>
          <h3 className="font-bold mb-1">Emily Chen</h3>
          <p className="text-zinc-600 text-sm">Social Media Manager</p>
        </div>
      </div>
    </div>
    <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
      <p className="text-zinc-600 text-sm mb-4">"I was blown away by the quality of the edited videos. The AI-powered editing tools are incredibly advanced and easy to use."</p>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-zinc-900 rounded-full mr-2" />
        <div>
          <h3 className="font-bold mb-1">David Lee</h3>
          <p className="text-zinc-600 text-sm">YouTube Content Creator</p>
        </div>
      </div>
    </div>
    <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
      <p className="text-zinc-600 text-sm mb-4">"The support team is always available to help with any questions or issues. The platform is user-friendly and the results are fantastic."</p>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-zinc-900 rounded-full mr-2" />
        <div>
          <h3 className="font-bold mb-1">Sarah Taylor</h3>
          <p className="text-zinc-600 text-sm">Marketing Manager</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-24 px-6 text-center">
  <h2 className="font-black text-5xl mb-4">Launch Your Video Editing Journey Today</h2>
  <p className="text-zinc-400 text-xl mb-8">Start editing your videos with our AI-powered video editor and take your content to the next level.</p>
  <a href="/dashboard" className="bg-white text-indigo-900 font-bold rounded-lg px-8 py-4 shadow-lg hover:shadow-xl">Launch Dashboard →</a>
</section>

<footer className="bg-zinc-900 text-zinc-400 py-12 px-6">
  <div className="flex justify-between items-center mb-8">
    <div className="flex items-center">
      <div className="w-8 h-8 bg-zinc-900 rounded-full mr-2" />
      <h2 className="text-zinc-100 font-bold">AI Video Editor</h2>
    </div>
    <div className="flex items-center space-x-8">
      <a href="#" className="text-zinc-400 hover:text-zinc-100">Features</a>
      <a href="#" className="text-zinc-400 hover:text-zinc-100">Pricing</a>
      <a href="/dashboard" className="text-zinc-400 hover:text-zinc-100">Dashboard</a>
    </div>
  </div>
  <p className="text-zinc-400 text-sm">&copy; 2025 AI Video Editor. All rights reserved.</p>
</footer>