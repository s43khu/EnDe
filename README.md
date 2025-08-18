# Secure Message Encoder/Decoder

A secure web application for encoding and decoding messages using military-grade encryption.

## Features

- **AES-256 Encryption**: Uses Advanced Encryption Standard with 256-bit keys
- **SHA-256 Key Derivation**: Secure hash function for consistent key generation
- **Tabbed Interface**: Separate tabs for encoding and decoding messages
- **Copy to Clipboard**: Easy copying of encoded messages
- **Responsive Design**: Modern UI that works on all devices
- **Modular Architecture**: Reusable components for maintainability

## Security Features

- Messages are encrypted using AES-256 encryption
- Keys are derived using SHA-256 hashing for consistent length
- Encrypted messages cannot be decoded without the exact key
- No messages are stored or transmitted to external servers
- All encryption/decryption happens locally in the browser

## How It Works

1. **Encoding**: Enter your message and a secret key. The app will encrypt your message using AES-256 encryption with a key derived from your input using SHA-256.

2. **Decoding**: Paste an encoded message and provide the same key used for encoding. The app will decrypt and display the original message.

3. **Key Security**: Your encryption key is never stored or transmitted. It's only used locally to encrypt/decrypt messages.

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Encoding a Message
1. Click on "Encode Message" tab
2. Enter your secret key in the "Encryption Key" field
3. Type your message in the "Message to Encode" field
4. Click "Encode Message"
5. Copy the encoded message using the "Copy to Clipboard" button

### Decoding a Message
1. Click on "Decode Message" tab
2. Enter the same key used for encoding
3. Paste the encoded message
4. Click "Decode Message"
5. View the decoded message

## Technical Details

- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS
- **Encryption**: crypto-js library
- **Key Derivation**: SHA-256 hash function
- **Encryption Algorithm**: AES-256

## Security Notes

- Always use strong, unique keys for important messages
- Never share your encryption keys
- The app runs entirely in your browser - no data is sent to external servers
- Encrypted messages are only as secure as your key management

## License

This project is open source and available under the MIT License.
