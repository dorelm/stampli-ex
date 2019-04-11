export default function keyValueParser(txtValue: string) {
  const parts = txtValue.split(',');
  const keyValue = [];
  for (let i = 0; i < parts.length - 1; i += 2) {
    keyValue.push({key: parts[i], value: parts[i + 1]});
  }
  return keyValue;
}
