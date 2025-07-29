
import React from 'react';

interface IconProps {
    className?: string;
}

export const CopyIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125T9.375 5.25h3.375c3.04 0 5.5 2.46 5.5 5.5v3.375c0 .621-.504 1.125-1.125 1.125h-3.375a1.125 1.125 0 0 1-1.125-1.125v-3.375a1.125 1.125 0 0 1 1.125-1.125h3.375" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

export const RefreshIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-11.667-11.668v4.992h4.992m-4.993 0-3.181-3.183a8.25 8.25 0 0 1 11.667 0l3.181 3.183" />
    </svg>
);

export const WandIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69a.75.75 0 0 1 .819.162l3.938 3.938a.75.75 0 0 1-1.06 1.06l-3.938-3.938a.75.75 0 0 1-.162-.819A8.97 8.97 0 0 0 15 15a9 9 0 0 0-9-9 8.97 8.97 0 0 0-.69 3.463a.75.75 0 0 1-.819.162L1.718 5.43a.75.75 0 0 1 1.06-1.06l3.938 3.938a.75.75 0 0 1 .819-.162A8.97 8.97 0 0 0 9 3a9 9 0 0 0-3.463.69a.75.75 0 0 1-.162-.819l3.938-3.938a.75.75 0 0 1 1.06-1.06L9.528 1.718Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 21a.75.75 0 0 1-.75-.75v-2.25a.75.75 0 0 1 1.5 0v2.25a.75.75 0 0 1-.75.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75a.75.75 0 0 1-.75-.75V.75a.75.75 0 0 1 1.5 0v2.25A.75.75 0 0 1 12 3.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a.75.75 0 0 1-.75-.75h-2.25a.75.75 0 0 1 0-1.5h2.25a.75.75 0 0 1 .75.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75a.75.75 0 0 1-.75-.75h-2.25a.75.75 0 0 1 0-1.5h2.25a.75.75 0 0 1 .75.75Z" />
    </svg>
);
