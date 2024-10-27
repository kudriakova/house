const serverUrl = 'http://localhost:3000/gallery';

fetch(serverUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Gallery data:', data);
        // Здесь вы можете обработать данные, например, отобразить их в вашей галерее
    })
    .catch(error => {
        console.error('Error fetching gallery data:', error);
    });