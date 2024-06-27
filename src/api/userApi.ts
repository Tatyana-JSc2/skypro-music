export async function getTracks(){
    const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/"/*, {cache:"no-cache"}*/)
    if (!response.ok) {
        throw new Error('Ошибка при получении данных');
      }
    
      return response.json();
}