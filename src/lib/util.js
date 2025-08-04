export const asyncHandler = (fn) => async function (req, res, next)
{
    try {
        return await fn(req, res);
    } catch (error) {
        next(error);
    }
};

export async function aggregateResults(model, payload)
//this takes in two arguments MODEL: a mongoose model and PAYLOAD: this 
//is the filter criteria-an object that tells .find() what kind of documents to search for.
{
    //create an aggregation pipeline and return the results
    return await model.find(payload);
    // youre asking the database to find all documents that match this payload
    // the result is an array of documents that satisfy the conditions in PAAYLOAD
}

