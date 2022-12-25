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
}

module.exports = APIFeatures;