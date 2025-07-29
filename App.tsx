
import React, { useState, useEffect, useCallback } from 'react';
import PasswordDisplay from './components/PasswordDisplay';
import StrengthIndicator from './components/StrengthIndicator';
import OptionCheckbox from './components/OptionCheckbox';
import { RefreshIcon, WandIcon } from './components/Icons';
import { PasswordOptions, GeneratorMode } from './types';
import { usePasswordGenerator } from './hooks/usePasswordGenerator';
import { generateMemorablePassword } from './services/geminiService';
import SeoContent from './components/SeoContent';

// UI for the Random Password Generator, defined outside App to prevent re-creation on re-renders
const RandomGeneratorUI: React.FC<{
    options: PasswordOptions;
    onOptionsChange: <K extends keyof PasswordOptions>(key: K, value: PasswordOptions[K]) => void;
    strength: number;
    onGenerate: () => void;
}> = ({ options, onOptionsChange, strength, onGenerate }) => (
    <div className="space-y-6 animate-fade-in">
        <div className="space-y-4 bg-slate-700/50 p-5 rounded-lg">
            <div>
                <div className="flex justify-between items-center mb-2">
                    <label htmlFor="length" className="text-base text-slate-200">Password Length</label>
                    <span className="text-2xl font-bold text-cyan-400">{options.length}</span>
                </div>
                <input
                    type="range"
                    id="length"
                    min="8"
                    max="32"
                    value={options.length}
                    onChange={(e) => onOptionsChange('length', parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer range-thumb"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
                <OptionCheckbox id="uppercase" label="Include Uppercase" checked={options.includeUppercase} onChange={v => onOptionsChange('includeUppercase', v)} />
                <OptionCheckbox id="lowercase" label="Include Lowercase" checked={options.includeLowercase} onChange={v => onOptionsChange('includeLowercase', v)} />
                <OptionCheckbox id="numbers" label="Include Numbers" checked={options.includeNumbers} onChange={v => onOptionsChange('includeNumbers', v)} />
                <OptionCheckbox id="symbols" label="Include Symbols" checked={options.includeSymbols} onChange={v => onOptionsChange('includeSymbols', v)} />
            </div>
        </div>
        <StrengthIndicator strength={strength} />
        <button
            onClick={onGenerate}
            className="w-full bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-600 active:bg-cyan-700 transform active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-800"
        >
            <RefreshIcon className="w-5 h-5" />
            Generate New Password
        </button>
    </div>
);

// UI for the Memorable Password Generator, defined outside App
const MemorableGeneratorUI: React.FC<{
    theme: string;
    onThemeChange: (value: string) => void;
    onGenerate: () => void;
    isLoading: boolean;
    error: string;
}> = ({ theme, onThemeChange, onGenerate, isLoading, error }) => (
    <div className="space-y-4 animate-fade-in">
         <div className="space-y-4 bg-slate-700/50 p-5 rounded-lg">
            <label htmlFor="theme" className="text-base text-slate-200 block mb-2">Passphrase Theme</label>
            <input
                type="text"
                id="theme"
                value={theme}
                onChange={(e) => onThemeChange(e.target.value)}
                placeholder="e.g., Space Exploration"
                className="w-full bg-slate-600 border border-slate-500 text-slate-100 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            />
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
        <button
            onClick={onGenerate}
            disabled={isLoading}
            className="w-full bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-600 active:bg-indigo-700 transform active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:bg-indigo-400 disabled:cursor-wait"
        >
            <WandIcon className="w-5 h-5" />
            {isLoading ? 'Conjuring Passphrase...' : 'Generate with AI'}
        </button>
    </div>
);

// Helper component for mode tabs, defined outside App
const TabButton: React.FC<{
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full py-2.5 text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-700 focus:ring-cyan-500 ${
            isActive ? 'bg-cyan-500 text-white shadow' : 'bg-transparent text-slate-300 hover:bg-slate-600/50'
        }`}
    >
        {label}
    </button>
);


// Main App Component
const App: React.FC = () => {
    const [mode, setMode] = useState<GeneratorMode>(GeneratorMode.Random);
    const [options, setOptions] = useState<PasswordOptions>({
        length: 16,
        includeUppercase: true,
        includeLowercase: true,
        includeNumbers: true,
        includeSymbols: false,
    });

    const { password: randomPassword, strength, generatePassword: generateRandomPassword } = usePasswordGenerator();
    const [memorablePassword, setMemorablePassword] = useState('');
    const [theme, setTheme] = useState('Cyberpunk Future');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleOptionChange = useCallback(<K extends keyof PasswordOptions>(key: K, value: PasswordOptions[K]) => {
        setOptions(prev => ({ ...prev, [key]: value }));
    }, []);
    
    const handleGenerateRandom = useCallback(() => {
        generateRandomPassword(options);
    }, [options, generateRandomPassword]);

    useEffect(() => {
        if (mode === GeneratorMode.Random) {
            handleGenerateRandom();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options, mode]);

    const handleGenerateMemorable = useCallback(async () => {
        setIsLoading(true);
        setError('');
        setMemorablePassword('');
        try {
            const pass = await generateMemorablePassword(theme);
            setMemorablePassword(pass);
        } catch (err: any) {
            setError(err.message || 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [theme]);
    
    const displayPassword = mode === GeneratorMode.Random ? randomPassword : memorablePassword;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans text-slate-200">
            <div className="w-full max-w-xl mx-auto space-y-4">
                <header className="text-center mb-4">
                    <h1 className="text-4xl font-bold text-slate-100 mb-1">SecurePass AI Password Generator</h1>
                    <p className="text-lg text-slate-400">Your Free Tool for Creating Strong, Random & Secure Passwords</p>
                </header>

                <main className="bg-slate-800 p-6 rounded-xl shadow-2xl shadow-slate-950/50 border border-slate-700">
                    <PasswordDisplay password={displayPassword} isLoading={isLoading} />
                    
                    <div className="grid grid-cols-2 gap-2 mb-6 bg-slate-700 p-1 rounded-lg">
                        <TabButton 
                            label="Random" 
                            isActive={mode === GeneratorMode.Random} 
                            onClick={() => setMode(GeneratorMode.Random)} 
                        />
                        <TabButton 
                            label="AI Memorable" 
                            isActive={mode === GeneratorMode.Memorable} 
                            onClick={() => setMode(GeneratorMode.Memorable)} 
                        />
                    </div>

                    {mode === GeneratorMode.Random ? (
                        <RandomGeneratorUI options={options} onOptionsChange={handleOptionChange} strength={strength} onGenerate={handleGenerateRandom} />
                    ) : (
                        <MemorableGeneratorUI theme={theme} onThemeChange={setTheme} onGenerate={handleGenerateMemorable} isLoading={isLoading} error={error}/>
                    )}
                </main>

                <SeoContent />

                 <footer className="text-center text-slate-500 text-sm mt-4">
                    <p>Our <strong>random password generator</strong> creates passwords securely on your device.</p>
                    <p>AI passphrases are generated via Google Gemini for memorable, word-based security.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
