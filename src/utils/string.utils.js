export const pluralizeText = (text, count, excludeCount) => {
  if (excludeCount) return text;
  if (count === 1) return `${count} ${text}`;

  // If word ends in 'y', change to 'ies' (e.g., Category -> Categories)
  if (text.endsWith('y')) {
    return `${count} ${text.slice(0, -1)}ies`;
  }

  // If word ends in s, x, z, ch, sh, add 'es' (e.g., Box -> Boxes)
  if (/[sxz|ch|sh]$/.test(text)) {
    return `${count} ${text}es`;
  }

  return `${count} ${text}s`;
};
