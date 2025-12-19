

// Function to send the dynamic content
async function generateInfo() {
    const card = document.getElementById("card");
    const text = document.getElementById("text").value;
  
    // Add user input to the card
    const userMessage = document.createElement("div");
    userMessage.className = "message";
    userMessage.innerHTML = `<center><h1>${text}</h1></center><hr>`;
    card.appendChild(userMessage);
  
    //fatch response
    const body = {contents: [{ parts: [{ text: text }] }] };

    const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=AIzaSyCl-5XQFhEgx80H1uAlASEdCQ1DyCbCIUg',{
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(body)

        });
         const result = await response.json()

         // display api respose
         const apiMessage = document.createElement("div");
         apiMessage.className = "message";
         apiMessage.innerHTML = result.candidates[0].content.parts[0].text  // marked.parse(result.candidates[0].content.parts[0].text);
         card.appendChild(apiMessage);
            
        console.log(result);       
}











