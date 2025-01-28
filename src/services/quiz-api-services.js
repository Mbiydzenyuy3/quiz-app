const API_URL =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

export const SearchMeals = async (keyWord = "category") => {
  const response = await fetch(`${API_URL}${keyWord}`);
  const res = await response.json();
  console.log(res);
  return res.meals;
};
