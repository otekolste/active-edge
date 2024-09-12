// SOURCED FROM TUTORIAL: https://lexingtonthemes.com/tutorials/how-to-create-a-tag-input-with-tailwind-css-and-javascript/

document.addEventListener("DOMContentLoaded", async function () {
  const newTagInput = document.getElementById("new-tag-input");
  const tagsList = document.getElementById("tags-list");
  let tags = [];

  const tagsData = await fetch("/api/tags");
  const tagsArray = await tagsData.json();
  const tagNames = tagsArray.map((tag) => {
    return {
      label: tag.name,
      name: tag.name,
    };
  });
  console.log(tagNames);
  autocomplete({
    input: newTagInput,
    fetch: function (text, update) {
      text = text.toLowerCase();
      var suggestions = tagNames.filter((n) =>
        n.name.toLowerCase().startsWith(text)
      );
      console.log(suggestions);
      update(suggestions);
    },
    onSelect: function (item) {
      newTagInput.value = item.label;
    },
  });

  newTagInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const tag = newTagInput.value.trim();
      if (tag) {
        tags.push(tag);
        newTagInput.value = "";
        renderTags();
      }
    }
  });

  function renderTags() {
    tagsList.innerHTML = "";
    tags.forEach((tag, index) => {
      const tagElement = document.createElement("div");
      tagElement.className =
        "inline-flex items-center gap-x-0.5 rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10";

      const tagText = document.createElement("span");
      tagText.textContent = tag;

      const removeButton = document.createElement("button");
      removeButton.className = "ml-2";
      removeButton.innerHTML =
        '<svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
      removeButton.addEventListener("click", function () {
        tags.splice(index, 1);
        renderTags();
      });

      tagElement.appendChild(tagText);
      tagElement.appendChild(removeButton);
      tagsList.appendChild(tagElement);
    });
  }
});
