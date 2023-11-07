const app = Vue.createApp({
    data() {
      return {
        cards: [
          {
            image: 'images/events/terrarium.jpg',
            title: 'Terrarium Workshop',
            date: "18 November 2023",
            miniImage: 'images/events/plant.jpg',
            description: 'Join us for a fun-filled day of terrarium making! Learn how to make your own terrariums and bring them home!',
          },
          {
            image: 'images/events/ecp.jpg',
            title: 'Coastal Cleanup',
            date: "12 December 2023",
            miniImage: 'images/events/beach.jpg',
            description: 'Join us for a fun-filled day at East Coast Park as we come together to make a positive impact on the environment by cleaing up the coastal areas and help protect the beauty of our environment',
          },
          {
            image: 'images/events/farmersmkt.jpg',
            title: 'Farmers Market 2023',
            date: "21 December 2023",
            miniImage: 'images/events/tomato.jpg',
            description: 'Join us for a vibrant gathering of local farmers, artisans, and food enthusiasts. Discover a delightful array of farm-fresh produce, artisanal goods, and mouthwatering treats, all while supporting local growers and makers.',
          },
          {
            image: 'images/events/susworkshop.jpg',
            title: 'Sustainability Workshop 2023',
            date: "28 December 2023",
            miniImage: 'images/events/earth.jpg',
            description: 'Interested to find out more on how you can combat climate change issues? Join us on our sustainability workshop hosted by field professionals to gain more insights into sustainability issues!',
          },
          {
            image: 'images/events/GBTB.jpg',
            title: 'GBTB New Year Celebration',
            date: "1 January 2024",
            miniImage: 'images/events/supertree.jpg',
            description: 'Head down to GBTB and enjoy a magnificient view of fireworks while welcoming the new year.',
          },
          {
            image: 'images/events/localfarm.jpg',
            title: 'Terrarium Workshop',
            date: "3-4 February 2023",
            miniImage: 'images/events/lflogo.jpg',
            description: 'Come down to our farmers market to support not only our local farmers, but also homegrown producers!',
          },
        ],
      };
    },
  });
  
  app.mount('#event-cards');
