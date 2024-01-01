import React from "react";

const WritingQuiz = () => {
  return (
    <div className="flex items-center justify-center my-5">
      <div className="max-w-screen w-full md:mx-10 mx-5 bg-primary text-secondary py-5 md:px-6 px-4 rounded-[35px]">
        <h1 className="text-center text-2xl font-bold py-5">Summarize This Information</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 auto-cols-auto md:space-x-5 h-max md:text-xl text-lg text-justify mb-10 md:px-10 px-5">
          <img className="pt-5 rounded" src="https://storage.googleapis.com/ebuddy-assets-ps305/writing-test.jpg" alt="" />
          <div>
            <p className="py-5 md:text-2xl text-xl">
              The bar chart here describes some changes about the percentage of people were born in Australia and who were
              born outside Australia living in urban, rural and town between 1995 and 2010. <br /> <br />
              Summarise the information by selecting and reporting the main features and make comparisons where relevant.
            </p>
            <textarea
              name="essay"
              id="essay"
              className="w-full h-40 rounded bg-orange text-brokenwhite placeholder:text-neutral-300 px-2"
              placeholder="Your Answer..."></textarea>
            <input type="submit" className="btnPrimary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingQuiz;

// import React, { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/firestore";

// const WritingQuiz = () => {
//   const [essay, setEssay] = useState("");

//   const handleEssayChange = (event) => {
//     setEssay(event.target.value);
//   };

//   const handleSubmit = async () => {
//     // Replace these values with your Firebase configuration
//     const firebaseConfig = {
//       apiKey: "YOUR_API_KEY",
//       authDomain: "YOUR_AUTH_DOMAIN",
//       projectId: "YOUR_PROJECT_ID",
//       storageBucket: "YOUR_STORAGE_BUCKET",
//       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//       appId: "YOUR_APP_ID",
//     };

//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }

//     // Get a reference to the Firestore database
//     const db = firebase.firestore();

//     try {
//       // Add the essay to the Firestore database
//       await db.collection("essays").add({
//         essay,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//       });

//       console.log("Essay submitted successfully!");
//       // You can add additional logic here, such as displaying a success message
//     } catch (error) {
//       console.error("Error submitting essay:", error);
//       // You can add additional error handling logic here
//     }
//   };

//   return (
//     <div className="flex items-center justify-center my-5">
//       <div className="max-w-screen w-full md:mx-10 mx-5 bg-primary text-secondary py-5 md:px-6 px-4 rounded-[35px]">
//         <div className="grid md:grid-cols-2 grid-cols-1 auto-cols-auto md:space-x-5 h-max md:text-xl text-lg text-justify mb-10 md:px-10 px-5">
//           <img className="pt-10 rounded" src="writing.jpg" alt="" />
//           <div>
//             <p className="py-10 md:text-2xl text-xl">
//               The bar chart here describes some changes about the percentage of people were born in Australia and who were
//               born outside Australia living in urban, rural and town between 1995 and 2010. <br /> <br />
//               Summarise the information by selecting and reporting the main features and make comparisons where relevant.
//             </p>
//             <textarea
//               name="essay"
//               id="essay"
//               className="w-full h-40 rounded"
//               placeholder="Your Answer..."
//               value={essay}
//               onChange={handleEssayChange}></textarea>
//             <input type="submit" className="btnPrimary" onClick={handleSubmit} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WritingQuiz;
