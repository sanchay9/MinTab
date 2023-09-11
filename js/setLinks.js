const FA_ICONS = [
  {
    icon: "fa-github",
    link: "https://www.github.com/",
  },
  {
    icon: "fa-steam",
    link: "https://store.steampowered.com/",
  },
  {
    icon: "fa-unsplash",
    link: "https://unsplash.com/",
  },
  {
    icon: "fa-reddit",
    link: "https://www.reddit.com/",
  },
];

const LIST_ITEMS = [
  {
    name: "clist",
    link: "https://clist.by/",
  },
  {
    name: "goodreads",
    link: "https://www.goodreads.com/",
  },
  {
    name: "lichess",
    link: "https://lichess.org/",
  },
  {
    name: "hackernews",
    link: "https://news.ycombinator.com/",
  },
];

const printIcons = () => {
  for (const card of FA_ICONS) {
    // font awesome icons
    let currentItem = document.createElement("a");
    let currentItemIcon = document.createElement("i");

    currentItem.classList.add("icon");
    currentItem.href = card.link;

    currentItemIcon.classList.add("fab");
    currentItemIcon.classList.add(card.icon);

    currentItem.append(currentItemIcon);
    iconsContainer.appendChild(currentItem);
  }
};

const printListItems = () => {
  for (const listItem of LIST_ITEMS) {
    let currentItem = document.createElement("a");

    currentItem.classList.add("listItem");
    currentItem.href = listItem.link;

    currentItem.appendChild(document.createTextNode(listItem.name));
    listContainer.appendChild(currentItem);
  }
};

printIcons();
printListItems();
