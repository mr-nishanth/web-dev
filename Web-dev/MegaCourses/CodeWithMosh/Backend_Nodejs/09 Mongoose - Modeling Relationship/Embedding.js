// Embedding
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
        author: {
            type: authorSchema,
            required: true,
        },
    })
);

async function createCourse(name, author) {
    const course = new Course({ name, author });
    const result = await course.save();
    console.log(result);
}

async function updateAuthor(courseId) {
    // Query First approach
    // let course = await Course.findById(courseId).exec();
    // course.author.name = 'Mr Nishanth';
    // course = await course.save();

    // Update First approach (update directly at database)
    let course = await Course.updateOne(
        { _id: courseId },
        // Update
        // { $set: { 'author.name': 'Mr Mohan', name: 'Angular Js' } }
        // Remove
        { $unset: { 'author.name': '' } }
    ).exec();
    console.log(course);
}

async function listCourses() {
    const courses = await Course.find().lean().exec();
    console.log(courses);
}

// createCourse('Reactjs Course', new Author({ name: 'Nishanth' }));
// updateAuthor('6485f8d966b316e0e0d0471f');
listCourses();
