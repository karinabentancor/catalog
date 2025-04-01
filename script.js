fetch("books.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("catalog");
    data.forEach(book => {
      const status = book.available ? "" : "<p class='out-of-stock'>Libro en préstamo</p>";
      container.innerHTML += `
        <div class="book ${book.available ? "" : "not-available"}">
          <img src="${book.image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p><strong>Autor/a:</strong> ${book.author}</p>
          <p><strong>Editorial:</strong> ${book.publisher}</p>
          <p><strong>Páginas:</strong> ${book.pages}</p>
          <p><strong>Idioma:</strong> ${book.language}</p>
          <p><strong>Idioma original: </strong> ${book.languageOriginal}</p>
          ${status}
        </div>
      `;
    });
  })
  .catch(error => console.error("Error loading books:", error));
