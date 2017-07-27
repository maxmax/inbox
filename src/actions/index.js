const LOAD_INBOX = 'LOAD_INBOX';
const LOAD_WORDS = 'LOAD_WORDS';

export function loadInbox() {
  return {
    type: LOAD_INBOX
  }
}

export function loadWords() {
  return {
    type: LOAD_WORDS
  }
}
