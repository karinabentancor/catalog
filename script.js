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
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Publisher:</strong> ${book.publisher}</p>
          <p><strong>Pages:</strong> ${book.pages}</p>
          <p><strong>Language:</strong> ${book.language}</p>
          <p>${book.description}</p>
          <p class="price">$${book.price}</p>
          ${status}
        </div>
      `;
    });
  })
  .catch(error => console.error("Error loading books:", error));
