export const useNameToID = () => {
  function nameToID(name: string) {
    name = name.toLowerCase();

    return name.replace(' ', '_');
  }

  return nameToID
}
