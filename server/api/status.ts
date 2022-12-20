export default defineEventHandler((event) => {
  const up = 'operational ✔️';
  const down = 'down ❌';
  
  return {
    site: up,
    api: up
  }
})
