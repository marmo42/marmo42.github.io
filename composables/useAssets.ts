export default function useAssets() {
  const assets = import.meta.glob("../assets/*.svg");

  console.log(assets);

  return { assets }; 
}
