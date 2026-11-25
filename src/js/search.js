const searchForm = document.querySelector("#ingredient-search-form");
const ingredientsInput = document.querySelector("#ingredients");
const resultsContainer = document.querySelector("#search-results");
const searchButton = searchForm.querySelector('button[type="submit"]');
let recipes = [];
let recipesLoaded = false;

function normalizeIngredient(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .replace(/\s+/g, " ");
}

function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

function showMessage(message) {
    resultsContainer.replaceChildren(createElement("p", "content-card text-slate-700", message));
}

function findMatches(ingredients) {
    return recipes.map((recipe) => {
        const available = recipe.ingredients.filter((ingredient) =>
            ingredients.some((searchIngredient) =>
                (" " + normalizeIngredient(ingredient.name) + " ").includes(" " + searchIngredient + " ")
            )
        );
        const missing = recipe.ingredients.filter((ingredient) => !available.includes(ingredient));
        return { ...recipe, available, missing, score: available.length };
    })
    .filter((recipe) => recipe.score > 0)
    .sort((first, second) => second.score - first.score);
}

function showResults(matches) {
    resultsContainer.replaceChildren();
    for (const match of matches) {
        const card = createElement("article", "content-card", "");
        const title = createElement("h3", "card-title", match.name);
        const reused = createElement("p", "mt-2 preservation-note", "O que reaproveitar: " + match.reusedIngredients.join(", ") + ".");
        const available = createElement("p", "mt-2 text-slate-700", "Você informou: " + match.available.map((ingredient) => ingredient.name).join(", ") + ".");
        const missing = createElement("p", "mt-1 text-slate-700", match.missing.length > 0
            ? "Não informados: " + match.missing.map((ingredient) => ingredient.name).join(", ") + "."
            : "Você informou todos os ingredientes listados; confira as quantidades!");
        const metadata = createElement("p", "mt-2 text-sm text-slate-600", `${match.score}/${match.ingredients.length} ingredientes em comum · ${match.preparationTime} min (estimativa)`);
        const link = createElement("a", "mt-3 inline-block text-link", "Ver receita completa");
        link.href = "./recipes.html#" + match.slug;
        card.append(title, reused, available, missing, metadata, link);
        resultsContainer.appendChild(card);
    }
}

async function loadRecipes() {
    searchButton.disabled = true;
    showMessage("Carregando receitas…");
    try {
        const response = await fetch("../data/recipes.json");
        if (!response.ok) throw new Error("Não foi possível abrir o JSON.");
        recipes = await response.json();
        recipesLoaded = true;
        searchButton.disabled = false;
        showMessage("Digite seus ingredientes e clique em “Buscar receitas”.");
    } catch (error) {
        console.error(error);
        showMessage("Não foi possível carregar as receitas. Verifique se o site está aberto por um servidor local e recarregue a página.");
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!recipesLoaded) return;

    const ingredients = ingredientsInput.value.split(",").map(normalizeIngredient).filter(Boolean);
    if (ingredients.length === 0) {
        showMessage("Informe ao menos um ingrediente para pesquisar.");
        return;
    }
    const matches = findMatches(ingredients);
    if (matches.length === 0) {
        showMessage("Nenhuma receita encontrada. Tente informar outros ingredientes.");
        return;
    }
    showResults(matches);
});

loadRecipes();
