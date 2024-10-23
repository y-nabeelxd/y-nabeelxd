// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  const body = document.body;
  if (body.classList.contains('dark-theme')) {
    body.classList.replace('dark-theme', 'light-theme');
    document.getElementById('theme-toggle').textContent = '☀️';
  } else {
    body.classList.replace('light-theme', 'dark-theme');
    document.getElementById('theme-toggle').textContent = '🌙';
  }
});

// Show encryption box and hide main buttons
document.getElementById('encrypt-btn').addEventListener('click', () => {
  document.getElementById('main-buttons').style.display = 'none';
  document.getElementById('encrypt-box').style.display = 'block';
});

// Show decryption box and hide main buttons
document.getElementById('decrypt-btn').addEventListener('click', () => {
  document.getElementById('main-buttons').style.display = 'none';
  document.getElementById('decrypt-box').style.display = 'block';
});

// Close button to hide the encryption/decryption box and show main buttons
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('encrypt-box').style.display = 'none';
    document.getElementById('decrypt-box').style.display = 'none';
    document.getElementById('main-buttons').style.display = 'block';
  });
});

// Base64 encryption and decryption
function base64Encrypt(text) {
  return btoa(text); // Base64 encoding
}

function base64Decrypt(encryptedText) {
  try {
    return atob(encryptedText); // Base64 decoding
  } catch (e) {
    return "Invalid encrypted text!";
  }
}

// Encrypt the input text
document.getElementById('encrypt-action').addEventListener('click', () => {
  const inputText = document.getElementById('input-text').value;
  const encryptedText = base64Encrypt(inputText);
  document.getElementById('encrypted-text').textContent = encryptedText;
  document.getElementById('result').classList.remove('hidden');
});

// Decrypt the input encrypted text
document.getElementById('decrypt-action').addEventListener('click', () => {
  const inputEncrypted = document.getElementById('input-encrypted').value;
  const decryptedText = base64Decrypt(inputEncrypted);
  document.getElementById('decrypted-text').textContent = decryptedText;
  document.getElementById('result-decrypt').classList.remove('hidden');
});

// Copy encrypted text to clipboard
document.getElementById('copy-encrypt').addEventListener('click', () => {
  const encryptedText = document.getElementById('encrypted-text').textContent;
  navigator.clipboard.writeText(encryptedText).then(() => {
    alert("Encrypted text copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy text: " + err);
  });
});

// Copy decrypted text to clipboard
document.getElementById('copy-decrypt').addEventListener('click', () => {
  const decryptedText = document.getElementById('decrypted-text').textContent;
  navigator.clipboard.writeText(decryptedText).then(() => {
    alert("Decrypted text copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy text: " + err);
  });
});
