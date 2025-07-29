
export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export enum GeneratorMode {
  Random = 'Random',
  Memorable = 'Memorable'
}
