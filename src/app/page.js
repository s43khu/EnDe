'use client';

import { useState } from 'react';
import { encryptMessage, decryptMessage, validateInputs } from '../utils/encryption';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { 
  Lock, 
  Unlock, 
  Copy, 
  Shield, 
  Key, 
  MessageSquare, 
  Eye, 
  EyeOff,
  Trash2,
  Sparkles,
  Zap
} from 'lucide-react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [encodedMessage, setEncodedMessage] = useState('');
  const [decodedMessage, setDecodedMessage] = useState('');
  const [activeTab, setActiveTab] = useState('encode');
  const [showKey, setShowKey] = useState(false);

  const encodeMessage = () => {
    try {
      validateInputs(message, key);
      const encrypted = encryptMessage(message, key);
      setEncodedMessage(encrypted);
    } catch (error) {
      alert('Error encoding message: ' + error.message);
    }
  };

  const decodeMessage = () => {
    try {
      validateInputs(encodedMessage, key);
      const originalMessage = decryptMessage(encodedMessage, key);
      setDecodedMessage(originalMessage);
    } catch (error) {
      alert('Error decoding message: ' + error.message);
    }
  };

  const clearAll = () => {
    setMessage('');
    setKey('');
    setEncodedMessage('');
    setDecodedMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-8 px-4 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
      
      {/* Additional gradient overlays for more depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(88,28,135,0.15),transparent_40%)] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.12),transparent_45%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_90%,rgba(79,70,229,0.1),transparent_50%)] pointer-events-none"></div>
      
      {/* Animated floating elements with better visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-purple-500/30 rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400/25 rounded-full animate-float-2"></div>
        <div className="absolute top-60 left-1/4 w-2.5 h-2.5 bg-purple-600/35 rounded-full animate-float-3"></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-purple-500/30 rounded-full animate-float-4"></div>
        <div className="absolute top-96 left-1/2 w-3 h-3 bg-purple-400/25 rounded-full animate-float-5"></div>
        
        <div className="absolute bottom-40 left-20 w-2.5 h-2.5 bg-purple-600/30 rounded-full animate-float-6"></div>
        <div className="absolute bottom-60 right-10 w-2 h-2 bg-purple-500/35 rounded-full animate-float-7"></div>
        <div className="absolute bottom-80 left-1/3 w-3 h-3 bg-purple-400/25 rounded-full animate-float-8"></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-purple-600/30 rounded-full animate-float-9"></div>
        
        {/* Additional floating elements for more animation */}
        <div className="absolute top-32 left-1/3 w-1.5 h-1.5 bg-purple-500/20 rounded-full animate-float-10"></div>
        <div className="absolute top-72 right-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-float-11"></div>
        <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-purple-600/25 rounded-full animate-float-12"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 border border-slate-700 rounded-full mb-6 shadow-lg">
            <Shield className="w-10 h-10 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Secure Message Encoder
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Military-grade encryption with AES-256 and SHA-256 key derivation
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-8 mb-8">
          {/* Tab Navigation */}
          <div className="flex space-x-2 mb-8 bg-slate-800/50 rounded-xl p-2 border border-slate-600/30">
            <button
              onClick={() => setActiveTab('encode')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                activeTab === 'encode'
                  ? 'bg-slate-700 text-white border border-slate-600'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Lock className="w-5 h-5" />
              <span>Encode Message</span>
            </button>
            <button
              onClick={() => setActiveTab('decode')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                activeTab === 'decode'
                  ? 'bg-slate-700 text-white border border-slate-600'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Unlock className="w-5 h-5" />
              <span>Decode Message</span>
            </button>
          </div>

          <div className="space-y-6">
            {/* Encryption Key Input */}
            <div className="relative">
              <InputField
                label="Encryption Key"
                type={showKey ? 'text' : 'password'}
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Enter your secret key"
                helperText="This key will be used to encrypt/decrypt your message. Keep it secret!"
                icon={<Key className="w-5 h-5" />}
              />
              <button
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-12 text-slate-400 hover:text-purple-400 transition-colors"
              >
                {showKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {activeTab === 'encode' ? (
              <div className="space-y-6">
                <InputField
                  label="Message to Encode"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your secret message here..."
                  rows={4}
                  icon={<MessageSquare className="w-5 h-5" />}
                />
                <Button onClick={encodeMessage} fullWidth className="mt-6">
                  <Lock className="w-5 h-5 mr-2" />
                  Encode Message
                </Button>
                
                {encodedMessage && (
                  <div className="space-y-4 p-6 bg-slate-800/50 rounded-xl border border-slate-600/30">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white">Encoded Message</h3>
                    </div>
                    <InputField
                      value={encodedMessage}
                      readOnly
                      rows={3}
                      className="bg-slate-900/50 font-mono text-sm border-slate-600/50"
                    />
                    <Button 
                      onClick={() => navigator.clipboard.writeText(encodedMessage)}
                      variant="secondary"
                      className="w-full"
                    >
                      <Copy className="w-5 h-5 mr-2" />
                      Copy to Clipboard
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <InputField
                  label="Encoded Message"
                  value={encodedMessage}
                  onChange={(e) => setEncodedMessage(e.target.value)}
                  placeholder="Paste your encoded message here..."
                  rows={4}
                  className="font-mono text-sm"
                  icon={<MessageSquare className="w-5 h-5" />}
                />
                <Button onClick={decodeMessage} variant="success" fullWidth className="mt-6">
                  <Unlock className="w-5 h-5 mr-2" />
                  Decode Message
                </Button>
                
                {decodedMessage && (
                  <div className="space-y-4 p-6 bg-slate-800/50 rounded-xl border border-slate-600/30">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-green-400" />
                      <h3 className="text-lg font-semibold text-white">Decoded Message</h3>
                    </div>
                    <InputField
                      value={decodedMessage}
                      readOnly
                      rows={3}
                      className="bg-slate-900/50 border-slate-600/50"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Button onClick={clearAll} variant="secondary" className="px-8">
            <Trash2 className="w-5 h-5 mr-2" />
            Clear All
          </Button>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 text-slate-400">
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-sm">AES-256 encryption with SHA-256 key derivation</span>
          </div>
          <p className="text-xs text-slate-500">
            Messages cannot be decoded without the exact key used for encoding
          </p>
        </div>
      </div>
    </div>
  );
}
