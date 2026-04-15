export const pluralizeText = (text, count) => {
  if (text === undefined) return '';
  if (count === 1) return `${count} ${text}`;

  // If word ends in 'y', change to 'ies' (e.g., Category -> Categories)
  if (text.endsWith('y')) {
    return `${text.slice(0, -1)}ies`;
  }

  // If word ends in s, x, z, ch, sh, add 'es' (e.g., Box -> Boxes)
  if (/[sxz|ch|sh]$/.test(text)) {
    return `${text}es`;
  }

  return `${text}s`;
};

// Helper: overallDamage -> Overall Damage
export const formatCamelCase = (key) =>
  key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
