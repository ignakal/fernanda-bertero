import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';

export const StyleAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        Eres Fernanda Bertero, una asesora de imagen profesional, cálida y elegante.
        Tu filosofía es: "La imagen es una herramienta. Vestir es tomar decisiones alineadas con quién sos. El orden en el guardarropa trae orden a la vida."
        
        Tus consejos deben ser:
        1. Prácticos pero inspiradores.
        2. Enfocados en la intención (¿cómo se quiere sentir la persona?).
        3. Sugiere combinaciones usando tu paleta de colores preferida si aplica: Fucsia, Azul Petróleo, Naranja Quemado, Neutros.
        4. Mantén un tono empático, "tú" (voseo suave argentino o neutro cálido), profesional y motivador.
        5. Sé concisa (máximo 3 párrafos cortos).
        
        Si te preguntan algo fuera de moda/imagen/estilo de vida, responde amablemente que solo asesoras sobre imagen personal.
      `;

      const model = 'gemini-3-flash-preview';
      
      const response = await ai.models.generateContent({
        model: model,
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const text = response.text || "Disculpa, tuve un momento de desconexión. ¿Podemos intentar de nuevo?";
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Error fetching advice:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, estoy teniendo problemas para conectar con mi intuición digital en este momento. Por favor intenta más tarde." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-advisor" className="py-24 bg-[#E8E4DF] relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#D42D6F]/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#1F5670]/5 rounded-tl-[80px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
            <Sparkles className="text-[#D42D6F]" size={24} />
          </div>
          <h2 className="font-serif text-4xl text-[#1F5670] mb-3">Tu Aliada de Estilo (IA)</h2>
          <p className="font-sans text-[#1F5670]/70">
            ¿Tenés una reunión importante o no sabés qué ponerte hoy? <br/>
            Contame cómo te querés sentir y te ayudaré a elegir con intención.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-white/50 h-[500px] flex flex-col">
          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#fcfbf9]">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center text-[#1F5670]/50 space-y-4">
                <p className="font-serif italic text-lg">"La imagen también se construye desde el orden."</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-lg">
                    <button onClick={() => setInput("Tengo una entrevista de trabajo creativa, ¿qué colores sugieres?")} className="text-sm p-3 border border-[#E8E4DF] rounded hover:bg-[#E8E4DF]/50 transition text-left">
                        "Entrevista de trabajo creativa..."
                    </button>
                    <button onClick={() => setInput("Me siento con poca energía, ¿cómo puedo vestirme para levantar el ánimo?")} className="text-sm p-3 border border-[#E8E4DF] rounded hover:bg-[#E8E4DF]/50 transition text-left">
                        "Me siento con poca energía..."
                    </button>
                </div>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-[#1F5670] text-white rounded-br-none'
                      : 'bg-[#E8E4DF] text-[#1F5670] rounded-bl-none'
                  }`}
                >
                  <p className="font-sans text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#E8E4DF] p-4 rounded-2xl rounded-bl-none flex items-center space-x-2">
                  <Loader2 className="animate-spin text-[#D42D6F]" size={20} />
                  <span className="text-xs text-[#1F5670]/70 font-medium">Pensando con intención...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-[#E8E4DF]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ej: Tengo una cena formal pero quiero estar cómoda..."
                className="flex-1 p-3 border border-[#E8E4DF] rounded-lg focus:outline-none focus:border-[#D42D6F] focus:ring-1 focus:ring-[#D42D6F] font-sans text-[#1F5670] placeholder-[#1F5670]/30"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-[#D42D6F] text-white p-3 rounded-lg hover:bg-[#b02258] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <Send size={20} />
              </button>
            </div>
            {!process.env.API_KEY && (
               <p className="text-xs text-red-400 mt-2 text-center">Nota: Se requiere API KEY de Gemini para funcionar.</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};