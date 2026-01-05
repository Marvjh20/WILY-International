import React, { useState, useRef } from 'react';
import { Wand2, Upload, RefreshCw, Download, AlertCircle } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';
import { ImageEditStatus } from '../types';

const ImageEditor: React.FC = () => {
  const [status, setStatus] = useState<ImageEditStatus>(ImageEditStatus.IDLE);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [mimeType, setMimeType] = useState<string>('image/jpeg');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setOriginalImage(base64String);
        setGeneratedImage(null);
        setStatus(ImageEditStatus.IDLE);
        setMimeType(file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!originalImage || !prompt) {
      setErrorMsg("Please upload an image and provide a prompt.");
      return;
    }

    setStatus(ImageEditStatus.PROCESSING);
    setErrorMsg('');

    try {
      // Strip header from base64 string
      const base64Data = originalImage.split(',')[1];
      
      const resultBase64 = await editImageWithGemini(base64Data, mimeType, prompt);
      
      if (resultBase64) {
        setGeneratedImage(`data:image/png;base64,${resultBase64}`);
        setStatus(ImageEditStatus.SUCCESS);
      } else {
        setStatus(ImageEditStatus.ERROR);
        setErrorMsg("Failed to generate image. Please try a different prompt.");
      }
    } catch (error) {
      setStatus(ImageEditStatus.ERROR);
      setErrorMsg("An error occurred while communicating with the AI.");
    }
  };

  return (
    <section id="editor" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl flex items-center justify-center gap-3">
            <Wand2 className="h-8 w-8 text-wily-gold" />
            AI Image Magic
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Upload a photo of your WILY bottle or an event, and use our AI to enhance it! 
            Try saying "Add a retro filter" or "Make it look like a painting".
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Input Section */}
            <div className="space-y-6">
              <div 
                className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center transition-colors ${originalImage ? 'border-wily-blue bg-blue-50' : 'border-gray-300 hover:border-wily-blue hover:bg-gray-50'}`}
                onClick={() => fileInputRef.current?.click()}
              >
                {originalImage ? (
                  <div className="relative w-full h-64">
                    <img src={originalImage} alt="Original" className="w-full h-full object-contain rounded-md" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center cursor-pointer">
                       <p className="text-white opacity-0 hover:opacity-100 font-medium bg-black bg-opacity-50 px-3 py-1 rounded">Change Image</p>
                    </div>
                  </div>
                ) : (
                  <div className="cursor-pointer py-10 w-full">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 font-medium">Click to upload an image</p>
                    <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 5MB</p>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                />
              </div>

              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
                  Editing Instruction
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="prompt"
                    className="flex-1 shadow-sm focus:ring-wily-blue focus:border-wily-blue block w-full sm:text-sm border-gray-300 rounded-md p-3 border"
                    placeholder="e.g. Add confetti to the background"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                  <button
                    onClick={handleGenerate}
                    disabled={status === ImageEditStatus.PROCESSING || !originalImage || !prompt}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white 
                      ${status === ImageEditStatus.PROCESSING || !originalImage || !prompt ? 'bg-gray-400 cursor-not-allowed' : 'bg-wily-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                  >
                    {status === ImageEditStatus.PROCESSING ? (
                      <RefreshCw className="h-5 w-5 animate-spin" />
                    ) : (
                      "Generate"
                    )}
                  </button>
                </div>
                {errorMsg && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> {errorMsg}
                  </p>
                )}
              </div>
            </div>

            {/* Output Section */}
            <div className="bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center min-h-[300px] relative">
              {status === ImageEditStatus.PROCESSING && (
                <div className="text-center">
                   <RefreshCw className="h-10 w-10 text-wily-blue animate-spin mx-auto mb-3" />
                   <p className="text-gray-600">AI is reimagining your photo...</p>
                </div>
              )}
              
              {status === ImageEditStatus.SUCCESS && generatedImage && (
                <div className="relative w-full h-full p-2">
                  <img src={generatedImage} alt="Generated" className="w-full h-full object-contain rounded-md shadow-sm" />
                  <a 
                    href={generatedImage} 
                    download="wily-ai-edit.png"
                    className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors text-gray-700"
                    title="Download Image"
                  >
                    <Download className="h-5 w-5" />
                  </a>
                </div>
              )}

              {status === ImageEditStatus.IDLE && !generatedImage && (
                <div className="text-gray-400 text-center p-6">
                  <Wand2 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Your edited masterpiece will appear here</p>
                </div>
              )}
              
              {status === ImageEditStatus.ERROR && (
                 <div className="text-red-400 text-center p-6">
                   <AlertCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                   <p>Something went wrong. Try again.</p>
                 </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageEditor;