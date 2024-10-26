export async function getTracks() {
  const response = await fetch("https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all/"/*, {cache:"no-cache"}*/)
  if (!response.ok) {
    throw new Error('Ошибка при получении данных');
  }
 const data = await response.json();
  return data.data;
}

//"https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all/"- стало на беспотоке?
//"https://skypro-music-api.skyeng.tech/catalog/track/all/" - было на потоке?