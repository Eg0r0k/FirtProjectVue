import { defineStore } from "pinia";

export const useArtsStore = defineStore("artStore", {
  state: () => ({
    arts: [
      {
        id: 1,
        artName: "Охота Амура",
        artAuthor: "Марсель Руссо",
        artPrice: 14500,
        artType: "Холст, масло (50х80) ",
        artUrlImage: "15",
        country: "FR",
      },
      {
        id: 2,
        artName: "Дама с собачкой",
        artAuthor: "Анри Селин",
        artPrice: 16500,
        artType: "Акрил, бумага (50х80) ",
        artUrlImage: "1",
        country: "FR",
      },
      {
        id: 3,
        artName: "Процедура",
        artAuthor: "Франсуа Дюпон",
        artPrice: 20000,
        artType: "Цветная литография (40х60) ",
        artUrlImage: "16",
        country: "FR",
      },
      {
        id: 4,
        artName: "Над городом",
        artAuthor: "Курт Вернер",
        artPrice: 16000,
        artType: "Цветная литография (40х60) ",
        artUrlImage: "8",
        country: "DE",
      },
      {
        id: 5,
        artName: "Птенцы",
        artAuthor: "Макс Рихтер",
        artPrice: 14500,
        artType: "Холст, масло (50х80) ",
        artUrlImage: "7",
        country: "DE",
      },
      {
        id: 6,
        artName: "Среди листьев",
        artAuthor: "Мартин Майер",
        artPrice: 20000,
        artType: "Цветная литография (40х60) ",
        artUrlImage: "6",
        country: "DE",
      },
      {
        id: 7,
        artName: "Дикий зверь",
        artAuthor: "Пол Смит",
        artPrice: 19500,
        artType: "Акварель, бумага (50х80) ",
        artUrlImage: "9",
        country: "ENG",
      },
      {
        id: 8,
        artName: "Скалистый берег",
        artAuthor: "Джон Уайт",
        artPrice: 17500,
        artType: "Цветная литография (40х60) ",
        artUrlImage: "10",
        country: "ENG",
      },
      {
        id: 9,
        artName: "Река и горы",
        artAuthor: "Джим Уотсон",
        artPrice: 20500,
        artType: "Акварель, бумага (50х80) ",
        artUrlImage: "11",
        country: "ENG",
      },
      {
        id: 10,
        artName: "Роза",
        artAuthor: "Луи Детуш",
        artPrice: 12000,
        artType: "Бумага, акрил (50х80) ",
        artUrlImage: "2",
        country: "FR",
      },
      {
        id: 11,
        artName: "Птичья трапеза",
        artAuthor: "Франсуа Дюпон",
        artPrice: 22500,
        artType: "Цветная литография (40х60) ",
        artUrlImage: "18",
        country: "FR",
      },
      {
        id: 12,
        artName: "Пейзаж с рыбой",
        artAuthor: "Пьер Моранж",
        artPrice: 20000,
        artType: "Цветная литография (40х60) ",
        artUrlImage: "3",
        country: "FR",
      },
      {
        id: 13,
        artName: "Яркая птица",
        artAuthor: "Герман Беккер",
        artPrice: 13000,
        artType: "Цветная литография (40х60) ",
        artUrlImage: "4",
        country: "DE",
      },
      {
        id: 14,
        artName: "Дятлы",
        artAuthor: "Вульф Бауэр",
        artPrice: 20000,
        artType: "Бумага, акрил (50х80) ",
        artUrlImage: "5",
        country: "DE",
      },
      {
        id: 15,
        artName: "Большие воды",
        artAuthor: "Вальтер Хартманн",
        artPrice: 23000,
        artType: "Бумага, акрил (50х80) ",
        artUrlImage: "17",
        country: "DE",
      },
      {
        id: 16,
        artName: "Белый попугай",
        artAuthor: "Юджин Зиллион",
        artPrice: 15500,
        artType: "Цветная литография (40х60) ",
        artUrlImage: "12",
        country: "ENG",
      },
      {
        id: 17,
        artName: "Ночная рыба",
        artAuthor: "Эрик Гиллман",
        artPrice: 12500,
        artType: "Бумага, акрил (50х80) ",
        artUrlImage: "13",
        country: "ENG",
      },
      {
        id: 18,
        artName: "Рыжий кот",
        artAuthor: "Альфред Барр",
        artPrice: 21000,
        artType: "Цветная литография (40х60) ",
        artUrlImage: "14",
        country: "ENG",
      },
    ],
    currentCountry: null,
    sortedArts: [],
    сartStore: [],
  }),
  getters: {
    totalPrice() {
      return this.сartStore.reduce((total, item) => total + item.artPrice, 0);
    },
    totalInCart() {
      return this.сartStore.length;
    },
  },
  actions: {
    setCurrentCountry({ country }) {
      this.sortedArts = this.arts.filter(el => el.country === country);
    },
    addToCart(id) {
      if (id == null || id < 0 || isNaN(id)) {
        throw new Error("Не верный id");
      }
      const existingCartItem = this.сartStore.find(el => el.id === id);
      if (!existingCartItem) {
        const idx = this.arts.findIndex(el => el.id === id);
        if (idx !== -1) {
          this.сartStore.push(this.arts[idx]);
        } else {
          throw new Error(`Элемент с этим id ${id} не был найден в this.arts`);
        }
      }
    },
    deleteFromCart(id) {
      if (id == null || id < 0 || isNaN(id)) {
        throw new Error("Не верный id");
      }
      this.сartStore = this.сartStore.filter(el => el.id !== id);
    },
  },
});
