import mongoose from "mongoose";
export const validateID = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  console.log(
    `\n ⚠️⚠️ MongoDB ID STATUS ⚠️⚠️  \n  
    ID : ${id}      
    isValid :  ${isValid} \n`
  );
  if (!isValid) throw new Error("This is not a valid MongoDB ID or Not Found");
};
