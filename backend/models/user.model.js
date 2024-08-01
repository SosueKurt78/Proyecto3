import {Schema, model} from 'mongoose'

const BookSchema = new mongoose.Schema({
    title: {
      type: String
    },
    author: {
      type: String
    },
    category: {
      type: String
    },
    isbn: {
      type: String
    },
    copiesAvailable: {
      type: Number
    }
  });
  
  const AuthorSchema = new mongoose.Schema({
    name: {
      type: String
    },
    birthDate: {
      type: Date
    },
    nationality: {
      type: String
    }
  });
  

  export const BookModel = new model('Book', BookSchema);
  export const AuthorModel = model('Author', AuthorSchema);