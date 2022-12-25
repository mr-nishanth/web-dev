class APIFeatures {
    // query (object) , in controller await Product.find() before calling the await the function return object
    // queryString
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    search() {
        let keyword = this.queryString.keyword ? {
            name: {
                $regex: this.queryString.keyword,
                $options: "i"
            }
        } : {}

        this.query.find({ ...keyword })
        // return object
        return this
    }
    filter() {
        const queryStringCopy = { ...this.queryString }
        // before queryString
        console.log(queryStringCopy)

        // removing fields from queryString
        const removeFields = ["keyword", "limit", "page"]
        removeFields.forEach(field => delete queryStringCopy[field])

        // after queryString
        console.log(queryStringCopy)

        this.query.find(queryStringCopy)
        return this

    }
}

module.exports = APIFeatures;