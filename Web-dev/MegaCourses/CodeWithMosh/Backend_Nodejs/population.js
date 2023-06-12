// Embedding [Array  of sub-document]
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1/mega_codeWithMosh_nodejs')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("Couldn't connect to MongoDB"));

const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
});
const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model(
    'Course',
    new mongoose.Schema({
        name: String,
        // author: authorSchema,
        authors: {
            type: [authorSchema],
            required: true,
        },
    })u
);

async function listCourses() {
    const courses = await Course.find().lean().exec();
    console.log(courses);
}

async function createCourse(name, authors) {
    let course = new Course({ name, authors });
    course = await course.save();
    console.log(course);
}

async function addAuthor(courseId, author) {
    let course = await Course.findById(courseId).exec();
    course.authors.push(author);
    course = await course.save();
    console.log(course);
}

// TODO: See how to remove sub-documents
async function removeAuthor(courseId, authorId) {
    const course = await Course.findById(courseId).exec();
    const author = course.authors.id(authorId); // TODO: querying sub-docs
    await author.deleteOne();
    await course.save();
}

// createCourse('Reactjs Course', [
//     new Author({ name: 'Nishanth' }),
//     new Author({ name: 'Mohan' }),
// ]);

// addAuthor('6485fcf83fa19d5d188418cd', new Author({ name: 'Surya' }));
// removeAuthor('6485fcf83fa19d5d188418cd', '6485fcf83fa19d5d188418cb');

// listCourses();
