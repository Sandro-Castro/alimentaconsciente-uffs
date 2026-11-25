const searchForm = document.querySelector("#ingredient-search-form");
const ingredientsInput = document.querySelector("#ingredients");
const resultsContainer = document.querySelector("#search-results");
let recipes = []

function normalizeIngredient(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function showMessage(message) {
    resultsContainer.replaceChildren();
    const paragraph = document.createElement("p");
    paragraph.className = "rounded-xl border border-line bg-white p-6 text-slate-700";
    paragraph.textContent = message;
    resultsContainer.appendChild(paragraph);
}

function showResults(matches) {
    resultsContainer.replaceChildren();

    for (const match of matches) {
        const card = document.createElement("article");
        card.className = "rounded-xl border border-line bg-white p-5"

        const title = document.createElement("h3");
        title.className = "text-xl font-semibold text-forest";
        title.textContent = match.name;

        const available = document.createElement("P");
        available.className = "mt-2 text-slate-700";
        available.textContent = "Você tem: " + match.available.join(", " + ".");

        const missing = document.createElement("p");
        missing.className = "mt-1 text-slate-700";
        missing.textContent = match.missing.length > 0
            ? "Faltam: " + match.missing.join(", ") + "."
            : "Você tem todos os ingredientes listados!";

        const description = document.createElement("p")
        description.className = "mt-2 text-sm text-slate-600";
        description.textContent = match.description;

        card.append(title, available, missing, description)
    }
}

async function loadRecipes() {
    try {
        const response = await fetch("../data/recipes.json");
        if (!response.ok) throw new Error("Não foi possível abrir o erro");
        recipes = await response.json();
    } catch (error) {
        console.error(error);
        showMessage("Não foi possível carregar as receitas")
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
})

const ingredients = ingredientsInput.value
    .split(",")
    .map(normalizeIngredient)
    .filter(Boolean);

if (ingredients.length === 0) {
    showMessage("Informe ao menos um ingrediente para pesquisar.");
    return;
}

const matches = recipes.map((recipe) => {
    const available = recipe.ingredients.filter((ingredient) =>
        ingredients.includes(normalizeIngredient(ingredient))
    );
    const missing = recipe.ingredients.filter((ingredient) =>
        !ingredients.includes(normalizeIngredient(ingredient))
    );
    return { ...recipe, available, missing, score: available.length };
})
    .filter((recipe) => recipe.score > 0)
    .sort((first, second) => second.score - first.score);

if (matches.length === 0) {
    showMessage("Nenhuma receita encontrada. Tente informar outros ingredientes.");
    return;
}

showResults(matches);

loadRecipes();



