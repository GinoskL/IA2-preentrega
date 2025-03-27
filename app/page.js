'use client'

import { useChat } from 'ai/react'
import styles from './chat.module.css'

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  return (
    <div className={styles.container}>
      <div className={styles.chatbox}>
        <div className={styles.header}>
          <h1>Chatbot con OpenAI</h1>
        </div>
        
        <div className={styles.messages}>
          {messages.length === 0 ? (
            <div className={styles.empty}>
              Envía un mensaje para comenzar la conversación
            </div>
          ) : (
            messages.map(message => (
              <div 
                key={message.id} 
                className={`${styles.message} ${
                  message.role === 'user' ? styles.userMessage : styles.botMessage
                }`}
              >
                {message.content}
              </div>
            ))
          )}
          {isLoading && (
            <div className={styles.botMessage}>
              <div className={styles.typing}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
        
        <div className={styles.inputArea}>
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}