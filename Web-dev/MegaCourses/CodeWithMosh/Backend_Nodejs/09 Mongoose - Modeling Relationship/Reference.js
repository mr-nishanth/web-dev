// References
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1/mega_codeWithMosh_nodejs')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("Couldn't connect to MongoDB"));

const Author = mongoose.model(
    'Author',
    new mongoose.Schema({
        name: String,
        bio: String,
        website: String,
    })
);

const Course = mongoose.model(
    'Course',
    new mongoose.Schema({
        name: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author',
        },
    })
);

async function createAuthor(name, bio, website) {
    const author = new Author({ name, bio, website });
    const result = await author.save();
    console.log(result);
}

async function createCourse(name, author) {
    const course = new Course({ name, author });
    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    // populate(referenceModel, IncludeFields)
    const courses = await Course.find()
        .populate('author', 'name bio -_id')
        .select({ name: 1, author: 1 })
        .lean()
        .exec();
    console.log(courses);
}

// createAuthor('Mosh', 'My Bio', 'My Website');

// createCourse("Node Course","authorId")
// createCourse('Node Course', '6485e5d5b4662be1adbdc2ba');

listCourses();
