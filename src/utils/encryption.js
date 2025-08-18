import CryptoJS from 'crypto-js';

// NOTE: Centralized encryption utilities for message encoding/decoding
// HACK: Using SHA-256 key derivation for consistent encryption key length

export const deriveKey = (userKey) => {
  return CryptoJS.SHA256(userKey).toString();
};

export const encryptMessage = (message, userKey) => {
  try {
    const derivedKey = deriveKey(userKey);
    return CryptoJS.AES.encrypt(message, derivedKey).toString();
  } catch (error) {
    throw new Error('Encryption failed: ' + error.message);
  }
};

export const decryptMessage = (encryptedMessage, userKey) => {
  try {
    const derivedKey = deriveKey(userKey);
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, derivedKey);
    const originalMessage = decrypted.toString(CryptoJS.enc.Utf8);
    
    if (!originalMessage) {
      throw new Error('Invalid key or corrupted message');
    }
    
    return originalMessage;
  } catch (error) {
    throw new Error('Decryption failed: ' + error.message);
  }
};

export const validateInputs = (message, key) => {
  if (!message || !key) {
    throw new Error('Message and key are required');
  }
  
  if (message.trim().length === 0 || key.trim().length === 0) {
    throw new Error('Message and key cannot be empty');
  }
}; 