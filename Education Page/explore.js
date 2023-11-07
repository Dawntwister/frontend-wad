const app = Vue.createApp({
    data() {
      return {
        cards: [
          {
            category: 'food',
            image: 'images/education/foodscrap.jpg',
            title: 'Food Scraps: Mastering the art of circular cooking',
            description: 'Food scraps are no joking matter, every year billions of tonnes of perfectly edible food are wasted and thrown away. Here are some ways you can put them to work!',
          },
          {
            category: 'plants',
            image: 'images/education/pesticide.jpg',
            title: '10 Natural Pesticides and their respective uses',
            description: 'Discover these 10 natural sources of protection for your flowers and rooftop gardens, guaranteed to keep those hungry critters away!',
          },
          {
            category: 'transport',
            image: 'images/education/import.jpg',
            title: 'Reduce Carbon Footprint: Refuse Imported Goods',
            description: 'Imported goods contribute higher carbon footprint than locally produced goods. Find out how you can reduce your carbon footprint by supporting local!',
          },
          {
            category: 'food',
            image: 'images/education/gordon.jpg',
            title: 'Rordon Gamsey: How a Masterchef Turns Food Waste Delicious',
            description: 'Masterchef Rordon Gamsey walks us through how to turn your daily vegetable scraps and trimmings into a delicious datenight meal.',
          },
          {
            category: 'plants',
            image: 'images/education/tomatoes.jpg',
            title: 'Your Guide to Growing Tomatoes and Cherry Tomatoes',
            description: 'Join our Masterclass on growing your favorite fruits and vegetables!',
          },
          {
            category: 'transport',
            image: 'images/education/mrt.jpg',
            title: 'Private Transportation or Public Transportation?',
            description: 'While traveling privately can bring about convenience, it is very detrimental to the atmosphere. By going with public transport, you can reduce your carbon footprint by up to 50%!',
          },
          {
            category: 'food',
            image: 'images/education/salad.jpg',
            title: '20 Recipes for Minimal Effort, Fresh Salads and Healthy Bodies',
            description: 'Eating healthy does not have to be difficult! Here are 20 easy recipes to follow along with at home using common ingredients.',
          },
          {
            category: 'plants',
            image: 'images/education/fertiliser.jpg',
            title: 'The Secrets of Fertilizers and how they affect plants!',
            description: 'Fertilizers can work magic on our plants, learn how to use them responsibly for the sake of our plants and environment!',
          },
          {
            category: 'transport',
            image: 'images/education/LSA.jpg',
            title: 'Do you know how do products travel over the world?',
            description: 'Find out how commercial products travel over the world to get to you! In this article, we cover shipment of goods via Air, Land, and Sea. Discover how each mode of transportation affects their carbon footprint!',
          },
        ],
      };
    },
  });
  
  app.mount('#explore-cards');
