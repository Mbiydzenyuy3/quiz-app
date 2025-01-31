
export const fetchQuestions = async () => {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    );
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.log("Error fetching questions:", error);
  }
};
