
import { useState, useCallback } from 'react';
import { PasswordOptions } from '../types';
import { CHAR_SETS } from '../constants';

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<number>(0);

  const calculateStrength = useCallback((pwd: string, options: PasswordOptions) => {
    let score = 0;
    const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;

    if (!pwd) return 0;
    
    let typesCount = 0;
    if (includeUppercase) typesCount++;
    if (includeLowercase) typesCount++;
    if (includeNumbers) typesCount++;
    if (includeSymbols) typesCount++;
    
    if (length >= 8 && typesCount >= 2) score++;
    if (length >= 12 && typesCount >= 3) score++;
    if (length >= 16 && typesCount === 4) score++;
    if (length >= 20 && typesCount === 4) score++;

    return Math.min(score, 4);
  }, []);

  const generatePassword = useCallback((options: PasswordOptions) => {
    const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;
    
    let charset = '';
    const guaranteedChars: string[] = [];
    const buildCharset = (include: boolean, set: string) => {
        if (include) {
            charset += set;
            const randomBytes = new Uint8Array(1);
            crypto.getRandomValues(randomBytes);
            guaranteedChars.push(set[randomBytes[0] % set.length]);
        }
    };

    buildCharset(includeUppercase, CHAR_SETS.UPPERCASE);
    buildCharset(includeLowercase, CHAR_SETS.LOWERCASE);
    buildCharset(includeNumbers, CHAR_SETS.NUMBERS);
    buildCharset(includeSymbols, CHAR_SETS.SYMBOLS);

    if (charset === '') {
      setPassword('');
      setStrength(0);
      return;
    }
    
    const remainingLength = length - guaranteedChars.length;
    let randomChars = '';
    if (remainingLength > 0) {
        const randomValues = new Uint32Array(remainingLength);
        crypto.getRandomValues(randomValues);
        for (let i = 0; i < remainingLength; i++) {
            randomChars += charset[randomValues[i] % charset.length];
        }
    }
    
    let finalPasswordArray = (randomChars + guaranteedChars.join('')).split('');
    
    // Fisher-Yates shuffle
    const shuffleValues = new Uint32Array(finalPasswordArray.length);
    crypto.getRandomValues(shuffleValues);
    for (let i = finalPasswordArray.length - 1; i > 0; i--) {
        const j = shuffleValues[i] % (i + 1);
        [finalPasswordArray[i], finalPasswordArray[j]] = [finalPasswordArray[j], finalPasswordArray[i]];
    }
    
    const finalPassword = finalPasswordArray.join('');
    setPassword(finalPassword);
    setStrength(calculateStrength(finalPassword, options));
  }, [calculateStrength]);

  return { password, strength, generatePassword };
};
