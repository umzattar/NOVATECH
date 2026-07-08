document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      console.log("SERVER RESPONSE:", result);

      if (result.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message.");
      }

    } catch (err) {
      alert("Connection error.");
      console.log(err);
    }
  });

});
