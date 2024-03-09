export default defineEventHandler(async (event) => {
  const { currencyKey } = useRuntimeConfig();
  const { code } = event.context.params;
  const url = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;
  const { data } = await $fetch(url);
  return data;
});
