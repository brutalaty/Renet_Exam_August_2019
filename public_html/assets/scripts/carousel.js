var vm = new Vue({
  el: "#app-hero-carousel",
  data: function() {
    return {
      baseURL: "./assets/img/",
      current: 0,
      animationTime: 1,
      fullscreen: false,
      heading: "14 Sunny ​Avenue​",
      images: [
        "7_14862405_0_1457733399_original.jpg",
        "7_14862405_1_1457733415_original.jpg",
        "7_14862405_3_1457733430_original.jpg",
        "7_14862405_4_1457733436_original.jpg",
        "7_14862405_5_1457733446_original.jpg",
        "7_14862405_6_1457733455_original.jpg"
      ]
    };
  },
  methods: {
    next: function() {
      if (this.images.length < 2) {
        return;
      }
      this.current = this.nextIndex;
    },
    previous: function() {
      if (this.images.length < 2) {
        return;
      }
      this.current = this.previousIndex;
    },
    toggleFullScreen: function() {
      this.fullscreen = !this.fullscreen;
    }
  },
  computed: {
    nextIndex: function() {
      return (this.current + 1) % this.images.length;
    },
    previousIndex: function() {
      return this.current === 0 ? this.images.length - 1 : this.current - 1;
    }
  }
});
