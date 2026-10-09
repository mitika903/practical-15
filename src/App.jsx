import React from 'react';
import PatientTracker from './components/PatientTracker';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050b16] px-4 py-10 sm:px-8 sm:py-14">
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]"></div>

      <div className="relative mx-auto mb-8 max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">Next Generation Healthcare</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
          Smart<span className="text-cyan-400">Care</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
          A modern patient management dashboard designed for smarter hospital operations.
        </p>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"></div>
      </div>

      <PatientTracker />

      <p className="relative mt-8 text-center text-xs tracking-wide text-slate-600">
        SMARTCARE DASHBOARD © 2026
      </p>
    </div>
  );
}

export default App;