require('dotenv').config();
const express = require('express');
const Joi = require('joi');
const crypto = require('crypto');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const courses = [
    {
        id: 1,
        name: 'Nodejs Course',
    },
    {
        id: 2,
        name: 'Reactjs Course',
    },
    {
        id: 3,
        name: 'Angularjs Course',
    },
    {
        id: 4,
        name: 'Vuejs Course',
    },
    {
        id: 5,
        name: 'MongoDB Course',
    },
];

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    let course;
    // course = courses.at(req.params.id); // TODO: return course object with index number

    // course = courses.find((course) => course.id === parseInt(req.params.id));

    if (!course) return res.status(404).send('The course does not exist');
    res.send(course);
});

app.post('/api/courses', async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    try {
        await schema.validateAsync(req.body);
        const course = {
            id: courses.length + 1,
            name: req.body.name,
        };
        courses.push(course);
        res.send(courses);
    } catch (err) {
        res.status(400).send(String(err.details[0].message));
    }
});

app.put('/api/courses/:id', async (req, res) => {
    // Look up the course
    let course = courses.find(
        (course) => course.id === parseInt(req.params.id)
    );

    // if not existing, return 404 - Not Found
    if (!course) return res.status(404).send('The course does not exist');

    // Validate the course
    // If invalid, return 400 - Bad Request
    // Update the course
    // Return the Updated course
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    try {
        await schema.validateAsync(req.body);
        course.name = req.body.name;
        res.send(course);
    } catch (err) {
        res.status(400).send(String(err.details[0].message));
    }
});

const port = process.env.PORT ?? 3500;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.delete('/api/courses/:id', async (req, res) => {});

/*
async function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });
    return await schema.validateAsync(course);
}

*/
