// Définition des types avec "branding" pour les différencier

interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits'; // propriété de branding
}

interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits'; // propriété de branding
}

// Fonction qui additionne les crédits majeurs
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits',
  };
}

// Fonction qui additionne les crédits mineurs
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits',
  };
}

// ✅ Exemple d'utilisation
const major1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
const totalMajor = sumMajorCredits(major1, major2);
console.log('Total Major Credits:', totalMajor); // { credits: 7, __brand: 'MajorCredits' }

const minor1: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log('Total Minor Credits:', totalMinor); // { credits: 3, __brand: 'MinorCredits' }
