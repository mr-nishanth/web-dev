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
        console.log("before queryString", queryStringCopy)

        // removing fields from queryString
        const removeFields = ["keyword", "limit", "page"]
        removeFields.forEach(field => delete queryStringCopy[field])

        // after queryString
        console.log("after queryString", queryStringCopy) // { price: { gt: '1000', lt: '500' } }

        // Convert JSON to string
        let queryStringForPrice = JSON.stringify(queryStringCopy)
        queryStringForPrice = queryStringForPrice.replace(/\b(gt|gte|lt|lte)/g, match => `$${match}`)
        // console.log(queryStringForPrice)

        // convert to string to JSON
        this.query.find(JSON.parse(queryStringForPrice))
        return this

    }
    paginate(resultPerPage) {
        const currentPage = Number(this.queryString.page) || 1
        // resultPerPage -> 2 * currentPage -> 3 - 1
        // resultPerPage -> 2 * currentPage -> 2
        // skip count 4
        const skipCount = resultPerPage * currentPage - 1
        this.query.limit(resultPerPage).skip(skipCount)
        return this
    }
}

module.exports = APIFeatures;