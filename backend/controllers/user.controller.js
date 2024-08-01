

export const test = () => {
    console.log('si funciona la funcion entre el controlador y el proyecto')
}

BookModel.create({
    title: 'El Gran Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'Ficción',
    isbn: '9780743273565',
    copiesAvailable: 10
  });

  BookModel.create({
    title: 'Una Breve Historia del Tiempo',
    author: 'Stephen Hawking',
    category: 'Ciencia',
    isbn: '9780553380163',
    copiesAvailable: 7
  });

  BookModel.create({
    title: 'Sapiens: De Animales a Dioses',
    author: 'Yuval Noah Harari',
    category: 'Historia',
    isbn: '9780062316110',
    copiesAvailable: 5
  });

  BookModel.create({
    title: 'Harry Potter y la Piedra Filosofal',
    author: 'J.K. Rowling',
    category: 'Fantasía',
    isbn: '9780747532699',
    copiesAvailable: 15
  });

  BookModel.create({
    title: 'Los 7 Hábitos de la Gente Altamente Eficaz',
    author: 'Stephen R. Covey',
    category: 'Autoayuda',
    isbn: '9788498752594',
    copiesAvailable: 8
  });
  
  AuthorModel.create({
    name: 'F. Scott Fitzgerald',
    birthDate: new Date('1896-09-24'),
    nationality: 'American'
  });

  AuthorModel.create({
    name: 'Stephen Hawking',
    birthDate: new Date('1942-01-08'),
    nationality: 'British'
  });
  
  AuthorModel.create({
    name: 'Yuval Noah Harari',
    birthDate: new Date('1976-02-24'),
    nationality: 'Israeli'
  });
  
  AuthorModel.create({
    name: 'J.K. Rowling',
    birthDate: new Date('1965-07-31'),
    nationality: 'British'
  });
  
  AuthorModel.create({
    name: 'Stephen R. Covey',
    birthDate: new Date('1932-10-24'),
    nationality: 'American'
  });
  