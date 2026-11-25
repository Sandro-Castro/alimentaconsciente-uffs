const recipeList = document.querySelector("#recipe-list");

function createElement(tag, className = "", text = "") {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

function createList(tag, items) {
    const style = tag === "ol" ? "ml-5 list-decimal space-y-2" : "ml-5 list-disc space-y-1";
    const list = createElement(tag, style);
    for (const item of items) {
        list.appendChild(createElement("li", "", item));
    }
    return list;
}

function createRecipeCard(recipe) {
    const card = createElement("article", "flex flex-col border-b border-line bg-white pb-4 scroll-mt-4");
    card.id = recipe.slug;

    const figure = createElement("figure", "bg-cream");
    const placeholder = createElement("div", "flex h-40 items-center justify-center text-sm text-slate-600", "Foto ainda não disponível");
    figure.appendChild(placeholder);
    if (recipe.image) {
        const image = createElement("img", "hidden h-40 w-full object-cover");
        image.alt = recipe.name;
        image.loading = "lazy";
        image.addEventListener("load", () => {
            image.classList.remove("hidden");
            placeholder.classList.add("hidden");
        });
        image.addEventListener("error", () => {
            image.classList.add("hidden");
            placeholder.classList.remove("hidden");
        });
        image.src = "../images/recipes/" + recipe.image;
        figure.appendChild(image);
        if (recipe.imageCredit) {
            const caption = createElement("figcaption", "px-2 py-1 text-xs text-slate-600", recipe.imageCredit);
            if (recipe.imageSource) {
                const source = createElement("a", "text-link ml-2", "Fonte da foto");
                source.href = recipe.imageSource;
                caption.appendChild(source);
            }
            figure.appendChild(caption);
        }
    }

    const category = createElement("p", "mt-3 text-sm font-semibold text-forest", recipe.category);
    const title = createElement("h3", "mt-2 card-title", recipe.name);
    const description = createElement("p", "mt-2 text-slate-700", recipe.description);
    const metadata = createElement("p", "mt-2 text-sm text-slate-600", `Tempo estimado: ${recipe.preparationTime} min · Rendimento: ${recipe.servings}`);
    const reused = createElement("p", "mt-3 preservation-note", "O que reaproveitar: " + recipe.reusedIngredients.join(", ") + ".");

    const details = createElement("details", "mt-4 border-t border-line pt-3");
    const summary = createElement("summary", "cursor-pointer font-semibold text-forest", "Ver receita completa");
    const ingredients = recipe.ingredients.map((ingredient) => `${ingredient.amount} — ${ingredient.name}`);
    const sourceLink = createElement("a", "text-link", recipe.source.name);
    sourceLink.href = recipe.source.url;
    const source = createElement("p", "mt-3 text-xs text-slate-600", "Inspiração da adaptação: ");
    source.appendChild(sourceLink);
    details.append(
        summary,
        createElement("h4", "mt-4 font-semibold", "Ingredientes"),
        createList("ul", ingredients),
        createElement("h4", "mt-4 font-semibold", "Modo de preparo"),
        createList("ol", recipe.steps),
        createElement("h4", "mt-4 font-semibold", "Dica de aproveitamento"),
        createElement("p", "mt-1 text-sm", recipe.tip),
        createElement("h4", "mt-4 font-semibold", "Cuidados importantes"),
        createElement("p", "mt-1 preservation-note", recipe.safety),
        source
    );
    card.append(figure, category, title, description, metadata, reused, details);
    return card;
}

function openRequestedRecipe() {
    const slug = window.location.hash.slice(1);
    const card = document.getElementById(slug);
    if (card && recipeList.contains(card)) {
        card.querySelector("details").open = true;
        card.scrollIntoView();
    }
}

async function loadRecipeList() {
    try {
        const response = await fetch("../data/recipes.json");
        if (!response.ok) throw new Error("Não foi possível abrir o JSON.");
        const recipes = await response.json();
        recipeList.replaceChildren();
        for (const recipe of recipes) {
            recipeList.appendChild(createRecipeCard(recipe));
        }
        openRequestedRecipe();
    } catch (error) {
        console.error(error);
        recipeList.replaceChildren(createElement("p", "content-card", "Não foi possível carregar as receitas. Abra o site por um servidor local."));
    }
}

window.addEventListener("hashchange", openRequestedRecipe);
loadRecipeList();
