export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Incident Management
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Keep incident runbooks{' '}
          <span className="text-[#58a6ff]">updated automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Tracks when runbook steps fail during incidents and suggests updates based on what actually worked. No more stale docs costing you hours at 3am.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $59/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required to try</span>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">87%</div>
            <div className="text-xs text-[#8b949e] mt-1">Fewer repeat failures</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">&lt;2min</div>
            <div className="text-xs text-[#8b949e] mt-1">Setup via webhook</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">AI</div>
            <div className="text-xs text-[#8b949e] mt-1">Pattern analysis</div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Webhook Integration', desc: 'Connects to PagerDuty, OpsGenie, and Slack in minutes.' },
            { title: 'AI Suggestions', desc: 'Analyzes resolution patterns and drafts runbook edits for you.' },
            { title: 'Approval Workflow', desc: 'Review and approve changes before they go live. Full audit trail.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-[#58a6ff] font-semibold mb-2 text-sm">{f.title}</div>
              <div className="text-[#8b949e] text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#8b949e] text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$59</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per team</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited runbooks',
              'Webhook integrations (PagerDuty, OpsGenie, Slack)',
              'AI-powered update suggestions',
              'Approval & audit workflow',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does it know when a runbook step fails?',
              a: 'You send incident events via webhook. The AI compares the steps attempted against the resolution timeline and flags divergences.'
            },
            {
              q: 'Will it automatically change my runbooks?',
              a: 'No. Every suggestion goes through an approval workflow. Nothing changes without a human sign-off.'
            },
            {
              q: 'Which incident tools are supported?',
              a: 'PagerDuty, OpsGenie, and Slack out of the box. Any tool that can send webhooks works with a small config.'
            }
          ].map((item) => (
            <div key={item.q} className="border-b border-[#30363d] pb-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pb-8">
        &copy; {new Date().getFullYear()} Incident Runbook Auto-Updater. All rights reserved.
      </footer>
    </main>
  )
}
