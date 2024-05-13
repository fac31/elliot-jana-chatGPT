export const createConversation = async (userId, conversationName) => {
  try {
    const response = await fetch(`http://localhost:4000/conversations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        conversationName: conversationName,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error adding message", error);
  }
};

export default createConversation;
