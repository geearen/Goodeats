// $('.ui.rating')
//   .rating({
//     initialRating: 3,
//     maxRating: 5
//   })
// ;

// $(document)
// .ready(function() {
//   $('.ui.form')
//     .form({
//       fields: {
//         email: {
//           identifier  : 'email',
//           rules: [
//             {
//               type   : 'empty',
//               prompt : 'Please enter your e-mail'
//             },
//             {
//               type   : 'email',
//               prompt : 'Please enter a valid e-mail'
//             }
//           ]
//         },
//         password: {
//           identifier  : 'password',
//           rules: [
//             {
//               type   : 'empty',
//               prompt : 'Please enter your password'
//             },
//             {
//               type   : 'length[6]',
//               prompt : 'Your password must be at least 6 characters'
//             }
//           ]
//         }
//       }
//     })
//   ;
// })
// ;


const addIngredients = () => {
  console.log("click")
  $(".ingredients").append('<input type="text" name="ingredients">')
};

const editInstructions = () => {
  console.log("click")
  $(".editInstructions").append('<input type="text" name="instructions">')
};


const editIngredients = () => {
  console.log("click")
  $(".editIngredients").append('<input type="text" name="ingredients">')
};


const addInstructions = () => {
  console.log("click")
  $(".instructions").append('<input type="text" name="instructions">')
};


$("#editInstructions").on("click", editInstructions);
$("#editIngredients").on("click", editIngredients);
$("#addIngredients").on("click", addIngredients);
$("#addInstructions").on("click", addInstructions);



