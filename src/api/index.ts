export default async function fetchApi<T = {}>(endpoint: string, opt: RequestInit): Promise<T> {
  const apiUrl = 'http://localhost:3001/api/v1';
  if (!apiUrl) throw new Error('No API URL');
  const response = await fetch(`${apiUrl}${endpoint}`, {
    ...opt,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Une erreur est survenue veuillez réessayer ultérieurement');
  }

  return data;
}
