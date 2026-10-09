import React, { useState } from 'react';

function PatientTracker() {
  const [patients, setPatients] = useState([
    { id: 'P01', name: 'Ramesh Kumar', room: '101-A' },
    { id: 'P02', name: 'Suresh Verma', room: '102-B' },
    { id: 'P03', name: 'Anita Sharma', room: '105-A' }
  ]);

  const [newName, setNewName] = useState('');

  function addPatient() {
    if (newName.trim() === '') return;
    const newId = 'P0' + (patients.length + 1);
    const newPatient = { id: newId, name: newName, room: '201-B' };
    const updatedList = patients.concat(newPatient);
    setPatients(updatedList);
    setNewName('');
  }

  function dischargePatient(patientId) {
    const filteredList = patients.filter(function(item) {
      return item.id !== patientId;
    });
    setPatients(filteredList);
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900 text-white shadow-2xl shadow-cyan-950/40">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="relative border-b border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-blue-500/10 p-7 sm:p-9">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-3xl shadow-lg shadow-cyan-500/10">
              🏥
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Healthcare System</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">Patient Tracker</h2>
            </div>
          </div>
          <div className="hidden rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 sm:block">
            <span className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              SYSTEM ONLINE
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
            <p className="text-sm font-medium text-slate-400">Total Patients</p>
            <div className="mt-2 flex items-end justify-between">
              <span className="text-4xl font-black text-white">{patients.length}</span>
              <span className="rounded-xl bg-cyan-400/10 p-2 text-xl">👥</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
            <p className="text-sm font-medium text-slate-400">Hospital Status</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"></span>
              <span className="text-lg font-bold text-emerald-300">Active</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Patient monitoring enabled</p>
          </div>
        </div>
      </div>

      <div className="relative p-6 sm:p-9">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">Patient Registration</p>
          <h3 className="mt-2 text-xl font-bold text-white">Admit New Patient</h3>
          <p className="mt-1 text-sm text-slate-400">Enter the patient's name to register.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">👤</span>
            <input
              type="text"
              placeholder="Enter patient name..."
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addPatient()}
              className="w-full rounded-xl border border-slate-700 bg-slate-800/80 py-4 pl-12 pr-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
            />
          </div>
          <button
            onClick={addPatient}
            className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-900/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95"
          >
            <span className="text-xl transition-transform duration-300 group-hover:rotate-90">+</span>
            Admit Patient
          </button>
        </div>

        <div className="mb-5 mt-9 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">Live Records</p>
            <h3 className="mt-1 text-xl font-bold">Patient Directory</h3>
          </div>
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-300">
            {patients.length} Records
          </span>
        </div>

        <div className="space-y-3">
          {patients.map(function(patient) {
            return (
              <div
                key={patient.id}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-700/80 bg-gradient-to-r from-slate-800/90 to-slate-800/40 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-950/30 sm:p-5"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-xl font-black text-cyan-300 transition duration-300 group-hover:scale-110">
                    {patient.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-white transition-colors group-hover:text-cyan-300">
                      {patient.name}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-400">
                      Patient ID: <span className="text-cyan-300">{patient.id}</span>
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                      <span>🛏️</span>
                      Room <span className="font-semibold text-slate-200">{patient.room}</span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => dischargePatient(patient.id)}
                  className="shrink-0 rounded-xl border border-rose-400/20 bg-rose-500/10 px-3 py-2.5 text-xs font-bold text-rose-300 transition duration-300 hover:border-rose-400 hover:bg-rose-500 hover:text-white hover:shadow-lg hover:shadow-rose-500/20 active:scale-95 sm:px-4"
                >
                  Discharge
                </button>
              </div>
            );
          })}

          {patients.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/30 px-5 py-12 text-center">
              <div className="text-5xl">🏥</div>
              <h3 className="mt-4 text-lg font-bold text-white">No Patients Found</h3>
              <p className="mt-2 text-sm text-slate-400">Admit a new patient to see their details here.</p>
            </div>
          )}
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <p className="text-xs text-slate-500">Patient Care • Smart Monitoring</p>
          <span className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            All Systems Normal
          </span>
        </div>
      </div>
    </div>
  );
}

export default PatientTracker;