/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",  // will make actual corrections on new file saved in proper format.
  "checkInDate": "2024-05-15"       // this line is missing a comma. Commas seperate key-value pairs, the comma identifies the start of a new pair
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      name: "Alice Johnson",       //"name" should be in quotes. This is a JSON syntax requirement.
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": undefined,            // undefined is not a valid data type in JSON.  Changed to null.
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking",]     //This line has a comma after Parking, should be removed because there is not another key value pair following it.
  }
}
`;                                                     // both the ` and the ; should be removed.  JSON objects end with a curly brace and no additional syntax.


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
    For this exercise, I created a .json file format and pasted the code in there.  
    The built-in editor in VS Code has some good indicators of errors.
    I also ran through the code again after correcting the VS Code indications, to ensure
    that there were no other logical errors that an editor would not find (like incorrect grouping of unrelated objects)

2️⃣ How did you confirm that your corrected JSON file was valid?
Per the instructions, I used both of the code editors because I wanted to practice how each worked.

3️⃣ Which errors were the most difficult to spot? Why?
I really didn't have any issues or errors.  Logic trees and syntax are strengths of mine.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   I read the whole data structure a few times before starting so I can create a mental map of where I want to go.
   I then start, and move very slowly.  Every time I start a new array or object within an object or array, I indent further, so that the 
   related data stays on the same indent. Moving forward I will likely rely on VS Code to catch any human errors I make, and
   if my code is still not returning expected results, I would move to using a linter, and/or asking another developer to take a peek.
*/
