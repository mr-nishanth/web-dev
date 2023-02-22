class APIFeatures {
  // query (object) , in controller await Product.find() before calling the await , the function return object
  // queryString (object) , in controller req.query
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  // name is the field in the database that we want to search for the keyword in it , $regex is the regex expression that we want to search for , $options is the options that we want to use in the regex expression , i is the case insensitive option that we want to use in the regex expression
  search() {
    let keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        }
      : {};

    this.query.find({ ...keyword }); //eg: Product.find({ name: { $regex: 'apple', $options: 'i' } })
    // return object
    return this;
  }
  filter() {
    const queryStringCopy = { ...this.queryString };
    // before queryString
    console.log("Before Remove queryString", queryStringCopy);

    // removing fields from queryString that we don't want to filter by them , we want to filter by category and price only , so we remove the other fields from queryString
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((field) => delete queryStringCopy[field]);

    // after queryString
    console.log("After removed queryString", queryStringCopy); // { price: { gt: '1000', lt: '500' } }

    // Convert JSON to string to replace the gt, gte, lt, lte with $gt, $gte, $lt, $lte to use it in mongoose query to filter by price range , we use replace method to replace the gt, gte, lt, lte with $gt, $gte, $lt, $lte , we use JSON.stringify to convert the object to string to use replace method on it
    let queryStringForPrice = JSON.stringify(queryStringCopy);
    queryStringForPrice = queryStringForPrice.replace(
      /\b(gt|gte|lt|lte)/g,
      (match) => `$${match}` // $gt, $gte, $lt, $lte , we use $ to use it in mongoose query to filter by price range
    );
    console.log({ queryStringForPrice });

    // mongodb only accept object format,so we use JSON.parse to convert the string to JSON to use it in mongodb query .
    // eg: Product.find({ price: { $gt: '1000', $lt: '500' } })
    this.query.find(JSON.parse(queryStringForPrice));
    return this;
  }
  paginate(resultPerPage) {
    const currentPage = Number(this.queryString.page) || 1; // if page is not exist in queryString then set it to 1 , Number to convert it to number from string
    //eg: resultPerPage = 2 ; currentPage = 3
    // skip count = 2 * (3 - 1) = 4
    // we want to skip the first 4 results and get the next 2 results only in the next page
    const skipCount = resultPerPage * (currentPage - 1);

    this.query.limit(resultPerPage).skip(skipCount);
    // skip is used to skip the first 4 results , limit is used to limit the results to 2 results only , so we will get the 5th and 6th results only , skip(4) and limit(2)
    // eg: Product.find().limit(2).skip(4)
    return this;
  }
}

module.exports = APIFeatures;
