'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Header from '../components/Header';
import Split from 'react-split';
import toast, { Toaster } from 'react-hot-toast';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const LANGUAGE_OPTIONS = [
  { label: 'C++', value: 'cpp' },
  { label: 'Java', value: 'java' },
  { label: 'Python', value: 'python' },
];

const DEFAULT_CODE = {
  cpp: `#include <iostream>
using namespace std;
int main() {
    
}`,
  java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        
    }
}`,
  python: ``,
};

export default function OnlineCompiler() {
  const [language, setLanguage] = useState('cpp');
  const [code, setCode] = useState(DEFAULT_CODE.cpp);
  const [input, setInput] = useState('');
  const [expectedOutput, setExpectedOutput] = useState('');
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [theme, setTheme] = useState('vs-dark');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleRun = async () => {
    if (!input.trim()) {
      toast.error('Please provide input.');
      return;
    }
    if (!expectedOutput.trim()) {
      toast.error('Please provide expected output.');
      return;
    }

    setRunning(true);
    setOutput('Running...');
    setIsCorrect(null);

    try {
      const res = await fetch('/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code,
          language,
          testCases: [{ input, expected: expectedOutput }],
        }),
      });
      const data = await res.json();
      if (data.success && data.results?.[0]) {
        const actual = data.results[0].actual || '';
        setOutput(actual);
        setIsCorrect(actual.trim() === expectedOutput.trim());
      } else {
        setOutput('Error: ' + data.error);
      }
    } catch (err) {
      setOutput('Error running code');
    }

    setRunning(false);
  };

  return (
  <div className="">
    <Header />
    <Toaster position="top-right" />
    <div className="min-h-screen bg-[#2a3d41] text-white px-3 py-6 text-sm">
      <div className="max-w-6xl mx-auto mb-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white mx-auto">Online Compiler</h1>
      </div>

      <div className="max-w-8xl mx-auto h-[550px] bg-[#1a2629] rounded-xl shadow-lg">
        <Split
          className="flex h-full"
          sizes={[35, 65]}
          minSize={200}
          gutterSize={10}
          direction="horizontal"
          gutter={() => {
            const gutter = document.createElement('div');
            gutter.className = 'bg-gray-700 cursor-col-resize w-2';
            return gutter;
          }}
        >
          {/* Left Panel */}
          <div className="bg-[#1a2629] p-4 flex flex-col gap-4 border-r border-gray-600">
            <div>
              <label className="text-blue-200 font-medium block mb-1">Input</label>
              <textarea
                rows={3}
                className="w-full p-2 rounded bg-[#2a3d41] border border-gray-500 text-white"
                placeholder="Enter input..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div>
              <label className="text-blue-200 font-medium block mb-1">Expected Output</label>
              <textarea
                rows={3}
                className="w-full p-2 rounded bg-[#2a3d41]  border border-gray-500 text-white"
                placeholder="Expected output..."
                value={expectedOutput}
                onChange={(e) => setExpectedOutput(e.target.value)}
              />
            </div>
            <div>
              <label className="text-blue-200 font-medium block mb-1">Actual Output</label>
              <pre className="w-full p-2 bg-[#141d1e] text-green-300 border border-gray-500 rounded min-h-[80px] whitespace-pre-wrap">
                {output}
              </pre>
              {isCorrect !== null && (
                <div className={`mt-2 font-semibold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {isCorrect ? '✅ Correct' : '❌ Incorrect'}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col h-full bg-[#1a2629] rounded">
            <div className="flex justify-between items-center p-2 bg-[#1a2629] border-b border-gray-600">
              <span className="text-gray-200 font-medium">Editor</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTheme(theme === 'vs-dark' ? 'light' : 'vs-dark')}
                  className="px-2 py-1 text-xs rounded bg-white text-black hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
                >
                  {theme === 'vs-dark' ? '☀ Light' : '🌙 Dark'}
                </button>
                <select
                  value={language}
                  onChange={(e) => {
                    const lang = e.target.value;
                    setLanguage(lang);
                    setCode(DEFAULT_CODE[lang]);
                    setOutput('');
                    setIsCorrect(null);
                  }}
                  className="bg-[#2a3d41] text-white border border-gray-500 px-3 py-1 rounded text-sm"
                >
                  {LANGUAGE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex-grow border border-gray-200 overflow-hidden">
              <MonacoEditor
                height="100%"
                language={language}
                value={code}
                onChange={(v) => setCode(v || '')}
                theme={theme}
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  fontFamily: 'Fira Code, monospace',
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  automaticLayout: true,
                }}
              />
            </div>

            <div className="py-3 flex justify-center">
              <button
                onClick={handleRun}
                disabled={running}
                className={`px-6 py-1.5 rounded-full bg-white text-black font-semibold text-sm transition hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] ${
                  running ? 'opacity-60 cursor-not-allowed' : ''
                }`}
              >
                {running ? 'Running...' : '▶ Run Code'}
              </button>
            </div>
          </div>
        </Split>
      </div>
    </div>
  </div>
);

}
