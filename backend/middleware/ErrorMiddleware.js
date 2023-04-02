
const NotFounderror  = ((req , res , next) =>{
const err = new Error(`not found-${req.originalUrl}`)
res.status(404)
next(err)
} )


 const errorHandler =   ((err, req, res, next) => {
  console.log(res);
  const errorStatus = res.statusCode || 500;
  console.log(err.status)
  const errorMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    code:errorStatus ,
    status: errorMessage,
    stack: err.stack,
  });



});



export {NotFounderror , errorHandler}